import AsyncStorage from "@react-native-async-storage/async-storage";

export const PREFERENCES = {
  IS_INTRO: 'IS_INTRO',
  IS_LOGGED_IN: 'IS_LOGGED_IN',
  USER_DATA: 'USER_DATA',
  TOKEN: 'TOKEN',
  IS_ADMIN: 'IS_ADMIN',
  NOTIFICATION_TOKEN: 'NOTIFICATION_TOKEN',
  LANGUAGE_CODE: 'LANGUAGE_CODE',
  THEME_CODE: 'THEME_CODE',
  ADD_TO_CART_LIST: 'ADD_TO_CART_LIST',
  ADD_TO_WISH_LIST: 'ADD_TO_WISH_LIST',
  DEFAULT_ADDRESS: 'DEFAULT_ADDRESS',
}

export const setPrefernceData = async (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    await AsyncStorage.setItem(key, serializedData);
  } catch (error) {
    console.log(`Error saving data for ${key} in setPrefernceData,`, error);
  }
}

export const getPreferenceData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return  value ? JSON.parse(value) : null;
  } catch (error) {
    console.log(`Error retrieving data for key ${key} in getPreferenceData,`, error);
    return null;
  }
}

export const setPreferenceStringData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log(`Error saving string data for key ${key} in setPreferenceStringData,`, error);
  }
}

export const getPreferenceStringData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(`Error retrieving string data for key ${key} in getPreferenceStringData:`, error);
    return null;
  }
};

export const removePreferenceData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(`Error removing data for key ${key} in removePreferenceData:`, error);
  }
}

export const removeAllPreferenceData = async (keysToKeep) => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const keysToRemove = allKeys.filter(key => keysToKeep.includes(key));

    await AsyncStorage.multiRemove(keysToRemove);
  } catch (error) {
    console.log('Error removing data from AsyncStorage in removeAllPreferenceData,', error);
  }
}