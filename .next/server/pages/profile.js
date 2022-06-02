"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 4024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony exports firebaseConfig, app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyAepz63al_CI2ZIJiJrNjKmWCUDPPdCzNA",
    authDomain: "book-store-storages.firebaseapp.com",
    projectId: "book-store-storages",
    storageBucket: "book-store-storages.appspot.com",
    messagingSenderId: "856037788297",
    appId: "1:856037788297:web:083dbf88b189e77b9bd458"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_elements_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6520);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_elements_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2554);
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1899);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_auth_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7092);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Profile__WEBPACK_IMPORTED_MODULE_8__]);
_Profile__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Schema = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
    currentPassword: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("yup.empty"),
    newPassword: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("yup.empty").min(6, "yup.password.not.length"),
    comfirmPassword: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("yup.empty").min(6, "yup.password.not.length").oneOf([
        yup__WEBPACK_IMPORTED_MODULE_6__.ref("newPassword")
    ], "yup.password.comfirm")
});
const ChangePassword = ({ onProfileLinkClick  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const initialValues = {
        currentPassword: "",
        newPassword: "",
        comfirmPassword: ""
    };
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        currentPassword: ""
    });
    const handleSubmitForm = async (values)=>{
        setErrorMessage({
            currentPassword: ""
        });
        const response = await dispatch((0,_redux_auth_action__WEBPACK_IMPORTED_MODULE_10__/* .changePassword */ .Cp)({
            currentPassword: values.currentPassword,
            newPassword: values.newPassword
        }));
        const result = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_11__.unwrapResult)(response);
        if (result.statusCode && result?.message) {
            setErrorMessage((pre)=>{
                return {
                    ...pre,
                    currentPassword: result?.message
                };
            });
        } else {
            dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_12__/* .setSuccess */ .xM)({
                message: t("change-password.success")
            }));
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        maxWidth: 500,
        margin: "auto",
        my: 10,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
            validationSchema: Schema,
            validateOnChange: false,
            initialValues: initialValues,
            onSubmit: handleSubmitForm,
            children: ({ handleSubmit , errors , values , handleChange , setFieldValue  })=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "customer_details",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "customar__field",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input_box",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    t("change-password.current"),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "password",
                                                name: "currentPassword",
                                                onChange: handleChange,
                                                error: errors?.currentPassword ? t(errors?.currentPassword, {
                                                    field: t("password")
                                                }) :  false || t(errorMessage.currentPassword),
                                                value: values.currentPassword
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input_box",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    t("change-password.new"),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "password",
                                                name: "newPassword",
                                                onChange: handleChange,
                                                error: errors.newPassword ? t(errors.newPassword, {
                                                    field: t("change-password.new")
                                                }) : "",
                                                value: values.newPassword
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input_box",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    t("change-password.comfirm"),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "password",
                                                name: "comfirmPassword",
                                                onChange: handleChange,
                                                error: errors.comfirmPassword ? t(errors.comfirmPassword, {
                                                    field: t("change-password.comfirm")
                                                }) : "",
                                                value: values.comfirmPassword
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            display: "flex",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Typography__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    fontSize: "16px",
                                    style: {
                                        color: "#7eabd0",
                                        cursor: "pointer"
                                    },
                                    onClick: onProfileLinkClick,
                                    children: t("change-password.link-to-profile")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Profile__WEBPACK_IMPORTED_MODULE_8__/* .ButtonSubmit */ .G, {
                                    type: "submit",
                                    children: t("submit.update")
                                })
                            ]
                        })
                    ]
                });
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ ButtonSubmit),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7248);
/* harmony import */ var _mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_elements_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6520);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_elements_SelectBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(350);
/* harmony import */ var _redux_address_selectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7604);
/* harmony import */ var _redux_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7565);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4452);
/* harmony import */ var _CheckoutContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6300);
/* harmony import */ var _redux_auth_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7092);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3392);
/* harmony import */ var _configs_firebase_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4024);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _redux_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(868);
/* harmony import */ var _components_elements_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_storage__WEBPACK_IMPORTED_MODULE_13__, _configs_firebase_config__WEBPACK_IMPORTED_MODULE_14__]);
([firebase_storage__WEBPACK_IMPORTED_MODULE_13__, _configs_firebase_config__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const Camera = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_icons_material_AddAPhoto__WEBPACK_IMPORTED_MODULE_3___default()))({
    width: 35,
    height: 35,
    cursor: "pointer",
    color: "#ff0099",
    position: "absolute",
    top: "70%",
    right: "-5px"
});
const LoadingAvatar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress)({
    width: 35,
    height: 35,
    cursor: "pointer",
    color: "#ff0099",
    position: "absolute",
    top: "70%",
    right: "-5px"
});
const ButtonSubmit = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button)({
    width: "150px",
    background: "#000 none repeat scroll 0 0",
    color: "#fff",
    display: "block",
    padding: "10px 10px",
    fontSize: "14px",
    textTransform: "uppercase",
    borderRadius: "5px",
    fontWeight: "700",
    transition: "0.4s",
    marginTop: "30px",
    ":hover": {
        background: "#e59285 none repeat scroll 0 0",
        color: "#fff"
    },
    ":focus": {
        outline: "none"
    }
});
const Schema = yup__WEBPACK_IMPORTED_MODULE_10__.object().shape({
    firstName: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("H\u1ECD kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
    lastName: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("T\xean kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
    province: yup__WEBPACK_IMPORTED_MODULE_10__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("T\u1EC9nh / th\xe0nh ph\u1ED1 kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
        code: yup__WEBPACK_IMPORTED_MODULE_10__.number()
    }).required("T\u1EC9nh / th\xe0nh ph\u1ED1 kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
    district: yup__WEBPACK_IMPORTED_MODULE_10__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("Qu\u1EADn/huy\u1EC7n kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
        code: yup__WEBPACK_IMPORTED_MODULE_10__.number()
    }).required("Qu\u1EADn/huy\u1EC7n kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
    ward: yup__WEBPACK_IMPORTED_MODULE_10__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("Ph\u01B0\u1EDDng/X\xe3 kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
        code: yup__WEBPACK_IMPORTED_MODULE_10__.number()
    }).required("Ph\u01B0\u1EDDng/X\xe3 kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
    privateHome: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("\u0110\u1ECBa ch\u1EC9 nh\xe0 kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"),
    phoneNumber: yup__WEBPACK_IMPORTED_MODULE_10__.string().required("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xf4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng").min(8, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xf4ng \u0111\xfang \u0111\u1ECBnh d\u1EA1ng"),
    email: yup__WEBPACK_IMPORTED_MODULE_10__.string()
});
const Avatar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)(({ avatar  })=>({
        width: 180,
        height: 180,
        backgroundImage: `url('${avatar}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        border: "1px dashed #eee",
        position: "relative"
    })
);
const Input = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)(_components_elements_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({});
const Profile = ({ onChangePasswordLinkClick ,  })=>{
    const provinces = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_address_selectors__WEBPACK_IMPORTED_MODULE_18__/* .getProvinces */ .uy);
    const districts = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_address_selectors__WEBPACK_IMPORTED_MODULE_18__/* .getDistricts */ .Wf);
    const wards = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_address_selectors__WEBPACK_IMPORTED_MODULE_18__/* .getWards */ .bO);
    const isAuthenticated = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__/* .authSelector */ .aF);
    const profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_19__/* .profileSelector */ .Rd);
    const { 0: avatar , 1: setAvatar  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(profile?.avatar ?? "");
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const cameraRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        province: 1,
        district: 1,
        ward: 1
    });
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(100);
    const initialValues = {
        firstName: profile?.firstName || "",
        lastName: profile?.lastName ?? "",
        province: profile?.province ?? {
            code: 0,
            name: ""
        },
        district: profile?.district ?? {
            code: 0,
            name: ""
        },
        ward: profile?.ward ?? {
            code: 0,
            name: ""
        },
        privateHome: profile?.privateHome ?? "",
        phoneNumber: profile?.phoneNumber ?? "",
        email: profile?.email ?? ""
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_redux_address__WEBPACK_IMPORTED_MODULE_9__/* .getDistrictsThunk */ .aI)(address.province));
        dispatch((0,_redux_address__WEBPACK_IMPORTED_MODULE_9__/* .getWardsThunk */ .qr)(address.district));
    }, [
        dispatch,
        address
    ]);
    const handleChangeProvice = (code)=>{
        setAddress((pre)=>{
            return {
                ...pre,
                province: code
            };
        });
    };
    const handleChangeDistrict = (code)=>{
        setAddress((pre)=>{
            return {
                ...pre,
                district: code
            };
        });
    };
    const handleChangeWard = (code)=>{
        setAddress((pre)=>{
            return {
                ...pre,
                ward: code
            };
        });
    };
    const handleChangeAvatar = (e)=>{
        const images = e.target.files[0];
        if (!images) return null;
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_13__.ref)(_configs_firebase_config__WEBPACK_IMPORTED_MODULE_14__/* .storage */ .tO, `/avatar/${new Date().getTime()}-${images.name}`);
        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_13__.uploadBytesResumable)(storageRef, images);
        uploadTask.on("state_changed", (snapshot)=>{
            const prog = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log(prog);
            setIsLoading(prog);
        }, (err)=>{
            return null;
        }, async ()=>{
            const url = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_13__.getDownloadURL)(uploadTask.snapshot.ref);
            setAvatar(url);
        });
    };
    const handleSubmitForm = async (values)=>{
        if (isAuthenticated) {
            delete values?.email;
            const response = await dispatch((0,_redux_auth_action__WEBPACK_IMPORTED_MODULE_12__/* .updateProfile */ .ck)({
                ...values,
                avatar: avatar || ""
            }));
            const data = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_15__.unwrapResult)(response);
            if (data) {
                dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_16__/* .setSuccess */ .xM)({
                    message: "Update success"
                }));
            } else {
                dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_16__/* .setSuccess */ .xM)({
                    message: "Update error"
                }));
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        maxWidth: 900,
        margin: "auto",
        my: 10,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Avatar, {
                    avatar: avatar ?? "/images/avatar_default.jpeg",
                    children: [
                        isLoading >= 100 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Camera, {
                            onClick: ()=>cameraRef.current.click()
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingAvatar, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            ref: cameraRef,
                            onChange: handleChangeAvatar,
                            hidden: true
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                my: 10,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
                    validationSchema: Schema,
                    validateOnChange: false,
                    initialValues: initialValues,
                    onSubmit: handleSubmitForm,
                    children: ({ handleSubmit , errors , values , handleChange , setFieldValue  })=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "customer_details",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "customar__field",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "margin_between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input_box space_between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    t("check-out.shipping.first-name"),
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                                                type: "text",
                                                                name: "firstName",
                                                                onChange: handleChange,
                                                                error: errors.firstName,
                                                                value: values.firstName
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input_box space_between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    t("check-out.shipping.last-name"),
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                                                type: "text",
                                                                name: "lastName",
                                                                onChange: handleChange,
                                                                error: errors.lastName,
                                                                value: values.lastName
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "margin_between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input_box space_between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    t("check-out.shipping.emails"),
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                                                type: "email",
                                                                name: "email",
                                                                onChange: handleChange,
                                                                error: errors.email,
                                                                value: values.email,
                                                                disabled: true
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input_box space_between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    t("check-out.shipping.phone"),
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                                                type: "text",
                                                                name: "phoneNumber",
                                                                onChange: handleChange,
                                                                error: errors.phoneNumber,
                                                                value: values.phoneNumber
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "margin_between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input_box space_between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    t("check-out.shipping.province"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_SelectBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                items: provinces,
                                                                label: t("check-out.shipping.province"),
                                                                onChange: (code)=>{
                                                                    handleChangeProvice(code);
                                                                    setFieldValue("province", {
                                                                        code,
                                                                        name: (0,_CheckoutContainer__WEBPACK_IMPORTED_MODULE_11__/* .findNamebyCode */ .M)(provinces, code)
                                                                    });
                                                                },
                                                                name: "province",
                                                                error: errors.province?.name || errors.province?.code,
                                                                value: values.province.code
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input_box space_between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    t("check-out.shipping.districts"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_SelectBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                items: districts,
                                                                label: t("check-out.shipping.districts"),
                                                                onChange: (code)=>{
                                                                    handleChangeDistrict(code);
                                                                    setFieldValue("district", {
                                                                        code,
                                                                        name: (0,_CheckoutContainer__WEBPACK_IMPORTED_MODULE_11__/* .findNamebyCode */ .M)(districts, code)
                                                                    });
                                                                },
                                                                name: "district",
                                                                error: errors.district?.code || errors.district?.name,
                                                                value: values.district.code
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input_box space_between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    t("check-out.shipping.wards"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_SelectBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                items: wards,
                                                                label: t("check-out.shipping.wards"),
                                                                onChange: (code)=>{
                                                                    handleChangeWard(code);
                                                                    setFieldValue("ward", {
                                                                        code,
                                                                        name: (0,_CheckoutContainer__WEBPACK_IMPORTED_MODULE_11__/* .findNamebyCode */ .M)(wards, code)
                                                                    });
                                                                },
                                                                name: "ward",
                                                                error: errors.ward?.name || errors.ward?.code,
                                                                value: values.ward.code
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "input_box",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            t("check-out.shipping.private-home"),
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                                        type: "text",
                                                        name: "privateHome",
                                                        onChange: handleChange,
                                                        error: errors.privateHome,
                                                        value: values.privateHome
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            fontSize: "16px",
                                            style: {
                                                color: "#7eabd0",
                                                cursor: "pointer"
                                            },
                                            onClick: onChangePasswordLinkClick,
                                            children: t("change-password")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonSubmit, {
                                            type: "submit",
                                            children: t("submit.update")
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3226);
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChangePassword__WEBPACK_IMPORTED_MODULE_2__, _Profile__WEBPACK_IMPORTED_MODULE_3__]);
([_ChangePassword__WEBPACK_IMPORTED_MODULE_2__, _Profile__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import Profile from './Profile';
const ProfileContainer = ()=>{
    const { 0: isChangePassword , 1: setIsChangePassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isChangePassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChangePassword__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            onProfileLinkClick: ()=>setIsChangePassword(false)
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Profile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            onChangePasswordLinkClick: ()=>setIsChangePassword(true)
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ getServerSideWithProtectedRoute)
/* harmony export */ });
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7331);
/* harmony import */ var _configs_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(325);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1682);
/* harmony import */ var _redux_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7092);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7059);
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8239);
/* harmony import */ var _utils_retriveCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5589);







const getServerSideWithProtectedRoute = (cb)=>{
    return _redux__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.getServerSideProps */ .Y.getServerSideProps((store)=>async (ctx)=>{
            try {
                await (0,_utils_retriveCookie__WEBPACK_IMPORTED_MODULE_6__/* .retrieveToken */ .I)(ctx);
                const cookies = (0,_utils_cookies__WEBPACK_IMPORTED_MODULE_5__/* .getCookies */ .$1)(ctx);
                (0,_apis__WEBPACK_IMPORTED_MODULE_4__/* .setApiContext */ .l)(ctx);
                if (!cookies[_configs__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_KEYS.ACCESS_TOKEN */ .y$.ACCESS_TOKEN]) {
                    return {
                        redirect: {
                            destination: `${_configs_navigator__WEBPACK_IMPORTED_MODULE_1__/* .Routers.login.path */ .H.login.path}?redirect_uri=${ctx.resolvedUrl}`,
                            permanent: false
                        }
                    };
                }
                store.dispatch((0,_redux_auth_action__WEBPACK_IMPORTED_MODULE_3__/* .authorized */ .Gt)());
                return await cb(ctx, store);
            } catch (error) {
                if (error.statusCode === _configs__WEBPACK_IMPORTED_MODULE_0__/* .HTTP_STATUS.NOT_FOUND */ .MG.NOT_FOUND) return {
                    notFound: true
                };
                return {
                    props: {}
                };
            }
        }
    );
};


/***/ }),

/***/ 5589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ retrieveToken)
/* harmony export */ });
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7331);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8239);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1235);



const retrieveToken = async (ctx)=>{
    const cookies = (0,_cookies__WEBPACK_IMPORTED_MODULE_1__/* .getCookies */ .$1)(ctx);
    if (cookies[_configs__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_KEYS.REFRESH_TOKEN */ .y$.REFRESH_TOKEN] && !cookies[_configs__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_KEYS.ACCESS_TOKEN */ .y$.ACCESS_TOKEN]) {
        // const token = await apiSdk.authApis.refreshToken(
        //   cookies[COOKIE_KEYS.REFRESH_TOKEN],
        // );
        // setToken(token, ctx);
        (0,_token__WEBPACK_IMPORTED_MODULE_2__/* .setToken */ .o)({
            access_token: "Chua lam",
            refresh_token: "Chua lam",
            expires_in: 1000,
            refresh_expires_in: 1000
        }, ctx);
    }
};


/***/ }),

/***/ 8577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2082);
/* harmony import */ var _containers_ProfileContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4962);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7059);
/* harmony import */ var _libs_hocs_getServerSideWithProtectedRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9174);
/* harmony import */ var _redux_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7565);
/* harmony import */ var _redux_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2238);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_templates_Layout__WEBPACK_IMPORTED_MODULE_3__, _containers_ProfileContainer__WEBPACK_IMPORTED_MODULE_4__]);
([_components_templates_Layout__WEBPACK_IMPORTED_MODULE_3__, _containers_ProfileContainer__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Profile = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_address__WEBPACK_IMPORTED_MODULE_7__/* .getProvices */ .JQ)());
        dispatch((0,_redux_address__WEBPACK_IMPORTED_MODULE_7__/* .getDistrictsThunk */ .aI)(1));
        dispatch((0,_redux_address__WEBPACK_IMPORTED_MODULE_7__/* .getWardsThunk */ .qr)(1));
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_ProfileContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    });
};
const getServerSideProps = (0,_libs_hocs_getServerSideWithProtectedRoute__WEBPACK_IMPORTED_MODULE_6__/* .getServerSideWithProtectedRoute */ .o)(async (ctx, store)=>{
    const profile = await _libs_apis__WEBPACK_IMPORTED_MODULE_5__/* .apiSdk.authApis.getProfile */ .o.authApis.getProfile();
    store.dispatch((0,_redux_auth__WEBPACK_IMPORTED_MODULE_8__/* .setProfile */ .RG)(profile));
    return {
        props: {}
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddAPhoto");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4515:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,92,554,238,225,682,82,300], () => (__webpack_exec__(8577)));
module.exports = __webpack_exports__;

})();