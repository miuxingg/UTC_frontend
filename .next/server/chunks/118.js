"use strict";
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export LoginForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8428);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2238);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_6__]);
_Iconify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material


// component





// ----------------------------------------------------------------------
const LoginSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("yup.empty"),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("yup.empty").min(6, "yup.password.not.length")
});
const LoginForm = ({ onForgotPassword  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        email: "",
        password: ""
    });
    const initialValues = {
        email: "",
        password: "",
        remember: true
    };
    const handleShowPassword = ()=>{
        setShowPassword((show)=>!show
        );
    };
    const handleFormSubmit = async (values)=>{
        setErrorMessage({
            email: "",
            password: ""
        });
        const profileResult = await dispatch((0,_redux_auth__WEBPACK_IMPORTED_MODULE_9__/* .loginLocal */ .WR)({
            email: values.email,
            password: values.password
        }));
        const originalProfileResult = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.unwrapResult)(profileResult);
        if (originalProfileResult) {
            setErrorMessage((pre)=>{
                return {
                    ...pre,
                    [originalProfileResult.field]: originalProfileResult.message
                };
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
        onSubmit: handleFormSubmit,
        validationSchema: LoginSchema,
        validateOnChange: false,
        initialValues: initialValues,
        children: ({ handleSubmit , errors , values , handleChange , isSubmitting  })=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
                noValidate: true,
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                fullWidth: true,
                                type: "email",
                                name: "email",
                                label: "Email address",
                                helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "red"
                                    },
                                    children: t(errors?.email ?? "", {
                                        field: "Email"
                                    }) || t(errorMessage.email)
                                }),
                                value: values.email,
                                onChange: handleChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                                fullWidth: true,
                                type: showPassword ? "text" : "password",
                                label: "Password",
                                name: "password",
                                FormHelperTextProps: {
                                    classes: {
                                        root: `{ color: 'red' }`
                                    }
                                },
                                InputProps: {
                                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputAdornment, {
                                        position: "end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                            onClick: handleShowPassword,
                                            edge: "end",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                icon: showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                                            })
                                        })
                                    })
                                },
                                helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "red"
                                    },
                                    children: t(errors?.password ?? "", {
                                        field: t("password")
                                    }) || t(errorMessage.password)
                                }),
                                value: values.password,
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        sx: {
                            my: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControlLabel, {
                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {}),
                                label: String(t("login.remember"))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: onForgotPassword,
                                style: {
                                    cursor: "pointer"
                                },
                                children: t("login.lost-password")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_5__.LoadingButton, {
                        fullWidth: true,
                        size: "large",
                        type: "submit",
                        variant: "contained",
                        children: t("login.sign-in")
                    })
                ]
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ forgot_password)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/lab"
var lab_ = __webpack_require__(6072);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/configs/navigator.ts
var configs_navigator = __webpack_require__(325);
// EXTERNAL MODULE: ./src/redux/auth/action.ts
var action = __webpack_require__(7092);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
;// CONCATENATED MODULE: ./src/containers/AuthContainer/auth/login/Popup/WaitingEmail.tsx







const WaitingEmail = ({ open , email , onLoginClick ,  })=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(open);
    const handleClose = ()=>{
        setIsOpen(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
        onClose: handleClose,
        open: isOpen,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            width: 500,
            height: 300,
            p: "32px 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/new-mails.jpg",
                    style: {
                        width: "120px",
                        height: "120px"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                    align: "center",
                    children: [
                        t("forgot-content-1"),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                fontWeight: 600,
                                fontSize: "18px"
                            },
                            children: email
                        }),
                        "\xa0",
                        t("forgot-content-2")
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    my: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lab_.LoadingButton, {
                        size: "large",
                        type: "submit",
                        variant: "contained",
                        onClick: onLoginClick,
                        children: t("login.sign-in")
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Popup_WaitingEmail = (WaitingEmail);

;// CONCATENATED MODULE: ./src/containers/AuthContainer/auth/login/forgot-password.tsx



// import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material


// component







// ----------------------------------------------------------------------
const ForgotSchema = external_yup_.object().shape({
    email: external_yup_.string().required("yup.empty")
});
const ForgotPassword = ({ onLoginClick  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const initialValues = {
        email: ""
    };
    const { 0: error , 1: setError  } = (0,external_react_.useState)({
        email: ""
    });
    const handleFormSubmit = async (values)=>{
        setError({
            email: ""
        });
        const profileResult = await dispatch((0,action/* forgotPassword */.gF)({
            email: values.email
        }));
        const originalProfileResult = (0,toolkit_.unwrapResult)(profileResult);
        if (originalProfileResult?.message) {
            setError((pre)=>{
                return {
                    ...pre,
                    email: originalProfileResult?.message
                };
            });
        } else {
            setIsOpen(true);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
        onSubmit: handleFormSubmit,
        validationSchema: ForgotSchema,
        validateOnChange: false,
        initialValues: initialValues,
        children: ({ handleSubmit , errors , values , handleChange , isSubmitting  })=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                noValidate: true,
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                        spacing: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            fullWidth: true,
                            type: "email",
                            name: "email",
                            label: "Email address",
                            helperText: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    color: "red"
                                },
                                children: t(errors?.email ?? "", {
                                    field: "Email"
                                }) || t(error?.email)
                            }),
                            value: values.email,
                            onChange: handleChange
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        sx: {
                            my: 2
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                onClick: onLoginClick,
                                style: {
                                    cursor: "pointer"
                                },
                                children: t("login.sign-in")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: configs_navigator/* Routers.register.path */.H.register.path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: t("register.register")
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lab_.LoadingButton, {
                        fullWidth: true,
                        size: "large",
                        type: "submit",
                        variant: "contained",
                        children: t("login.forgot-password-button")
                    }),
                    isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(Popup_WaitingEmail, {
                        open: isOpen,
                        email: values.email,
                        onLoginClick: ()=>{
                            setIsOpen(false);
                            onLoginClick?.();
                        }
                    }) : null
                ]
            });
        }
    });
};
/* harmony default export */ const forgot_password = (ForgotPassword);


/***/ }),

/***/ 5118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export LoginContainer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(789);
/* harmony import */ var _AuthSocial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2754);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginForm__WEBPACK_IMPORTED_MODULE_3__, _AuthSocial__WEBPACK_IMPORTED_MODULE_4__]);
([_LoginForm__WEBPACK_IMPORTED_MODULE_3__, _AuthSocial__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// @mui







const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    })
);
const HeaderStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("header")(({ theme  })=>({
        top: 0,
        zIndex: 9,
        lineHeight: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        padding: theme.spacing(3),
        justifyContent: "space-between",
        [theme.breakpoints.up("md")]: {
            alignItems: "flex-start",
            padding: theme.spacing(7, 5, 0, 7)
        }
    })
);
const SectionStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card)(({ theme  })=>({
        width: "100%",
        maxWidth: 464,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: theme.spacing(2, 0, 2, 2)
    })
);
const ContentStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
        maxWidth: 480,
        margin: "auto",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: theme.spacing(12, 0)
    })
);
// ----------------------------------------------------------------------
const LoginContainer = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { 0: isForgot , 1: setIsForgot  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootStyle, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SectionStyle, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h3",
                        sx: {
                            px: 5,
                            mt: 10,
                            mb: 5
                        },
                        children: "Hi, Welcome Back"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/illustration_login.png",
                        alt: "login"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                maxWidth: "sm",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentStyle, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h4",
                            gutterBottom: true,
                            children: isForgot ? t("forgot-password") : t("login.sign-in")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            sx: {
                                color: "text.secondary",
                                mb: 5
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthSocial__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                        isForgot ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_forgot_password__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            onLoginClick: ()=>setIsForgot(false)
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onForgotPassword: ()=>setIsForgot(true)
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;