import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/reducers/index';
import { MainContextProvider } from './context/MainContext';
import { LocalizationProvider } from './context';
import { MainStackNavigation } from './navigation';
import { size } from './theme';

export const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView>
          <SafeAreaView style={styles.container}>
            <MainContextProvider>
              <LocalizationProvider>
                <MainStackNavigation />
                <Toast 
                  position='bottom'
                  bottomOffset={size.moderateScale(60)}
                  keyboardOffset={size.moderateScale(20)}
                  visibilityTime={2000}
                />
              </LocalizationProvider>
            </MainContextProvider>
          </SafeAreaView>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
