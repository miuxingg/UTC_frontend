"use strict";
exports.id = 165;
exports.ids = [165];
exports.modules = {

/***/ 8165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getServerSideWithPublicRoute)
/* harmony export */ });
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7331);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1682);
/* harmony import */ var _redux_auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7092);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7059);
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8239);
/* harmony import */ var _utils_retriveCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5589);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1235);







const getServerSideWithPublicRoute = (cb, redirectWhenLoggedIn = false)=>{
    return _redux__WEBPACK_IMPORTED_MODULE_1__/* .wrapper.getServerSideProps */ .Y.getServerSideProps((store)=>async (ctx)=>{
            try {
                await (0,_utils_retriveCookie__WEBPACK_IMPORTED_MODULE_5__/* .retrieveToken */ .I)(ctx);
                const cookies = (0,_utils_cookies__WEBPACK_IMPORTED_MODULE_4__/* .getCookies */ .$1)(ctx);
                (0,_apis__WEBPACK_IMPORTED_MODULE_3__/* .setApiContext */ .l)(ctx);
                if (cookies[_configs__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_KEYS.ACCESS_TOKEN */ .y$.ACCESS_TOKEN]) {
                    store.dispatch((0,_redux_auth_action__WEBPACK_IMPORTED_MODULE_2__/* .authorized */ .Gt)());
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const query = ctx.query;
                const redirectUrl = query.redirectUrl;
                if (query.access_token && redirectUrl) {
                    const replacedRedirectUrl = redirectUrl.replace(/-/g, "&");
                    (0,_utils_token__WEBPACK_IMPORTED_MODULE_6__/* .setToken */ .o)(query, ctx);
                    return {
                        redirect: {
                            destination: replacedRedirectUrl,
                            permanent: false
                        }
                    };
                }
                if (cookies[_configs__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_KEYS.ACCESS_TOKEN */ .y$.ACCESS_TOKEN] && redirectWhenLoggedIn) {
                    return {
                        redirect: {
                            destination: "/",
                            permanent: false
                        }
                    };
                }
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


/***/ })

};
;