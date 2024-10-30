import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import Toast from 'react-native-toast-message'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Camera, useCameraDevice } from 'react-native-vision-camera'

import { useMainContext } from '../../context'
import { color, IcBackArrow, size } from '../../theme'
import { setShipmentStatusAsPicked } from '../../services'
import { getImageType } from '../../utils'
import { Button, Header, Screen } from '../../components'
import * as styles from './styles'

export const PickupProofScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  console.log("route::::::::::::::::::::::::::::::::: ", route?.params)
  const { userDetails } = useSelector(state => state.auth);
  const { deliveryStatusCode, setDeliveryStatusCode } = useMainContext();
  console.log("deliveryyyy::::::::",deliveryStatusCode)

  const cameraRef = useRef()
  const device = useCameraDevice('back');

  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedImageType, setCapturedImageType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputFieldValues, setInputFieldValues] = useState({
    length: '',
    width: '',
    height: '',
    weight: '',
  })

  const onValueChangeText = (field, value) => {
    setInputFieldValues({ ...inputFieldValues, [field]: value })
  }

  const handleTakePhotoPress = async () => {
    setCapturedImage(null)
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: 'balanced',
        });
        setCapturedImage(`file://${photo.path}`);
        const imageType = getImageType(`file://${photo.path}`);
        setCapturedImageType(imageType);
        return photo.path;
      } catch (error) {
        console.log('Error capturing photo: ', error);
      }
    } else {
      console.log('Camera is not active or not available.');
    }
  };

  const setShipmentStatusDimension = async () => {
    const data = {
      shipmentQrStr: route?.params?.shipmentQrStr,
      pickupLatitude: "12.666",
      pickupLongitude: "15.666",
      sizeLength: inputFieldValues?.length,
      sizeWidth: inputFieldValues?.width,
      sizeHeight: inputFieldValues?.height,
      weight: inputFieldValues?.weight,
      url: capturedImage,
      imageType: capturedImageType
    }
    setLoading(true);
    try {
      const response = await setShipmentStatusAsPicked(userDetails.userKey, data)
      if (response.status === 1) {
        navigation.navigate('shipmentDetailsScreen', { shipmentQrStr: route?.params?.shipmentQrStr, trackingKey: route?.params?.trackingKey })
      } else {
        Toast.show({
          type: 'error',
          text1: response.message,
          position: 'bottom',
          bottomOffset: 10
        })
      }
    } catch (error) {
      console.log("Error in  setShipmentStatusDimension: ", error);
    } finally {
      setLoading(false)
    }
  }

  const handleReTakePhoto = () => {
    setCapturedImage(null);
    setCapturedImageType(null);
  }

  useEffect(() => {
    setInputFieldValues({
      length: route?.params?.shipmentDimensions?.length,
      width: route?.params?.shipmentDimensions?.width,
      height: route?.params?.shipmentDimensions?.height,
      weight: route?.params?.shipmentDimensions?.weight,
    })
  }, [route?.params?.shipmentDimensions])

  return (
    <Screen withScroll scrollStyle={{ flexGrow: 1 }}>
      <View style={styles.mainView()}>
        <Header
          title='Proof of Pickup'
          headerStyle={styles.header()}
          headerTitleStyle={styles.headerText()}
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.secondary} />)}
          headerLeftIconPress={() => navigation.goBack()}
        />
        <View style={styles.middleView()}>
          <View style={styles.cameraView()}>
            {
              loading ? (
                <View style={styles.indicator()}>
                  <ActivityIndicator size='large' color={color.primary} />
                </View>
              ) : (
                capturedImage ? (
                  <Image
                    source={{ uri: capturedImage }}
                    style={styles.image()}
                  />
                ) : (
                  <Camera
                    ref={cameraRef}
                    isActive
                    photo={true}
                    device={device}
                    style={styles.camera()}
                  />
                )
              )
            }
          </View>
        </View>
        <View style={styles.bottomView()}>
          {
            !capturedImage && (
              <Button
                title='Take Photo'
                btnStyle={styles.button()}
                btnTextStyle={styles.buttonText()}
                onPress={handleTakePhotoPress}
              />
            )
          }

          <View style={styles.formView()}>
            <View style={styles.row()}>
              <View style={styles.textInputView()}>
                <Text style={styles.label()}>Length</Text>
                <TextInput
                  style={styles.textInput()}
                  cursorColor={color.secondary}
                  value={inputFieldValues?.length}
                  onChangeText={(txt) => onValueChangeText('length', txt)}
                  keyboardType='numeric'
                  editable={!loading}
                />
              </View>
              <View style={styles.textInputView()}>
                <Text style={styles.label()}>Width</Text>
                <TextInput
                  style={styles.textInput()}
                  cursorColor={color.secondary}
                  value={inputFieldValues?.width}
                  onChangeText={(txt) => onValueChangeText('width', txt)}
                  keyboardType='numeric'
                  editable={!loading}
                />
              </View>
            </View>
            <View style={styles.row()}>
              <View style={styles.textInputView()}>
                <Text style={styles.label()}>Height</Text>
                <TextInput
                  style={styles.textInput()}
                  cursorColor={color.secondary}
                  value={inputFieldValues?.height}
                  onChangeText={(txt) => onValueChangeText('height', txt)}
                  keyboardType='numeric'
                  editable={!loading}
                />
              </View>
              <View style={[styles.textInputView(), { marginBottom: size.moderateScale(20) }]}>
                <Text style={styles.label()}>Weight</Text>
                <TextInput
                  style={styles.textInput()}
                  cursorColor={color.secondary}
                  value={inputFieldValues?.weight}
                  onChangeText={(txt) => onValueChangeText('weight', txt)}
                  keyboardType='numeric'
                  editable={!loading}
                />
              </View>
            </View>
            {
              capturedImage && (
                <View style={styles.row()}>
                  <Button
                    btnStyle={styles.button()}
                    btnTextStyle={styles.buttonText()}
                    onPress={handleReTakePhoto}
                    disabled={loading}
                    title='Re Take' />
                  <Button
                    btnStyle={styles.button()}
                    btnTextStyle={styles.buttonText()}
                    title='Picked'
                    disabled={loading}
                    onPress={setShipmentStatusDimension}
                  />
                </View>
              )
            }
          </View>
        </View>
      </View>
    </Screen>
  )
}
