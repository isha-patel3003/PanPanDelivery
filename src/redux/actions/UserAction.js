import * as actions from '../Types'

export const setLocationPermission = (status) => {
  return {
    type: actions.SET_LOCATION_PERMISSION,
    payload: status
  }
}

export const setShipmentCardDetails = async (statusCodeDetils) => {
  return {
    type: actions.DELIVERY_STATUS_CODE,
    payload: statusCodeDetils
  }
}

export const setUserTrackingKey = async (key) => {
  return (dispatch) => {
    dispatch({
      type: actions.TRACKING_KEY,
      payload: key
    })
  }
}