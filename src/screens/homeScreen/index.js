import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, Alert, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

import { LocalizationContext, useMainContext } from '../../context'
import { color, IcBarCode, IcLeftArrow, IcParcelBox, IcRightArrow, IcSearch, images, size } from '../../theme'
import { Screen, StatusCard, Switch } from '../../components'
import * as styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { loadDashboardMetrics } from '../../services'

export const HomeScreen = () => {

  const navigation = useNavigation();
  const { userDetails } = useSelector(state => state.auth);
  console.log("userDetails: ", userDetails)

  const { t } = useContext(LocalizationContext);
  const { internetConnectivity } = useMainContext();

  const [trackingID, setTrackingID] = useState('');
  const [loading, setLoading] = useState(false);
  const [switchValue, setSwitchValue] = useState(internetConnectivity ?? false);
  const [dashboardMetrics, setDashboardMetrics] = useState({});

  const handleSwitchValue = () => {
    if (internetConnectivity) {
      setSwitchValue(!switchValue);
    } else {
      Alert.alert(
        t('home_screen.switch_alert_title'),
        t('home_screen.switch_alert_message'),
        [{
          text: t('home_screen.switch_alert_button'),
        }]
      );
    }
  };

  const fetchDashboardMetrics = async () => {
    setLoading(true)
    try {
      const response = await loadDashboardMetrics(userDetails?.userKey);
      console.log("response: ", response);
      setDashboardMetrics(response);
    } catch (error) {
      console.log("Error in  fetchDashboardMetrics: ", error);
    } finally {
      setLoading(false)
    }
  }

  const statusCardOnpress = (statusCard) => {
    navigation.navigate('deliveryStatusScreen', { statusCode: statusCard })
  }

  useEffect(() => {
    if (switchValue) {
      setSwitchValue(true)
    } else {
      Alert.alert(
        t('home_screen.switch_alert_title'),
        t('home_screen.switch_alert_message'),
        [{
          text: t('home_screen.switch_alert_button'),
        }]
      )
    }
  }, [switchValue])

  useEffect(() => {
    fetchDashboardMetrics()
  }, [])

  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.mainView()}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: size.moderateScale(80) }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          <View style={styles.topView()}>
            <View style={styles.riderContainer()}>
              <View style={styles.riderDetailsWrapper()}>
                <View style={styles.riderInfo()}>
                  <View style={styles.riderImageView()}>
                    <Image source={images.dummyProfileImage} style={styles.riderImage()} />
                  </View>
                  <View>
                    <Text style={styles.subText()}>{t('home_screen.level_4')}</Text>
                    <Text style={styles.title()}>{userDetails?.driverName}</Text>
                    <Text style={styles.subText()}>Bong Kho loem</Text>
                  </View>
                </View>
              </View>
              <View style={styles.switchWrapper()}>
                <Switch
                  thumbSize={size.moderateScale(20)}
                  switchHeight={size.moderateScale(25)}
                  switchWidth={size.moderateScale(53)}
                  value={switchValue}
                  onValueChange={handleSwitchValue}
                />
                <Text style={styles.switchText()}>
                  {switchValue ? t('home_screen.status_online_text') : t('home_screen.status_offline_text')}
                </Text>
              </View>
            </View>
            <View style={styles.earningPointsView()}>
              <Text style={styles.label()}>{t('home_screen.earning_points_title')}</Text>
              <Text style={styles.label()}>90</Text>
            </View>
          </View>
          <View style={styles.middleView()}>
            <View style={styles.formView()}>
              <View style={styles.inputView()}>
                <TextInput
                  style={styles.input()}
                  placeholder={t('home_screen.input_placeholder_text')}
                  placeholderTextColor={color.primary}
                  value={trackingID}
                  onChangeText={() => setTrackingID(txt => txt)}
                  keyboardType='ascii-capable'
                  cursorColor={color.primary}
                />
                <TouchableOpacity activeOpacity={0.6} style={styles.iconView()}>
                  <IcSearch />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('qrCodeScannerScreen')} activeOpacity={0.6} style={styles.iconView()}>
                  <IcBarCode />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomView()}>
            <View style={styles.cardWrapper()}>
              <View style={styles.cardView()}>
                <Text style={styles.cardWrapperTitle()}>{t('home_screen.card_title_1')}</Text>
                {
                  loading
                    ? (<ActivityIndicator size="large" color={color.primary} />)
                    : (
                      <View style={styles.row()}>
                        <StatusCard
                          onPress={() => statusCardOnpress(dashboardMetrics?.pending?.statusCode)}
                          bgColor={dashboardMetrics?.pending?.colorCode}
                          title={dashboardMetrics?.pending?.shipmentCount}
                          bodyText={dashboardMetrics?.pending?.statusTextDriver}
                        />
                        <StatusCard
                          onPress={() => statusCardOnpress(dashboardMetrics?.outForDelivery?.statusCode)}
                          bgColor={dashboardMetrics?.outForDelivery?.colorCode}
                          title={dashboardMetrics?.outForDelivery?.shipmentCount}
                          bodyText={dashboardMetrics?.outForDelivery?.statusTextDriver}
                        />
                        <StatusCard
                          onPress={() => statusCardOnpress(dashboardMetrics?.delivered?.statusCode)}
                          bgColor={dashboardMetrics?.delivered?.colorCode}
                          title={dashboardMetrics?.delivered?.shipmentCount}
                          bodyText={dashboardMetrics?.delivered?.statusTextDriver}
                        />
                      </View>
                    )
                }
              </View>
              <View style={styles.cardView()}>
                <Text style={styles.cardWrapperTitle()}>{t('home_screen.card_title_2')}</Text>
                {
                  loading
                    ? (<ActivityIndicator size="large" color={color.primary} />)
                    : (
                      <View style={styles.row()}>
                        <StatusCard
                          onPress={() => statusCardOnpress(dashboardMetrics?.pickupPending?.statusCode)}
                          bgColor={dashboardMetrics?.pickupPending?.colorCode}
                          title={dashboardMetrics?.pickupPending?.shipmentCount}
                          bodyText={dashboardMetrics?.pickupPending?.statusTextDriver}
                        />
                        <StatusCard
                          onPress={() => statusCardOnpress(dashboardMetrics?.picked?.statusCode)}
                          bgColor={dashboardMetrics?.picked?.colorCode}
                          title={dashboardMetrics?.picked?.shipmentCount}
                          bodyText={dashboardMetrics?.picked?.statusTextDriver}
                        />
                        <StatusCard
                          onPress={() => statusCardOnpress(dashboardMetrics?.dropped?.statusCode)}
                          bgColor={dashboardMetrics?.dropped?.colorCode}
                          title={dashboardMetrics?.dropped?.shipmentCount}
                          bodyText={dashboardMetrics?.dropped?.statusTextDriver}
                        />
                      </View>
                    )
                }
              </View>
            </View>
          </View>
          <View style={styles.orderWrapper()}>
            <View>
              <IcParcelBox fill={color.secondary} width={size.moderateScale(70)} height={size.moderateScale(70)} />
            </View>
            <View styles={styles.orderDetailsView()}>
              <Text style={styles.infoText()}>{t('home_screen.order_sub_text')}</Text>
              <Text style={styles.orderText()}>5 {t('home_screen.order_title')}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('orderScreen')} style={styles.orderDetailsBtn()}>
                <Text style={styles.orderLinkText()}>{t('home_screen.link_title')}</Text>
                <IcRightArrow fill={color.primary} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.transactionDetailsWrapper()}>
            <Text style={styles.viewHeaderText()}>{t('home_screen.transaction_title')}</Text>
            <View style={styles.transactionDetails()}>
              <View style={styles.transactionIconView()}>
                <IcLeftArrow fill={color.secondary} />
              </View>
              <View style={styles.rightView()}>
                <View style={styles.row()}>
                  <Text style={styles.deliveryTextLabel()}>5 {t('home_screen.transaction_sub_title')}</Text>
                  <Text style={styles.deliveryTextLabel()}>+฿ 591.80</Text>
                </View>
                <View style={styles.row()}>
                  <Text style={styles.deliveryTextKey()}>{t('home_screen.today_text')}, 1:23PM - 36.5 kms</Text>
                  <Text style={styles.deliveryTextKey()}>+฿ 21.10 tips</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Screen>
  )
}