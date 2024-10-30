import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, ToastAndroid, Touchable, TouchableOpacity, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { LocalizationContext, useMainContext } from '../../context'
import { PREFERENCES, setPreferenceStringData } from '../../helper'
import { color, IcBackArrow, size } from '../../theme'
import { Button, Header, Screen } from '../../components'
import * as styles from './styles'
import { loginUser } from '../../redux'
import Toast from 'react-native-toast-message'
import { getOTPForLogin, userLogin } from '../../services'

export const OTPScreen = () => {

  const { phoneNumber, otp, setOtp } = useMainContext();
  const { t } = useContext(LocalizationContext);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const [otpInput, setOtpInput] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);

  const handleChangeText = (text, index) => {
    const newOtp = [...otpInput];
    newOtp[index] = text;
    setOtpInput(newOtp);

    const allFilled = newOtp.every((digit) => digit !== '');
    setDisabled(!allFilled);

    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const otpValidation = () => {
    const otpString = otpInput.join('');
    let newError = '';
    if (otpString.length !== 4) {
      newError = t("otp_screen.otp_error_1");
    }

    setError(newError);
    return newError === '';
  }

  const handleOTPNavigation = async () => {
    if (!otpValidation()) {
      return;
    }

    setLoading(true);
    try {
      const response = await userLogin(phoneNumber, otp.toString());
      console.log("response when status is not -1 in handleOTPNavigation", response);
      if (response.status !== -1) {
        Keyboard.dismiss()
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'You have successfully logged in.',
          position: 'top',
          duration: 10000,
        })
        await setPreferenceStringData(PREFERENCES.IS_LOGGED_IN, 'true');
        dispatch(loginUser(response));
      } else {
        setError(t("otp_screen.otp_error_2"));
        setOtpInput(['', '', '', '']);
        inputRefs[0].current.focus();
        Toast.show({
          type: 'error',
          text1: 'OTP',
          text2: t("otp_screen.otp_error_2"),
          position: 'top',
          duration: 10000,
        })
      }
    } catch (error) {
      console.log("Error in handleOTPNavigation: ", error);
    } finally {
      setLoading(false)
    }
  };

  const handleResendOTP = async () => {
    Keyboard.dismiss();
    setRemainingTime(30);
    setIsResendEnabled(false);
    setOtpInput(['', '', '', '']);
    setError('');
    // inputRefs[0].current.focus();

    setLoading(true)
    try {
      const response = await getOTPForLogin(phoneNumber);
      if (response.status !== -1) {
        console.log("response when status  is not -1", response);
        inputRefs[0].current.focus();
        Toast.show({
          type: 'success',
          text1: 'OTP',
          text2: 'OTP sent to  your given phone number',
          position: 'top',
          topOffset: size.moderateScale(-10),
          duration: 10000,
        })
        setOtp(response.otp);
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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsResendEnabled(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [!isResendEnabled])

  return (
    <Screen translucent={true} bgColor={color.white} loading={loading} loadingBgColor={color.white}>
      <View style={styles.container()}>
        <Header
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.primary} />)}
          headerLeftIconPress={() => navigation.goBack()}
        />
        <View style={styles.middleView()}>
          <Text style={styles.heading()}>{t('otp_screen.screen_title')}</Text>
          <Text style={styles.bodyText()}> {t('otp_screen.body_text')} {phoneNumber}</Text>
        </View>
        <View style={styles.formView()}>
          <View style={styles.otpContainer()}>
            {
              otpInput.map((value, index) => (
                <TextInput
                  key={index}
                  style={styles.inputs(error)}
                  keyboardType="numeric"
                  maxLength={1}
                  value={value}
                  onChangeText={(text) => handleChangeText(text, index)}
                  cursorColor={color.primary}
                  onKeyPress={(e) => {
                    if (e.nativeEvent.key === 'Backspace') {
                      handleBackspace(otpInput[index], index)
                    }
                  }}
                  returnKeyType='next'
                  ref={inputRefs[index]}
                  autoFocus={index === 0}
                  onSubmitEditing={() => {
                    if (index < inputRefs.length - 1) {
                      inputRefs[index + 1].current.focus();
                    }
                  }}
                />
              ))
            }
            <View style={styles.errorTextView()}>
              <Text style={styles.errorText()}>{error}</Text>
            </View>
          </View>
          <View style={styles.resendBtnView()}>
            {isResendEnabled ? (
              <TouchableOpacity onPress={handleResendOTP}>
                <Text style={styles.resendText()}>{t('otp_screen.resend_otp')}</Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text style={styles.resendDisabledText()}>{t('otp_screen.resend_otp_time_text')}</Text>
                <Text style={styles.resendDisabledText()}>{formatTime(remainingTime)}</Text>
              </>

            )}

          </View>
          <Button
            title={t('otp_screen.btn_text')}
            onPress={handleOTPNavigation}
            activeOpacity={0.5}
            disabled={disabled || loading}
            btnStyle={styles.button(disabled, loading)}
          />
        </View>
      </View>
    </Screen>
  )
}
