import React, {createContext, useContext, useMemo, useState} from 'react';


const context = createContext();

export const MainContextProvider = props => {

  const [internetConnectivity, setInternetConnectivity] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [otp, setOtp] = useState(null)
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [bottomBarHeight, setBottomBarHeight] = useState(0);
  const [dropPoints, setDropPoints] = useState([
    '47/1021 Nimitrmai Sam War Tawantok Khlongsamwa',
    'Kubon, Bangked, Bangked',
    '3761/147-8 O-Siri Village Soi New Yoodee Chan Rd Bang Klo Bangkholeam',
    '65 Gp 10 Bangkruay-Saisoi Bang Bua Thong Bang Bua Thong',
    '98/18, Bang la Road, Patong, Phuket',
    '98/18, Bang la Road, Patong, Phuket',
  ])
  const value = useMemo(() => {
    return {
      phoneNumber: phoneNumber,
      setPhoneNumber: setPhoneNumber,
      isBottomSheetVisible: isBottomSheetVisible,
      setIsBottomSheetVisible: setIsBottomSheetVisible,
      bottomBarHeight: bottomBarHeight,
      setBottomBarHeight: setBottomBarHeight,
      dropPoints: dropPoints,
      setDropPoints: setDropPoints,
      internetConnectivity: internetConnectivity,
      setInternetConnectivity: setInternetConnectivity,
      otp: otp,
      setOtp: setOtp,
    }
  }, [
    phoneNumber, setPhoneNumber,
    isBottomSheetVisible, setIsBottomSheetVisible,
    bottomBarHeight, setBottomBarHeight,
    dropPoints, setDropPoints,
    internetConnectivity, setInternetConnectivity,
    otp, setOtp,
  ]);

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export const useMainContext = () => {
  const value = useContext(context);
  if (value === undefined)
    throw new Error('Tried to use context without a provider');
  return value;
};