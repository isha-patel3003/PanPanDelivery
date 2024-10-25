
import BaseScreen, {
  COLOR,
  isValueNull,
  showToast,
  getFontFamily,
  isInternetAvailable,
  isIOS
} from '../../screens/BaseScreen';
import string from '../strings.json';
import NetInfo from '@react-native-community/netinfo';



//const navigation = useNavigation();

export const API_CALL = async (
  method,
  endPoint,
  queryStrings,
  forId,
  param,
  token,
  isConnected,
  callBack,
) => {
  const unsubscribe = NetInfo.addEventListener(state => {
    isConnected = state.isConnected
    //console.log("Connection type base", state.isConnected);
  })
  // console.log(`API_CALL.isConnected: ${isConnected}`);
  if (isConnected == false) {
    showToast("Internet not available");
    return callBack(null, "Internet not available");
  }
  let endPointURL =
    queryStrings == null
      ? endPoint
      : forId
        ? `${endPoint}/${paramToQueryString(queryStrings, forId)}`
        : `${endPoint}?${paramToQueryString(queryStrings, forId)}`;
  console.log(`URL: ${endPointURL}`);
  let headerObj = null;
  if (token !== null) {
    headerObj = {
      // Accept: 'application/json',
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'reqfrom' : string.headerConstant.ecomm,
      // 'tzofs' : string.headerConstant.tzofs_Value,
      // 'tzstr' : string.headerConstant.tzstr_Value,
      'apikey' : isIOS? string.headerConstant.apikeyAppUsr_Value_IOS : string.headerConstant.apikeyAppUsr_Value_ANDROID
    };
  } else {
    headerObj = {
      'Content-Type': 'application/json',
      // 'reqfrom' : 'usr',
      // 'tzofs' : string.headerConstant.tzofs_Value,
      // 'tzstr' : string.headerConstant.tzstr_Value,
      'reqfrom' : string.headerConstant.ecomm,
      'apikey' : isIOS ? string.headerConstant.apikeyAppUsr_Value_IOS : string.headerConstant.apikeyAppUsr_Value_ANDROID
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  let bodyObj = param == null ? '' : JSON.stringify(param);
  console.log(`bodyObj:`, bodyObj);
  // console.log(`method:`, method);
  console.log(`headerObj:`, headerObj);
  // return
  await fetch(endPointURL, {
    signal: controller.signal,
    method: method,
    headers: headerObj,
    body: bodyObj,
    redirect: 'follow',
  })
    .then(checkError)
    .then(json => {
      return returnDataResponse(json, callBack);
    })
    .catch(error => {
      // console.log(`error obj:`, error);
      return callBack(null, 'Something went wrong. Try again!!');
    });
};

export const getFilename = url => {
  return url.substr(url.lastIndexOf('/') + 1);
};
export const getContentType = url => {
 var ext =  url.substr(url.lastIndexOf('.') + 1);
 switch (ext) {
  case 'application/pdf':
    return 'application/pdf.pdf';
  case '.jpeg':
    return 'image/jpg';
  case '.jpg':
    return 'image/jpg';
  case '.png':
    return 'image/png';
  default:
    return 'image/png';
  }
};

export const getExtention = mime => {
switch (mime) {
case 'application/pdf':
  return '.pdf';
case 'image/jpeg':
  return '.jpg';
case 'image/jpg':
  return '.jpg';
case 'image/png':
  return '.png';
default:
  return '.jpg';
}
};

export const UPLOAD_FILE = async (
  method,
  endPoint,
  queryStrings,
  forId,
  formData,
  token,
  isConnected,
  callBack,
) => {
  let endPointURL =
    queryStrings == null
      ? endPoint
      : forId
        ? `${endPoint}/${paramToQueryString(queryStrings, forId)}`
        : `${endPoint}?${paramToQueryString(queryStrings, forId)}`;

  // console.log(`URL: ${endPointURL}`);
  
  let headerObj = null;
  if (token !== null) {
    headerObj = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      'authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      // 'reqfrom' : 'usr',
      // 'tzofs' : string.headerConstant.tzofs_Value,
      // 'tzstr' : string.headerConstant.tzstr_Value,
      // 'apikey' :isIOS ? string.headerConstant.apikeyAppUsr_Value_IOS : string.headerConstant.apikeyAppUsr_Value_ANDROID
    };
  } else {
    headerObj = {
      'Content-Type': 'multipart/form-data',
      // 'reqfrom' : 'usr',
      // 'tzofs' : string.headerConstant.tzofs_Value,
      // 'tzstr' : string.headerConstant.tzstr_Value,
      // 'apikey' : isIOS ? string.headerConstant.apikeyAppUsr_Value_IOS : string.headerConstant.apikeyAppUsr_Value_ANDROID
    };
  }

  await fetch(endPointURL, {
    method: method,
    headers: headerObj,
    body: formData,
  })
  .then(checkError)
    .then(json => {
      // console.log(`json obj:`, json);
      return returnDataResponse(json, callBack);
    })
    .catch(error => {
      // console.log(`error obj:`, error);
      return callBack(null, 'Something went wrong. Try again!!');
    });
};

export const UPLOAD_AUDIO = async (
  method,
  endPoint,
  queryStrings,
  forId,
  formData,
  token,
  isConnected,
  callBack,
) => {
  let endPointURL =
    queryStrings == null
      ? endPoint
      : forId
        ? `${endPoint}/${paramToQueryString(queryStrings, forId)}`
        : `${endPoint}?${paramToQueryString(queryStrings, forId)}`;

  // console.log(`URL: ${endPointURL}`);

  let headerObj = null;
  if (token !== null) {
    headerObj = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'audio/mp4',
      // 'Content-Type': 'multipart/form-data',
    };
  } else {
    headerObj = {
      'Content-Type': 'multipart/form-data',
    };
  }



  await fetch(endPointURL, {
    method: method,
    headers: headerObj,
    body: formData,
  })
    .then(checkError)
    .then(json => {
      return returnDataResponse(json, callBack);
    })
    .catch(error => {
      //console.log(`error obj:`, error);
      return callBack(null, 'Data not uploading')
    });
};

function paramToQueryString(param, forId) {
  const keyValuePairs = [];
  for (const key in param) {
    keyValuePairs.push(
      forId == true
        ? encodeURIComponent(param[key])
        : encodeURIComponent(key) + '=' + encodeURIComponent(param[key]),
    );
  }
  return keyValuePairs.join('&');
}

function checkError(response) {
  
  // console.log(`checkError > json: ${JSON.stringify(response)}`);
  if (response.status >= 200 && response.status <= 500) {
    return response.json();
  } else {
    return null;
  }
}

function checkUploadError(response) {
  // console.log('upload error', response);
  return response.json();
}



function returnDataResponse(json, callBack) {
  // console.log(`returnDataResponse > json:`, json);
  if (isValueNull(json)) {
    return callBack(null, '');
  }

  // if (json.status == true) {
  //   if (json.status == true) {
  if (json === undefined || json === null) {
    //  console.log(`returnDataResponse > status true: ${JSON.stringify(json)}`);
    // let data = json.data;

    if (json === undefined || json === null) {
      return callBack(json, 'Data not getting');
    } else {
      // console.log(`returnDataResponse > data: ${JSON.stringify(json)}`);
      return callBack(json, json.data);
    }
    // if (json.hasOwnProperty('data')) {
    //   data = json.data;
    //   console.log(`returnDataResponse > data: ${JSON.stringify(data)}`);
    // }
    // if (data === undefined || data === null) {
    //   return callBack(null, 'Data not getting');
    // } else {
    //   console.log(`returnDataResponse > data: ${JSON.stringify(data)}`);
    //   return callBack(data, null);
    // }
  } else if (
    json.code == 400 ||
    json.code == 403 ||
    json.code == 404 ||
    json.code == 409
  ) {
    // console.log(`returnDataResponse > status false: ${JSON.stringify(json)}`);
    return callBack(json, json.message);
  } else if (json.code == 500) {
    // console.log(`returnDataResponse > code 3: ${JSON.stringify(json)}`);
    return callBack(json, json.message);
  }
  else if (json.msg == "Invalid token") {
    // console.log(`returnDataResponse json expired : ${JSON.stringify(json)}`);
    // Alert.alert(
    //   json.msg,
    //   'Please login again...',
    //   [
    //     {
    //       text: 'OK', onPress: () => {
    //         console.log('OK Pressed for alert');
            
    //         removeAllPreferenceData([
    //           AppPreference.IS_LOGIN,
    //           AppPreference.NOTIFICATION_TOKEN,
    //           AppPreference.TOKEN,
    //           AppPreference.USER_DATA,
    //           AppPreference.ADD_TO_CART_LIST,
    //           AppPreference.ADD_TO_WISH_LIST,
    //         ])
    //       }          
    //     },
    //   ]
    // );
    
    return callBack(json, json.message);
  }

  else {
    // console.log(`returnDataResponse > code 4: ${JSON.stringify(json)}`);
    return callBack(json, json.message);
  }
  
}
