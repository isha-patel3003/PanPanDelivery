import { color, fonts, fontSize, size } from "../../theme"

export const mainView = () => ({
  flex: 1
})

export const header = () => ({
  backgroundColor: color.primary,
  paddingHorizontal: size.moderateScale(10)
})

export const headerTitle = () => ({
  color: color.secondary,
  textAlign: 'center',
})

export const mapView = () => ({
  flex: 1,
})

export const customMarkerView = () => ({
  width: size.moderateScale(30),
  height: size.moderateScale(30),
  borderRadius: size.moderateScale(30),
  backgroundColor: color.primary,
  justifyContent: 'center',
  alignItems: 'center',
})

export const customMarkerText = () => ({
  color: color.secondary,
  textAlign: 'center',
  fontSize: fontSize.middleSmallMedium,
  fontFamily: fonts.sarabunBold,
  lineHeight: fontSize.middleSmallMedium,
})

export const noLocationView = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: size.moderateScale(50),
  gap: size.moderateScale(25)
})

export const noLocationText = () => ({
  color: color.primary,
  textAlign: 'center',
  fontSize: fontSize.middleSmallMedium,
  fontFamily: fonts.sarabunSemiBold,
  lineHeight: size.moderateScale(20)
})

export const noLocationBtn = () => ({
  width: '80%',
  borderRadius: size.moderateScale(20)
})

export const bottomView = (bottomBarHeight) => ({
  backgroundColor: color.primary,
  marginBottom: size.moderateScale(bottomBarHeight),
  paddingTop: size.moderateScale(10),
  paddingBottom: size.moderateScale(20),
  alignItems: 'center'
})

export const button = () => ({
  paddingVertical: size.moderateScale(10),
  width: '100%',
  borderRadius: size.moderateScale(30)
})

export const buttonText = () => ({
  fontSize: fontSize.smallMedium,
  textTransform: 'capitalize',
})

export const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];