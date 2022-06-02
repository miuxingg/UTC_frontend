"use strict";
exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 7331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BJ": () => (/* binding */ ITEM_PER_PAGE),
/* harmony export */   "CT": () => (/* binding */ API_BASE_URL),
/* harmony export */   "MG": () => (/* binding */ HTTP_STATUS),
/* harmony export */   "SQ": () => (/* binding */ Language),
/* harmony export */   "aU": () => (/* binding */ REVIEW_COUNT),
/* harmony export */   "y$": () => (/* binding */ COOKIE_KEYS)
/* harmony export */ });
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const ITEM_PER_PAGE = 9;
const REVIEW_COUNT = 3;
var Language;
(function(Language) {
    Language["VI"] = "vi";
    Language["EN"] = "en";
})(Language || (Language = {}));
var HTTP_STATUS;
(function(HTTP_STATUS) {
    HTTP_STATUS[HTTP_STATUS["OK"] = 200] = "OK";
    HTTP_STATUS[HTTP_STATUS["CREATED"] = 201] = "CREATED";
    HTTP_STATUS[HTTP_STATUS["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_STATUS[HTTP_STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_STATUS[HTTP_STATUS["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HTTP_STATUS[HTTP_STATUS["FORBIDDEN"] = 403] = "FORBIDDEN";
    HTTP_STATUS[HTTP_STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_STATUS[HTTP_STATUS["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HTTP_STATUS[HTTP_STATUS["CONFLICT"] = 409] = "CONFLICT";
    HTTP_STATUS[HTTP_STATUS["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HTTP_STATUS || (HTTP_STATUS = {}));
var COOKIE_KEYS;
(function(COOKIE_KEYS) {
    COOKIE_KEYS["ACCESS_TOKEN"] = "_bookstore_access_token";
    COOKIE_KEYS["REFRESH_TOKEN"] = "_bookstore_refresh_token";
})(COOKIE_KEYS || (COOKIE_KEYS = {}));


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Routers)
/* harmony export */ });
const baseUrl = "/";
const Routers = {
    home: {
        title: "page.home.title",
        path: `${baseUrl}`
    },
    products: {
        title: "page.home.products",
        path: `${baseUrl}products`
    },
    productsDetail: {
        title: "page.home.product.details",
        path: `${baseUrl}[id]`
    },
    login: {
        title: "page.login",
        path: `${baseUrl}login`
    },
    register: {
        title: "page.register",
        path: `${baseUrl}register`
    },
    checkout: {
        title: "page.checkout",
        path: `${baseUrl}checkout`
    },
    cart: {
        title: "page.cart",
        path: `${baseUrl}cart`
    },
    profile: {
        title: "page.profile",
        path: `${baseUrl}profile`
    },
    myOrder: {
        title: "page.myOrder",
        path: `${baseUrl}my-order`
    }
};


/***/ }),

/***/ 7059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ apiSdk),
  "l": () => (/* binding */ setApiContext)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/configs/index.ts
var configs = __webpack_require__(7331);
// EXTERNAL MODULE: ./src/configs/navigator.ts
var configs_navigator = __webpack_require__(325);
// EXTERNAL MODULE: ./src/libs/utils/cookies.ts
var utils_cookies = __webpack_require__(8239);
;// CONCATENATED MODULE: ./src/libs/apis/address/index.ts
class AddressApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async getProvices() {
        const { data  } = await this.axiosInstance.get("/address/provices");
        return data;
    }
    async getDistricts(proviceId) {
        const { data  } = await this.axiosInstance.get("/address/districts", {
            params: {
                proviceId
            }
        });
        return data;
    }
    async getWards(districtId) {
        const { data  } = await this.axiosInstance.get("/address/wards", {
            params: {
                districtId
            }
        });
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/auth/index.ts
class AuthApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async loginLocal(user) {
        const { data  } = await this.axiosInstance.post("/auth/login", user);
        return data;
    }
    async logout() {
        await this.axiosInstance.post("/auth/logout");
    }
    async registerLocal(user) {
        const { data  } = await this.axiosInstance.post("/auth/register", user);
        return data;
    }
    async verifyEmail(data) {
        await this.axiosInstance.post("/auth/verify-email", data);
    }
    async updateProfile(input) {
        const { data  } = await this.axiosInstance.put("/auth", {
            ...input
        });
        return data;
    }
    async getProfile() {
        const { data  } = await this.axiosInstance.get("/auth/profile");
        return data;
    }
    async forgotPassword(input) {
        const { data  } = await this.axiosInstance.post("/auth/forgot-password", input);
        return data;
    }
    async changePassword(currentPassword, newPassword) {
        const { data  } = await this.axiosInstance.post("/auth/change-password", {
            currentPassword,
            newPassword
        });
        return data;
    }
    async loginGoogle() {
        const { data  } = await this.axiosInstance.get("/auth/login-google/");
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/blog/index.ts
class BlogApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async getAllBlog(queries) {
        const { data  } = await this.axiosInstance.get("/configs");
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/book/index.ts
class BookApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async getAllBook(queries) {
        const { data  } = await this.axiosInstance.get("/books", {
            params: {
                ...queries
            }
        });
        return data;
    }
    async getBookByCombos(queries) {
        const { data  } = await this.axiosInstance.get("/books/combos", {
            params: {
                ...queries
            }
        });
        return data;
    }
    async getBookById(id) {
        const { data  } = await this.axiosInstance.get("/books/" + id);
        return data;
    }
    async getBookByIds(ids) {
        const { data  } = await this.axiosInstance.get("/books/ids", {
            params: {
                ids: JSON.stringify(ids)
            }
        });
        return data;
    }
    async getCloundTag() {
        const { data  } = await this.axiosInstance.get("/books/cloudtag");
        return data;
    }
    async getBestSalerBooks() {
        const { data  } = await this.axiosInstance.get("/books/best-saler");
        return data;
    }
    async checkQuantityBooks(input) {
        const { data  } = await this.axiosInstance.post("/books/check-quantity", input);
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/cart/index.ts
class CartApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async createCartItem(input) {
        const { data  } = await this.axiosInstance.post("/cart", input);
        return data;
    }
    async getAllCart(query) {
        const { data  } = await this.axiosInstance.get("/cart", {
            params: {
                ...query
            }
        });
        return data;
    }
    async removeItem(id) {
        const { data  } = await this.axiosInstance.delete(`/cart/${id}`);
        return data;
    }
    async updateQuantity(id, quantity) {
        const { data  } = await this.axiosInstance.put(`/cart/${id}`, {
            quantity: quantity
        });
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/category/index.ts
class CategoryApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async getAllCategory() {
        const { data  } = await this.axiosInstance.get("/category");
        return data;
    }
    async getCategoryByIds(ids) {
        const { data  } = await this.axiosInstance.post("/category/categoryByIds", {
            ids
        });
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/favorite/index.ts
class FavoriteApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async toggleFavorite(book) {
        const { data  } = await this.axiosInstance.post("/favorite/toggle", {
            book
        });
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/order/index.ts
class OrderApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async createOrder(dataCreate) {
        const { data  } = await this.axiosInstance.post("/order", {
            ...dataCreate
        });
        return data;
    }
    async getOrderByStatus(queries) {
        const { data  } = await this.axiosInstance.get("/order", {
            params: {
                ...queries
            }
        });
        return data;
    }
    async updateStatusOrder(id, status) {
        const { data  } = await this.axiosInstance.put(`/order/status/${id}`, {
            status
        });
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/payment/index.ts
class PaymentApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async createPayment(request) {
        const { data  } = await this.axiosInstance.post("/payment", request);
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/publisher/index.ts
class PublisherApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async getAllPublisher() {
        const { data  } = await this.axiosInstance.get("/publisher");
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/review/index.ts
class ReviewApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async createReview(input) {
        const { data  } = await this.axiosInstance.post("/reviews", input);
        return data;
    }
    async getReviewOnBook(bookId, queries) {
        const { data  } = await this.axiosInstance.get(`/reviews/${bookId}`, {
            params: {
                ...queries
            }
        });
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/voucher/index.ts
class VoucherApi {
    constructor(axiosInstance){
        this.axiosInstance = axiosInstance;
    }
    async getAllVoucher(queries) {
        const { data  } = await this.axiosInstance.get("/voucher", {
            params: {
                ...queries
            }
        });
        return data;
    }
}

;// CONCATENATED MODULE: ./src/libs/apis/index.ts
/* eslint-disable require-jsdoc */ 















class BookStoreApi {
    nextContext = null;
    constructor(){
        this.instance = external_axios_default().create({
            baseURL: configs/* API_BASE_URL */.CT
        });
        this.instance.interceptors.request.use(this.onRequestFullfilled, this.onRequestReject);
        this.instance.interceptors.response.use(this.onResponseFullfilled, this.onResponseReject);
    }
    setApiContext = (context)=>{
        this.nextContext = context;
    };
    onResponseFullfilled = (response)=>{
        return response;
    };
    onResponseReject = async (error)=>{
        if (error.response) {
            switch(error.response?.status){
                case configs/* HTTP_STATUS.UNAUTHORIZED */.MG.UNAUTHORIZED:
                    {
                        const originalRequest = error.config;
                        if (!originalRequest._retry) {
                            originalRequest._retry = true;
                            const _cookies = (0,utils_cookies/* getCookies */.$1)(null);
                            if (_cookies[configs/* COOKIE_KEYS.REFRESH_TOKEN */.y$.REFRESH_TOKEN]) {
                                const { data  } = await this.instance.post("/auth/refresh-token", {
                                    refreshToken: _cookies[configs/* COOKIE_KEYS.REFRESH_TOKEN */.y$.REFRESH_TOKEN]
                                });
                                if (data.access_token) {
                                    originalRequest.headers.authorization = `Bearer ${data.access_token}`;
                                }
                            }
                            return this.instance(originalRequest);
                        }
                        (0,utils_cookies/* removeCookie */.nJ)(configs/* COOKIE_KEYS.ACCESS_TOKEN */.y$.ACCESS_TOKEN, this.nextContext);
                        (0,utils_cookies/* removeCookie */.nJ)(configs/* COOKIE_KEYS.REFRESH_TOKEN */.y$.REFRESH_TOKEN, this.nextContext);
                        if (false) {}
                        break;
                    }
                case configs/* HTTP_STATUS.FORBIDDEN */.MG.FORBIDDEN:
                    break;
                default:
                    throw {
                        statusCode: error.response.status,
                        message: this.getErrorMessage(error),
                        field: error.response?.data?.field ?? ""
                    };
            }
        } else {
            throw error;
        }
    };
    onRequestFullfilled = async (config)=>{
        const cookies = (0,utils_cookies/* getCookies */.$1)(this.nextContext);
        if (cookies[configs/* COOKIE_KEYS.ACCESS_TOKEN */.y$.ACCESS_TOKEN]) {
            const bearerToken = `Bearer ${cookies[configs/* COOKIE_KEYS.ACCESS_TOKEN */.y$.ACCESS_TOKEN]}`;
            config.headers = {
                ...config.headers ?? {},
                ["Authorization"]: bearerToken
            };
        }
        return config;
    };
    onRequestReject = (error)=>{
        return Promise.reject(error);
    };
    getErrorMessage = (error)=>{
        if (error.response && error.response.data) {
            if (Array.isArray(error.response.data.message)) {
                return error.response.data.message[0];
            }
            return error.response.data.message;
        }
        return "An error has occurred, please try again";
    };
}
const { instance , setApiContext  } = new BookStoreApi();
var apiSdk;
(function(apiSdk1) {
    var bookApis = apiSdk1.bookApis = new BookApi(instance);
    var categoryApis = apiSdk1.categoryApis = new CategoryApi(instance);
    var authApis = apiSdk1.authApis = new AuthApi(instance);
    var cartApis = apiSdk1.cartApis = new CartApi(instance);
    var addressApis = apiSdk1.addressApis = new AddressApi(instance);
    var orderApis = apiSdk1.orderApis = new OrderApi(instance);
    var payment = apiSdk1.payment = new PaymentApi(instance);
    var reviewApi = apiSdk1.reviewApi = new ReviewApi(instance);
    var publisherApi = apiSdk1.publisherApi = new PublisherApi(instance);
    var favoriteApi = apiSdk1.favoriteApi = new FavoriteApi(instance);
    var blogApi = apiSdk1.blogApi = new BlogApi(instance);
    var voucherApi = apiSdk1.voucherApi = new VoucherApi(instance);
})(apiSdk || (apiSdk = {}));



/***/ }),

/***/ 8239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$1": () => (/* binding */ getCookies),
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "nJ": () => (/* binding */ removeCookie)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (ctx, name, value, options = {})=>{
    nookies__WEBPACK_IMPORTED_MODULE_0___default().set(ctx, name, value, {
        ...options,
        path: "/"
    });
};
const getCookies = (ctx)=>{
    return nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx);
};
const removeCookie = (name, ctx = null, options = {})=>{
    nookies__WEBPACK_IMPORTED_MODULE_0___default().destroy(ctx, name, {
        ...options,
        path: "/"
    });
};


/***/ }),

/***/ 7271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ createGenericSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable require-jsdoc */ 

function createGenericSlice({ name , initialState , reducers , extraReducers  }) {
    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
        name,
        initialState,
        reducers,
        extraReducers: (builder)=>{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            builder.addCase(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE, (state, action)=>{
                return {
                    ...state,
                    ...action.payload[name]
                };
            });
            if (extraReducers) {
                extraReducers(builder);
            }
        }
    });
}


/***/ }),

/***/ 1235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ removeToken),
/* harmony export */   "o": () => (/* binding */ setToken)
/* harmony export */ });
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7331);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8239);


const setToken = (token, ctx = null)=>{
    (0,_cookies__WEBPACK_IMPORTED_MODULE_1__/* .setCookie */ .d8)(ctx, _configs__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_KEYS.ACCESS_TOKEN */ .y$.ACCESS_TOKEN, token.access_token || "", {
        expires: new Date(Date.now() + Number(token.expires_in))
    });
// setCookie(ctx, COOKIE_KEYS.REFRESH_TOKEN, token.refresh_token || '', {
//   expires: new Date(Date.now() + Number(token.refresh_expires_in)),
// });
};
const removeToken = ()=>{
    (0,_cookies__WEBPACK_IMPORTED_MODULE_1__/* .removeCookie */ .nJ)(_configs__WEBPACK_IMPORTED_MODULE_0__/* .COOKIE_KEYS.ACCESS_TOKEN */ .y$.ACCESS_TOKEN);
// removeCookie(COOKIE_KEYS.REFRESH_TOKEN);
};


/***/ }),

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": () => (/* binding */ setWarning),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c4": () => (/* binding */ clearMessage),
/* harmony export */   "sT": () => (/* binding */ setError),
/* harmony export */   "xM": () => (/* binding */ setSuccess)
/* harmony export */ });
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7271);

const initialState = {
    notification: {}
};
const appSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_0__/* .createGenericSlice */ .O)({
    name: "app",
    initialState,
    reducers: {
        setSuccess (state, action) {
            state.notification = {
                message: action.payload?.message,
                open: true,
                type: "success"
            };
        },
        setWarning (state, action) {
            state.notification = {
                message: action.payload?.message,
                open: true,
                type: "warning"
            };
        },
        setError (state, action) {
            // const [message, params = ''] = action.payload.message.split(':');
            // const arrParams = params.split(',');
            // let translateParams = {};
            // (arrParams || []).forEach((param, idx) => {
            //   const paramTransform = `fields.${param.trim()}`;
            //   translateParams = {
            //     ...translateParams,
            //     [idx]: translate(paramTransform),
            //   };
            // });
            // const trasnlateMessage = translate(`${message}`, translateParams);
            state.notification = {
                message: action.payload.message,
                open: true,
                type: "error"
            };
        },
        clearMessage (state) {
            state.notification = {
                message: "",
                open: false,
                type: undefined
            };
        }
    }
});
const { setSuccess , setError , setWarning , clearMessage  } = appSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appSlice.reducer);


/***/ }),

/***/ 7092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ai": () => (/* binding */ getProfile),
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "Gt": () => (/* binding */ authorized),
/* harmony export */   "I1": () => (/* binding */ handleVerifyEmail),
/* harmony export */   "Vk": () => (/* binding */ registerLocal),
/* harmony export */   "WR": () => (/* binding */ loginLocal),
/* harmony export */   "ck": () => (/* binding */ updateProfile),
/* harmony export */   "gF": () => (/* binding */ forgotPassword),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony export loginGoogle */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1235);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(868);




// import { setError, setSuccess } from '../app';
const loginLocal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/loginLocal", async (user, { dispatch  })=>{
    try {
        const token = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.loginLocal */ .o.authApis.loginLocal(user);
        (0,_libs_utils_token__WEBPACK_IMPORTED_MODULE_2__/* .setToken */ .o)(token);
        dispatch(authorized());
        dispatch((0,_app__WEBPACK_IMPORTED_MODULE_3__/* .setSuccess */ .xM)({
            message: "Login Success"
        }));
        window?.location.replace("/");
    } catch (err) {
        return err;
    }
});
const registerLocal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/registerLocal", async (user, { dispatch  })=>{
    // try {
    return await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.registerLocal */ .o.authApis.registerLocal(user);
// dispatch(setSuccess({ message: translate('register.success.verify') }));
// window?.location?.replace('/');
// } catch (error: any) {
//   // dispatch(setError({ message: error.message }));
//   throw error;
// }
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/logout", async ()=>{
    // await apiSdk.authApis.logout();
    (0,_libs_utils_token__WEBPACK_IMPORTED_MODULE_2__/* .removeToken */ .g)();
// window?.location?.replace('/');
});
const authorized = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/authorized", ()=>{
    return {
        payload: {}
    };
});
const updateProfile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/updateProfile", async (input)=>{
    try {
        return await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.updateProfile */ .o.authApis.updateProfile(input);
    } catch (error) {
        console.log(error);
    }
});
const handleVerifyEmail = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/handleVerifyEmail", async (data)=>{
    await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.verifyEmail */ .o.authApis.verifyEmail(data);
});
const getProfile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/getProfile", async ()=>{
    return await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.getProfile */ .o.authApis.getProfile();
});
const forgotPassword = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/forgotPassword", async (input)=>{
    try {
        const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.forgotPassword */ .o.authApis.forgotPassword(input);
        return data;
    } catch (error) {
        return error;
    }
});
const changePassword = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/changePassword", async ({ currentPassword , newPassword  }, { dispatch  })=>{
    try {
        const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.changePassword */ .o.authApis.changePassword(currentPassword, newPassword);
        return data;
    } catch (error) {
        return error;
    }
});
const loginGoogle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/loginGoogle", async ({}, { dispatch  })=>{
    try {
        const token = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.authApis.loginGoogle */ .o.authApis.loginGoogle();
        (0,_libs_utils_token__WEBPACK_IMPORTED_MODULE_2__/* .setToken */ .o)(token);
        dispatch(authorized());
        dispatch((0,_app__WEBPACK_IMPORTED_MODULE_3__/* .setSuccess */ .xM)({
            message: "Login Success"
        }));
        window?.location.replace("/");
    } catch (err) {
        return err;
    }
});


/***/ })

};
;