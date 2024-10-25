// import { formulateSelectedLanguageFieldValue } from "../../utils/appCommonUtils";

const languageCodeEnglish = 'EN';
const languageCodeThai = 'TH';
const languageNameEnglish = 'English';
const languageNameThai = 'Thai';

export class AppLocalizationConfig {

    static LANGUAGE_CODE_ENGLISH = languageCodeEnglish;
    static LANGUAGE_CODE_THAI = languageCodeThai;
    static LANGUAGE_NAME_ENGLISH = languageNameEnglish;
    static LANGUAGE_NAME_THAI = languageNameThai;

    static DEFAULT_LANGUAGE_CODE = languageCodeEnglish;
    static DEFAULT_LANGUAGE_NAME = languageNameEnglish;

    static LOC_LANGUAGE_ARR = [
        { code: languageCodeEnglish, name: languageNameEnglish },
        { code: languageCodeThai, name: languageNameThai },
    ];

    static LOCAL_FIELD_NAME_OBJ = {
        MOD_COMPANY_NAME_FOR_FOOTER:{
            [languageCodeEnglish]: 'Pan Pan Services Express Limited',
            [languageCodeThai]: 'ปัน ปัน เซอร์วิสเซส เอ็กซ์เพรส จำกัด'
        },
        MOD_ERROR_MSG_REFFERAL:{
            [languageCodeEnglish]: 'Please Enter Correct Refferal Code',
            [languageCodeThai]: 'กรุณากรอกรหัสอ้างอิงที่ถูกต้อง'
        },
        MOD_COMPANY_ADDRESS_FOR_FOOTER:{
            [languageCodeEnglish]: '15 Chalaem Nimit 5 Alley, Lane 5, Bang Kho Laem, Bang Khlo, Bangkok 10120',
            [languageCodeThai]:  '15 แฉล้มนิมิตร 5 แยก 5 แขวงบางโคล่ เขตบางคอแหลม กรุงเทพมหานคร' 
        },
        MOD_CALL_CENTER_FOR_FOOTER:{
            [languageCodeEnglish]: 'Call Center',
            [languageCodeThai]: 'ศูนย์รับแจ้ง'
        },
        MOD_RATING :{
            [languageCodeEnglish]: 'Rating',
            [languageCodeThai]: 'เรตติ้ง'
        },
        MOD_HOME_FIELD_LABEL_POSTFIX: {
            [languageCodeEnglish]: 'Home',
            [languageCodeThai]: 'บ้าน'
        },
        MOD_OK: {
            [languageCodeEnglish]: 'OK',
            [languageCodeThai]: 'ตกลง'
        },
        MOD_RETRY: {
            [languageCodeEnglish]: 'Retry',
            [languageCodeThai]: 'ลองอีกครั้ง'
        },
        MOD_RETURN_DETAILS: {
            [languageCodeEnglish]: 'Return Details',
            [languageCodeThai]: 'รายละเอียดการส่งคืน'
        },

        MOD_SHOP_REGISTRATION_HEADER_MSG: {
            [languageCodeEnglish]: 'ใบสมัครแก้เป็น ใบลงทะเบียน Partner Shop',
            [languageCodeThai]: 'ใบสมัครแก้เป็น ใบลงทะเบียน Partner Shop'
        },
        MOD_SHOP_REGISTRATION_SUB_HEADER_MSG: {
            [languageCodeEnglish]: 'สำหรับสมัครสมาชิก Partner Shop กรุณากรอกรายละเอียดให้ครบถ้วน เอกสารทุกชนิดจะไม่ถูกเปิดเผย และจะมีการจัดเก็บข้อมูลของคุณอย่างเป็นความลับที่สุด',
            [languageCodeThai]: 'สำหรับสมัครสมาชิก Partner Shop กรุณากรอกรายละเอียดให้ครบถ้วน เอกสารทุกชนิดจะไม่ถูกเปิดเผย และจะมีการจัดเก็บข้อมูลของคุณอย่างเป็นความลับที่สุด'
        },

        MOD_SHOP_REGISTRATION_NOTES_1: {
            [languageCodeEnglish]: 'By registering for Partner Shop you acknowledge and agree to our',
            [languageCodeThai]: 'โดยการลงทะเบียนคุณรับทราบและยอมรับของเรา '
        },
        MOD_SHOP_REGISTRATION_NOTES_2: {
            [languageCodeEnglish]: 'Terms of Use policy,',
            [languageCodeThai]: 'เงื่อนไขและข้อตกลงการใช้บริการ,'
        },
        MOD_SHOP_REGISTRATION_NOTES_3: {
            [languageCodeEnglish]: 'Privacy Policy',
            [languageCodeThai]: ' นโยบายการคุ้มครองข้อมูลส่วนบุคคล'
        },
        MOD_SHOP_REGISTRATION_NOTES_AND: {
            [languageCodeEnglish]: 'and',
            [languageCodeThai]: 'และ'
        },
        MOD_SHOP_REGISTRATION_NOTES_4: {
            [languageCodeEnglish]: ' Join Us Policy.',
            [languageCodeThai]: 'นโยบายเข้าร่วมธุรกิจ.'
        },
        
        MOD_NAME_FIELD_LABEL_POSTFIX: {
            [languageCodeEnglish]: ' Name',
            [languageCodeThai]: 'ต้องระบุ'
        },
        IS_REQUIRED_ERROR_MESSAGE_POSTFIX: {
            [languageCodeEnglish]: ' is required',
            [languageCodeThai]: 'ต้องระบุ'
        },
        AREADY_EXISTS_ERROR_MESSAGE_POSTFIX: {
            [languageCodeEnglish]: ' already exists',
            [languageCodeThai]: ' มีอยู่แล้ว'
        },
        SOCIAL_SIGNUP__TITLE: {
            [languageCodeEnglish]: 'Enter mobile number',
            [languageCodeThai]: 'กรอกหมายเลขโทรศัพท์มือถือของคุณ'
        },
        SOCIAL_SIGNUP__SUBMESSAGE: {
            [languageCodeEnglish]: 'Please provide your mobile number to receive timely updates on your orders and exclusive offers. Your privacy is protected.',
            [languageCodeThai]: 'โปรดให้หมายเลขโทรศัพท์มือถือของคุณเพื่อรับข้อมูลอัปเดตเกี่ยวกับออเดอร์ของคุณและข้อเสนอพิเศษอย่างทันท่วงทีข้อมูลส่วนบุคคลของคุณจะถูกปกป้อง'
        },
        SOCIAL_OTP__TITLE: {
            [languageCodeEnglish]: 'OTP Verification',
            [languageCodeThai]: 'การตรวจสอบ OTP'
        },
        SOCIAL_OTP__SUBMESSAGE: {
            [languageCodeEnglish]: 'Please enter the OTP sent to your mobile number via SMS to confirm your number.',
            [languageCodeThai]: 'โปรดกรอก OTP ที่ส่งไปยังหมายเลขโทรศัพท์มือถือของคุณผ่าน SMS เพื่อยืนยันหมายเลขของคุณ'
        },
        AREADY_EXISTS_ERROR_MESSAGE_POSTFIX: {
            [languageCodeEnglish]: ' already exists',
            [languageCodeThai]: ' มีอยู่แล้ว'
        },
        INVALID_ERROR_MESSAGE_PREFIX: {
            [languageCodeEnglish]: 'Invalid ',
            [languageCodeThai]: 'ไม่ถูกต้อง '
        },
        CONFIRM: {
            [languageCodeEnglish]: 'Confirm',
            [languageCodeThai]: 'ยืนยัน'
        },
        CONTACT: {
            [languageCodeEnglish]: 'Contact No',
            [languageCodeThai]: 'เบอร์ติดต่อ'
        },
       MOD_PAYMENT_ERROR_MSG :{
        [languageCodeEnglish]:"Please check Payment After Sometime",
        [languageCodeThai] : "กรุณาตรวจสอบการชำระเงินภายหลัง",
       },
        MOD_STATUS_CHANGE_CONFIRMATION_MESSAGE_PREFIX: {
            [languageCodeEnglish]: 'Are you sure you want to change the Status? ',
            [languageCodeThai]: 'คุณแน่ใจหรือว่าต้องการเปลี่ยนสถานะ?' 
        },

        MOD_SELECT_ALL: {
            [languageCodeEnglish]: 'Select  All',
            [languageCodeThai]: 'เลือกทั้งหมด'
        },
        MOD_UNSELECT_ALL: {
            [languageCodeEnglish]: 'Unselect All',
            [languageCodeThai]: 'ไม่เลือกทั้งหมด'
        },
        MOD_FILTERS: {
            [languageCodeEnglish]: 'Filters',
            [languageCodeThai]: 'ตัวกรอง'
        },
        MOD_PRINT: {
            [languageCodeEnglish]: 'Print Summary',
            [languageCodeThai]: 'พิมพ์สรุป'
        },
        MOD_PRINT_SHIPPING_LABEL: {
            [languageCodeEnglish]: 'Print Shipping Label',
            [languageCodeThai]: 'พิมพ์ฉลากการจัดส่ง'
        },
        MOD_DELETE_CONFIRMATION_MESSAGE_PREFIX: {
            [languageCodeEnglish]: 'Delete ',
            [languageCodeThai]: 'ลบ '
        },
        MOD_ROLE: {
            [languageCodeEnglish]: 'Role',
            [languageCodeThai]: 'บทบาท'
        },
        MOD_CONTACT_NO: {
            [languageCodeEnglish]: 'Contact No.',
            [languageCodeThai]: 'เบอร์ติดต่อ'
        },
        MOD_GENDER: {
            [languageCodeEnglish]: 'Gender',
            [languageCodeThai]: 'เพศ'
        },
        MOD_DATE_OF_BIRTH: {
            [languageCodeEnglish]: 'Birth Date',
            [languageCodeThai]: 'ข้อมูลการเกิด'
        },
        MOD_EMAIL: {
            [languageCodeEnglish]: 'Email',
            [languageCodeThai]: 'E-mail' 
        },
        MOD_ADDRESS: {
            [languageCodeEnglish]: 'Address',
            [languageCodeThai]: 'ที่อยู่'
        },
        MOD_PINCODE: {
            [languageCodeEnglish]: 'Pin Code',
            [languageCodeThai]: 'รหัสพิน'
        },
        MOD_TITLE_NAME: {
            [languageCodeEnglish]: 'NAME',
            [languageCodeThai]: 'ชื่อ'
        },
        MOD_LAST_ACCESSED: {
            [languageCodeEnglish]: 'LAST ACCESSED',
            [languageCodeThai]: 'เข้าถึงล่าสุด' 
        },
        MOD_ADD_NEW: {
            [languageCodeEnglish]: 'Add',
            [languageCodeThai]: 'เพิ่ม'
        },
        CREATION: {
            [languageCodeEnglish]: 'Creation',
            [languageCodeThai]: 'การสร้าง'
        },
        MODIFICATION: {
            [languageCodeEnglish]: 'Modification',
            [languageCodeThai]: 'การดัดแปลง'
        },
        MOD_STATUS_ACTIVE: {
            [languageCodeEnglish]: 'Active',
            [languageCodeThai]: 'คล่องแคล่ว'
        },
        MOD_STATUS_INACTIVE: {
            [languageCodeEnglish]: 'Inactive',
            [languageCodeThai]: 'ไม่ใช้งาน'
        },
        MOD_NO: {
            [languageCodeEnglish]: 'No',
            [languageCodeThai]: 'ไม่'
        },

        MOD_LOCATION_NAME: {
            [languageCodeEnglish]: 'Location Name',
            [languageCodeThai]: 'ชื่อสถานที่'
        },
        MOD_LATITUDE: {
            [languageCodeEnglish]: 'Latitude',
            [languageCodeThai]: 'ละติจูด'
        },
        MOD_LONGITUDE: {
            [languageCodeEnglish]: 'Longitude',
            [languageCodeThai]: 'ลองจิจูด'
        },

        MOD_ADMIN_MASTER_LABEL: {
            [languageCodeEnglish]: 'Admin Master',
            [languageCodeThai]: 'แอดมินมาสเตอร์'
        },
        MOD_ITEM_MASTER_LABEL: {
            [languageCodeEnglish]: 'Item Master',
            [languageCodeThai]: 'ไอเทมมาสเตอร์'
        },
        MOD_ITEM_CONTACT_US: {
            [languageCodeEnglish]: 'Contact Us',
            [languageCodeThai]: 'ติดต่อเรา'
        },
        MOD_ITEM_JOIN_US: {
            [languageCodeEnglish]: 'Join Us',
            [languageCodeThai]: 'เข้าร่วมกับเรา'
        },
        MOD_GENERAL_MASTER_LABEL: {
            [languageCodeEnglish]: 'General Master',
            [languageCodeThai]:  'ทั่วไป' 
        },
        MOD_DELIVERY_MASTER_LABEL: {
            [languageCodeEnglish]: 'Delivery',
            [languageCodeThai]: 'จัดส่ง'
        },
        MOD_PICKUP_MASTER_LABEL: {
            [languageCodeEnglish]: 'Pickup',
            [languageCodeThai]: 'หยิบ'
        },
        MOD_CHANGE_USER_PASSWORD_LABEL: {
            [languageCodeEnglish]: 'Change User Password',
            [languageCodeThai]: 'เปลี่ยนรหัสผ่านผู้ใช้'
        },
        MOD_CURRENT_PASSWORD_LABEL: {
            [languageCodeEnglish]: 'Current Password ',
            [languageCodeThai]: 'รหัสผ่านปัจจุบัน'
        },
        MOD_NEW_PASSWORD_LABEL: {
            [languageCodeEnglish]: 'New Password ',
            [languageCodeThai]: 'รหัสผ่านใหม่'
        },
        MOD_CONFIRM_PASSWORD_LABEL: {
            [languageCodeEnglish]: 'Confirm Password ',
            [languageCodeThai]: 'ยืนยันรหัสผ่าน'
        },
        MOD_CONFIRM_PASSWORD_NOT_SAME_AS_NEW_PASSWORD_LABEL: {
            [languageCodeEnglish]: ' Confirm Password is not the same as New Password',
            [languageCodeThai]: 'ยืนยันรหัสผ่านไม่เหมือนกับรหัสผ่านใหม่'
        },
      
       REFERAL_DASHBOARD_TITLE: {
            [languageCodeEnglish]: 'Referral Dashboard',
            [languageCodeThai]: 'สรุปข้อมูลการแนะนำ'
        },

        
        BUTTON_CALCULATE_PRICE: {
            [languageCodeEnglish]: 'Calculate Price',
            [languageCodeThai]: 'คำนวณราคา'
        },
        COUPON_PRICE_LESS: {
            [languageCodeEnglish]: 'This Coupon is not Applicable, as Grand Total is less than Coupon Price',
            [languageCodeThai]:  'คูปอง เนื่องจากรวมทั้งหมดน้อยกว่าคูปอง' 
        },
        COUPON_SHIPPING_PRICE_LESS: {
            [languageCodeEnglish]: 'This Coupon is not Applicable, as Shipping Price is less than Coupon Discount',
            [languageCodeThai]: 'คูปองนี้ใช้ไม่ได้ เนื่องจากราคาจัดส่งต่ำกว่าส่วนลดคูปอง'
        },
        BUTTON_SAVE: {
            [languageCodeEnglish]: 'Save',
            [languageCodeThai]: 'บันทึก'
        },
        MOD_PROFILE_LABEL: {
            [languageCodeEnglish]: 'Profile',
            [languageCodeThai]: 'ประวัติโดยย่อ'
        },

        MOD_SUSTAINABLE_PACKAGING_LABEL: {
            [languageCodeEnglish]: 'Sustainable Packaging',
            [languageCodeThai]: 'บรรจุภัณฑ์ที่ยั่งยืน'
        },
        MOD_SUSTAINABLE_PACKAGING_TEXT: {
            [languageCodeEnglish]: 'Materials are sourced, manufactured, shipped, and recycled through the use of renewable energy.',
            [languageCodeThai]: ' '
        },
        MOD_BEST_LOCATION_LABEL: {
            [languageCodeEnglish]: 'Best Location',
            [languageCodeThai]: 'ตำแหน่งที่ดีที่สุด'
        },
        MOD_BEST_LOCATION_TEXT: {
            [languageCodeEnglish]: 'Our warehouse is located at the border between Bangkok and Nakhom Pathom, allowing you easy access to 5 zones.',
            [languageCodeThai]: ' '
        },
        MOD_DISTANCE: {
            [languageCodeEnglish]: 'Distance',
            [languageCodeThai]:'ระยะทาง'
        },
        MOD_ONE_STOP_SERVICE_LABEL: {
            [languageCodeEnglish]: 'One Stop Service',
            [languageCodeThai]: 'วันสต็อปเซอร์วิส'
        },
        MOD_ONE_STOP_SERVICE_TEXT: {
            [languageCodeEnglish]: 'We provide a one-stop service for all your e-commerce as well as retail needs.',
            [languageCodeThai]: ' '
        },
        
        MOD_CUSTOMIZED_SOLUTION_LABEL: {
            [languageCodeEnglish]: 'Customized Solutions',
            [languageCodeThai]: 'โซลูชันที่กำหนดเอง'
        },

        MOD_CUSTOMIZED_SOLUTION_TEXT: {
            [languageCodeEnglish]: 'We cater our clients with in-house solutions that work in harmony to offer the best services 24x7.',
            [languageCodeThai]: 'โซลูชั ลู น ชั ที่กำ หนด เอง เราให้บ ห้ ริก ริ ารลูก ลู ค้า ค้ ด้ว ด้ ยโซลูชั ลู น ชั ภายในที่ ทำ งานร่ว ร่ มกัน กั เพื่อ พื่ นำ เสนอบริก ริ ารที่ดีที่ ดี ที่ สุด สุ ตลอด 2ชั่ว ชั่โมง 7 วัน'
        },
        MOD_OWN_SHIPPING_SERVICE_LABEL: {
            [languageCodeEnglish]: 'Own Shipping Service',
            [languageCodeThai]: 'บริการจัดส่งเอง'
        },

        MOD_OWN_SHIPPING_SERVICE_TEXT: {
            [languageCodeEnglish]: 'Our trucks are ready to ship your products at lightning speed, effortlessly and efficiently.',
            [languageCodeThai]: 'บริก ริ ารขนส่ง ส่ สิน สิ ค้าของตัวเอง รถบรรทุก ทุ ของเรา พร้อ ร้ มที่จะจัด จั ส่ง ส่ ผลิต ลิ ภัณ ภั ฑ์ข ฑ์ องคุณ คุ ด้ว ด้ ย ความรวดเร็ว ร็ ง่า ง่ ยดาย และมีปมี ระสิท สิ ธิภ ธิ าพ'
        },
        MOD_SIMILAR_PRODUCTS_TEXT: {
            [languageCodeEnglish]: 'Similar Products',
            [languageCodeThai]: 'สินค้าที่คล้ายกัน'
        },
        
        MOD_OFFICE_SPACE_LABEL: {
            [languageCodeEnglish]: 'Office Space',
            [languageCodeThai]: 'พื้นที่สำนักงาน'
        },

        MOD_FIELD_SKIP: {
            [languageCodeEnglish]: 'Skip',
            [languageCodeThai]: 'ข้าม'
        },
        MOD_OFFICE_SPACE_TEXT: {
            [languageCodeEnglish]: 'Rent and get office space for everyday operations free of cost.',
            [languageCodeThai]: 'พื้น พื้ ที่สำ นัก นั งาน สำ หรับ รั ลูก ลู ค้า ค้ ที่มาเช่า ช่ โกดัง ดั จะได้ บริก ริ ารพื้น พื้ ที่ สำ นัก นั งานสำ หรับ รั การ ดำ เนิน นิ งานฟร'
        },
        MOD_PICKUP_NO_SHIPPING_CHARGE_MSG: {
            [languageCodeEnglish]: 'This coupon can not be applied in pickup',
            [languageCodeThai]: 'คูปองนี้ไม่สามารถใช้รับสินค้าได้'
        },
        MOD_ORDER_SUCCESS_MSG: {
            [languageCodeEnglish]: 'The order is placed successfully, We’ve notified the seller. Kindly wait for your shipment.',
            [languageCodeThai]:  'สั่งซื้อเรียบร้อยแล้ว เราได้แจ้งให้ผู้ขายทราบแล้ว กรุณารอการจัดส่งของคุณ' 
        },

        MOD_PAYMENT_SUCCESSFUL: {
            [languageCodeEnglish]: 'Payment Successfull',
            [languageCodeThai]: 'ชำระเงินสำเร็จ'
        },
        MOD_ORDER_FAILED_PAYMENT_CHANGE_MSG: {
            [languageCodeEnglish]: 'Sorry, it seems payment has failed, Please try placing your order via an alternate payment method or try again after sometime.',
            [languageCodeThai]: 'ขออภัย ดูเหมือนว่าการชำระเงินล้มเหลว โปรดลองสั่งซื้อด้วยวิธีการชำระเงินอื่นหรือลองอีกครั้งในภายหลัง้ค่ะ'
        },

        MOD_SIGNOUT_LABEL: {
            [languageCodeEnglish]: 'Sign out',
            [languageCodeThai]: 'ออกจากระบบ'
        },
        MOD_SIGNED_IN_AS_LABEL: {
            [languageCodeEnglish]: 'Signed in as',
            [languageCodeThai]: 'ระบบ' 
        },
        MOD_STREET_NAME_LABEL: {
            [languageCodeEnglish]: 'Street Name',
            [languageCodeThai]: 'ชื่อถนน'
        },
        MOD_BUILDING_LABEL: {
            [languageCodeEnglish]: 'Building',
            [languageCodeThai]: 'อาคาร'
        },
        MOD_HOUSE_NO_LABEL: {
            [languageCodeEnglish]: 'House No',
            [languageCodeThai]: 'บ้านเลขที่'
        },
        MOD_FROM_LABEL: {
            [languageCodeEnglish]: 'From',
            [languageCodeThai]: 'จาก'
        },
        MOD_TO_LABEL: {
            [languageCodeEnglish]: 'To',
            [languageCodeThai]: 'ถึง'
        },
        MOD_STREET_NAME_BUILDING_HOUSE_NO_LABEL: {
            [languageCodeEnglish]: 'Street Name, Building, House No',
            [languageCodeThai]: 'ชื่อถนน, อาคาร, บ้านเลขที่'
        },


        MOD_ITEM_TYPE: {
            MOD_SHIPPED_ITEMS: {
                [languageCodeEnglish]: 'SHIPPED ITEMS',
                [languageCodeThai]: 'สินค้าที่จัดส่ง'
            },
            MOD_SHIPPED_ITEM: {
                [languageCodeEnglish]: 'Shipped Item',
                [languageCodeThai]: 'รายการที่จัดส่ง'
            },
            MOD_FIELD_ITEM_TYPE_LABEL: {
                [languageCodeEnglish]: 'Item Type',
                [languageCodeThai]: 'ประเภทรายการ' 
            },
            MOD_FIELD_SKUCODE_LABEL: {
                [languageCodeEnglish]: 'SKU Code',
                [languageCodeThai]: 'รหัส SKU'
            },
            MOD_FIELD_BRAND_LABEL: {
                [languageCodeEnglish]: 'Brand',
                [languageCodeThai]: 'ยี่ห้อ'
            },
            MOD_FIELD_CATEGORY_LABEL: {
                [languageCodeEnglish]: 'Category',
                [languageCodeThai]: 'หมวดหมู่'
            },
          
        },
        MOD_COUNTRY: {
            MOD_FIELD_COUNTRY_LABEL: {
                [languageCodeEnglish]: 'Country',
                [languageCodeThai]: 'ประเทศ'
            },
            MOD_DIALING_CODE_FIELD_LABEL: {
                [languageCodeEnglish]: ' Dialing Code',
                [languageCodeThai]: 'รหัสโทรศัพท์'
            },
        },
        MOD_REGISTER: {
            CAPITAL: {
                [languageCodeEnglish]: 'REGISTER',
                [languageCodeThai]: 'ลงทะเบียน'
            },
            SMALL: {
                [languageCodeEnglish]: 'Register',
                [languageCodeThai]: 'ลงทะเบียน'
            }
        },
        MOD_STATE: {
            MOD_FIELD_STATE_LABEL: {
                [languageCodeEnglish]: 'State',
                [languageCodeThai]: 'สถานะ'
            }
        },
        MOD_DISTRICT: {
            MOD_FIELD_DISTRICT_LABEL: {
                [languageCodeEnglish]: 'District',
                [languageCodeThai]:  'เขต' 

            }
        },
        MOD_POSTAL_CODE: {
            MOD_FIELD_POSTAL_CODE_LABEL: {
                [languageCodeEnglish]: 'Postal Code',
                [languageCodeThai]: 'รหัสไปรษณีย์'
            }
        },
        MOD_STATE_DISTRICT_SUBDISTRICT_POSTAL_CODE: {
            [languageCodeEnglish]: 'State, District, Sub District, Postal Code',
            [languageCodeThai]: 'สถานะ, เขต, รหัสไปรษณีย์, รหัสไปรษณีย์'
        },
        MOD_DOCUMENT_TYPE: {
            MOD_FIELD_DOCUMENT_TYPE_LABEL: {
                [languageCodeEnglish]: 'Document Type',
                [languageCodeThai]: 'ประเภทเอกสาร'
            }
        },
        MOD_SUB_DISTRICT: {
            MOD_FIELD_SUB_DISTRICT_LABEL: {
                [languageCodeEnglish]: 'Sub District',
                [languageCodeThai]: 'ตำบล'
            }
        },
        MOD_VEHICLE_TYPE: {
            MOD_FIELD_VEHICLE_TYPE_LABEL: {
                [languageCodeEnglish]: 'Vehicle Type',
                [languageCodeThai]: 'ประเภทยานพาหนะ'
            },
            MOD_FIELD_VEHICLE_NUMBER_LABEL: {
                [languageCodeEnglish]: 'Vehicle Number',
                [languageCodeThai]: 'หมายเลขยานพาหนะ'
            },
            MOD_FIELD_VEHICLE_MODEL_LABEL: {
                [languageCodeEnglish]: 'Model',
                [languageCodeThai]: 'แบบอย่าง'
            },
            MOD_FIELD_VEHICLE_WIDTH_LABEL: {
                [languageCodeEnglish]: 'Width',
                [languageCodeThai]: 'ความกว้าง'
            },
            MOD_FIELD_VEHICLE_HEIGHT_LABEL: {
                [languageCodeEnglish]: 'Height',
                [languageCodeThai]: 'ความสูง'
            },
            MOD_FIELD_VEHICLE_WEIGHT_LABEL: {
                [languageCodeEnglish]: 'Weight',
                [languageCodeThai]: 'นหนัก' 
            },
            MOD_FIELD_VEHICLE_LENGTH_LABEL: {
                [languageCodeEnglish]: 'Length',
                [languageCodeThai]: 'ความยาว'
            },
            MOD_FIELD_VEHICLE_DRIVER_LABEL: {
                [languageCodeEnglish]: 'Driver',
                [languageCodeThai]: 'คนขับ'
            },

            MOD_FIELD_VEHICLE_LABEL: {
                [languageCodeEnglish]: 'Vehicle',
                [languageCodeThai]: 'ยานพาหนะ'
            },
        },
        MOD_TRACKING_ID_LABEL: {
            [languageCodeEnglish]: 'Tracking Id',
            [languageCodeThai]: 'รหัสการติดตาม'
        },
        MOD_LIST_CODE_LABEL: {
            [languageCodeEnglish]: 'List Code',
            [languageCodeThai]: 'รหัสรายการ'
        },
        MOD_USER_PROFILE: {
            [languageCodeEnglish]: 'User Profile',
            [languageCodeThai]:  'ผู้ใช้' 
        },
        MOD_USER_NAME: {
            [languageCodeEnglish]: 'User Name',
            [languageCodeThai]: 'ชื่อผู้ใช้'
        },
        MOD_CHANGE_PASSWORD: {
            [languageCodeEnglish]: 'Change Password',
            [languageCodeThai]: 'เปลี่ยนรหัสผ่าน'
        },
        MOD_CHANGE_LANGUAGE: {
            [languageCodeEnglish]: 'Change Default Language',
            [languageCodeThai]: 'เปลี่ยนภาษาเริ่มต้น'
        },
        MOD_USER_FULL_NAME: {
            [languageCodeEnglish]: 'User Full Name',
            [languageCodeThai]: 'ชื่อผู้ใช้'
        },

        MOD_ATTACHMENT_FILE_TYPEMSG_LABEL: {
            [languageCodeEnglish]: 'Selected file is not valid (Only images files allowed)',
            [languageCodeThai]:  'ไฟล์ที่เลือกไม่ถูกต้อง (อนุญาตเฉพาะไฟล์รูปภาพ)' 
        },

        MOD_MAX_ATTACHMENT_FILE_SIZE_MSG_LABEL: {
            [languageCodeEnglish]: 'Selected file is bigger than ',
            [languageCodeThai]: 'ไฟล์ที่เลือกมีขนาดใหญ่กว่า '
        },
        MOD_POST_FIX_MBS_MSG_LABEL: {
            [languageCodeEnglish]: ' MB(s)',
            [languageCodeThai]: 'MB(s) '
        },
        MOD_ATTACHMENT_FILE_COUNT_MSG_LABEL: {
            [languageCodeEnglish]: 'You can only upload ',
            [languageCodeThai]: 'คุณสามารถอัปโหลดได้เท่านั้น '
        },
        MOD_POST_FIX_FILES_MSG_LABEL: {
            [languageCodeEnglish]: '  file(s)',
            [languageCodeThai]: 'ไฟล์'
        },
MOD_SOLD :{
    [languageCodeEnglish]: 'Sold',
    [languageCodeThai]: 'ขายแล้ว'
},
        MOD_FIELD_SELECT_PHOTO_LABEL: {
            [languageCodeEnglish]: 'Select photo',
            [languageCodeThai]: 'เลือกรูปภาพ'
        },
        MOD_FIELD_LICENSE_NUMBER_LABEL: {
            [languageCodeEnglish]: 'License Number',
            [languageCodeThai]: 'ใบอนุญาตเลขที่'
        },
        MOD_FIELD_LICENSE_VALID_TILL_DATE_LABEL: {
            [languageCodeEnglish]: 'License Valid Till Date',
            [languageCodeThai]: 'ใบอนุญาตที่ถูกต้องจนถึงวันที่'
        },
        MOD_ATTACHMENTS_LABEL: {
            [languageCodeEnglish]: 'Attachment(s)',
            [languageCodeThai]: 'เอกสารแนบ'
        },
        MOD_NO_ATTACHMENTS_ADDED_LABEL: {
            [languageCodeEnglish]: 'No attachment(s) added',
            [languageCodeThai]: 'ไม่มีไฟล์แนบเพิ่ม'
        },
        MOD_DASHBOARD_LABEL: {
            [languageCodeEnglish]: 'Dashboard',
            [languageCodeThai]: 'แผงควบคุม'
        },

        MOD_SYSTEM_MASTER_LABEL: {
            [languageCodeEnglish]: 'System Master',
            [languageCodeThai]: 'ระบบมาสเตอร์'
        },
        MOD_ESTIMATE_SHIPPING_COST_LABEL: {
            [languageCodeEnglish]: 'Estimate Shipping Cost',
            [languageCodeThai]: 'ประมาณการค่าจัดส่ง'
        },
        MOD_PAYMENT_STATUS_LABEL: {
            [languageCodeEnglish]: 'Payment Status',
            [languageCodeThai]: 'สถานะการชําระเงิน'
        },
        
        MOD_PAYMENT_PENDING_SHIPPING_FEE_LABEL: {
            [languageCodeEnglish]: 'Pending Shipping Fee',
            [languageCodeThai]: 'ค่าจัดส่งที่รอดําเนินการ'
        },
        MOD_PAYMENT_PAID_SHIPPING_FEE_LABEL: {
            [languageCodeEnglish]: 'Paid Shipping Fee',
            [languageCodeThai]: 'ที่ชําระแล้ว' 
        },
        MOD_PAYMENT_TOTAL_SHIPPING_FEE_LABEL: {
            [languageCodeEnglish]: 'Total Shipping Fee',
            [languageCodeThai]:  'ทั้งหมด' 
        },
        CHANGE_FACILITY: {
            [languageCodeEnglish]: 'CHANGE DEFAULT FACILITY',
            [languageCodeThai]: 'Standard Firmenstandort ändern'
        },

        LOGIN: {
            [languageCodeEnglish]: 'Login',
            [languageCodeThai]: 'เข้าสู่ระบบ'
        },
        LOGIN_WITH_PHONE_NUMBER: {
            [languageCodeEnglish]: 'Sign in with Phone Number',
            [languageCodeThai]: 'เข้าสู่ระบบด้วยหมายเลขโทรศัพท์'
        },
        LOGOUT: {
            [languageCodeEnglish]: 'Logout',
            [languageCodeThai]: 'ออกจากระบบ'
        },
        MOD_POINTS: {
            [languageCodeEnglish]: 'Points Awarded',
            [languageCodeThai]: 'คะแนนที่ได้รับ'
        },
        MOD_POINTS_SUB_MSG_1: {
            [languageCodeEnglish]: 'Congratulations, you have awarded',
            [languageCodeThai]: 'ยินดีด้วย คุณได้รับรางวัลแล้ว'
        },
        MOD_POINTS_SUB_MSG_2: {
            [languageCodeEnglish]: 'points',
            [languageCodeThai]: 'คะแนน'
        },
        LOGOUT_SUB_MSG: {
            [languageCodeEnglish]: 'Do you want to Logout ?',
            [languageCodeThai]: 'คุณต้องการออกจากระบบหรือไม่?'
        },

       SUPPLIER_ADDRESS: {
            [languageCodeEnglish]: 'Supplier Address',
            [languageCodeThai]: 'ที่อยู่ของซัพพลายเออร์'
        },
        USER_LIST: {
            [languageCodeEnglish]: 'USER LIST',
            [languageCodeThai]: 'Benutzer Liste'
        },
        COMPANY_USERS: {
            [languageCodeEnglish]: 'Company Users',
            [languageCodeThai]: 'Firmen Benutzer'
        },
        COMPANY_USER_LIST: {
            [languageCodeEnglish]: 'Company User List',
            [languageCodeThai]: 'Firmen Benutzer Liste'
        },
        ADD_USER: {
            [languageCodeEnglish]: 'Add User',
            [languageCodeThai]: 'Benutzer hinzufügen'
        },
        SEARCH: {
            [languageCodeEnglish]: 'Search',
            [languageCodeThai]: 'Suche'
        },
        NAME: {
            [languageCodeEnglish]: 'NAME',
            [languageCodeThai]: 'Name'
        },
        ACCOUNT_INFORMATION: {
            [languageCodeEnglish]: 'Account Information',
            [languageCodeThai]: 'ข้อมูลบัญชี'
        },

    
        REDEEMPTION_IN_PROGRESS: {
            [languageCodeEnglish]: 'Redemption in Progress',
            [languageCodeThai]: 'อยู่ระหว่างดำเนินการไถ่ถอน'
        },
        ENTER_YOUR_DETAILS: {
            [languageCodeEnglish]: 'Enter your details',
            [languageCodeThai]: 'ป้อนรายละเอียดของคุณ'
        },
        NO_REDEEMPTION_BETWEEN_THIS_DAYS: {
            [languageCodeEnglish]: 'No Entries Found',
            [languageCodeThai]: 'ไม่พบรายการ'
        },
        // EMAIL: {
        //     [languageCodeEnglish]: 'EMAIL',
        //     [languageCodeThai]: 'Email'
        // }, 
        // CONTACT_NO: {
        //     [languageCodeEnglish]: 'CONTACT NO.',
        //     [languageCodeThai]: 'Kontakt Nummer'
        // },
        // ROLE: {
        //     [languageCodeEnglish]: 'ROLE',
        //     [languageCodeThai]: 'Position'
        // }, 
        SHOP_REGISTRATION: {
            [languageCodeEnglish]: 'Shop registration',
            [languageCodeThai]: 'ลงทะเบียนร้านค้า'
        },
        REGISTRAION_FOR: {
            [languageCodeEnglish]: 'Registration For',
            [languageCodeThai]: 'การลงทะเบียนสำหรับ'
        },

        NAME_IN_ENGLISH: {
            [languageCodeEnglish]: 'Name in English',
            [languageCodeThai]: 'ชื่อเป็นภาษาอังกฤษ'
        },

        NAME_IN_THAI: {
            [languageCodeEnglish]: 'Name in Thai',
            [languageCodeThai]: 'ชื่อภาษาไทย'
        },
        BUSINESS_ID: {
            [languageCodeEnglish]: 'Business ID',
            [languageCodeThai]:  'เลขทะเบียนพาณิชย์/เลขประจำตัวผู้เสียภาษี'
        },

        THAI_ID: {
            [languageCodeEnglish]: 'Thai ID',
            [languageCodeThai]: 'บัตรประจำตัวประชาชนไทย'
        },

        REFERRAL_CODE: {
            [languageCodeEnglish]: 'Referral Code',
            [languageCodeThai]: 'รหัสผู้แนะนแนะนำเพื่อน'
        },


        ALL_CATEGORIES: {
            [languageCodeEnglish]: 'All Categories',
            [languageCodeThai]: 'หมวดหมู่ทั้งหมด'
        },
       COMMING_SOON: {
            [languageCodeEnglish]: 'Coming soon',
            [languageCodeThai]: 'เร็วๆ นี้'
        },


        BRAND: {
            [languageCodeEnglish]: 'Brand',
            [languageCodeThai]: 'ยี่ห้อ'
        },

        MOD_LOGIN_FAILED: {
            [languageCodeEnglish]: 'Login Failed',
            [languageCodeThai]: 'การเข้าสู่ระบบล้มเหลว'
        },

        CART: {
            [languageCodeEnglish]: 'Cart',
            [languageCodeThai]: 'รถเข็น'
        },
        RECOMMENDED_PRODUCTS: {
            [languageCodeEnglish]: 'Recommended Products',
            [languageCodeThai]: 'สินค้าที่แนะนำ'
        },
        ALL_PRODUCTS: {
            [languageCodeEnglish]: 'Recent Purchase',
            [languageCodeThai]: 'สินค้าที่ซื้อล่าสุด'
        },
        QUALITY_FINDS_NEAR_ME: {
            [languageCodeEnglish]: 'Quality finds near you',
            [languageCodeThai]: 'คุณภาพหาได้ใกล้บ้านคุณ'
        },
        SHOP_NOW: {
            [languageCodeEnglish]: 'Shop Now',
            [languageCodeThai]: 'ช็อปเลย'
        },
        SHOPS: {
            [languageCodeEnglish]: 'Shops',
            [languageCodeThai]: 'ร้านค้า'
        },

        LAST_ACCESSED: {
            [languageCodeEnglish]: 'LAST ACCESSED',
            [languageCodeThai]: 'Letzte Anmeldung'
        },
        STATUS: {
            [languageCodeEnglish]: 'Status',
            [languageCodeThai]: 'สถานะ'
        },
        VIEW: {
            [languageCodeEnglish]: 'View',
            [languageCodeThai]: 'Ansehen'
        },
        VIEW_ALL: {
            [languageCodeEnglish]: 'View All',
            [languageCodeThai]: 'ดูทั้งหมด'
        },
        EDIT: {
            [languageCodeEnglish]: 'Edit',
            [languageCodeThai]: 'Ändern'
        },
        EDIT_PROFILE: {
            [languageCodeEnglish]: 'Edit Profile',
            [languageCodeThai]: 'แก้ไขโปรไฟล์'
        },
        SEND_CREDENTIAL: {
            [languageCodeEnglish]: 'Send Credential',
            [languageCodeThai]: 'Initialen Senden'
        },
        INACTIVE: {
            [languageCodeEnglish]: 'Inactive',
            [languageCodeThai]: 'Inaktiv'
        },
        DELETE: {
            [languageCodeEnglish]: 'Delete',
            [languageCodeThai]: 'Löschen'
        },
        EDI_COMPANY_USER: {
            [languageCodeEnglish]: 'Edi Company User',
            [languageCodeThai]: 'Ändern Firmen Benutzer'
        },
        SELECT_PHOTO: {
            [languageCodeEnglish]: 'Select photo',
            [languageCodeThai]: 'Photo Auswählen'
        },
        DOWNLOAD_TEMPLATE: {
            [languageCodeEnglish]: 'Download Template',
            [languageCodeThai]: 'ดาวน์โหลดเทมเพลต'
        },
        PERFORM_IMPORT: {
            [languageCodeEnglish]: 'Perform Import',
            [languageCodeThai]: 'ดำเนินการนำเข้า'
        },
        PICK_A_FILE: {
            [languageCodeEnglish]: 'Pick a file',
            [languageCodeThai]: 'เลือกไฟล์'
        },

        THERE_ARE_NO_RECORDS_TO_DISPLAY: {
            [languageCodeEnglish]: 'There are no records to display',
            [languageCodeThai]: 'ไม่มีที่จะแสดง' 
        },
        NO_SHIPMENTS_ADDED_YET: {
            [languageCodeEnglish]: 'No shipments added yet.',
            [languageCodeThai]: 'ยังไม่มีการเพิ่มการจัดส่ง.'
        },
        ARE_YOU_SURE_WANT_TO_CHANGE_THE_STATUS: {
            [languageCodeEnglish]: 'Are you sure you want to change the Status?',
            [languageCodeThai]: 'Sind Sie sich sicher, dass Sie den Status ändern möchten?'
        },
        ARE_YOU_SURE_WANT_TO_RESET_AND_SEND_CREDENTIALS: {
            [languageCodeEnglish]: 'Are you sure you want to reset and send credentials ?',
            [languageCodeThai]: 'Sind Sie sich sicher, dass Sie die Initialen zurücksetzen und erneut senden möchten?'
        },
        THIS_COMPANY_USER_IS_ASSOCIATED_WITH_USER: {
            [languageCodeEnglish]: 'This company user is associated with User(s)',
            [languageCodeThai]: 'Dieser Firmen Benutzer ist verlinkt mit dem Benutzer'
        },
        NAME_IS_REQUIRED: {
            [languageCodeEnglish]: 'Name is required',
            [languageCodeThai]: 'Name erforderlich'
        },
        EMAIL_IS_REQUIRED: {
            [languageCodeEnglish]: 'Email is required',
            [languageCodeThai]: 'Email erforderlich'
        }, 

        EMAIL_OR_MOBILE_NO_TITLE: {
            [languageCodeEnglish]: 'Enter Your Mobile Number or Email',
            [languageCodeThai]: 'ป้อนหมายเลขโทรศัพท์มือถือหรืออีเมลของคุณ'
        }, 
        
        EMAIL_TITLE: {
            [languageCodeEnglish]: 'Enter Your Email',
            [languageCodeThai]: 'กรอกอีเมล์ของคุณ'
        }, 
          MSG_OUT_OF_STOCK: {
            [languageCodeEnglish]: 'This product is out of stock',
            [languageCodeThai]:  'สินค้า' 
        },
        
        GENDER_IS_REQUIRED: {
            [languageCodeEnglish]: 'Gender is required',
            [languageCodeThai]: 'Geschlecht erforderlich'
        },
        ROLE_IS_REQUIRED: {
            [languageCodeEnglish]: 'Role is required',
            [languageCodeThai]: 'Position erforderlich'
        },
        INVALID_EMAIL: {
            [languageCodeEnglish]: 'Invalid Email',
            [languageCodeThai]: 'ungültige Email'
        },
        INVALID_AMOUNT: {
            [languageCodeEnglish]: 'Invalid Amount',
            [languageCodeThai]: 'จำนวนเงินไม่ถูกต้อง'
        },
        QUALITY_CONTROL: {
            [languageCodeEnglish]: 'QUALITY CONTROL',
            [languageCodeThai]: 'QUALITÄTSKONTROLLE'
        },
        INCOMING_GOODS: {
            [languageCodeEnglish]: 'INCOMING GOODS',
            [languageCodeThai]: 'WAHRENEINGANGS KONTROLLE'
        },
        GOODS_RECEIPT_DATE: {
            [languageCodeEnglish]: 'Goods Receipt Date',
            [languageCodeThai]: 'Wareneingangsdatum'
        },
        PRODUCTION_FACILITY: {
            [languageCodeEnglish]: 'Production Facility',
            [languageCodeThai]: 'Produktionsstandort'
        },
        MATERIAL: {
            [languageCodeEnglish]: 'Material',
            [languageCodeThai]: 'Material'
        },
            SUPPLIER: {
            [languageCodeEnglish]: 'Supplier',
            [languageCodeThai]: 'ผู้ค้าส่ง'
        },
        SUPPLIER_FACTORY: {
            [languageCodeEnglish]: 'Supplier Factory',
            [languageCodeThai]: 'Lieferanten Werk'
        },
        NOTES: {
            [languageCodeEnglish]: 'Notes',
            [languageCodeThai]: 'Hinweis'
        },
        BASE_MATERIAL_TYPE: {
            [languageCodeEnglish]: 'Base Material Type',
            [languageCodeThai]: 'Basismaterial'
        },
        MINIMUM_REDEEM_AMOUNT_TEXT: {
            [languageCodeEnglish]: 'Min Redemption Amount',
            [languageCodeThai]: 'จำนวนถอนเงินขั้นต่ำ'
        },
        
        REDEEM_TEXT: {
            [languageCodeEnglish]: 'Redeem',
            [languageCodeThai]: 'ถอนเงิน'
        },
        REDEEM_AMOUNT_TEXT: {
            [languageCodeEnglish]: 'Redeem Amount',
            [languageCodeThai]: 'แลกจำนวนเงิน'
        },
        PRODUCT_FAMILY: {
            [languageCodeEnglish]: 'Product Family',
            [languageCodeThai]: 'Produktfamilie'
        },
        DESSICANT_MATERIAL: {
            [languageCodeEnglish]: 'Desiccant Material',
            [languageCodeThai]: 'Trockenmittel'
        },
        IGU_MATERIAL: {
            [languageCodeEnglish]: 'IGU Material',
            [languageCodeThai]: 'Trockenmittel'
        },
        ADD_BATCH: {
            [languageCodeEnglish]: 'Add Batch',
            [languageCodeThai]: 'Charge hinzufügen'
        },
        QR_CODE_10_MIN_WARNING_MSG: {
            [languageCodeEnglish]: 'Please do not close this page or click back. Because the system will automatically close within 10 minute after payment has been made. and the system will confirm payment.',
            [languageCodeThai]: 'กรุณาอย่าปิดหน้านี้หรือคลิกกลับ เพราะระบบจะปิดอัตโนมัติภายใน 10 นาที หลังจากชำระเงินแล้ว และระบบจะยืนยันการชำระเงิน'
        },


        TEST_REFERENCE: {
            [languageCodeEnglish]: 'Test Reference',
            [languageCodeThai]: 'Testreferenz'
        },
        ENTER_REFERAL_CODE: {
            [languageCodeEnglish]: 'Enter Referral Code',
            [languageCodeThai]: 'ป้อนรหัสอ้างอิง'
        },
        REF_NO: {
            [languageCodeEnglish]: 'Ref. No',
            [languageCodeThai]: 'Referenz Nummer'
        },
        CHECK_DESCRIPTION: {
            [languageCodeEnglish]: 'Check Description',
            [languageCodeThai]: 'Gegenstand der Prüfung'
        },
        DESCRIPTION: {
            [languageCodeEnglish]: 'Description',
            [languageCodeThai]: 'คำอธิบาย'
        },
        RECOMMENDED_METHOD: {
            [languageCodeEnglish]: 'Recommended Method',
            [languageCodeThai]: 'Prüfverfahren'
        },
        REQUIREMENT: {
            [languageCodeEnglish]: 'Requirement',
            [languageCodeThai]: 'Anforderung'
        },
        RECOMMENDED_FREQUENCY: {
            [languageCodeEnglish]: 'Recommended Frequency',
            [languageCodeThai]: 'Empfohlene Häufigkeit'
        },
        THICKNESS: {
            [languageCodeEnglish]: 'Thickness',
            [languageCodeThai]: 'Dicke'
        },
        HEIGHT: {
            [languageCodeEnglish]: 'Height',
            [languageCodeThai]: 'Höhe'
        },
        NUMBER: {
            [languageCodeEnglish]: 'Number',
            [languageCodeThai]: 'Nummer'
        },
        NUMBER_GREATER_THAN: {
            [languageCodeEnglish]: 'Number greater than',
            [languageCodeThai]: 'Nummer größer als'
        },
        NUMBER_LESS_THAN: {
            [languageCodeEnglish]: 'Number less than',
            [languageCodeThai]: 'Nummer kleiner als'
        },
        NUMBER_RANGE: {
            [languageCodeEnglish]: 'Number range',
            [languageCodeThai]: 'Nummer Breich'
        },
        TEXT: {
            [languageCodeEnglish]: 'Text',
            [languageCodeThai]: 'Text'
        },
        TEXT_AREA: {
            [languageCodeEnglish]: 'Text Area',
            [languageCodeThai]: 'Text Feld'
        },
        HIGHT_OF_THE_GLASS: {
            [languageCodeEnglish]: 'Hight of the glass',
            [languageCodeThai]: 'Höhe des Glas'
        },
        ITEMS_PER_PAGE: {
            [languageCodeEnglish]: 'Items per page',
            [languageCodeThai]: 'Positioneen je Seite'
        },

        MOD_SUPER_USER_SEND_CREDENTIALS_CONFIRMATION_MESSAGE: {
            [languageCodeEnglish]: 'Are you sure you want to reset and send credentials?',
            [languageCodeThai]: 'คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตและส่งข้อมูลรับรอง?'
        },

        MOD_ZIP_CODE: {
            [languageCodeEnglish]: 'Zip Code',
            [languageCodeThai]: 'รหัสไปรษณีย์'
        },
        MOD_ID_PROOF_TYPE: {
            [languageCodeEnglish]: 'ID Proof Type',
            [languageCodeThai]: 'ประเภทหลักฐาน ID'
        },
        MOD_ID_PROOF_NUMBER: {
            [languageCodeEnglish]: 'ID Proof Number',
            [languageCodeThai]: 'หมายเลขหลักฐาน ID'
        },

        MOD_FIELD_SHIPMENT_DETAIL_LABEL: {
            [languageCodeEnglish]: 'Shipment Details',
            [languageCodeThai]: 'รายละเอียดการจัดส่ง'
        },
        MOD_FIELD_SHIPMENT_LABEL: {
            [languageCodeEnglish]: 'Shipment',
            [languageCodeThai]: 'จัด ส่ง'
        },
        MOD_FIELD_ORIGIN_LABEL: {
            [languageCodeEnglish]: 'Origin',
            [languageCodeThai]: 'ต้นทาง'
        },
        MOD_FIELD_DESTINATION_LABEL: {
            [languageCodeEnglish]: 'Destination',
            [languageCodeThai]: 'ปลายทาง'
        },
        MOD_FIELD_SHIPMENTS_LABEL: {
            [languageCodeEnglish]: 'Shipments',
            [languageCodeThai]: 'การจัดส่ง'
        },
        MOD_FIELD_SHIPMENT_IMPORT_LABEL: {
            [languageCodeEnglish]: 'Shipment Import',
            [languageCodeThai]: 'นำเข้าจัดส่ง'
        },
        MOD_FIELD_ASSIGN_DRIVER_LABEL: {
            [languageCodeEnglish]: 'Assign Driver',
            [languageCodeThai]: 'กำหนดไดรเวอร์'
        },

        MOD_FIELD_TRACKING_ID_LABEL: {
            [languageCodeEnglish]: 'Tracking ID',
            [languageCodeThai]: 'รหัสติดตาม'
        },

        MOD_FIELD_ORDER_KEY_LABEL: {
            [languageCodeEnglish]: 'Order Key',
            [languageCodeThai]: 'รหัสการสั่งซื้อ'
        },

        MOD_FIELD_TOTAL_ITEM_COUNT_LABEL: {
            [languageCodeEnglish]: 'Total Item',
            [languageCodeThai]: 'รายการทั้งหมด'
        },

        MOD_FIELD_UNIQUE_ITEM_COUNT_LABEL: {
            [languageCodeEnglish]: 'Unique Item',
            [languageCodeThai]: 'ไอเทมยูนิค'
        },


        MOD_FIELD_VOLUME_LABEL: {
            [languageCodeEnglish]: 'Volume',
            [languageCodeThai]: 'ปริมาณ'
        },

        MOD_FIELD_TOTAL_SHIPMENT_VOLUME_LABEL: {
            [languageCodeEnglish]: 'Total Shipment Volume',
            [languageCodeThai]: 'ปริมาณการจัดส่งทั้งหมด'
        },
        MOD_FIELD_TOTAL_SHIPMENT_DIMENSION: {
            [languageCodeEnglish]: 'Total Shipment Dimension',
            [languageCodeThai]: 'ขนาดการจัดส่งทั้งหมด'
        },
        MOD_FIELD_SHIPPING_FARE: {
            [languageCodeEnglish]: 'Shipping Fare',
            [languageCodeThai]: 'ค่าจัดส่ง'
        },
        MOD_COMPANY_NAME: {
            [languageCodeEnglish]: 'PanPan Service Express',
            [languageCodeThai]: 'ปันปัน เซอร์วิส เอ็กซ์เพรส'
        },
        MOD_LABEL_SERVICES: {
            [languageCodeEnglish]: 'SERVICES',
            [languageCodeThai]: 'บริการ'
        },
        MOD_LEADING_PARCEL_DELIVERY_COMPANY_IN_THAILAND: {
            [languageCodeEnglish]: "We're the leading parcel delivery company in Thailand.",
            [languageCodeThai]: 'เราคือบริษัทขนส่งพัสดุชั้นนำของประเทศไทย'
        },
        MOD_PAN_PAN_FRIEND: {
            [languageCodeEnglish]: "Pan Pan's Friend",
            [languageCodeThai]: 'เพื่อนปันปัน'
        },
        MOD_PAN_PAN__EXPRESS_WALLET: {
            [languageCodeEnglish]: "Pan Pan Express Wallet",
            [languageCodeThai]: 'ปันปัน เอ็กซ์เพรส วอลเล็ท'
        },
        MOD_PAN_PAN_COD: {
            [languageCodeEnglish]: "COD",
            [languageCodeThai]: 'ซีโอดี'
        },
        MOD_PAN_PAN_EASY_SHIP: {
            [languageCodeEnglish]: "Easy Ship",
            [languageCodeThai]: 'เรือง่าย'
        },
        MOD_PAN_PAN_DROP_OFF: {
            [languageCodeEnglish]: "Pan Pan Drop Off",
            [languageCodeThai]: 'ปันปันดร็อปออฟ'
        },
        MOD_PAN_PAN_FILL_YOUR_PARCEL_DIMENSIONS: {
            [languageCodeEnglish]: "Fill your parcel's dimensions",
            [languageCodeThai]: 'กรอกขนาดของพัสดุของคุณ'
        },
        MOD_PAN_PAN_ESTIMATED_PARCEL_DELIVERY_FEE: {
            [languageCodeEnglish]: "Estimated Parcel Delivery Fee",
            [languageCodeThai]: 'ค่าส่งพัสดุโดยประมาณ'
        },
        MOD_FIELD_PAN_PAN_CARE_FEE: {
            [languageCodeEnglish]: 'Pan Pan Care Fee',
            [languageCodeThai]: 'แพนแพนแคร์ ค่าธรรมเนียม'
        },
        MOD_FIELD_BOX_SHIELD_FEE: {
            [languageCodeEnglish]: 'Box Shield Fee',
            [languageCodeThai]:  'ค่าธรรมเนียม' 
        },
        MOD_FIELD_TOTAL_SHIPPING_FEE: {
            [languageCodeEnglish]: 'Total Shipping Fee',
            [languageCodeThai]: 'รวมค่าจัดส่ง'
        },

        MOD_FIELD_PROCESSING_DATE_LABEL: {
            [languageCodeEnglish]: 'Processing Date',
            [languageCodeThai]: 'วันที่ดำเนินการ'
        },

        MOD_FIELD_EXPECTED_DELIVERY_DATE_LABEL: {
            [languageCodeEnglish]: 'Expected Delivery Date',
            [languageCodeThai]: 'วันที่จัดส่งที่คาดหวัง'
        },

        MOD_FIELD_SHIPMENT_SOURCE_LABEL: {
            [languageCodeEnglish]: 'Shipment Source',
            [languageCodeThai]: 'วันที่จัดส่งจริง'
        },

        MOD_DELIVERY_DETAILS_LABEL: {
            [languageCodeEnglish]: 'Delivery Details',
            [languageCodeThai]: 'รายละเอียดการจัดส่ง'
        },

        MOD_FIELD_SHIPMENT_STATUS_LABEL: {
            [languageCodeEnglish]: 'Shipment Status',
            [languageCodeThai]: 'สถานะการจัดส่ง'
        },
        BUTTON_DETAILS: {
            [languageCodeEnglish]: 'Details',
            [languageCodeThai]: 'รายละเอียด'
        },
        BUTTON_EDIT: {
            [languageCodeEnglish]: 'Edit',
            [languageCodeThai]: 'แก้ไข'
        },

        MOD_FIELD_ITEM_LABEL: {
            [languageCodeEnglish]: 'Item',
            [languageCodeThai]: 'สิ่งของ'
        },

        MOD_RATE: {
            [languageCodeEnglish]: 'Rate',
            [languageCodeThai]: 'ประเมิน'
        },

        MOD_QTY: {
            [languageCodeEnglish]: 'Quantity',
            [languageCodeThai]: 'ปริมาณ'
        },

        MOD_FIELD_SHIPPING_DETAIL_LABEL: {
            [languageCodeEnglish]: 'Shipping Details',
            [languageCodeThai]: 'รายละเอียดการจัดส่ง'
        },

        MOD_FIELD_PICKUP_DETAIL_LABEL: {
            [languageCodeEnglish]: 'Pickup Details',
            [languageCodeThai]: 'รายละเอียดการรับของ'
        },

        MOD_FIELD_PLANNED_DELIVERY_DATE_LABEL: {
            [languageCodeEnglish]: 'Planned Delivery Date',
            [languageCodeThai]: 'วันที่จัดส่งตามแผน'
        },
        BUTTON_RESET: {
            [languageCodeEnglish]: 'Reset',
            [languageCodeThai]: 'รีเซ็' 
        },

        BUTTON_RESET_ALL: {
            [languageCodeEnglish]: 'Reset All',
            [languageCodeThai]: 'การตั้งค่าทั้งหมด' 
        },
        GO_TO_CURRENT: {
            [languageCodeEnglish]: 'Go to Current',
            [languageCodeThai]: 'ไปที่ปัจจุบัน'
        },
        BUTTON_ADD_NEW: {
            [languageCodeEnglish]: 'Add New',
            [languageCodeThai]: 'เพิ่มใหม่'
        },
        BUTTON_ALLOCATE_SUBDISTRICTS: {
            [languageCodeEnglish]: 'Allocate Sub Districts',
            [languageCodeThai]: 'จัดสรรตำบล'
        },
        MOD_FIELD_CUSTOMER_LABEL: {
            [languageCodeEnglish]: 'Customer',
            [languageCodeThai]: 'ลูกค้า'
        },

        MOD_BUTTON_BACK_LABEL: {
            [languageCodeEnglish]: 'Back',
            [languageCodeThai]: 'ลูกค้า'
        },

        MOD_FBUTTON_NEXT_LABEL: {
            [languageCodeEnglish]: 'Next',
            [languageCodeThai]: 'ลูกค้า'
        },

        MOD_FIELD_SELECT_SHIPMENT_LABEL: {
            [languageCodeEnglish]: 'Select Shipment',
            [languageCodeThai]: 'เลือกการจัดส่ง'
        },

        MOD_FIELD_ROUTE_PLANNING_LABEL: {
            [languageCodeEnglish]: 'Route Planning',
            [languageCodeThai]: 'การวางแผนเส้นทาง'
        },

        MOD_FIELD_TITLE_TRACK_YOUR_PARCEL_LABEL: {
            [languageCodeEnglish]: 'Track Your Parcel',
            [languageCodeThai]: 'ติดตามพัสดุของคุณ'
        },

        MOD_FIELD_TITLE_TRACK_LABEL: {
            [languageCodeEnglish]: 'Track',
            [languageCodeThai]: 'ติดตาม'
        },

        MOD_TITLE_TRACK_SHIPMENT: {
            [languageCodeEnglish]: 'Track Shipment',
            [languageCodeThai]: 'ติดตามการจัดส่ง'
        },

        MOD_FIELD_TITLE_ENTER_YOUR_TRACKING_NUMBER_LABEL: {
            [languageCodeEnglish]: 'Enter your tracking number',
            [languageCodeThai]: 'ป้อนหมายเลขติดตามของคุณ'
        },

        MOD_FIELD_TITLE_ROUTE_PLANNING_LABEL: {
            [languageCodeEnglish]: 'Allocate Deliveries',
            [languageCodeThai]: 'จัดสรรการ' 
        },

        MOD_FIELD__PIKUP_TITLE_ROUTE_PLANNING_LABEL: {
            [languageCodeEnglish]: 'Allocate Pickup Shipments',
            [languageCodeThai]: 'จัดสรรการจัดส่งรถกระบะ'
        },

        MOD_ABOUT_US_TITLE: {
            [languageCodeEnglish]: 'About Us',
            [languageCodeThai]: 'เกี่ยวกับเรา'
        },
        MOD_HOW_TO_TITLE: {
            [languageCodeEnglish]: 'How To',
            [languageCodeThai]: 'วิธี'
        },

        MOD_FIELD_SELECT_ALL_LABEL: {
            [languageCodeEnglish]: 'Select All',
            [languageCodeThai]: 'เลือกทั้งหมด'
        },

        MOD_FIELD_UNSELECT_ALL_LABEL: {
            [languageCodeEnglish]: 'Unselect All',
            [languageCodeThai]: 'ไม่เลือกทั้งหมด'
        },

        MOD_FIELD_DELIVERY_DATE_LABEL: {
            [languageCodeEnglish]: 'Delivery Date',
            [languageCodeThai]: 'วันที่จัดส่ง'
        },

        MOD_FIELD_PICKUP_DATE_LABEL: {
            [languageCodeEnglish]: 'Pickup Date',
            [languageCodeThai]: 'Pickup Date'
        },

        MOD_FIELD_DATE_LABEL: {
            [languageCodeEnglish]: 'Date',
            [languageCodeThai]: 'วัน'
        },

        MOD_FIELD_PICKUP_LOCATION_LABEL: {
            [languageCodeEnglish]: 'Pickup Location',
            [languageCodeThai]: 'สถานที่รับ' 
        },

        MOD_FIELD_TOTAL_SHIPMENT_COUNT_LABEL: {
            [languageCodeEnglish]: 'Total Shipment Count',
            [languageCodeThai]: 'จำนวนการจัดส่งทั้งหมด'
        },

        MOD_FIELD_DRIVER_DELIVERY_ALLOCATION_LABEL: {
            [languageCodeEnglish]: ' Driver Delivery Allocations',
            [languageCodeThai]: 'การจัดสรร' 
        },

        MOD_FIELD_PICKUP_DETAIL_FIRST_NAME_LABEL: {
            [languageCodeEnglish]: 'Sender Detail First Name',
            [languageCodeThai]: 'รายละเอียดการรับ ชื่อ'
        },

        MOD_FIELD_PICKUP_DETAIL_LAST_NAME_LABEL: {
            [languageCodeEnglish]: 'Sender Detail Last Name',
            [languageCodeThai]:  'รายละเอียดสินค้า นามสกุล' 
        },

        MOD_FIELD_PICKUP_DETAIL_ADDRESS_LABEL: {
            [languageCodeEnglish]: 'Sender Detail Address',
            [languageCodeThai]:  'ที่อยู่รายละเอียดสินค้า' 
        },

        MOD_FIELD_PICKUP_DETAIL_STATE_LABEL: {
            [languageCodeEnglish]: 'Sender Detail State',
            [languageCodeThai]: 'สถานะรายละเอียดสินค้า' 
        },

        MOD_FIELD_PICKUP_DETAIL_DISTRICT_LABEL: {
            [languageCodeEnglish]: 'Sender Detail District',
            [languageCodeThai]:   'รายละเอียดสินค้า อำเภอ'  
        },

        MOD_FIELD_PICKUP_DETAIL_SUB_DISTRICT_LABEL: {
            [languageCodeEnglish]: 'Sender Detail Sub District',
            [languageCodeThai]: 'รายละเอียดรถกระบะ ตำบล'
        },

        MOD_FIELD_PICKUP_DETAIL_ZIP_CODE_LABEL: {
            [languageCodeEnglish]: 'Sender Detail Zip Code',
            [languageCodeThai]: 'รหัสไปรษณีย์รายละเอียดการรับของ'
        },

        MOD_FIELD_PICKUP_DETAIL_PHONE_LABEL: {
            [languageCodeEnglish]: 'Sender Detail Phone',
            [languageCodeThai]: 'โทรศัพท์รายละเอียดการรับของ'
        },

        MOD_FIELD_PICKUP_DETAIL_LONGITUDE_LABEL: {
            [languageCodeEnglish]: 'Sender Detail Longitude',
            [languageCodeThai]: 'ลองจิจูดรายละเอียดรถกระบะ'
        },

        MOD_FIELD_PICKUP_DETAIL_LATITUDE_LABEL: {
            [languageCodeEnglish]: 'Sender Detail Latitude',
            [languageCodeThai]: 'ละติจูดรายละเอียดรถกระบะ'
        },



        MOD_FIELD_SHIPPING_DETAIL_FIRST_NAME_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail First Name',
            [languageCodeThai]: 'รายละเอียดการจัดส่ง ชื่อ'
        },

        MOD_FIELD_SHIPPING_DETAIL_LAST_NAME_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail Last Name',
            [languageCodeThai]: 'รายละเอียดรถกระบะ นามสกุล'
        },

        MOD_FIELD_SHIPPING_DETAIL_ADDRESS_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail Address',
            [languageCodeThai]: 'ที่อยู่รายละเอียดการรับของ'
        },

        MOD_FIELD_SHIPPING_DETAIL_STATE_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail State',
            [languageCodeThai]: 'สถานะรายละเอียดการรับสินค้า'
        },

        MOD_FIELD_SHIPPING_DETAIL_DISTRICT_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail District',
            [languageCodeThai]: 'รายละเอียดการรับสินค้า อำเภอ'
        },

        MOD_FIELD_SHIPPING_DETAIL_SUB_DISTRICT_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail Sub District',
            [languageCodeThai]: 'รายละเอียดรถกระบะ ตำบล'
        },

        MOD_FIELD_SHIPPING_DETAIL_ZIP_CODE_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail Zip Code',
            [languageCodeThai]: 'รหัสไปรษณีย์รายละเอียดการรับของ'
        },

        MOD_FIELD_SHIPPING_DETAIL_PHONE_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail Phone',
            [languageCodeThai]: 'โทรศัพท์รายละเอียดการรับของ'
        },

        MOD_FIELD_SHIPPING_DETAIL_LONGITUDE_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail Longitude',
            [languageCodeThai]: 'ลองจิจูดรายละเอียดรถกระบะ'
        },

        MOD_FIELD_SHIPPING_DETAIL_LATITUDE_LABEL: {
            [languageCodeEnglish]: 'Receiver Detail Latitude',
            [languageCodeThai]: 'ละติจูดรายละเอียดรถกระบะ'
        },


        MOD_FIELD_SHIPMENT_AMOUNT_LABEL: {
            [languageCodeEnglish]: 'Shipment Amount',
            [languageCodeThai]:  'จัดส่ง' 
        },




        MOD_FIELD_DRIVER_PICKUP_ALLOCATION_LABEL: {
            [languageCodeEnglish]: 'Driver Pickup Allocation',
            [languageCodeThai]: 'การจัดสรรรถกระบะคนขับ'
        },

        MOD_FIELD_DRIVER_DELIVERY_ALLOCATION_DETAIL_LABEL: {
            [languageCodeEnglish]: 'Driver Delivery Allocation Detail',
            [languageCodeThai]:  'การจัดสรร' 
        },

        MOD_FIELD_DRIVER_DELIVERY_DAY_WISE_SHIPMENT_LABEL: {
            [languageCodeEnglish]: 'Driver Delivery Shipments For Day',
            [languageCodeThai]: 'การจัดส่งไดรเวอร์สำหรับวัน'
        },

        MOD_COUNT_LABEL: {
            [languageCodeEnglish]: 'Count',
            [languageCodeThai]: 'นับ'
        },

        MOD_SHIPMENTS_LABEL: {
            [languageCodeEnglish]: 'Shipments',
            [languageCodeThai]: 'การจัดส่ง'
        },

        MOD_CBM_LABEL: {
            [languageCodeEnglish]: 'CBM',
            [languageCodeThai]: 'CBM'
        },
        MOD_SELECTED_ITEM_LABEL: {
            [languageCodeEnglish]: 'Selected Item',
            [languageCodeThai]: 'รายการที่เลือก'
        },

        MOD_ITEMS_LABEL: {
            [languageCodeEnglish]: 'Items',
            [languageCodeThai]: 'รายการ'
        },
        MOD_FIELD_COSTPRICE_VALIDATION_MSG: {
            [languageCodeEnglish]: 'Only two decimal points are allowed',
            [languageCodeThai]: 'อนุญาตให้ใช้ทศนิยมสองตำแหน่งเท่านั้น'
        },
        MOD_FIELD_MAX_ALLOWED_WEIGHT: {
            [languageCodeEnglish]: 'Maximum allowed weight is 50 kg',
            [languageCodeThai]:  ' น้ำหนักไม่ควร > 50' 
        },
        MOD_FIELD_MAX_TOTAL_PACKAGE_VOLUME: {
            [languageCodeEnglish]: 'Total Package Volume should not exceed 280cm',
            [languageCodeThai]: 'ขนาดความกว้างยาวสูงเกินกำหนด280' 
        },

        MOD_FIELD_NO_SHIPMENTS_FOUND_MSG: {
            [languageCodeEnglish]: 'No shipment(s) Found',
            [languageCodeThai]: 'ไม่พบการจัดส่ง'
        },

        MOD_FIELD_NO_DATA_FOUND_MSG: {
            [languageCodeEnglish]: 'No Data Found',
            [languageCodeThai]: 'ไม่พบข้อมูล'
        },

        MOD_FIELD_SENDER_DETAIL_LABEL: {
            [languageCodeEnglish]: 'Sender Details',
            [languageCodeThai]: 'รายละเอียดผู้ส่ง'
        },

        MOD_FIELD_RECEIVER_DETAIL_LABEL: {
            [languageCodeEnglish]: 'Receiver Details',
            [languageCodeThai]: 'รายละเอียดเครื่องรับ'
        },

        BUTTON_APPLY: {
            [languageCodeEnglish]: 'Apply',
            [languageCodeThai]: 'นำมาใช้'
        },
        BUTTON_PRICE_ESTIMATION: {
            [languageCodeEnglish]: 'Price Estimation',
            [languageCodeThai]: 'การประมาณราคา'
        },
        BUTTON_PICKUP_REQUEST: {
            [languageCodeEnglish]: 'Pickup Request',
            [languageCodeThai]:  'บริการ' 
        },
        BUTTON_PICKUP_SERVICE: {
            [languageCodeEnglish]: 'Pickup Service',
            [languageCodeThai]: 'บริการรถกระบะ'
        },

        MOD_FIELD_PICKUP_START_DATE_LABEL: {
            [languageCodeEnglish]: 'Pickup Start Date',
            [languageCodeThai]:  'วันที่เริ่มรับ' 
        },
        MOD_FIELD_PICKUP_END_DATE_LABEL: {
            [languageCodeEnglish]: 'Pickup End Date',
            [languageCodeThai]:  'วันที่สิ้นสุดการรับสินค้า' 
        },

        MOD_FIELD_DELIVERY_START_DATE_LABEL: {
            [languageCodeEnglish]: 'Delivery Start Date',
            [languageCodeThai]: 'วันที่เริ่มจัดส่ง'
        },
        MOD_FIELD_DELIVERY_END_DATE_LABEL: {
            [languageCodeEnglish]: 'Delivery End Date',
            [languageCodeThai]: 'วันที่สิ้นสุดการจัดส่ง'
        },
        MOD_KEYWORD: {
            [languageCodeEnglish]: 'Keyword',
            [languageCodeThai]: 'คำสำคัญ'
        },

        MOD_PAN_PAN_ADDRESS: {
            [languageCodeEnglish]: '80 หมู่ที่ 12 Phutthamonthon Sai 5 Road, Rai Khing, Sam Phran, Nakhon Pathom, Thailand, 73210',
            [languageCodeThai]: '80 พุทธมณฑลสาย5, ไร่ขิง, สามพราน, นครปฐม, ประเทศไทย, 73210'
        },
        MOD_TAX_INVOICE_MSG: {
            [languageCodeEnglish]: 'To request Tax Invoice please contact panpanworld.acc@gmail.com or call 080-418-0188',
            [languageCodeThai]: 'หากลูกค้าต้องการใบเสร็จรับเงิน/ใบกำกับภาษี ให้แจ้งมาที่ email address panpanworld.acc@gmail.com หรือเบอร์โทร 080-418-0188'
        },
        MOD_SHOP_REGISTRATION_MSG: {
            [languageCodeEnglish]: 'Thank you for registering your shop with us, someone from PanPanWorld will get back to you as soon as possible.',
            [languageCodeThai]: 'ขอบคุณสำหรับการลงทะเบียนร้านค้าของคุณกับเราจะติดต่อกลับโดยเร็วที่สุดครับ' 
        },
        MOD_FIELD_DELIVERED_BY_LABEL: {
            [languageCodeEnglish]: 'Delivered By',
            [languageCodeThai]: 'จัดส่งโดย'
        },
        MOD_FIELD_LOGIN_REQUEST: {
            [languageCodeEnglish]: 'Please Login/Register',
            [languageCodeThai]: 'กรุณาเข้าสู่ระบบ/ลงทะเบียน'
        },
        MOD_MY_FAVOURITE:{
            [languageCodeEnglish]: 'Favourites',
            [languageCodeThai]: 'รายการโปรด' 
        },
        MOD_CHANGE_MY_LANGUAGE:{
            [languageCodeEnglish]: 'Change Language',
            [languageCodeThai]: 'เปลี่ยนภาษา' 
        },
        MOD_MY_LANGUAGE:{
            [languageCodeEnglish]: 'Language',
            [languageCodeThai]: 'ภาษา' 
        },
        MOD_MEMBER:{
            [languageCodeEnglish]: 'Member',
            [languageCodeThai]: 'สมาชิก' 
        },
        MOD_SELLER_PAGE:{
            [languageCodeEnglish]: 'For Seller Page',
            [languageCodeThai]:  'สำหรับผู้ขาย' 
        },
        MOD_THEME_MODE:{
            [languageCodeEnglish]: 'Theme Mode',
            [languageCodeThai]:  'โหมด' 
        },
        MOD_THEME:{
            [languageCodeEnglish]: 'Theme',
            [languageCodeThai]:  'ธีม' 
        },
        MOD_SETUP:{
            [languageCodeEnglish]: 'Setup',
            [languageCodeThai]: 'ติดตั้ง' 
        },
        
        MOD_PASTE_OTP:{
            [languageCodeEnglish]: 'Paste OTP',
            [languageCodeThai]: 'วาง OTP' 
        },
        MOD_NOTIFICATION:{
            [languageCodeEnglish]: 'Notification',
            [languageCodeThai]: 'การแจ้งเตือน' 
        },
        MOD_OTHER:{
            [languageCodeEnglish]: 'Support',
            [languageCodeThai]: 'สนับสนุน' 
        },
        MOD_DELETE_ACCOUNT:{
            [languageCodeEnglish]: 'Delete Account',
            [languageCodeThai]: 'ลบบัญชี' 
        },
        MOD_WARNING:{
            [languageCodeEnglish]: 'Warning!',
            [languageCodeThai]:  'เตือน!' 
        },
       
        MOD_YES:{
            [languageCodeEnglish]: 'Yes',
            [languageCodeThai]: 'ใช่' 
        },
        MOD_NO:{
            [languageCodeEnglish]: 'No',
            [languageCodeThai]: 'เลขที่' 
        },
        MOD_DELETE_ACCOUNT_MSG:{
            [languageCodeEnglish]: 'Deleting your account will delete your access and all your information on this App. You won’t be able to access past orders and all awarded points will be lost. This is a non-reversible process, Do you wish to Proceed?',
            [languageCodeThai]:  'การลบบัญชีของคุณจะลบการเข้าถึงและข้อมูลทั้งหมดของคุณในนี้ คุณจะไม่สามารถเข้าถึงคำสั่งซื้อ รวมถึงคะแนนทั้งหมด หากทำรายการแล้ว ไม่สามารถย้อนกลับได้ คุณต้องการดำเนินการต่อหรือไม่?' 
        },
        MOD_LOGOUT:{
            [languageCodeEnglish]: 'Logout',
            [languageCodeThai]: 'ออกจากระบบ' 
        },
        MOD_WISHLIST:{
            [languageCodeEnglish]: 'Wishlist',
            [languageCodeThai]: 'สิ่งที่ปรารถนา' 
        },
        MOD_SETTINGS:{
            [languageCodeEnglish]: 'Settings',
            [languageCodeThai]: 'การตั้งค่า' 
        },

        MOD_BANNERTEXT:{
            [languageCodeEnglish]: 'BUY MORE EARN MORE',
            [languageCodeThai]: 'ซื้อมากขึ้นรับมากขึ้น' 
        },
        MOD_ADD_SHIPPING_ADDRESS:{
            [languageCodeEnglish]: 'Add Shipping Address',
            [languageCodeThai]: 'เพิ่มที่อยู่จัดส่ง' 
        },
        MOD_ADD_SHIPPING_ADDRESS_1:{
            [languageCodeEnglish]: 'Unable to checkout, update address detail first',
            [languageCodeThai]: 'ไม่สามารถชำระเงินได้ โปรดอัปเดตรายละเอียดที่อยู่ก่อน' 
        },
        
        MOD_VIEW_ALL: {
            [languageCodeEnglish]: 'View All',
            [languageCodeThai]: 'สินค้าทั้งหมด'
        },
    
           
        MOD_VIEW_SHOP: {
            [languageCodeEnglish]: 'View Shop',
            [languageCodeThai]: 'ดูร้านค้า'
        },
           
        MOD_VIEW_SUPPLIER: {
            [languageCodeEnglish]: 'View Supplier',
            [languageCodeThai]: 'ดูซัพพลายเออร์'
        },
        
        MOD_FIELD_LOGIN_REGISTER: {
            [languageCodeEnglish]: 'Login/Register',
            [languageCodeThai]: 'เข้าสู่ระบบ/ลงทะเบียน'
        },
        MOD_CONTACT_WITH_PAN_PAN: {
            [languageCodeEnglish]: 'Contact With PANPAN',
            [languageCodeThai]: 'ติดต่อ ปันปัน'
        },
        MOD_MY_POINTS: {
            [languageCodeEnglish]: 'My Points',
            [languageCodeThai]: 'คะแนนของฉัน'
        },
        MOD_GET_OTP: {
            [languageCodeEnglish]: 'Get OTP',
            [languageCodeThai]: 'รับรหัสโอทีพี'
        },
        
       
        MOD_FIELD_DELIVERED_AT_LABEL: {
            [languageCodeEnglish]: 'Delivered at',
            [languageCodeThai]: 'จัดส่งที่'
        },
        MOD_FIELD_DELIVERY_PROOF_LABEL: {
            [languageCodeEnglish]: 'Delivery Proof',
            [languageCodeThai]: 'หลักฐานการจัดส่ง'
        },
        MOD_FIELD_DELIVERY_LOCATION_LABEL: {
            [languageCodeEnglish]: 'Delivery Location',
            [languageCodeThai]:  'สถานที่จัดส่ง' 
        },
        MOD_FIELD_ORDER_TRACKER_LABEL: {
            [languageCodeEnglish]: 'Order Tracker',
            [languageCodeThai]: 'ติดตามการสั่งซื้อ'
        },

        MOD_FIELD_RECIPIENT_NAME_LABEL: {
            [languageCodeEnglish]: 'Recipient',
            [languageCodeThai]: 'ผู้รับ'
        },
        MOD_FIELD_FIRST_NAME_LABEL: {
            [languageCodeEnglish]: 'First Name',
            [languageCodeThai]: 'ชื่อจริง'
        },
        MOD_FIELD_LAST_NAME_LABEL: {
            [languageCodeEnglish]: 'Last Name',
            [languageCodeThai]: 'นามสกุล'
        },

        MOD_FIELD_ADDRESS_LINE1_LABEL: {
            [languageCodeEnglish]: 'Address',
            [languageCodeThai]:  'ที่อยู่' 
        },

        MOD_FIELD_ADDRESS_LINE2_LABEL: {
            [languageCodeEnglish]: 'AddressLine2',
            [languageCodeThai]:  'ที่อยู่' 
        },

        MOD_FIELD_PHONE_NO_LABEL: {
            [languageCodeEnglish]: 'Phone',
            [languageCodeThai]: 'โทรศัพท์'
        },
        MOD_FIELD_MOBILE_NO_LABEL: {
            [languageCodeEnglish]: 'Mobile No',
            [languageCodeThai]: 'เบอร์มือถือ' 
        },
        MOD_FIELD_MOBILE_NO_MUST_BE_ATLEAST_10_CHARACTERS: {
            [languageCodeEnglish]: 'Mobile number must be atleast 10 characters',
            [languageCodeThai]:  'หมายเลขโทรศัพท์มือถือต้องมีอย่างน้อย 10 ตัว' 
        },
        MOD_FIELD_MOBILE_NO_MUST_BE_10_CHARACTERS_ONLY: {
            [languageCodeEnglish]: "Mobile number must be 10 characters only",
            [languageCodeThai]:  'เบอร์มือถือต้องมีความยาว 10 ตัวเท่านั้น' 
        },
        MOD_FIELD_SIZE_LENGTH_LABEL: {
            [languageCodeEnglish]: 'Size Length',
            [languageCodeThai]: 'ขนาด ความยาว'
        },
        MOD_FIELD_LENGTH_LABEL: {
            [languageCodeEnglish]: 'Length',
            [languageCodeThai]: 'ความยาว'
        },

        MOD_FIELD_SIZE_WIDTH_LABEL: {
            [languageCodeEnglish]: 'Size Width',
            [languageCodeThai]: 'ขนาด ความกว้าง'
        },
        MOD_FIELD_WIDTH_LABEL: {
            [languageCodeEnglish]: 'Width',
            [languageCodeThai]: 'ความกว้าง'
        },

        MOD_FIELD_SIZE_HEIGHT_LABEL: {
            [languageCodeEnglish]: 'Size Height',
            [languageCodeThai]: 'ขนาด ความสูง'
        },
        MOD_FIELD_HEIGHT_LABEL: {
            [languageCodeEnglish]: 'Height',
            [languageCodeThai]: 'ความสูง'
        },

        MOD_FIELD_WEIGHT_LABEL: {
            [languageCodeEnglish]: 'Weight',
            [languageCodeThai]: 'น้ำหนัก'
        },

        MOD_FIELD_CM_LABEL: {
            [languageCodeEnglish]: 'cm',
            [languageCodeThai]: 'ซม'
        },
        MOD_FIELD_KG_LABEL: {
            [languageCodeEnglish]: 'kg',
            [languageCodeThai]: 'กิโลกรัม'
        },
        MOD_FIELD_FILL_IN_THE_SIZE_MESSAGE: {
            [languageCodeEnglish]: 'Fill in the size then cost calculate can be more accurately',
            [languageCodeThai]:  'กรอกขนาดคำนวณต้นทุนได้แม่นยำขึ้น' 
        },

        MOD_FIELD_IS_PAN_PAN_CARE_AGREED_LABEL: {
            [languageCodeEnglish]: 'Is Pan Pan Care Agreed?',
            [languageCodeThai]: 'ปันปันแคร์ตกลงไหม?'
        },

        MOD_FIELD_NOT_APPLICABLE: {
            [languageCodeEnglish]: 'Not Applicable',
            [languageCodeThai]:  'ไม่สามารถใช้ได้' 
        },

        MOD_FIELD_PAN_PAN_CARE_AGREED_LABEL: {
            [languageCodeEnglish]: 'Pan Pan Care Agreed',
            [languageCodeThai]: 'ปันปัน แคร์ เห็นด้วย'
        },

        MOD_FIELD_IS_BOX_SHIELD_AGREED_LABEL: {
            [languageCodeEnglish]: 'Is Box Shield Agreed?',
            [languageCodeThai]: 'Box Shield ตกลงหรือไม่?'
        },

        MOD_FIELD_BOX_SHIELD_AGREED_LABEL: {
            [languageCodeEnglish]: 'Box Shield Agreed',
            [languageCodeThai]: 'Box Shield เห็นด้วย'
        },

        MOD_FIELD_PAYMENT_METTHOD_LABEL: {
            [languageCodeEnglish]: 'Payment Method',
            [languageCodeThai]:  'วิธีการชำระเงิน' 
        },

        MOD_FIELD_ADD_RECEIVER_LABEL: {
            [languageCodeEnglish]: 'Add Receiver',
            [languageCodeThai]: 'เพิ่มตัวรับสัญญาณ'
        },

        MOD_FIELD_EDIT_RECEIVER_LABEL: {
            [languageCodeEnglish]: 'Edit Receiver',
            [languageCodeThai]: 'แก้ไขผู้รับ'
        },

        MOD_FIELD_DECLARED_SHIPMENT_AMOUNT_LABEL: {
            [languageCodeEnglish]: 'Declared Shipment Amount',
            [languageCodeThai]: 'จำนวนการจัดส่งที่ประกาศ'
        },

        MOD_FIELD_AGREEMENT_CODE_LABEL: {
            [languageCodeEnglish]: 'Agreement Code',
            [languageCodeThai]: 'รหัสข้อตกลง'
        },

        MOD_FIELD_AGREEMENT_TITLE_LABEL: {
            [languageCodeEnglish]: 'Agreement Title',
            [languageCodeThai]: 'ชื่อข้อตกลง'
        },

        MOD_FIELD_TITLE_LABEL: {
            [languageCodeEnglish]: 'Title',
            [languageCodeThai]: 'ชื่อ'
        },

        MOD_FIELD_TERMS_AND_CONDITION_LABEL: {
            [languageCodeEnglish]: 'Terms and Condition',
            [languageCodeThai]: 'ข้อกำหนดและเงื่อนไข'
        },

        MOD_FIELD_IMPORT_SHIPMENT_LABEL: {
            [languageCodeEnglish]: 'Import Shipment',
            [languageCodeThai]: 'นำเข้าจัดส่ง'
        },
        APP_MODULE_TITLE_PREFIX_IMPORT: {
            [languageCodeEnglish]: 'Import ',
            [languageCodeThai]: 'นำเข้า '
        },

        MOD_BULK_IMPORT_DOWNLOAD_TEMPLATE: {
            [languageCodeEnglish]: 'Download Template',
            [languageCodeThai]: 'ดาวน์โหลดเทมเพล' 
        },

        MOD_BULK_IMPORT_VALIDATE_IMPORT: {
            [languageCodeEnglish]: 'Validate Import',
            [languageCodeThai]: 'ตรวจสอบการนำเข้า'
        },

        MOD_BULK_IMPORT_PERFORM_IMPORT: {
            [languageCodeEnglish]: 'Perform Import',
            [languageCodeThai]: 'ดำเนินการนำเข้า'
        },

        MOD_CHOOSE_FILE: {
            [languageCodeEnglish]: 'Choose a file',
            [languageCodeThai]: 'เลือกไฟล์'
        },

        MOD_IMPORT_FILE_IS_REQUIRED: {
            [languageCodeEnglish]: 'File should be of type CSV or XSL or XLSX',
            [languageCodeThai]: 'ไฟล์ควรเป็นประเภท CSV หรือ XSL หรือ XLSX'
        },

        MOD_FILE_SIZE_IS_REQUIRED_ERROR_MSG: {
            [languageCodeEnglish]: 'Import File is required',
            [languageCodeThai]:  'ต้องนำเข้าไฟล์' 
        },
        NOTE_TITLE_LABEL: {
            [languageCodeEnglish]: 'Note:',
            [languageCodeThai]: 'บันทึก:'
        },
        NOTE_IMPORT_ONLY_AVAILABLE_IN_ENGLISH_LABEL: {
            [languageCodeEnglish]: 'Import Available in English language only',
            [languageCodeThai]: 'นำเข้ามาในภาษาอังกฤษเท่านั้น'
        },
        MOD_FIELS_ADD_SHIPMENT: {
            [languageCodeEnglish]: 'Add Shipment',
            [languageCodeThai]: 'เพิ่มการจัดส่ง'
        },

        MOD_FIELS_PICKUP_DROPED_LOCATION: {
            [languageCodeEnglish]: 'Pickup Dropped Location',
            [languageCodeThai]: 'สถานที่รับของลดลง'
        },

        MOD_FIELS_APP_USER_ID_SHIPMENT: {
            [languageCodeEnglish]: 'App User ID',
            [languageCodeThai]: 'รหัสผู้ใช้แอป'
        },

        MOD_FIELS_POSTED_SHIPMENT_COUNT: {
            [languageCodeEnglish]: 'Posted Shipment Count',
            [languageCodeThai]: 'นับการจัดส่งที่โพสต์'
        },

        MOD_FIELS_DELIVERED_SHIPMENT_COUNT: {
            [languageCodeEnglish]: 'Delivered Shipment Count',
            [languageCodeThai]:  'จำนวนที่จัดส่ง' 
        },

        MOD_FIELS_PENDING_SHIPMENT_COUNT: {
            [languageCodeEnglish]: 'Pending Shipment Count',
            [languageCodeThai]: 'นับการจัดส่งที่รอดำเนินการ'
        },

        MOD_FIELS_SHIPMENT_SOURCE_FIELD: {
            [languageCodeEnglish]: 'Source',
            [languageCodeThai]: 'แหล่งที่มา'
        },
    };
}

