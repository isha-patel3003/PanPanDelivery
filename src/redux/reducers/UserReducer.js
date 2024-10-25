import * as actions from '../Types'

const initialState = {
  permissionGranted: false,
  shipmentStatus: null,
  userTrackingKey: ''
}

export const UserLocation = (state=initialState, action) => {
  switch(action.type) {
    case actions.SET_LOCATION_PERMISSION:
      return {
        ...state,
        permissionGranted: action.payload
      }
    case actions.DELIVERY_STATUS_CODE:
      return {
        ...state,
        shipmentStatus: action.payload
      }
    case actions.TRACKING_KEY:
      return {
        ...state,
        userTrackingKey: action.payload

      }
    default: 
      return state
  }
}