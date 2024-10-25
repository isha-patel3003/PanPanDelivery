import { cloudName } from '../../screens/BaseScreen'
// import Config from 'react-native-config';

//Local Base URL
// const API_URL = 'http://192.168.1.69:3029/'
// const API_WEB_URL = 'http://192.168.1.69:7412/'

// // //Live Base URL
// // const API_URL = 'https://pan-api.adriit.in/' //OLD
const API_URL = 'https://panpanserviceexpress.com:3073/'   // NEW 28-03-2024
const API_WEB_URL = 'https://panpanworld.co.th/'  

export default {

  //Live Base URLs
  // API_URL: 'https://pan-api.adriit.in/',   // OLD
 
  API_URL: 'https://panpanserviceexpress.com:3073/',  // NEW 28-03-2024
  API_WEB_URL: 'https://panpanworld.co.th/',

  //Local Base URLs

  // API_URL:  'http://192.168.1.69:3029/',  // NEW 28-03-2024
  // API_WEB_URL: 'http://192.168.1.69:7412/',
  

  TEMP_LIVE_API_URL :'https://panpanserviceexpress.com:3073',                 //OLD
  TEMP_LIVE_WEB_URL :'https://panpanworld.co.th',             
  //OLD
  API_LOGIN: `${API_URL}api/login`,

  API_GOOGLE_LOGIN: `${API_URL}api/socialAuthGoogle`,
  API_APPLE_LOGIN: `${API_URL}api/socialAuthApple`,
  API_FACEBOOK_LOGIN: `${API_URL}api/socialAuthFacebook`,
  API_LINE_LOGIN: `${API_URL}api/socialAuthLine`,

  API_CHANGE_PASSWORD: `${API_URL}api/change_password`,
  API_SEND_OTP: `${API_URL}api/sendOtp`,
  API_LOGIN_WITH_OTP: `${API_URL}api/loginWithOTP`,
  API_VERIFY_OTP: `${API_URL}api/verifyOtp`,  
  UPDATE_PHONE_NUMBER_BY_OTP: `${API_URL}api/updatePhoneNumberByOtp`,  
  API_CHECK_PHONE_EXIST: `${API_URL}api/checkPhoneExist`, 
  API_REGISTER: `${API_URL}api/register`,
  API_RESET_PASSWORD: `${API_URL}api/reset_password_phone`,

  LOG_OUT: `${API_URL}api/logout`,
  REGISTER_TOKEN :`${API_URL}api/registerMessagingToken`,
  DELETE_ACCOUNT :`${API_URL}api/delete`,

  // {"mobile_no":"1234123411","password":"Mitesh#121"}
  
  // {
  // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODFjYjA3NjAzZjlkNDA1MDUxYzkyNyIsInB3aCI6MzE3ODM2MTc5LCJpYXQiOjE2ODYyMjc3MTksImV4cCI6MTY4NjMxNDExOX0.8r4cQ-AO0IQvDGHJJRxNt69KHTC9P6Tvj8-uSwGCApo"
  // }

  API_ME: `${API_URL}api/me`, // User Data

  API_PRODUCT_LIST_CAT: `${API_URL}api/frontend/products/dropdown_category_list`,

  API_ENGLISH_JSON: `${API_WEB_URL}locales/en/translation.json`,
  API_THAI_JSON: `${API_WEB_URL}locales/th/translation.json`,

  API_LIST_BY_CATEGORY: `${API_URL}api/frontend/products/listByCategory`,
  API_GET_CHILD_CATAGORY_FROM_PARENT: `${API_URL}api/frontend/category/list`,

  API_LIST_BY_SLUG: `${API_URL}api/frontend/products/productBySlug`,
  API_LIST_BY_SKU: `${API_URL}api/frontend/products/productBySku`,
  API_PRODUCT_LIST: `${API_URL}api/frontend/products/list`,
  API_RELEATED_PRODUCT_LIST: `${API_URL}api/frontend/products/getRelatedProduct`,

  API_REVIEWS_BY_PRODUCT: `${API_URL}api/frontend/products/getReviewsByProduct`,
  API_ADD_REVIEW_COMMENT: `${API_URL}api/frontend/products/addReviewComment`,

  API_ADD_REVIEW: `${API_URL}api/frontend/products/addReview`,
  API_VALIDATE_REFERAL_CODE: `${API_URL}api/frontend/shop/validateCustomerReferralCode`,
  API_VALIDAT_USER_REFERAL_CODE: `${API_URL}api/checkReferralCode`,

  API_GET_ALL_FILTERS: `${API_URL}api/frontend/user/order/getAllFilters`,
  API_GET_ORDER_LIST: `${API_URL}api/frontend/user/order/list`,
  API_GET_ORDER_DETAILS: `${API_URL}api/frontend/user/order/details`,
  API_ORDER_RETURN_CREATE: `${API_URL}api/frontend/user/returns/create`,
  API_ORDER_RETURN_DETAILS: `${API_URL}api/frontend/user/returns/details`,

  API_GET_SLIDER_IMAGES: `${API_URL}api/frontend/home/getSliderImgs`,

  API_UPDATE_PROFILE: `${API_URL}api/update_profile`,
  API_HOME_LIST: `${API_URL}api/frontend/home/list`,
  API_ALL_PRODUCT_LIST: `${API_URL}api/category/household/`,

  API_ADDRESS_LIST: `${API_URL}api/frontend/user/address/list`,
  API_ADDRESS_SET_AS_DEFAULT: `${API_URL}api/frontend/user/address/set_default`,
  API_ADDRESS_DELETE: `${API_URL}api/frontend/user/address/delete`,

  API_COUNTRY_LIST: `${API_URL}api/frontend/address/country_list`,
  API_STATE_LIST: `${API_URL}api/frontend/address/state_list`,
  API_DISTRICT_LIST: `${API_URL}api/frontend/address/district_list`,
  API_SUB_DISTRICT_LIST: `${API_URL}api/frontend/address/sub_district_list`,
  API_ZIP_CODE_LIST: `${API_URL}api/frontend/address/zipcode_list`,
  API_ADDRESS_EDIT: `${API_URL}api/frontend/user/address/edit`,
  API_ADDRESS_CREATE: `${API_URL}api/frontend/user/address/create`,

  API_BLOG_LIST: `${API_URL}api/frontend/blog/list`,

  API_PAN_PAN_POINTS_LIST: `${API_URL}api/frontend/user/points/list`,

  API_PRIVACY_POLICY: `${API_WEB_URL}privacy-policy/`,
  API_RETURN_POLICY: `${API_WEB_URL}return-policy/`,
  API_SHIPPING_POLICY: `${API_WEB_URL}shipping-policy/`,
  API_TERM_AND_SERVICE: `${API_WEB_URL}term-and-service/`,
  API_ABOUT: `${API_WEB_URL}about/`,
  API_HOW_TO_SHOP: `${API_WEB_URL}how-to-shop/`,
  API_HELP: `${API_WEB_URL}help/`,

  API_LIST_BY_SKU_CODE: `${API_URL}api/frontend/products/listBySkucode`,
  API_LIST_BY_SLUG_CODE: `${API_URL}api/frontend/products/listBySlug`,
  API_PRODUCT_LIST_BY_SKU_CODE: `${API_URL}api/frontend/products/productListBySku`,
  
  API_SHOP_LIST: `${API_URL}api/frontend/shop/list`,
  API_SHOP_BY_SLUG: `${API_URL}api/frontend/products/shopBySlug`,
  API_DETAIL_BY_SLUG : `${API_URL}api/frontend/staticPage/detailBySlug/`, 

  API_SUPPLIER_LIST: `${API_URL}api/frontend/supplier/list`,
  API_SUPPLIER_BY_SLUG: `${API_URL}api/frontend/products/supplierBySlug`,
  API_SUPPLIER_DETAIL_BY_SLUG : `${API_URL}api/frontend/staticPage/supplierBySlug/`, 

  API_CREATE_ORDER : `${API_URL}api/frontend/user/order/createOrder`, 
  API_CANCEL_ORDER : `${API_URL}api/frontend/user/order/cancelOrder`, 
  API_ORDER_RECEIVED : `${API_URL}api/frontend/user/order/orderReceived`, 

  API_CHECK_QR_CODES_STATUS : `${API_URL}api/frontend/guestOrder/checkQrCodeStatus`, 
  API_UPDATE_PAYMENT_FAILED_STATUS : `${API_URL}api/frontend/guestOrder/updatePaymentFailedStatus`, 
  API_CHECK_PAYMENT_STATUS : `${API_URL}api/frontend/guestOrder/checkPaymentStatus`, 

  API_SEND_INQUIRY : `${API_URL}api/frontend/home/sendInquiry`,
  API_PARTNER_REGISTRATION : `${API_URL}api/frontend/partnerRegistration/create`,
  API_VALID_COUPONS : `${API_URL}api/frontend/coupon/valid_coupons`,
  API_VALIDATE_COUPONS_CODE : `${API_URL}api/frontend/coupon/validateCouponCode`,
 
 
  API_ADD_CUSTOMER_REDEEMPTION_DASHBOARD_DATA: `${API_URL}api/frontend/user/customerReferral/getCustomerReferralRedemptionDashboardData`,
  API_ADD_CUSTOMER_REFERRAL_REDEEMPTION_REQUEST : `${API_URL}api/frontend/user/customerReferral/addCustomerReferralRedemptionRequest`,
  API_VALIDATE_CUSTOMER_REFERRAL_REDEEMPTION_REQUEST : `${API_URL}api/frontend/user/customerReferral/validateCustomerReferralRedemptionAmount`,
  API_MINIMUM_REDEEMPTION_AMOUNT : `${API_URL}api/frontend/user/customerReferral/getMinimumRedemptionAmount`
 


  // {"order_id":"6476ec51efb97d92284f7dde","lang":""}
  //https://panpanworld.co.th/privacy-policy/
  
}

// ------WebKitFormBoundaryHT2YUzK42BOdXx8m
// Content-Disposition: form-data; name="products"

// ["646612b4e09e5d7918b926d7"]
// ------WebKitFormBoundaryHT2YUzK42BOdXx8m
// Content-Disposition: form-data; name="return_reason"

// {"name":"Did nor receive the full order (all items in the order)","name_th":"ไม่ได้รับออร์เดอร์เต็มจำนวน (ทุกรายการในออร์เดอร์)"}
// ------WebKitFormBoundaryHT2YUzK42BOdXx8m
// Content-Disposition: form-data; name="order_id"

// 652fab8075ae1b4f84d11fea
// ------WebKitFormBoundaryHT2YUzK42BOdXx8m
// Content-Disposition: form-data; name="remarks"

// THIS PRODUCT IS WASTE
// ------WebKitFormBoundaryHT2YUzK42BOdXx8m
// Content-Disposition: form-data; name="lang"


// ------WebKitFormBoundaryHT2YUzK42BOdXx8m--



// http://192.168.1.69:3029/api/frontend/user/returns/create
