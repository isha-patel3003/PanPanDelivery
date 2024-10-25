import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, TouchableOpacity, Alert, Image, ToastAndroid, Text, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import * as ImagePicker from 'react-native-image-picker'

import { EmailValidation } from '../../utils';
import { LocalizationContext } from '../../context';
import { Button, CustomBottomSheet, DialogBox, Header, InputBox, Screen } from '../../components'
import { color, IcBackArrow, IcCheck, IcPerson, IcPlus, size } from '../../theme'
import * as styles from './styles'
import { addNewRiderRegister, getAddressDetailsList, getRiderType, getVehicleType } from '../../services';

export const RegisterScreen = () => {

  const navigation = useNavigation()
  const { t } = useContext(LocalizationContext);

  const riderRef = useRef();
  const vehicleRef = useRef();
  const disrtrictRef = useRef();

  const [photo, setPhoto] = useState(null);
  const [photoType, setPhotoType] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    thaiID: '',
    licenseID: '',
  })
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [formattedDate, setFormattedDate] = useState(null);
  const [selectedRiderType, setSelectedRiderType] = useState(null);
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [addressLoading, setAddressLoading] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [riderTypeList, setRiderTypeList] = useState(null);
  const [vehicleTypeList, setVehicleTypeList] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreAddressData, setHasMoreAddressData] = useState(true);

  const bottomSheetStyles = {
    wrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    draggableIcon: {
      backgroundColor: color.primary,
    }, container: {
      borderTopLeftRadius: size.moderateScale(30),
      borderTopRightRadius: size.moderateScale(30),
    }
  }

  const formFields = [
    { key: 'name', placeholder: t('register_screen.placeHolder_text_name'), keyboardType: 'default', autoCapitalize: 'words', autoComplete: 'name' },
    { key: 'email', placeholder: t('register_screen.placeHolder_text_email'), keyboardType: 'email-address', autoCapitalize: 'none', autoComplete: 'email' },
    { key: 'phone', placeholder: t('register_screen.placeHolder_text_phone'), keyboardType: 'phone-pad', maxLength: 10, autoComplete: 'tel', autoCapitalize: 'none' },
    { key: 'address', placeholder: t('register_screen.placeHolder_text_address'), keyboardType: 'default', autoCapitalize: 'words', autoComplete: 'address-line1' },
    { key: 'thaiID', placeholder: t('register_screen.placeHolder_text_thaiID'), keyboardType: 'default', autoCapitalize: 'words', maxLength: 13, },
    { key: 'licenseID', placeholder: t('register_screen.placeHolder_text_licenseID'), keyboardType: 'default', autoCapitalize: 'words', maxLength: 10, },
  ];

  const fetchRiderTypes = async () => {
    setLoading(true)
    try {
      const response = await getRiderType();
      setRiderTypeList(response);
    } catch (error) {
      console.log("error: ", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchVehicleTypes = async () => {
    setLoading(true)
    try {
      const response = await getVehicleType();
      console.log("response in fetchVehicleTypes: ",response)
      setVehicleTypeList(response);
    } catch (error) {
      console.log("error in fecth vehicle: ", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchAddressDetails = async () => {
    if (addressLoading || !hasMoreAddressData) return;

    setAddressLoading(true);

    try {
      const response = await getAddressDetailsList(currentPage, 10);
      const newResults = response.results;
      setPaginatedData((prevData) => [...prevData, ...newResults])
      if (newResults.length < 10) {
        setHasMoreAddressData(false)
      }
      setCurrentPage(prevPage => prevPage + 1);
    } catch (error) {
      console.log("Error in fectching address details", error)
    } finally {
      setAddressLoading(false)
    }
  }

  const renderItemForRiderType = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} key={item.id} style={styles.bottomSheetBtn()} onPress={() => {
        setSelectedRiderType(item);
        riderRef.current.close();
      }}>
        <Text style={styles.bottomSheetText()}>{item.text}</Text>
        <View style={styles.checkBoxView(selectedRiderType?.id === item.id)}>
          {
            selectedRiderType?.id === item.id
              ? <IcCheck
                stroke={selectedRiderType?.id === item.id ? color.white : color.primary}
                strokeWidth={size.moderateScale(3)}
                width={size.moderateScale(20)}
                height={size.moderateScale(20)}
              />
              : null
          }
        </View>
      </TouchableOpacity>
    )
  }

  const renderItemForVehicleType = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} key={item.id} style={styles.bottomSheetBtn()} onPress={() => {
        setSelectedVehicleType(item);
        vehicleRef.current.close();
      }}>
        <Text style={styles.bottomSheetText()}>{item.text}</Text>
        <View style={styles.checkBoxView(selectedVehicleType?.id === item.id)}>
          {
            selectedVehicleType?.id === item.id
              ? <IcCheck
                stroke={selectedVehicleType?.id === item.id ? color.white : color.primary}
                strokeWidth={size.moderateScale(3)}
                width={size.moderateScale(20)}
                height={size.moderateScale(20)}
              />
              : null
          }
        </View>
      </TouchableOpacity>
    )
  }

  const renderItemForAddress = ({ item }) => {
    return (
      <TouchableOpacity
        key={item._id}
        onPress={() => {
          setSelectedAddress(item);
          disrtrictRef.current.close();
          console.log("selected address:========", item)
        }}
        style={styles.addressData()}
        activeOpacity={0.7}
      >
        <Text style={styles.addressText()}>{item.text}</Text>
      </TouchableOpacity>
    )
  };

  const openImagePicker = () => {
    console.log('open picker')
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 300,
      maxWidth: 300,
    };
    ImagePicker.launchImageLibrary(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      Alert.alert(
        'Upload Image',
        'You haven\'t selected any image. You need to select your profile image to continue using this app.',

      )
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      let imageType = response.assets?.[0]?.type;
      setPhotoType(imageType);
      setPhoto(imageUri);
    }
  };

  const setInputFieldText = (field, value) => {
    setUserDetails((prev) => {
      return { ...prev, [field]: value };
    })
  }

  const validateInputFields = () => {
    const newError = {};
    const validationRules = [
      // {
      //   condition: !photo,
      //   errorKey: 'photo',
      //   errorMessage: t('register_screen.photo_error_1')
      // },
      {
        condition: photoType && !['image/jpeg', 'image/png'].includes(photoType),
        errorKey: 'photo',
        errorMessage: t('register_screen.photo_error_2')
      },
      {
        condition: !userDetails?.name,
        errorKey: 'name',
        errorMessage: t('register_screen.name_error_1')
      },
      {
        condition: userDetails?.name?.length < 3,
        errorKey: 'name',
        errorMessage: t('register_screen.name_error_2')
      },
      {
        condition: !userDetails?.email,
        errorKey: 'email',
        errorMessage: t('register_screen.email_error_1')
      },
      {
        condition: userDetails?.email && !EmailValidation(userDetails.email),
        errorKey: 'email',
        errorMessage: t('register_screen.email_error_2')
      },
      {
        condition: !userDetails?.phone,
        errorKey: 'phone',
        errorMessage: t('register_screen.phone_error_1')
      },
      {
        condition: userDetails?.phone?.length < 10,
        errorKey: 'phone',
        errorMessage: t('register_screen.phone_error_2')
      },
      {
        condition: !userDetails?.address,
        errorKey: 'address',
        errorMessage: t('register_screen.address_error_1')
      },
      {
        condition: userDetails?.address?.length < 10,
        errorKey: 'address',
        errorMessage: t('register_screen.address_error_2')
      },
      {
        condition: !selectedAddress,
        errorKey: 'district',
        errorMessage: t('register_screen.district_error_1')
      },
      {
        condition: !userDetails?.thaiID,
        errorKey: 'thaiID',
        errorMessage: t('register_screen.thaiID_error_1')
      },
      {
        condition: userDetails?.thaiID?.length < 13,
        errorKey: 'thaiID',
        errorMessage: t('register_screen.thaiID_error_2')
      },
      {
        condition: !userDetails?.licenseID,
        errorKey: 'licenseID',
        errorMessage: t('register_screen.licenseID_error_1')
      },
      {
        condition: userDetails?.licenseID?.length < 10,
        errorKey: 'licenseID',
        errorMessage: t('register_screen.licenseID_error_2')
      },
      {
        condition: !formattedDate,
        errorKey: 'licenseExpDt',
        errorMessage: t('register_screen.licenseExpDt_error_1')
      },
      {
        condition: !selectedRiderType,
        errorKey: 'riderType',
        errorMessage: t('register_screen.riderType_error_1')
      },
      {
        condition: !selectedVehicleType,
        errorKey: 'vehicleType',
        errorMessage: t('register_screen.vehicleType_error_1')
      },
    ];

    validationRules.forEach(({ condition, errorKey, errorMessage }) => {
      if (condition) {
        newError[errorKey] = errorMessage;
      }
    });

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleConfirmDate = (selectedDate) => {
    setDate(selectedDate);
    setOpenDate(false);

    const day = selectedDate.getDate().toString().padStart(2, '0');
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = selectedDate.getFullYear().toString().slice(-2);
    const hours = selectedDate.getHours().toString().padStart(2, '0');
    const minutes = selectedDate.getMinutes().toString().padStart(2, '0');
    // Format 1: YYMMDDHHMM
    const formattedDateYMD = Number(`${year}${month}${day}${hours}${minutes}`);
    // Format 2: MM/DD
    const formattedDateMMDD = `${day}/${month}/${year}`;

    const formattedDates = {
      formattedDateYMD: formattedDateYMD,
      formattedDateMMDD: formattedDateMMDD
    };

    console.log("Formatted Dates JSON:: ", formattedDates);
    setFormattedDate(formattedDates);
  };


  const registerUserWithValidDetails = () => {
    if (!validateInputFields()) {
      return;
    } else {
      setShowConfirmDialog(true);
    }
  }

  const userRegistration = async () => {
    setShowConfirmDialog(false);
    
    const userRegistrationData = {
      riderName: userDetails?.name,
      contactNo: userDetails?.phone,
      email: userDetails?.email,
      license: userDetails?.licenseID,
      licenseExpiryDate: formattedDate?.formattedDateYMD,
      address: selectedAddress?.text,
      thaiID: userDetails?.thaiID,
      country: selectedAddress?.subDistrict?.district?.state?.country?._id,
      state: selectedAddress?.subDistrict?.district?.state?._id,
      district: selectedAddress?.subDistrict?.district?._id,
      subDistrict: selectedAddress?.subDistrict?._id,
      zipCode: selectedAddress?._id,
      riderType: selectedRiderType?.id,
      vehicleType: selectedVehicleType?.id
    }

    setLoading(true);
    try {
      const response = await addNewRiderRegister(userRegistrationData);
      console.log("response:============", response)
      if (response.status === -1) {
        ToastAndroid.show(response.message, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(response.message, ToastAndroid.SHORT)
      }
    } catch (error) {
      console.log("Error in rider registration:  ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRiderTypes();
    fetchVehicleTypes()
    fetchAddressDetails()
  }, [])

  return (
    <Screen withScroll translucent={true} scrollStyle={{ flexGrow: 1 }} loading={loading} loadingBgColor={color.white}>
      <View style={styles.mainView()}>
        <Header
          title={t('register_screen.screen_title')}
          headerTitleStyle={styles.headerText()}
          headerStyle={styles.header()}
          leftIcon
          renderLeftIcon={() => (<IcBackArrow fill={color.secondary} />)}
          headerLeftIconPress={() => navigation.goBack()}
        />
        <View style={styles.formView()}>
          <View style={styles.uploadPhotoWrapper(error?.photo)}>
            <View style={styles.uploadPhotoView(photo)}>
              {
                photo
                  ? (<Image source={{ uri: photo }} style={styles.userPhoto()} />)
                  : (<IcPerson fill={color.gray} width={size.moderateScale(90)} height={size.moderateScale(90)} />)
              }
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.plusIconView()} onPress={openImagePicker}>
              <IcPlus width={size.moderateScale(15)} height={size.moderateScale(15)} />
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.photoError()}>{error?.photo}</Text> */}

          {formFields.map((field, index) => (
            <View key={field.key + index}>
              <InputBox
                key={field?.key + index}
                placeholder={field?.placeholder}
                keyboardType={field?.keyboardType}
                value={userDetails[field?.key]}
                onChangeText={(txt) => setInputFieldText(field?.key, txt)}
                autoCapitalize={field?.autoCapitalize}
                autoComplete={field?.autoComplete}
                maxLength={field?.maxLength}
                editable={field?.editable ?? true}
                onFocus={field?.onFocus}
                error={error?.[field?.key] ?? ''}
              />
              {field?.key === 'address' && (
                <TouchableOpacity
                  key={field?.key + t('register_screen.placeHolder_text_province') + index}
                  activeOpacity={1}
                  onPress={() => disrtrictRef.current.open()}
                  style={styles.datePickerView()}
                >
                  <InputBox
                    placeholder={t('register_screen.placeHolder_text_province')}
                    value={
                      selectedAddress?.text
                        ? selectedAddress?.text.length > 32
                          ? selectedAddress?.text.slice(0, 32) + '...'
                          : selectedAddress?.text
                        : ''
                    }
                    editable={false}
                    error={error?.district}
                  />
                </TouchableOpacity>
              )}
            </View>
          ))}
          <TouchableOpacity activeOpacity={1} onPress={() => setOpenDate(true)} style={styles.datePickerView()}>
            <InputBox
              placeholder={t('register_screen.placeHolder_text_licenseExpDt')}
              value={formattedDate?.formattedDateMMDD}
              onFocus={() => setOpenDate(true)}
              editable={false}
              error={error?.licenseExpDt}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => riderRef.current.open()} activeOpacity={1} style={styles.inputBoxView()}>
            <InputBox
              placeholder={t('register_screen.placeHolder_text_riderType')}
              inputBoxStyles={styles.inputBox()}
              value={selectedRiderType?.text}
              error={error?.riderType}
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => vehicleRef.current.open()} activeOpacity={1} style={styles.inputBoxView()}>
            <InputBox
              placeholder={t('register_screen.placeHolder_text_vehicleType')}
              inputBoxStyles={styles.inputBox()}
              value={selectedVehicleType?.text}
              onChangeText={(txt) => setInputFieldText('vehicleType', txt)}
              error={error?.vehicleType}
              editable={false}
            />
          </TouchableOpacity>
          <Button
            title={t('register_screen.button_title')}
            onPress={registerUserWithValidDetails}
            btnStyle={styles.buttonSubmit()}
          />
        </View>
        <DatePicker
          modal
          mode="date"
          date={date}
          open={openDate}
          onConfirm={handleConfirmDate}
          onCancel={() => setOpenDate(false)}
        />
        <CustomBottomSheet
          ref={riderRef}
          draggable={true}
          height={size.moderateScale(200)}
          customStyles={bottomSheetStyles}
          customModalProps={{
            statusBarTranslucent: true
          }}
        >
          <View style={styles.bottomSheetInput()}>
            <FlatList
              contentContainerStyle={styles.flatListContainer()}
              data={riderTypeList}
              renderItem={renderItemForRiderType}
              keyExtractor={(item) => item.id + item.text}
            />
          </View>
        </CustomBottomSheet>
        <CustomBottomSheet
          ref={vehicleRef}
          draggable={true}
          height={size.moderateScale(300)}
          customStyles={bottomSheetStyles}
          customModalProps={{
            statusBarTranslucent: true
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer()}
            data={vehicleTypeList}
            renderItem={renderItemForVehicleType}
            keyExtractor={(item) => item.id + item.text}
          />
        </CustomBottomSheet>
        <CustomBottomSheet
          ref={disrtrictRef}
          draggable={true}
          height={size.moderateScale(500)}
          customStyles={bottomSheetStyles}
          customModalProps={{
            statusBarTranslucent: true
          }}
        >
          <FlatList
            contentContainerStyle={{ flexGrow: 1, paddingBottom: size.moderateScale(70)}}
            showsVerticalScrollIndicator={false}
            data={paginatedData}
            renderItem={renderItemForAddress}
            keyExtractor={(item, index) => item._id + item.text + index}
            onEndReached={fetchAddressDetails}
            onEndReachedThreshold={0.7}
            ListFooterComponent={addressLoading ? <ActivityIndicator size='large' color={color.primary} /> : null}
          />
        </CustomBottomSheet>
        <DialogBox
          visible={showConfirmDialog}
          animationType='fade'
          onClose={() => setShowConfirmDialog(true)}
          title={t("register_screen.dialog_title")}
          message={t("register_screen.dialog_message")}
          onYesPress={userRegistration}
          onNoPress={() => setShowConfirmDialog(false)}
        />
      </View>
    </Screen >
  )
}
