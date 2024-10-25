import React, { useContext, useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Animated, ToastAndroid, Keyboard, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LocalizationContext, useMainContext } from '../../context';
import { CustomModal, Screen } from '../../components';
import { color, IcCheck, IcLanguage, IcThailand, IcUK, images, size } from '../../theme';
import * as styles from './styles';
import { NumberValidation } from '../../utils';
import { getOTPForLogin } from '../../services';
import Toast from 'react-native-toast-message';

export const LoginScreen = () => {

  const navigation = useNavigation();
  const { t, locale, setLocale, toggleLanguage } = useContext(LocalizationContext);
  const { phoneNumber, setPhoneNumber, setOtp } = useMainContext();

  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)

  const shakeAnim = useRef(new Animated.Value(0)).current;
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 12, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -12, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 12, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  }

  const handleLanguageSelect = (lang) => {
    setLocale(lang);
    toggleLanguage(lang);
    setShowModal(false);
  };

  const validateOTP = () => {
    let phoneError = '';

    if (!phoneNumber) {
      phoneError = t('login_screen.error_1')
    } else if (phoneNumber.length !== 10) {
      phoneError = t('login_screen.error_2')
    } else if (!NumberValidation(phoneNumber)) {
      phoneError = t('login_screen.error_3')
    }

    setError(phoneError);
    shake()
    return phoneError.length === 0;
  };

  const handleNavigation = async () => {
    Keyboard.dismiss()
    if (!validateOTP()) {
      return;
    }

    setLoading(true)
    try {
      const response = await getOTPForLogin(phoneNumber);
      if (response.status !== -1) {
        setOtp(response.otp);
        console.log("response when status  is not -1", response);
        Toast.show({
          type: 'success',
          text1: 'OTP sent successfully!',
          text2: `Your OTP is ${response.otp}`,
          position: 'top',
          duration: 50000,
        })
        navigation.navigate('otpScreen')
      } else {
        console.log("response when status is -1", response);
        if (response.message == 'Invalid User') {
          Toast.show({
            type: 'error',
            text1: 'Error login in',
            text2: 'User not found. Please register first!',
            position: 'top',
            duration: 10000,
          })
        }
      }
    } catch (error) {
      console.log("Error in handleNavigation: ", error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <Screen withScroll translucent={true} bgColor={color.white}>
      <View style={styles.container()}>
        <View style={styles.topView()}>
          <TouchableOpacity activeOpacity={0.6} style={styles.topIconView()} onPress={() => setShowModal(true)}>
            <IcLanguage width={size.moderateScale(25)} height={size.moderateScale(25)} fill={color.secondary} />
          </TouchableOpacity>
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
        </View>
        <View style={styles.imageView()}>
          <Image
            source={images.appLogo}
            style={styles.image()}
          />
        </View>
        <View style={styles.mainTextView()}>
          <Text style={styles.mainText()}>{t('login_screen.screen_title_line_1')}</Text>
          <Text style={styles.mainText()}>{t('login_screen.screen_title_line_2')}</Text>
        </View>
        <Text style={styles.bodyText()}>{t('login_screen.body_text')}</Text>
        <View style={styles.formView()}>
          <Animated.View style={[styles.textInputView(), error && { transform: [{ translateX: shakeAnim }] }]}>
            <TextInput
              style={styles.inputText(error)}
              placeholder={t('login_screen.placeHolder_text')}
              placeholderTextColor={color.dark}
              maxLength={10}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(txt) => setPhoneNumber(txt)}
            />
            <Text style={styles.errorText()}>{error}</Text>
          </Animated.View>
          <TouchableOpacity disabled={loading} activeOpacity={0.7} style={styles.button(loading)} onPress={handleNavigation}>
            {
              loading
                ? <ActivityIndicator size='small' color={color.white} />
                : <Text style={styles.buttonText()}>{t('login_screen.opt_button_title')}</Text>
            }
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.registerButton()} onPress={() => navigation.navigate('registerScreen')}>
            <Text style={styles.registerBtnText()}>{t('login_screen.register_btn_title')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};
