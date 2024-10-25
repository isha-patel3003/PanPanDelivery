import React, { useContext, useRef, useState } from 'react'
import { View, Text, Pressable, Animated, FlatList, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { LocalizationContext } from '../../context'
import { color, IcBackArrow, IcCommonPont, IcDotsVertical, IcLeftArrow, IcMotorBike, IcQuestion, IcRoute, size } from '../../theme'
import { Button, Header, Screen, SwipeButton, Switch } from '../../components'
import * as styles from './styles'

export const OrderScreen = () => {

  const navigation = useNavigation();
  const { t } = useContext(LocalizationContext);
  const swipeButtonRef = useRef(null);

  const [showDropPoints, setShowDropPoints] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const dropPointAnimation = useRef(new Animated.Value(0)).current;

  const dropPoints = [
    '47/1021 Nimitrmai Sam War Tawantok Khlongsamwa',
    'Kubon, Bangked, Bangked',
    '3761/147-8 O-Siri Village Soi New Yoodee Chan Rd Bang Klo Bangkholeam',
    '65 Gp 10 Bangkruay-Saisoi Bang Bua Thong Bang Bua Thong',
    '98/18, Bang la Road, Patong, Phuket',
    '98/18, Bang la Road, Patong, Phuket',
  ]

  const toggleDropPoints = () => {
    if (showDropPoints) {
      Animated.timing(dropPointAnimation, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false,
      }).start(() => setShowDropPoints(false));
    } else {
      setShowDropPoints(true);
      Animated.timing(dropPointAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };

  const animatedHeight = dropPointAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, dropPoints.length * 70],
  });

  const animatedOpacity = dropPointAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });


  const renderDropPoint = ({ item }) => {
    const itemEllipsis = item.length > 30 ? item.slice(0, 30) + '...' : item;
    return (
      <View style={styles.locationView2()}>
        <IcRoute width={size.moderateScale(25)} height={size.moderateScale(25)} fill={color.redColor} />
        <Text style={styles.locationText()}>{itemEllipsis}</Text>
      </View>
    )
  }

  const handleAcceptDelivery = () => {
    Alert.alert(t('orders_screen.alert_title'), t('orders_screen.alert_message'),
      [
        {
          text: t('orders_screen.alert_btn_cancel'),
          onPress: () => {
            swipeButtonRef.current.resetButton(); // Reset the button position
          },
        },
        {
          text: t('orders_screen.alert_btn_ok'),
          onPress: () => {
            navigation.navigate('deliveryScreen');
            swipeButtonRef.current.resetButton();
          },
        }
      ]
    )
  }

  return (
    <Screen withScroll scrollStyle={{ flexGrow: 1 }} bgColor={color.white}>
      <View style={styles.mainView()}>
        <Header
          title={t('orders_screen.screen_title')}
          headerStyle={styles.header()}
          headerTitleStyle={styles.headerTitle()}
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.primary} />)}
          headerLeftIconPress={() => navigation.goBack()}
        />
        <View style={styles.middleView()}>
          <View style={styles.locationDropLists()}>
            <View style={styles.locationView()}>
              <IcCommonPont fill={color.success} />
              <Text style={styles.locationText()}>Your location</Text>
            </View>
            {
              !showDropPoints && (
                <View style={styles.animatedView()}>
                  <View style={styles.dotsView()}>
                    <IcDotsVertical fill={color.grayLight} width={size.moderateScale(30)} height={size.moderateScale(30)} />
                  </View>
                  <Pressable onPress={toggleDropPoints} android_ripple={color.primary} style={styles.dropPointsView()}>
                    <Text style={styles.boldText()}>{dropPoints.length} {t('orders_screen.drop_points_text')}</Text>
                    <View style={styles.downIconView()}>
                      <IcLeftArrow fill={color.primary} width={size.moderateScale(15)} />
                    </View>
                  </Pressable>
                  <View style={styles.horizontalLine()} />
                </View>
              )
            }
            <Animated.View style={[styles.locationDropView(), { height: animatedHeight, opacity: animatedOpacity }]}>
              <FlatList
                data={dropPoints}
                renderItem={renderDropPoint}
                keyExtractor={(item, index) => index.toString() + item}
                scrollEnabled={false}
              />
              {showDropPoints && (
                <Pressable style={styles.collapseButton()} onPress={toggleDropPoints}>
                  <Text style={styles.collapseButtonText()}>{t('orders_screen.collapse_button_title')}</Text>
                </Pressable>
              )}
            </Animated.View>
            {
              !showDropPoints && (
                <View style={styles.locationView()}>
                  <IcRoute width={size.moderateScale(25)} height={size.moderateScale(25)} fill={color.redColor} />
                  <Text style={styles.locationText()}>{dropPoints.slice(-1)}</Text>
                </View>
              )
            }
          </View>
          <View style={styles.deliveryStatus()}>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("orders_screen.deliver_earnings")}</Text>
              <Text style={styles.textLarge()}>฿ 399.99</Text>
            </View>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("orders_screen.estimated_delivery")}</Text>
              <Text style={styles.textLarge()}>26-06-24</Text>
            </View>
          </View>
          <View style={styles.deliveryStatus()}>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("orders_screen.total_tips")}</Text>
              <Text style={styles.textLarge()}>฿ 99.95</Text>
            </View>
            <View style={styles.deliveryInfo()}>
              <Text style={styles.textCapital()}>{t("orders_screen.total_distance")}</Text>
              <View style={styles.textRow()}>
                <Text style={styles.textLarge()}>30.6</Text>
                <Text style={styles.textSmall()}>kms</Text>
              </View>
            </View>
          </View>
          <View style={styles.totalEarningView()}>
            <Text style={styles.textCapital()}>{t("orders_screen.total_est_earnings")}</Text>
            <Text style={styles.textCapitalBold()}>฿ 499.90</Text>
          </View>
        </View>
        <View style={styles.bottomView()}>
          <View style={styles.row()}>
            <Switch
              value={isEnabled}
              onValueChange={(prev) => setIsEnabled(prev)}
              thumbSize={size.moderateScale(15)}
              switchWidth={size.moderateScale(45)}
              switchHeight={size.moderateScale(20)}
            />
            <Text style={styles.bodyText()}>{t('orders_screen.switch_text')}</Text>
            <TouchableOpacity>
              <IcQuestion />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer()}>
            <SwipeButton
              ref={swipeButtonRef}
              title={`${t('orders_screen.pre_button_title')} ${dropPoints.length} ${t('orders_screen.post_button_title')}`}
              icon
              renderIcon={() => (<IcMotorBike fill={color.secondary} width={size.moderateScale(30)} height={size.moderateScale(30)} />)}
              gradientColors={[color.black, color.primary, '#6f5fed']}
              gradientLocations={[0, 0.6, 1]}
              onSwipeSuccess={handleAcceptDelivery}
            />
            <TouchableOpacity activeOpacity={0.9} style={styles.customSelectBtn()}>
              <Text style={styles.customSelectBtnText()}>{t('orders_screen.custom_button_title')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  )
}
