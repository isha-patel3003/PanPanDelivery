import React, { useContext, useEffect, useRef, useState } from 'react';
import { Alert, Linking, Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import { LocalizationContext } from '../../context';
import { getCoordinatesFromAddress } from '../../services';
import { MAPS_API } from '../../config'
import { setLocationPermission } from '../../redux/actions/UserAction';
import { Button, CustomBottomSheet, Header, Screen, SwipeButton, Switch } from '../../components';
import { color, IcMotorBike, IcQuestion, size } from '../../theme';
import * as styles from './styles';

export const DeliveryScreen = () => {


  const navigation = useNavigation();
  const dispatch = useDispatch();
  const locationPermission = useSelector(state => state.userlocation.permissionGranted)

  const { t, locale} = useContext(LocalizationContext);
  const bottomSheetRef = useRef();
  const swipeButtonRef = useRef(null);

  const [isEnabled, setIsEnabled] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [loading, setLoading] = useState(false);
  const [originCoordinates, setOriginCoordinates] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null)

  const originAddress = 'Ratchadamri Rd, Lumphini, Pathum Wan District, Bangkok 10330, Thailand';
  const destinationAddress = '444 Phaya Thai Rd, Wang Mai, Pathum Wan District, Bangkok 10330, Thailand';

  const openPhoneSettings = () => {
    Linking.openSettings().catch(error => Alert.alert(t('delivery_screen.alert_title'), t('delivery_screen.alert_message')));
  }

  const requestLocationPermission = async () => {
    let permission;
    try {
      if (Platform.OS === 'android') {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else {
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      }

      const result = await check(permission);

      switch (result) {
        case RESULTS.DENIED:
          const requestResult = await request(permission);
          if (requestResult === RESULTS.GRANTED) {
            dispatch(setLocationPermission(true))
            getCurrentLocation();
          } else {
            Alert.alert(
              t('route_screen.alert_title'),
              t('route_screen.alert_message'),
              [{ text: t('route_screen.alert_button_text'), onPress: () => openPhoneSettings() }],
            );

          }
          break;
        case RESULTS.BLOCKED:
          Alert.alert(t('route_screen.blocked_alert_title'), t('route_screen.blocked_alert_message'),
            [{ text: t('route_screen.alert_button_text'), onPress: () => openPhoneSettings() }],
          );
          dispatch(setLocationPermission(false))
          break;
        case RESULTS.GRANTED:
          getCurrentLocation();
          dispatch(setLocationPermission(true))
          break;
        case RESULTS.UNAVAILABLE:
          Alert.alert(t('route_screen.unavailable_alert_title'), t('route_screen.unavailable_alert_message'));
          dispatch(setLocationPermission(false))
          break;
        default:
          break;
      }
    } catch (error) {
      console.log('Error detecting location in requestLocationPermission,', error);
    }
  };

  const getCurrentLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLocation(position.coords);
        setLoading(false);
      },
      error => {
        console.log('Error: ', error);
        Alert.alert('Error', 'Could not get current location. Please try again.');
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  const fetchCoordinates = async () => {
    setLoading(true)
    try {
      const originCoordinates = await getCoordinatesFromAddress(originAddress, locale);
      setOriginCoordinates(originCoordinates);
      const destinationCoordinates = await getCoordinatesFromAddress(destinationAddress, locale)
      setDestinationCoordinates(destinationCoordinates);
    } catch (error) {
      console.log("error: ,", error)
    }
    finally {
      setLoading(false)
    }
  }


  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    bottomSheetRef.current?.open()
  }

  const handleAcceptDelivery = () => {
    Alert.alert(t('delivery_screen.alert_delivery_title'), t('delivery_screen.alert_delivery_message'),
      [
        {
          text: t('delivery_screen.alert_delivery_cancel'),
          onPress: () => {
            swipeButtonRef.current.resetButton();
            console.log("cancl pressed")
          },
        },
        {
          text: t('delivery_screen.alert_button_text'),
          onPress: () => navigation.navigate('routeStackNavigation'),
        }
      ]
    )
  }

  useEffect(() => {
    if (locationPermission) {
      fetchCoordinates()
    }
  }, [])

  useEffect(() => {
    if (locationPermission) {
      getCurrentLocation();
    }
  }, [])

  return (
    <Screen loading={loading} loadingBgColor={color.white} scrollStyle={{ flexGrow: 1}}>
      <StatusBar translucent={true} backgroundColor={color.transparent} barStyle='dark-content' />
      {
        locationPermission ? (
          <View style={styles.mainView()}>
            <MapView
              style={styles.mapView()}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: originCoordinates ? originCoordinates.lat : currentLocation ? currentLocation.latitude : 22.3072,
                longitude: originCoordinates ? originCoordinates.lng : currentLocation ? currentLocation.longitude : 73.1812,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: originCoordinates ? originCoordinates.lat : currentLocation ? currentLocation.latitude : 22.3072,
                  longitude: originCoordinates ? originCoordinates.lng : currentLocation ? currentLocation.longitude : 73.1812,
                }}
                onPress={() => handleMarkerPress(originCoordinates)}
                pinColor={color.primary}
              />
              {
                destinationCoordinates && (
                  <Marker
                    coordinate={{
                      latitude: destinationCoordinates.lat,
                      longitude: destinationCoordinates.lng,
                    }}
                    onPress={() => handleMarkerPress(destinationCoordinates)}
                    pinColor={color.redColor}
                  />
                )
              }
              <MapViewDirections
                origin={originCoordinates && { latitude: originCoordinates.lat, longitude: originCoordinates.lng }}
                destination={destinationCoordinates && { latitude: destinationCoordinates.lat, longitude: destinationCoordinates.lng }}
                apikey={MAPS_API}
                strokeWidth={size.moderateScale(5)}
                strokeColor={color.primary}
                onError={(errorMessage) => {
                  console.log('Error with directions: ', errorMessage);
                  if (errorMessage === 'NOT_FOUND' || errorMessage === 'ZERO_RESULTS') {
                    Alert.alert('Route Not Found', 'No route could be found between the origin and destination.');
                  } else {
                    Alert.alert('Error', 'An error occurred while calculating the route. Please try again.');
                  }
                }}
              />
            </MapView>
            <View style={styles.bottomView()}>
              <View style={styles.deliveryStatus()}>
                <View style={styles.deliveryInfo()}>
                  <Text style={styles.textCapital()}>{t("shipment_screen.total_tips")}</Text>
                  <Text style={styles.textLarge()}>฿ 15 + 62</Text>
                </View>
                <View style={styles.deliveryInfo()}>
                  <Text style={styles.textCapital()}>{t("shipment_screen.total_distance")}</Text>
                  <View style={styles.textRow()}>
                    <Text style={styles.textLarge()}>30.6</Text>
                    <Text style={styles.textSmall()}>kms</Text>
                  </View>
                </View>
              </View>
              <View style={styles.row2()}>
                <Switch
                  value={isEnabled}
                  onValueChange={(prev) => setIsEnabled(prev)}
                  thumbSize={size.moderateScale(15)}
                  switchWidth={size.moderateScale(45)}
                  switchHeight={size.moderateScale(20)}
                />
                <Text style={styles.bodyText()}>{t('delivery_screen.body_text')}</Text>
                <TouchableOpacity>
                  <IcQuestion />
                </TouchableOpacity>
              </View>
              <SwipeButton
                ref={swipeButtonRef}
                title={t('delivery_screen.btn_text')}
                icon
                renderIcon={() => (<IcMotorBike fill={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />)}
                gradientColors={[color.black, color.primary, '#6f5fed']}
                gradientLocations={[0, 0.6, 1]}
                onSwipeSuccess={handleAcceptDelivery}
              />
            </View>
          </View>
        )
          : (
            <View style={styles.noLocationView()}>
              <Text style={styles.noLocationText()}>{t('route_screen.grant_permission_text')}</Text>
              <Button
                title={t('route_screen.button_grant_text')}
                onPress={requestLocationPermission}
                btnStyle={styles.noLocationBtn()}
              />
            </View>
          )
      }
      <CustomBottomSheet
        ref={bottomSheetRef}
        draggable={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: color.primary,
            width: size.moderateScale(60)
          },
          container: {
            borderTopLeftRadius: size.moderateScale(30),
            borderTopRightRadius: size.moderateScale(30),
          }
        }}
        customModalProps={{
          statusBarTranslucent: true
        }}
      >
        <View style={{ padding: 20 }}>
          {selectedMarker ? (
            <Text style={{ color: color.primary }}>{`Latitude: ${selectedMarker.latitude}, Longitude: ${selectedMarker.longitude}`}</Text>
          ) : (
            <Text style={{ color: color.redColor }}>No marker selected</Text>
          )}
        </View>
      </CustomBottomSheet>
    </Screen>
  );
};

