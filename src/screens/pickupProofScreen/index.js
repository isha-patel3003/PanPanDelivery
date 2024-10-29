import React, { useRef, useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'

import * as styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Button, Header, Screen } from '../../components'
import { color, IcBackArrow, size } from '../../theme'
import { Camera, useCameraDevice } from 'react-native-vision-camera'
import { getImageType } from '../../utils'
import { setShipmentStatusAsPicked } from '../../services'

export const PickupProofScreen = () => {

  const navigation = useNavigation();
  const { userDetails } = useSelector(state => state.auth);

  const cameraRef = useRef()
  const device = useCameraDevice('back');

  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedImageType, setCapturedImageType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputFieldValues, setInputFieldValues] = useState({
    length: '10000.0',
    width: '10000.0',
    height: '1000.0',
    weight: '599.0'
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
      shipmentQrStr: "8539182565c47a2c976ef1d35922e8763ab7f6b362acf9ee",
      pickupLatitude: "",
      pickupLongitude: "",
      sizeLength: "10000.0",
      sizeWidth: "10000.0",
      sizeHeight: "1000.0",
      weight: "599.0",
      url: capturedImage,
      imageType: capturedImageType
    }
    setLoading(true);
    try {
      const response = await setShipmentStatusAsPicked(userDetails.userKey, data)
      console.log("response for shipmentState: ",response)
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

  return (
    <Screen withScroll scrollStyle={{ flexGrow: 1 }}>
      <View style={styles.mainView()}>
        <Header
          title='Proof of Pickup'
          headerStyle={styles.header()}
          headerTitleStyle={styles.headerText()}
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />)}
        />
        <View style={styles.middleView()}>
          <View style={styles.cameraView()}>
            {
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
                    title='Re Take' />
                  <Button
                    btnStyle={styles.button()}
                    btnTextStyle={styles.buttonText()}
                    title='Picked'
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
