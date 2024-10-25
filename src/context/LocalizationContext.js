import React, { createContext, useEffect, useMemo, useState } from 'react';
import { ToastAndroid } from 'react-native';

import i18n from '../i18nTranslation/i18n';
import { getPreferenceStringData, PREFERENCES, setPreferenceStringData } from '../helper';


export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {

  const [locale, setLocale] = useState('th');

  const fetchSavedLanguage = async () => {
    try {
      const savedLang = await getPreferenceStringData(PREFERENCES.LANGUAGE_CODE);
      if (savedLang) {
        setLocale(savedLang)
      }
      else {
        setLocale('th')
      }
    } catch (error) {
      console.log("Error setting the language",error)
    }
  }

  const toggleLanguage = async (newLocale) => {
    try {
      if (locale !== newLocale) {
        await setPreferenceStringData(PREFERENCES.LANGUAGE_CODE, newLocale);
        setLocale(newLocale);
      }
    } catch (error) {
      console.log("Error setting the language for app. Please try again later!!")
      ToastAndroid.show('Error setting  the language for app. Please try again later!!', ToastAndroid.LONG);
    }
  }

  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
      toggleLanguage,
    }),
    [locale],
  );

  useEffect(() => {
    fetchSavedLanguage();
  },[])

  return (
    <LocalizationContext.Provider value={{...localizationContext}}>
      {children}
    </LocalizationContext.Provider>
  );
};

