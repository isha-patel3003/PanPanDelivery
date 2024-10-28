import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image, PermissionsAndroid, Text, TouchableOpacity, View } from "react-native"
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera'
import { useNavigation } from '@react-navigation/native';

import { LocalizationContext } from '../../context';
import { color, IcBackArrow, IcScanner, size } from '../../theme';
import { DialogBox, Header, Screen } from '../../components';
import * as styles from './styles'
import { loadShipmentDetailsFromBarcode } from '../../services';
import { useSelector } from 'react-redux';



export const QRCodeScannerScreen = () => {

  const navigation = useNavigation();
  const { t } = useContext(LocalizationContext);
  const { userDetails } = useSelector(state => state.auth);

  const device = useCameraDevice('back');

  const cameraRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const [cameraPermission, setCameraPermission] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [scannedData, setScannedData] = useState(null);

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
        }
        else {
          setCameraPermission(false);
        }
      } catch (error) {
        console.log("Error requesting camera permission in android!!", error)
      }
    }
    else if (Platform.OS === 'ios') {
      try {
        const cameraStatus = await Camera.requestCameraPermission();
        if (cameraStatus === 'denied') {
          setCameraPermission(false);
          console.log("You need to allow the permission for camera for scanning the barcode");
        }
        else {
          setCameraPermission(true);
          setIsCameraVisible(true);
        }
      } catch (error) {
        console.log("Error requesting camera permission in ios!!", error)
      }
    }
  }

  const fetchShipmentDetailsFromBarcode = async (barcode, userKey) => {
    setLoading(true)
    try {
      const response = await loadShipmentDetailsFromBarcode(barcode, userKey);
      console.log(`response for ${barcode}: `,response);
      if(response.status == 1) {
        navigation.navigate('shipmentDetailsScreen', {trackingKey:  barcode, userKey});
        setShowDialog(false);
      }
    } catch (error) {
      console.log("Error fetching Shipment details from barcode::", error)
    }
  }


  const handleBarCodeScan = async () => {
    setLoading(true)
    setShowDialog(false)
    await fetchShipmentDetailsFromBarcode(scannedData, userDetails.userKey)
    setLoading(false)
  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'code-128'],
    onCodeScanned: async (codes) => {
      codes.map(async (code) => {
        console.log("code::::::: ", code.value);
        setScannedData(code.value);
        setShowDialog(true)
      })
    }
  })

  const checkCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    setCameraPermission(status === 'granted');
    setIsCameraVisible(status === 'granted');
  };

  useEffect(() => {
    checkCameraPermission()
  }, [])


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
            <Text style={styles.riderName()}>Jeet Kumar Hadial</Text>
            <Text style={styles.riderAddress()}>6634 Lake Otis Pkwy, Anchorage, Alaska, 99507</Text>
          </View>
          <View style={styles.scannerButtonWrapper(isCameraVisible)}>
            {
              isCameraVisible && device !== null && cameraPermission ?
                (
                  <Camera
                    ref={cameraRef}
                    style={{ flex: 1, flexGrow: 1, width: '100%' }}
                    device={device}
                    isActive={isCameraVisible}
                    codeScanner={codeScanner}
                  />
                )
                : (
                  <TouchableOpacity onPress={() => requestCameraPermission()} activeOpacity={0.7} style={styles.scannerButton()}>
                    <IcScanner fill={color.secondary} width={size.moderateScale(40)} height={size.moderateScale(40)} />
                  </TouchableOpacity>
                )
            }
          </View>
        </View>
        {/* {
          scannedData && (
            <View style={styles.bottomView()}>
              <View style={styles.row()}>
                <TouchableOpacity style={styles.linkButton()} onPress={handleReScan}>
                  <Text style={styles.linkText()}>{t("qrCode_scanner_screen.button_text_2")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkButton()} onPress={handleReScan}>
                  <Text style={styles.linkText()}>{t("qrCode_scanner_screen.button_text_3")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        } */}
      </View>
      <DialogBox
        visible={showDialog}
        animationType='fade'
        title={t("qrCode_scanner_screen.dialog_title")}
        message={t("qrCode_scanner_screen.dialog_message") + " " + scannedData}
        onYesPress={handleBarCodeScan}
        onNoPress={() => setShowDialog(false)}
      />
    </Screen>
  )
}

