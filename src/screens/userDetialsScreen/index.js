import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux'

import { Header, Screen } from '../../components'
import { color, IcBackArrow, images } from '../../theme'
import { getUserDetails } from '../../services'
import { LocalizationContext } from '../../context'
import * as styles from './styles'
import { useNavigation } from '@react-navigation/native'

export const UserDetailsScreen = () => {

  const user = useSelector(state => state.auth.userDetails);
  console.log("userKey in user profile: ",user.userKey);

  const { t } = useContext(LocalizationContext);
  const navigation = useNavigation();

  const [userDetails, setUserDetails] = useState(user);
  const [loading, setLoading] = useState(false);
  const [formateDate, setFormateDate] = useState(null);

  const fetchUserDetails = async () => {
    setLoading(true)
    try {
      const response = await getUserDetails(userDetails.userKey);
      if(response.status !== -1) {
        setUserDetails(response.profile);
      } else {
        setUserDetails
      }
    } catch (error) {
      console.log("error in profile:",error)
    } finally {
      setLoading(false)
    }
  }

  const convertDate = (date) => {
    const timeStamp = date *  1000;
    const newDate = new Date(timeStamp);

    const formateDate = newDate.toLocaleDateString('en-GB');
    setFormateDate(formateDate)
  }

  useEffect(() => {
    fetchUserDetails()
  }, [])

  useEffect(() => {
    if(userDetails) {
      convertDate(userDetails.licenseValidTill)
    }
  },[userDetails])

  return (
    <Screen withScroll loading={loading} loadingBgColor={color.white}>
      <View style={styles.mainView()}>
        <Header
          headerStyle={styles.header()}
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.secondary} />)}
          headerLeftIconPress={() => navigation.goBack()}
          title={t('user_detail_screen.screen_title')}
          headerTitleStyle={styles.headerText()}
        />
        <View style={styles.middleView()}>
          <View style={styles.imageWrapper()}>
            <View style={styles.imageCenterView()}>
              <Image source={images.dummyProfileImage} style={styles.image()} />
            </View>
          </View>
        </View>
        <View style={styles.bottomView()}>
          <View style={styles.formView()}>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_1')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.driverName : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_2')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.email : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_3')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.contactNo : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_4')}</Text><Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.address : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_5')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.country.EN : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_6')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.state.EN : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_7')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.district.EN : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_8')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.subDistrict.EN : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_9')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.zipCode : ''}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_10')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? userDetails.licenseNumber : '1212121212'}</Text>
            </View>
            <View style={styles.row()}>
              <Text style={styles.label()}>{t('user_detail_screen.lable_10')}</Text>
              <Text style={styles.colonText()}>:</Text>
              <Text style={styles.value()}>{userDetails ? formateDate : ''}</Text>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  )
}
