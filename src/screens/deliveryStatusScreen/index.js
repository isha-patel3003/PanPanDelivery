import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Screen } from '../../components';
import { color, IcBackArrow, IcRoute, size } from '../../theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { loadShipmentList } from '../../services';
import * as styles from './styles';
import { setUserTrackingKey } from '../../redux/actions/UserAction';

export const DeliveryStatusScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log("route: ",route?.params)
  const dispatch = useDispatch();
  const { userKey } = useSelector(state => state.auth.userDetails);

  const [shipmentStatusCode, setShipmentStatusCode] = useState(route?.params?.statusCode);
  const [loading, setLoading] = useState(false);
  const [shipmentDetails, setShipmentDetails] = useState({});

  const fetchStatusCardDetails = async (statusCard, userKey) => {
    setLoading(true);
    try {
      const response = await loadShipmentList(statusCard, userKey);
      if (response.status === 1) {
        console.log("response in loadShipmentList: ",response)
        setShipmentDetails(response);
        const trackingKey = response?.driverDeliveryAllocatedShipments?.[0]?.shipment?.shipmentTrackingKey;
        dispatch(setUserTrackingKey(trackingKey))
      } else {
        console.log('response in shipment when status -1: ', response);
      }
    } catch (error) {
      console.log('Error in fetchStatusCardDetails: ', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = timestamp => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleShipmentCardPress = (trackingKey, userKey) => {
    console.log("trackingKey: ",trackingKey)
    if (!shipmentStatusCode || !userKey) {
      console.log('Missing status code or user key');
      return;
    }
    navigation.navigate('shipmentDetailsScreen', { trackingKey, userKey });
  };

  useEffect(() => {
    if (route?.params?.statusCode) {
      setShipmentStatusCode(route?.params?.statusCode);
      fetchStatusCardDetails(route.params.statusCode, userKey);
    }
  }, [route, userKey]);

  const shipment = shipmentDetails?.driverDeliveryAllocatedShipments?.[0]?.shipment || {};
  const shippingDetails = shipment?.shippingDetails || {};


  return (
    <Screen style={styles.mainView()}>
      <Header
        title="Pending Pickups"
        leftIcon
        renderLeftIcon={() => <IcBackArrow fill={color.secondary} />}
        headerLeftIconPress={() => navigation.goBack()}
        headerStyle={styles.header()}
        headerTitleStyle={styles.headerTitle()}
      />
      <Screen withScroll scrollStyle={{ flexGrow: 1 }} loading={loading} loadingBgColor={color.white}>
        <View style={styles.cardWrapper()}>
          <TouchableHighlight
            style={{ borderRadius: size.moderateScale(10) }}
            activeOpacity={0.7}
            underlayColor={color.customBlack(0.2)}
            onPress={() => handleShipmentCardPress(shipment?.shipmentTrackingKey, userKey)}
          >
            <View style={styles.card()}>
              <View style={styles.iconView()}>
                <IcRoute fill={color.secondary} />
              </View>
              <View style={styles.cardDetails()}>
                <View style={styles.cardHeader()}>
                  <Text style={styles.trackingID()}>
                    {shipment?.shipmentTrackingKey || 'No Tracking Key'}
                  </Text>
                  <Text style={styles.dateText()}>
                    {formatDate(shipmentDetails?.driverDeliveryAllocatedShipments?.[0]?.updatedAt)}
                  </Text>
                </View>
                <View style={styles.cardBody()}>
                  <Text style={styles.cardText()}>
                    {shippingDetails?.customerName || 'No Customer Name'}
                  </Text>
                  <Text style={styles.cardText()}>
                    {shippingDetails?.customerAddressStr || 'No Address Provided'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </Screen>
    </Screen>
  );
};
