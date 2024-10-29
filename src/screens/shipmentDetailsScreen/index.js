import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { color, IcBackArrow, IcHome, IcParcelBox, IcPerson, IcRoute, size } from '../../theme'
import { LocalizationContext } from '../../context'
import { loadShipmentDetailsFromBarcode } from '../../services'
import { Header, Screen, Button, DialogBox } from '../../components'
import * as styles from './styles'

export const ShipmentDetailsScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  console.log("route: ", route?.params)
  const { userKey } = useSelector(state => state.auth.userDetails)
  const { t } = useContext(LocalizationContext);

  const [loading, setLoading] = useState(false);
  const [shipmentDetails, setShipmentDetails] = useState({})

  const fetchStatusCardDetails = async (statusCard, userKey) => {
    setLoading(true);
    try {
      const response = await loadShipmentDetailsFromBarcode(statusCard, userKey);
      if (response.status === 1) {
        console.log('response in shipment: ', response);
        setShipmentDetails(response);
      } else {
        console.log('response in shipment when status -1: ', response);
      }
    } catch (error) {
      console.log('Error in fetchStatusCardDetails: ', error);
    } finally {
      setLoading(false);
    }
  }

  const formatDate = timestamp => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleShipmentBtnPress = () => {
    navigation.navigate('pickupProofScreen')
  }

  useEffect(() => {
    if (route?.params?.trackingKey) {
      fetchStatusCardDetails(route.params.trackingKey, userKey);
    }
  }, [route, userKey]);

  const shipment = shipmentDetails?.driverAllocatedShipment?.shipment || {};
  const shippingDetails = shipment?.shippingDetails || {};

  const btnTextForShipment = shipmentDetails?.driverAllocatedShipment;
  const shipmentBtnText = btnTextForShipment?.canMarkForPickup
    ? btnTextForShipment?.btnTextMarkForPickup : btnTextForShipment?.canMarkForOutForDelivery
      ? btnTextForShipment?.btnTextMarkForOutForDelivery : btnTextForShipment?.canMarkForDrop
      ? btnTextForShipment?.btnTextMarkForDrop : 'N/A';

  return (
    <View style={styles.mainView()}>
      <Header
        leftIcon
        renderLeftIcon={() => (<IcBackArrow fill={color.secondary} />)}
        headerLeftIconPress={() => navigation.goBack()}
        title={t("shipment_screen.screen_title")}
        headerStyle={styles.header()}
        headerTitleStyle={styles.headerTitle()}
      />
      <Screen loading={loading} loadingBgColor={color.white} withScroll scrollStyle={styles.screen()}>
        <View style={styles.topView()}>
          <Text style={styles.trackingId()}>{shipment?.shipmentTrackingKey || 'No Tracking Key'}</Text>
          <View style={styles.addressWrapper()}>
            <View style={styles.row()}>
              <IcRoute fill={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <View style={styles.details()}>
                <Text style={styles.addressTitle()}>{t("shipment_screen.address_title")}</Text>
                <Text style={styles.addressBody()}>6634 Lake Otis Pkwy, Anchorage, Alaska, 99507</Text>
              </View>
            </View>
            <View style={styles.row()}>
              <IcPerson fill={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <View style={styles.details()}>
                <Text style={styles.addressTitle()}>{t("shipment_screen.recepeint_name_title")}</Text>
                <Text style={[styles.addressBody(), { textDecorationLine: 'none' }]}>{shippingDetails?.customerName || 'No Customer Name'}</Text>
              </View>
            </View>
            <View style={styles.row()}>
              <IcHome stroke={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <View style={styles.details()}>
                <Text style={styles.addressTitle()}>{t("shipment_screen.recepeint_address__title")}</Text>
                <Text style={styles.addressBody()}>{shippingDetails?.customerAddressStr || 'No Address Provided'}</Text>
              </View>
            </View>
            <View style={styles.row()}>
              <IcParcelBox fill={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />
              <View style={styles.details()}>
                <Text style={styles.addressTitle()}>{t("shipment_screen.total_orders_title")}</Text>
                <Text style={[styles.addressBody(), { textDecorationLine: 'none' }]}>{shipment?.totalItemCount}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.middleView()}>
          <View style={styles.deliveryStatus()}>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("shipment_screen.deliver_earnings")}</Text>
              <Text style={styles.textLarge()}>฿ 77</Text>
            </View>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("shipment_screen.estimated_delivery")}</Text>
              <Text style={styles.textLarge()}>{formatDate(shipment?.expectedDeliveryDate)}</Text>
            </View>
          </View>
          <View style={styles.deliveryStatus()}>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("shipment_screen.total_tips")}</Text>
              <Text style={styles.textLarge()}>฿ 10</Text>
            </View>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("shipment_screen.total_distance")}</Text>
              <View style={styles.textRow()}>
                <Text style={styles.textLarge()}>30.6</Text>
                <Text style={styles.textSmall()}>kms</Text>
              </View>
            </View>
          </View>
          <View style={styles.totalEarningView()}>
            <Text style={styles.textCapital()}>{t("shipment_screen.total_est_earnings")}</Text>
            <Text style={styles.textCapitalBold()}>฿ 87</Text>
          </View>
        </View>
        <View style={styles.bottomView()}>
          <Button
            title={t("shipment_screen.button_text_1")}
            btnStyle={styles.button()}
            btnTextStyle={styles.buttonText()}
          />
          <Button
            onPress={handleShipmentBtnPress}
            linearGradientButton
            title={shipmentBtnText}
            btnStyle={styles.buttonLG()}
            btnTextStyle={styles.buttonTextLG()}
          />
        </View>
      </Screen>

    </View>
  )
}