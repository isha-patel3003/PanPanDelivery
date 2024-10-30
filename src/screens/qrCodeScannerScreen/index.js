import React, { useContext, useEffect, useRef, useState } from 'react';
import Toast from 'react-native-toast-message';
import { Image, PermissionsAndroid, Platform, Text, TouchableOpacity, View } from "react-native";
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { LocalizationContext, useMainContext } from '../../context';
import { color, IcBackArrow, IcScanner, size } from '../../theme';
import {  Header, Screen } from '../../components';
import { loadShipmentDetailsFromBarcode, setShipmentStatusAsDropped } from '../../services';
import * as styles from './styles';

export const QRCodeScannerScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { userDetails } = useSelector(state => state.auth);
  const { t } = useContext(LocalizationContext);
  const { deliveryStatusCode, deliveryTrackingKey, shipmentQRString } = useMainContext();

  const device = useCameraDevice('back');
  const cameraRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission Required",
            message: "This App needs camera permission to function correctly",
            buttonNeutral: 'Ask me later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setCameraPermission(true);
          setIsCameraVisible(true);
        } else {
          setCameraPermission(false);
        }
      } catch (error) {
        console.log("Error requesting camera permission in android!!", error);
      }
    } else if (Platform.OS === 'ios') {
      try {
        const cameraStatus = await Camera.requestCameraPermission();
        if (cameraStatus === 'denied') {
          setCameraPermission(false);
          console.log("You need to allow the permission for camera for scanning the barcode");
        } else {
          setCameraPermission(true);
          setIsCameraVisible(true);
        }
      } catch (error) {
        console.log("Error requesting camera permission in ios!!", error);
      }
    }
  };

  const checkCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    setCameraPermission(status === 'granted');
    setIsCameraVisible(status === 'granted');
  };

  const fetchShipmentDetailsFromBarcode = async (barcode, userKey) => {
    setLoading(true);
    try {
      const response = await loadShipmentDetailsFromBarcode(barcode, userKey);
      // console.log(`response for ${barcode}: `, response);
      if (response.status == 1) {
        Toast.show({
          type: 'success',
          text1: 'Barcode  scanned successfully',
          position: 'bottom',
          bottomOffset: 50
        })
        if(response?.driverAllocatedShipment?.canMarkForDrop) {
          navigation.navigate('shipmentDetailsScreen');
        } else {
          const shipmentDimensions = {
            length: response?.driverAllocatedShipment?.shipment?.sizeLength,
            width: response?.driverAllocatedShipment?.shipment?.sizeWidth,
            height: response?.driverAllocatedShipment?.shipment?.sizeHeight,
            weight: response?.driverAllocatedShipment?.shipment?.weight
          }
          navigation.navigate('pickupProofScreen', { trackingKey: deliveryTrackingKey, userKey, shipmentQrStr: shipmentQRString,  shipmentDimensions});

        }
      } else {
        Toast.show({
          type: 'error',
          text1: `${response.message}`,
          position: 'bottom',
          bottomOffset: 50
        })
      }
    } catch (error) {
      console.log("Error fetching Shipment details from barcode::", error);
    } finally {
      setLoading(false);
    }
  };

  const postShipmentStatusAsDropped = async (userKey, shipmentQrStr) => {
    setLoading(true)
    try {
      const response = await setShipmentStatusAsDropped(userKey, shipmentQrStr);
      console.log("response for postShipmentStatusAsDropped:::: ", response);
      if(response.status == 1) {
        navigation.navigate('shipmentDetailsScreen')
      } else {
        Toast.show({
          type: 'error',
          text1: `${response.message}`,
          position: 'bottom'
        })
      }
    } catch (error) {
      console.log("error in postShipmentStatusAsDropped:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleReScan = () => {
    setScannedData(null);
    setCapturedImage(null);
  }

  const takePhoto = async () => {
    if (cameraRef.current && isCameraVisible) {
      try {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: 'balanced',
        });
        return photo.path;
      } catch (error) {
        console.log('Error capturing photo: ', error);
      }
    } else {
      console.log('Camera is not active or not available.');
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'code-128'],
    onCodeScanned: async (codes) => {
      codes.map(async (code) => {
        setScannedData(code.value);
        if (code.value) {
          const capturedImage = await takePhoto();
          if (capturedImage) {
            setCapturedImage(capturedImage);
          }
        }
        setIsCameraVisible(false);
      });
    }
  });

  const handleShipmentBtnClick = async (deliveryStatusCode) => {
    console.log("deliveryStatusCode: ",deliveryStatusCode)
    if(deliveryStatusCode == 'PCKD') {
      await postShipmentStatusAsDropped(userDetails?.userKey, shipmentQRString)
    } else {
      await fetchShipmentDetailsFromBarcode(scannedData, userDetails.userKey);
    }
  }

  useEffect(() => {
    checkCameraPermission();
  }, []);

  return (
    <Screen loading={loading} loadingBgColor={color.white}>
      <View style={styles.mainView()}>
        <Header
          title={t("qrCode_scanner_screen.screen_title")}
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.secondary} />)}
          headerLeftIconPress={() => navigation.goBack()}
          headerStyle={styles.header()}
          headerTitleStyle={styles.headerTitle()}
        />
        <View style={styles.middleView()}>
          <View style={styles.riderDetails()}>
            <Text style={styles.riderName()}>{route?.params?.recepientName}</Text>
            <Text style={styles.riderAddress()}>{route?.params?.recepientAddress}</Text>
          </View>
          <View style={styles.scannerButtonWrapper(isCameraVisible)}>
            {
              capturedImage
                ? (
                  <Image
                    source={{ uri: `file://${capturedImage}` }}
                    style={{ flex: 1, width: '100%', height: '100%' }}
                  />
                )
                : isCameraVisible && device !== null && cameraPermission
                  ? (
                    <Camera
                      ref={cameraRef}
                      photo={true}
                      style={{ flex: 1, width: '100%' }}
                      device={device}
                      isActive={isCameraVisible}
                      codeScanner={codeScanner}
                    />
                  )
                  : (
                    <TouchableOpacity onPress={requestCameraPermission} activeOpacity={0.7} style={styles.scannerButton()}>
                      <IcScanner fill={color.secondary} width={size.moderateScale(40)} height={size.moderateScale(40)} />
                    </TouchableOpacity>
                  )
            }
          </View>
        </View>
        {
          capturedImage && (
            <View style={styles.bottomView()}>
              <View style={styles.row()}>
                <TouchableOpacity style={styles.linkButton()} onPress={handleReScan}>
                  <Text style={styles.linkText()}>{t("qrCode_scanner_screen.button_text_2")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkButton()} onPress={() => handleShipmentBtnClick(deliveryStatusCode)}>
                  <Text style={styles.linkText()}>{route?.params?.shipmentBtnText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      </View>
    </Screen>
  );
};
