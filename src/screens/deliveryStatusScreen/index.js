import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, FlatList, RefreshControl } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { color, IcBackArrow, IcRoute, size } from '../../theme';
import { loadShipmentList } from '../../services';
import { useMainContext } from '../../context';
import { Header, Screen } from '../../components';
import * as styles from './styles';

export const DeliveryStatusScreen = () => {
  const navigation = useNavigation();
  const { userKey } = useSelector(state => state.auth.userDetails);
  const { deliveryStatusCode, setDeliveryStatusCode, setDeliveryTrackingKey } = useMainContext();

  const [loading, setLoading] = useState(false);
  const [shipmentDetails, setShipmentDetails] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchStatusCardDetails(deliveryStatusCode, userKey);
    setRefreshing(false);
  };

  const fetchStatusCardDetails = async (statusCard, userKey) => {
    setLoading(true);
    try {
      const response = await loadShipmentList(statusCard, userKey);
      if (response.status === 1) {
        console.log("response in loadShipmentList: ", response)
        setShipmentDetails(response);
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

  const handleShipmentCardPress = (trackingKey, userKey, statusCode) => {
    setDeliveryStatusCode(statusCode);
    setDeliveryTrackingKey(trackingKey)
    navigation.navigate('shipmentDetailsScreen', { trackingKey, userKey });
  };

  const renderShipmentItem = ({ item }) => {
    const shipment = item?.shipment || {};
    const shippingDetails = shipment?.shippingDetails || {};

    return (
      <TouchableHighlight
        key={shipment?.shipmentTrackingKey}
        style={{ borderRadius: size.moderateScale(10), marginBottom: 10 }}
        activeOpacity={0.7}
        underlayColor={color.customBlack(0.2)}
        onPress={() => handleShipmentCardPress(shipment?.shipmentTrackingKey, userKey, shipment?.shipmentStatusCode)}
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
                {formatDate(shipment?.processingDate)}
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
    );
  };

  useEffect(() => {
    if (deliveryStatusCode) {
      fetchStatusCardDetails(deliveryStatusCode, userKey);
    }
  }, [userKey]);

  useFocusEffect(
    useCallback(() => {
      if (deliveryStatusCode) {
        handleRefresh()
        fetchStatusCardDetails(deliveryStatusCode, userKey);
      }
    }, [])
  )

  return (
    <View style={styles.mainView()}>
      <Header
        title={shipmentDetails?.deliveryAllocationStatus?.statusTextDriver}
        leftIcon
        renderLeftIcon={() => <IcBackArrow fill={color.secondary} />}
        headerLeftIconPress={() => navigation.goBack()}
        headerStyle={styles.header()}
        headerTitleStyle={styles.headerTitle()}
      />
      <Screen loading={loading} loadingBgColor={color.white}>
        <View style={styles.cardWrapper()}>
          {shipmentDetails?.driverDeliveryAllocatedShipments?.length > 0 ? (
            <FlatList
              renderItem={renderShipmentItem}
              data={shipmentDetails?.driverDeliveryAllocatedShipments}
              contentContainerStyle={{ paddingBottom: 20 }}
              keyExtractor={(item, index) => item?.shipment?.shipmentTrackingKey || index.toString()}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                  colors={[color.primary, color.secondary, color.tertiaryTextColor]}
                  tintColor={color.primary}
                />
              }
            />
          ) : (
            <View style={styles.centerTextView()}>
              <Text style={styles.centerText()}>No data found!</Text>
            </View>
          )}
        </View>
      </Screen>
    </View>
  );
};
