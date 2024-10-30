import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, ToastAndroid, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { logoutUser } from '../../redux/actions/AuthActions'
import { CustomModal, DialogBox, Screen } from '../../components'
import { LocalizationContext } from '../../context'
import { color, IcBackArrow, IcCheck, IcLanguage,  IcLogout, IcProfile, IcThailand, IcUK, images, size } from '../../theme'
import * as styles from './styles'
import { getUserDetails, userLogout } from '../../services'
import Toast from 'react-native-toast-message'

export const ProfileScreen = () => {

  const { userDetails }  = useSelector(state => state.auth);
  console.log("userKey in logout: ",userDetails.userKey)

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t, locale, setLocale, toggleLanguage } = useContext(LocalizationContext);

  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const handleLanguageSelect = (lang) => {
    setLocale(lang);
    toggleLanguage(lang);
    setShowModal(false);
  }

  const handleLogout = async () => {
    try {
      const response = await userLogout(userDetails.userKey);
      if(response.status == 1) {
        Toast.show({
          type: 'success',
          text1: 'Logout',
          text2: 'User logged out successfully!',
          position: 'top',
          duration: 5000 
        })
        dispatch(logoutUser(userDetails.userKey));
      }else {
        Toast.show({
          type: 'success',
          text1: 'Logout Error',
          text2: 'Please try again!!',
          position: 'top',
          duration: 5000 
        })
      }
    } catch (error) {
      console.log("Errror in handle logout", error)
    }
  }


  return (
    <Screen>
      <View style={styles.mainView()}>
        <View style={styles.topView()}>
          <TouchableOpacity style={styles.iconView()}  onPress={() => navigation.goBack()}>
            <IcBackArrow fill={color.secondary} />
          </TouchableOpacity>
          <View style={styles.imageView()}>
            <Image source={images.appLogo} style={styles.image()} />
          </View>
          <View style={styles.iconView()}>
            <Image source={images.dummyProfileImage} style={styles.image()} />
          </View>
        </View>
        <View style={styles.middleView()}>
          <View style={styles.buttonContainer()}>
            <TouchableOpacity style={styles.button()} onPress={() => navigation.navigate('userDetailsScreen', {userKey: userDetails.userKey})}>
              <IcProfile fill={color.black} width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <Text style={styles.buttonText()}>{t("profile_screen.btn_text_1")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button()} onPress={() => setShowModal(true)}>
              <IcLanguage fill={color.black} width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <Text style={styles.buttonText()}>{t("profile_screen.btn_text_2")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button()} onPress={() => setShowLogoutModal(true)}>
              <IcLogout width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <Text style={styles.buttonText()}>{t("profile_screen.logout_text")}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button()} onPress={() => navigation.navigate('shipmentDetailsScreen')}>
              <IcLogout width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <Text style={styles.buttonText()}>{t("profile_screen.logout_text")}</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
      <CustomModal
        visible={showModal}
        animationType='fade'
        onClose={() => setShowModal(false)}
      >
        <View style={styles.modalView()}>
          <View style={styles.modalHeader()}>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.modalHeaderBtnText()}>{t("language_select_modal.header_btn_text")}</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle()}>{t("language_select_modal.header_title")}</Text>
          </View>
          <View style={styles.modalContent()}>
            <TouchableOpacity
              onPress={() => handleLanguageSelect('en')}
              activeOpacity={0.5}
              style={[styles.modalButton(), { borderBottomColor: color.black, borderBottomWidth: size.moderateScale(0.5) }]}
            >
              <IcUK />
              <Text style={styles.modalButtonText()}>{t("language_select_modal.language_english")}</Text>
              {locale === 'en' && <IcCheck />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleLanguageSelect('th')}
              activeOpacity={0.5}
              style={styles.modalButton()}
            >
              <IcThailand />
              <Text style={styles.modalButtonText()}>{t("language_select_modal.language_thai")}</Text>
              {locale === 'th' && <IcCheck />}
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
      <DialogBox 
        visible={showLogoutModal} 
        animationType='fade'
        onClose={() => setShowLogoutModal(false)}
        title={t("profile_screen.logout_text")}
        message={t("profile_screen.alert_message")}
        onNoPress={() => setShowLogoutModal(false)}
        onYesPress={() => handleLogout()}
      />
    </Screen>
  )
}