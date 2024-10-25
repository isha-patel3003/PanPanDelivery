import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { BarcodeScanner } from '@react-native-ml-kit/barcode-scanning';
import { useNavigation } from '@react-navigation/native'

import { LocalizationContext } from '../../context';
import { Button, DialogBox, Header, Screen } from '../../components'
import { color, IcBackArrow, IcScanner, size } from '../../theme'
import * as styles from './styles'

export const QRCodeScannerScreen = () => {

  const navigation = useNavigation();
  const { t } = useContext(LocalizationContext);
  const device = useCameraDevice('back');

  const [cameraPermission, setCameraPermission] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [showDialog, setShowDialog] = useState(false)


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

  // const codeScanner = useCodeScanner({
  //   codeTypes: ['ean-8', 'ean-13'],
  //   onCodeScanned: (codes) => {
  //     console.log(`Scanned ${codes}!`);
  //     if (codes.length > 0) {
  //       const code = codes[0];
  //       setScannedData(code);
  //     }
  //   }
  // })

  const handleBarcodeDetected = (barcode) => {
    runOnUI(() => {
      setBarcodeData(barcode.displayValue);
    })();
  };

  const checkCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    setCameraPermission(status === 'granted');
    setIsCameraVisible(status === 'granted');
  };

  const handleReScan = () => {
    setScannedData(null)
  }

  useEffect(() => {
    checkCameraPermission();
  }, [])

  return (
    <Screen>
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
                    style={{ flex: 1, flexGrow: 1, width: '100%' }}
                    device={device}
                    isActive={isCameraVisible}
                    onFrameProcessor={BarcodeScanner.onFrameProcessor(handleBarcodeDetected)}
                    frameProcessorFps={5}
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
      </View>
      <DialogBox
        visible={showDialog}
        animationType='fade'
        title={t("qrCode_scanner_screen.dialog_title")}
        message={t("qrCode_scanner_screen.dialog_message")}
        onYesPress={() => setShowDialog(false)}
        onNoPress={() => setShowDialog(false)}
      />
    </Screen>
  )
}
