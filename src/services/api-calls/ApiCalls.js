import axios from 'axios';

import HttpCalls from './HttpCalls';
import { headersData } from './Services';
import { MAPS_API, API_KEY } from '../../config'


export const getCoordinatesFromAddress = async (address, ln) => {
  const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${MAPS_API}&language=${ln}`;
  return axios.get(geoCodeUrl)
    .then((res) => res.data.results[0].geometry.location)
    .catch((err) => console.log("error: ", err))
}

export const getRouteBetweenLocations = async (origin, destinations) => {
  try {
    const destinationQuery = destinations.map(dest => `${dest.latitude}, ${dest.longitude}`).join('|')
    const distanceMatrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.latitude},${origin.longitude}&destinations=${destinationQuery}&key=${MAPS_API}`;
    const response = await axios.get(distanceMatrixUrl);
    return response.data;
  } catch (error) {
    console.error('Error calculating distance', error);
    return null;
  }
}

export const getRiderType = async () => {
  const headers = {
    apikey: 'API-KEY-SU-PPW-TMS-PANEL-WEB',
    sukey: '866b102764982f2cc13da3860c2beb243decf6e132abf9b24437bbd3e8',
    tzstr: 'Asia/Calcutta',
    tzofs: 330,
    langcode: 'EN',
    reqfrom: 'pnl-spr',
  }

  return axios.post('http://192.168.1.62:3063/admapi/riderTypes/selectList', {}, { headers })
    .then((res) => {
      if (res.status === 201) {
        return res.data.results
      } else {
        return res.data.message
      }
    })
    .catch((err) => {
      return err.response.data;
    })
};

export const getVehicleType = async () => {

  const headers = {
    apikey: 'API-KEY-SU-PPW-TMS-PANEL-WEB',
    sukey: '866b102764982f2cc13da3860c2beb243decf6e132abf9b24437bbd3e8',
    tzstr: 'Asia/Calcutta',
    tzofs: 330,
    langcode: 'EN',
    reqfrom: 'pnl-spr',
  }

  return axios.post('http://192.168.1.62:3063/admapi/vehicleTypes/selectList', {}, { headers })
    .then((res) => {
      if (res.status === 201) {
        return res.data.results
      } else {
        return res.data.message
      }
    })
    .catch((err) => {
      return err.response.data;
    })
};

export const getAddressDetailsList = async (page, length = 10) => {

  let { _api_calls } = HttpCalls;

  const body = {
    "forExport": false,
    "page": page,
    "length": length
  }

  const params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
  }

  let headers = await headersData(params);

  return _api_calls('POST', '/appUserProfileOps/selectApplicableAddressedZipcodeListv2', headers, body)
}

export const addNewRiderRegister = async (data) => {

  const headers = {
    apikey: 'API-KEY-SU-PPW-TMS-PANEL-WEB',
    sukey: '866b102764982f2cc13da3860c2beb243decf6e132abf9b2443cbbd2e4',
    tzstr: 'Asia/Calcutta',
    tzofs: 330,
    langcode: 'EN',
    reqfrom: 'pnl-spr',
  }

  return axios.post('http://192.168.1.62:3063/admapi/riderRegistrations', data, { headers })
    .then((res) => {
      if (res.status == 201) {
        return res.data
      } else {
        return res.data
      }
    })
    .catch((err) => {
      return err.response.data;
    })
}

export const getOTPForLogin = async (phoneNo) => {
  let { _api_calls } = HttpCalls;

  const body = {
    "mobileNo": phoneNo,
    "otpFor": "auth"
  }
  const params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
  }

  let headers = await headersData(params);

  return _api_calls('POST', '/appDriverProfileOps/getOTP', headers, body)
}

export const userLogin = async (phoneNo, otp) => {
  let { _api_calls } = HttpCalls;
  const body = {
    mobileNo: phoneNo,
    otpFor: 'auth',
    otp: otp
  }
  const params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
  }

  let headers = await headersData(params);
  return _api_calls('POST', '/appDriverProfileOps/auth', headers, body)
}

export const userLogout = async (userKey) => {
  let { _api_calls } = HttpCalls;
  const params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
    drukey: userKey
  }
  let headers = await headersData(params);

  return _api_calls('POST', '/appDriverProfileOps/logout', headers, {})

}

export const getUserDetails = async (userKey) => {
  let { _api_calls } = HttpCalls;
  const params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
    drukey: userKey
  }

  let headers = await headersData(params);

  return _api_calls('POST', '/appDriverProfileOps/profile', headers, {})
}

export const loadDashboardMetrics = async (userKey) => {
  let { _api_calls } = HttpCalls;

  const params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
    drukey: userKey
  }

  let headers = await headersData(params)
  return _api_calls('POST', '/appDriverOps/loadDashboardMetrics', headers, {})
}

export const loadShipmentList = async (statusCode, userKey) => {
  let { _api_calls } = HttpCalls;

  const body = {
    // "shipmentStatusCode" : statusCode,
    "shipmentStatusCode": 'PCK-ASGD',
  }
  const params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
    drukey: userKey
  }

  let headers = await headersData(params);
  return _api_calls('POST', '/appDriverOps/loadShipmentList', headers, body)
}

export const loadShipmentDetailsFromBarcode = async (shipmentTrackingKey, userKey) => {
  let { _api_calls } = HttpCalls;

  const  body = {
    deliveryLatitude: 0.0,
    deliveryLongitude: 0.0,
    length: 0,
    page: 0,
    shipmentTrackingKey: shipmentTrackingKey,
  }
  let params = {
    apikey: API_KEY,
    langcode: 'EN',
    reqfrom: 'pnl-drv',
    tzofs: 330,
    tzstr: 'Asia/Calcutta',
    drukey: userKey
  }

  let headers = await headersData(params);

  return _api_calls('POST', '/appDriverOps/loadShipmentDetailFromBarcode', headers, body);
}

