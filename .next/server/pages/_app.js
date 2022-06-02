"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const MAX_WIDTH = "217px";
const Snackbar = (props)=>{
    const { message , open , onClose , type  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Snackbar, {
        autoHideDuration: 5000,
        onClose: onClose,
        open: open,
        anchorOrigin: {
            vertical: "top",
            horizontal: "center"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {
            severity: type,
            sx: {
                width: "100%"
            },
            children: message
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snackbar);


/***/ }),

/***/ 5263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ AuthContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7331);
/* harmony import */ var _libs_utils_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8239);
/* harmony import */ var _redux_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2238);
/* harmony import */ var _redux_auth_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7092);
/* harmony import */ var _redux_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4452);





// import { Layout } from '../components/templates';



// import { fetchNotifications } from '../redux/notification';
const AuthContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(function AuthContainer({ children  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const isAuthenticated = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_7__/* .authSelector */ .aF);
    // const isPublicRoutes = useMemo(() => {
    //   return Object.values(ROUTERS).some(
    //     ({ path, protect }) => !protect && path === router.pathname,
    //   );
    // }, [router.pathname]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cookies = (0,_libs_utils_cookies__WEBPACK_IMPORTED_MODULE_4__/* .getCookies */ .$1)(null);
        if (cookies[_configs__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_KEYS.ACCESS_TOKEN */ .y$.ACCESS_TOKEN]) {
            dispatch((0,_redux_auth__WEBPACK_IMPORTED_MODULE_5__/* .authorized */ .Gt)());
        }
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isAuthenticated) {
            dispatch((0,_redux_auth_action__WEBPACK_IMPORTED_MODULE_6__/* .getProfile */ .Ai)());
        // dispatch(fetchNotifications());
        }
    }, [
        dispatch,
        isAuthenticated
    ]);
    // const isServer = !process.browser;
    // if (!isServer && !isAuthenticated && !isPublicRoutes)
    //   router.push(`${ROUTERS.login.path}?redirect_uri=${router.asPath}`);
    // if (!isServer && isAuthenticated && isPublicRoutes)
    //   router.push((router.query.redirect_uri as string) ?? ROUTERS.home.path);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
});


/***/ }),

/***/ 3525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ GlobalEvent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4452);
/* harmony import */ var _redux_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4803);
/* harmony import */ var _redux_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8736);
/* harmony import */ var _redux_voucher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2247);
/* harmony import */ var _socket_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_socket_sdk__WEBPACK_IMPORTED_MODULE_6__]);
_socket_sdk__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const GlobalEvent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(function GlobalEvent({ children  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_7__/* .profileSelector */ .Rd);
    const handleNewReview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((data)=>{
        dispatch((0,_redux_review__WEBPACK_IMPORTED_MODULE_4__/* .insertNewReview */ .J1)({
            id: data.id,
            comment: data.comment,
            rating: data.rating,
            user: {
                avatar: data.user.avatar,
                firstName: data.user.firstName,
                lastName: data.user.lastName
            }
        }));
    }, [
        dispatch
    ]);
    const handleUpdateOrderStatus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((data)=>{
        dispatch((0,_redux_order__WEBPACK_IMPORTED_MODULE_3__/* .updateOrderStatus */ .E7)({
            id: data.id,
            status: data.status
        }));
    }, [
        dispatch
    ]);
    const handleUpdateVoucherReady = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((data)=>{
        dispatch((0,_redux_voucher__WEBPACK_IMPORTED_MODULE_5__/* .addVoucher */ .ow)(data?.data));
    }, [
        dispatch
    ]);
    const handleUpdateVoucherExpire = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((data)=>{
        dispatch((0,_redux_voucher__WEBPACK_IMPORTED_MODULE_5__/* .removeVoucher */ .rZ)(data?.data));
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].connect */ .ZP.connect();
        _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].joinRoom */ .ZP.joinRoom(profile?.id ?? "");
        _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].registerListener */ .ZP.registerListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.NewReview */ .Vy.NewReview, handleNewReview);
        _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].registerListener */ .ZP.registerListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.UpdateOrderStatus */ .Vy.UpdateOrderStatus, handleUpdateOrderStatus);
        _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].registerListener */ .ZP.registerListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.UpdateVoucherReady */ .Vy.UpdateVoucherReady, handleUpdateVoucherReady);
        _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].registerListener */ .ZP.registerListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.UpdateVoucherExpire */ .Vy.UpdateVoucherExpire, handleUpdateVoucherExpire);
        return ()=>{
            _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].unregisterListener */ .ZP.unregisterListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.NewReview */ .Vy.NewReview, handleNewReview);
            _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].unregisterListener */ .ZP.unregisterListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.UpdateOrderStatus */ .Vy.UpdateOrderStatus, handleUpdateOrderStatus);
            _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].unregisterListener */ .ZP.unregisterListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.UpdateVoucherReady */ .Vy.UpdateVoucherReady, handleUpdateVoucherReady);
            _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].unregisterListener */ .ZP.unregisterListener(_socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* .EventNames.UpdateVoucherExpire */ .Vy.UpdateVoucherExpire, handleUpdateVoucherExpire);
            _socket_sdk__WEBPACK_IMPORTED_MODULE_6__/* ["default"].leaveRoom */ .ZP.leaveRoom(profile?.id ?? "");
        };
    }, [
        profile?.id,
        handleNewReview,
        handleUpdateOrderStatus,
        handleUpdateVoucherReady,
        handleUpdateVoucherExpire
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({
    palette: {
        primary: {
            main: "#b5ddd1"
        },
        secondary: {
            main: "#b2d9ea"
        },
        error: {
            main: "#eee"
        },
        background: {
            default: "#fff"
        }
    }
});


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8141);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _languages_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4149);
/* harmony import */ var _libs_utils_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6747);
/* harmony import */ var _redux_app_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4019);
/* harmony import */ var _redux_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(868);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1682);
/* harmony import */ var _components_elements_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4834);
/* harmony import */ var _containers_AuthContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5263);
/* harmony import */ var _containers_GlobalEvent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3525);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languages_i18n__WEBPACK_IMPORTED_MODULE_6__, _containers_GlobalEvent__WEBPACK_IMPORTED_MODULE_12__]);
([_languages_i18n__WEBPACK_IMPORTED_MODULE_6__, _containers_GlobalEvent__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function BookStoreApplication({ Component , pageProps  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const notification = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_app_selectors__WEBPACK_IMPORTED_MODULE_13__/* .notificationSelector */ .p);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);
    // const store = createStore(rootReducer, applyMiddleware(thunk));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const lang = (0,_libs_utils_localStorage__WEBPACK_IMPORTED_MODULE_7__/* .getItemStorage */ .OC)("language");
        if (lang) _languages_i18n__WEBPACK_IMPORTED_MODULE_6__/* ["default"].changeLanguage */ .Z.changeLanguage(lang);
    // if (lang) i18n.changeLanguage('vi');
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_i18next__WEBPACK_IMPORTED_MODULE_5__.I18nextProvider, {
                i18n: _languages_i18n__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                    theme: _libs_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme */ .r,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_AuthContainer__WEBPACK_IMPORTED_MODULE_11__/* .AuthContainer */ .P, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_containers_GlobalEvent__WEBPACK_IMPORTED_MODULE_12__/* .GlobalEvent */ .L, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Snackbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        open: notification.open,
                                        message: notification.message,
                                        onClose: ()=>dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_8__/* .clearMessage */ .c4)())
                                        ,
                                        type: notification.type
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux__WEBPACK_IMPORTED_MODULE_9__/* .wrapper.withRedux */ .Y.withRedux(BookStoreApplication));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ notificationSelector)
/* harmony export */ });
const notificationSelector = (state)=>state?.app?.notification ?? {
        message: "",
        open: false
    }
;


/***/ }),

/***/ 2201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ SocketEvent)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);
/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6996);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let DEFAULT_SOCKET_URL = "";
const DEFAULT_NAMESPACE = "";
if (process && "production" === "production") {
    DEFAULT_SOCKET_URL = "";
} else {
    DEFAULT_SOCKET_URL = "http://localhost:8081";
}
class SocketEvent {
    socket = null;
    socketUrl = "";
    namespace = "";
    subjects = new Map();
    options = {};
    getSocketUrl() {
        return this.socketUrl || DEFAULT_SOCKET_URL;
    }
    setSocketUrl = (url)=>{
        this.socketUrl = url;
    };
    setNamespace = (namespace)=>{
        this.namespace = namespace;
    };
    getNamespace() {
        return this.namespace || DEFAULT_NAMESPACE;
    }
    setOption = (option)=>{
        this.options = option;
    };
    get socketServer() {
        return `${this.getSocketUrl()}/${this.getNamespace()}`;
    }
    connect = ()=>{
        this.release();
        console.log({
            sercer: this.socketServer
        });
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(this.socketServer, {
            ...this.options
        });
    };
    registerListener = (name, listener)=>{
        if (!name || !listener || typeof listener !== "function") return;
        if (!this.socket) console.debug(`Still not join any rooms yet`);
        const subject = this.subjects.get(name) || this.createSubject(name);
        subject.add(listener);
    };
    unregisterListener = (name, listener)=>{
        const subject = this.subjects.get(name);
        if (!subject || !this.socket) return;
        subject.remove(listener);
        if (subject.count() === 0) this.removeSubject(name, subject);
    };
    joinRoom = (name)=>{
        if (!this.socket) return false;
        this.socket.emit(_types__WEBPACK_IMPORTED_MODULE_1__/* .EventNames.JoinRoom */ .V.JoinRoom, {
            name
        });
        return true;
    };
    leaveRoom = (name)=>{
        if (!this.socket) return false;
        this.socket.emit(_types__WEBPACK_IMPORTED_MODULE_1__/* .EventNames.LeaveRoom */ .V.LeaveRoom, {
            name
        });
        return true;
    };
    leave = ()=>{
        this.release();
    };
    createSubject(name) {
        const subject = new _subject__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .x();
        this.socket?.on(name, subject.notifyAll);
        this.subjects.set(name, subject);
        return subject;
    }
    removeSubject(name, subject) {
        this.socket?.off(name, subject.notifyAll);
        this.subjects.delete(name);
    }
    release = ()=>{
        this.subjects.clear();
        if (!this.socket) return;
        this.socket.disconnect();
        this.socket.close();
        this.socket = null;
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vy": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.V),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SocketEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2201);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SocketEvent__WEBPACK_IMPORTED_MODULE_0__]);
_SocketEvent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const socket = new _SocketEvent__WEBPACK_IMPORTED_MODULE_0__/* .SocketEvent */ .V();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Subject)
/* harmony export */ });
class Subject {
    listeners = [];
    add = (listener)=>{
        this.listeners.push(listener);
    };
    remove = (listener)=>{
        this.listeners = this.listeners.filter((_listener)=>_listener !== listener
        );
    };
    count = ()=>this.listeners.length
    ;
    notifyAll = (data)=>{
        this.listeners.forEach((listener)=>listener(data)
        );
    };
}


/***/ }),

/***/ 8452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ EventNames)
/* harmony export */ });
var EventNames;
(function(EventNames) {
    EventNames["JoinRoom"] = "__join_room__";
    EventNames["LeaveRoom"] = "__leave_room__";
    EventNames["NewReview"] = "new_review";
    EventNames["UpdateOrderStatus"] = "update_order_status";
    EventNames["UpdateVoucherExpire"] = "update_voucher_expire";
    EventNames["UpdateVoucherReady"] = "update_voucher_ready";
})(EventNames || (EventNames = {}));


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

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

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [92,554,238,225,682], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();