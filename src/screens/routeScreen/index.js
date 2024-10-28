import React, { useContext, useEffect, useRef, useState } from 'react';
import { Alert, Linking, Platform, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import { LocalizationContext, useMainContext } from '../../context';
import { getCoordinatesFromAddress } from '../../services';
import { MAPS_API } from '../../config'
import { setLocationPermission } from '../../redux/actions/UserAction';
import { Button, CustomBottomSheet, Header, Screen, SwipeButton } from '../../components';
import { color, IcBackArrow, IcMotorBike, size } from '../../theme';
import * as styles from './styles';

export const RouteScreen = () => {


  const navigation = useNavigation();
  const dispatch = useDispatch();
  const locationPermission = useSelector(state => state.userlocation.permissionGranted)

  const { t } = useContext(LocalizationContext);
  const bottomSheetRef = useRef();
  const swipeButtonRef = useRef(null);

  const { bottomBarHeight } = useMainContext();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [loading, setLoading] = useState(false);
  const [originCoordinates, setOriginCoordinates] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null)

  const originAddress = '999/9 Rama I Rd, Pathum Wan, Pathum Wan District, Bangkok 10330, Thailand';
  const destinationAddress = [
    '991 Rama I Rd, Pathum Wan, Pathum Wan District, Bangkok 10330, Thailand',
    '6 Soi Kasemsan 2, Rama I R444 Phaya Thai Rd, Wang Mai, Pathum Wan District, Bangkok 10330, Thailandd, Wang Mai, Pathum Wan District, Bangkok 10330, Thailand',
    'Ratchadamri Rd, Lumphini, Pathum Wan District, Bangkok 10330, Thailand'
  ]

  const openPhoneSettings = () => {
    Linking.openSettings().catch(error => Alert.alert(t('route_screen.alert_title'), t('route_screen.alert_message')));
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
      const destinationPromises = destinationAddress.map(address => getCoordinatesFromAddress(address, locale))
      const destinations = await Promise.all(destinationPromises);
      // console.log("destinations: ", destinations)
      setDestinationCoordinates(destinations);
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
    Alert.alert(t('orders_screen.alert_title'), t('orders_screen.alert_message'),
      [
        {
          text: t('orders_screen.alert_btn_cancel'),
          onPress: () => {
            swipeButtonRef.current.resetButton();
          },
        },
        {
          text: t('orders_screen.alert_btn_ok'),
          onPress: () => {
            swipeButtonRef.current.resetButton();
          },
        }
      ]
    )
  }

  useEffect(() => {
    if (locationPermission) {
      fetchCoordinates();
    }
  }, [])

  useEffect(() => {
    if (locationPermission) {
      getCurrentLocation();
    }
  }, [])

  return (
    <Screen>
      <View style={styles.mainView()}>
        <Header
          title={t('route_screen.screen_title')}
          headerStyle={styles.header()}
          headerTitleStyle={styles.headerTitle()}
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.secondary} />)}
          headerLeftIconPress={() => navigation.goBack()}
        />
        <Screen loading={false} loadingBgColor={color.white} scrollStyle={{ flexGrow: 1 }}>
          {
            locationPermission
              ? (
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
                    destinationCoordinates &&
                    destinationCoordinates.map((dest, index) => {
                      return (
                        <Marker
                          key={index + 1}
                          coordinate={{
                            latitude: dest.lat,
                            longitude: dest.lng,
                          }}
                          onPress={() => handleMarkerPress(dest)}
                        >
                          <View style={styles.customMarkerView()}>
                            <Text style={styles.customMarkerText()}>{index + 1}</Text>
                          </View>
                        </Marker>
                      )
                    })
                  }
                  {
                    destinationCoordinates &&
                    destinationCoordinates.map((dest, index) => {
                      return (
                        <MapViewDirections
                          key={index}
                          origin={originCoordinates && { latitude: originCoordinates.lat, longitude: originCoordinates.lng }}
                          destination={dest && { latitude: dest.lat, longitude: dest.lng }}
                          apikey={MAPS_API}
                          strokeWidth={size.moderateScale(5)}
                          strokeColor={color.primary}
                        />
                      )
                    })
                  }
                </MapView>
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
        </Screen>
        {
          locationPermission && (
            <View style={styles.bottomView(bottomBarHeight)}>
              <SwipeButton
                ref={swipeButtonRef}
                title={t('route_screen.button_text')}
                icon
                renderIcon={() => (<IcMotorBike fill={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />)}
                gradientColors={[color.black, color.primary, '#6f5fed']}
                gradientLocations={[0, 0.6, 1]}
                onSwipeSuccess={handleAcceptDelivery}
              />
            </View>
          )
        }
      </View>
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

