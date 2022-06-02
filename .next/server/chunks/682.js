"use strict";
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 7565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JQ": () => (/* binding */ getProvices),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aI": () => (/* binding */ getDistrictsThunk),
/* harmony export */   "qr": () => (/* binding */ getWardsThunk)
/* harmony export */ });
/* unused harmony exports initialState, categorySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const getProvices = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getProvices", async ()=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.addressApis.getProvices */ .o.addressApis.getProvices();
    return data;
});
const getDistrictsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getDistrictsThunk", async (code)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.addressApis.getDistricts */ .o.addressApis.getDistricts(code);
    return data;
});
const getWardsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getWardsThunk", async (code)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.addressApis.getWards */ .o.addressApis.getWards(code);
    return data;
});
const categorySlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getProvices.fulfilled, (state, action)=>{
            state.provinces = action.payload;
        });
        builder.addCase(getDistrictsThunk.fulfilled, (state, action)=>{
            state.districts = action.payload;
        });
        builder.addCase(getWardsThunk.fulfilled, (state, action)=>{
            state.wards = action.payload;
        });
    }
});
// export const {} = bookSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 6422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ry": () => (/* binding */ getAllBlog),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports initialState, getAllBlogThunk, blogSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const getAllBlogThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getAllBlog", async (queries)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.blogApi.getAllBlog */ .o.blogApi.getAllBlog(queries);
    return data;
});
const blogSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "blog",
    initialState,
    reducers: {
        getAllBlog (state, action) {
            state.allBlog = action.payload.blog;
        }
    },
    extraReducers: (builder)=>{}
});
const { getAllBlog  } = blogSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogSlice.reducer);


/***/ }),

/***/ 3119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KQ": () => (/* binding */ getAllCategory),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports initialState, getCategoryByIds, categorySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const getAllCategory = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getAllCategory", async ()=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.categoryApis.getAllCategory */ .o.categoryApis.getAllCategory();
    return data;
});
const getCategoryByIds = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getCategoryByIds", async (ids)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.categoryApis.getCategoryByIds */ .o.categoryApis.getCategoryByIds(ids);
    return data;
});
const categorySlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllCategory.fulfilled, (state, action)=>{
            state.allCategories = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
        builder.addCase(getCategoryByIds.fulfilled, (state, action)=>{
            state.currentCategories = action.payload;
        });
    }
});
// export const {} = bookSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 1682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./src/redux/auth/index.ts
var auth = __webpack_require__(2238);
// EXTERNAL MODULE: ./src/redux/app/index.ts
var app = __webpack_require__(868);
// EXTERNAL MODULE: ./src/redux/book/index.ts
var book = __webpack_require__(8306);
// EXTERNAL MODULE: ./src/redux/categories/index.ts
var categories = __webpack_require__(3119);
// EXTERNAL MODULE: ./src/redux/cart/index.ts
var cart = __webpack_require__(577);
// EXTERNAL MODULE: ./src/redux/address/index.ts
var address = __webpack_require__(7565);
// EXTERNAL MODULE: ./src/redux/order/index.ts
var order = __webpack_require__(4803);
// EXTERNAL MODULE: ./src/redux/review/index.ts
var review = __webpack_require__(8736);
// EXTERNAL MODULE: ./src/redux/publisher/index.ts
var publisher = __webpack_require__(3262);
// EXTERNAL MODULE: ./src/redux/blog/index.ts
var blog = __webpack_require__(6422);
// EXTERNAL MODULE: ./src/redux/voucher/index.ts
var voucher = __webpack_require__(2247);
;// CONCATENATED MODULE: ./src/redux/rootReducer.ts












const rootReducer = (0,toolkit_.combineReducers)({
    app: app/* default */.ZP,
    books: book/* default */.ZP,
    categories: categories/* default */.ZP,
    auth: auth/* default */.ZP,
    cart: cart/* default */.ZP,
    address: address/* default */.ZP,
    order: order/* default */.ZP,
    review: review/* default */.ZP,
    publisher: publisher/* default */.ZP,
    blog: blog/* default */.ZP,
    voucher: voucher/* default */.ZP
});
/* harmony default export */ const redux_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./src/redux/index.ts



const isDev = "production" !== "production";
const makeStore = ()=>{
    return (0,toolkit_.configureStore)({
        reducer: redux_rootReducer,
        devTools: isDev
    });
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore);


/***/ }),

/***/ 3262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k8": () => (/* binding */ getAllPublishers)
/* harmony export */ });
/* unused harmony exports initialState, publisherSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const getAllPublishers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getAllPublishers", async ()=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.publisherApi.getAllPublisher */ .o.publisherApi.getAllPublisher();
    return data;
});
const publisherSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "publisher",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllPublishers.fulfilled, (state, action)=>{
            state.allPublisher = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
    }
});
// export const {} = bookSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publisherSlice.reducer);


/***/ }),

/***/ 8736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J1": () => (/* binding */ insertNewReview),
/* harmony export */   "JZ": () => (/* binding */ getMoreReviewOnBook),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lg": () => (/* binding */ getAllReviewOnBook),
/* harmony export */   "xe": () => (/* binding */ createReviewOnBook)
/* harmony export */ });
/* unused harmony exports initialState, reviewSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const getAllReviewOnBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getAllReviewOnBook", async ({ idBook , queries  })=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.reviewApi.getReviewOnBook */ .o.reviewApi.getReviewOnBook(idBook, queries);
    return data;
});
const getMoreReviewOnBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getMoreReviewOnBook", async ({ idBook , queries  })=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.reviewApi.getReviewOnBook */ .o.reviewApi.getReviewOnBook(idBook, queries);
    return data;
});
const createReviewOnBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("createReviewOnBook", async (input)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.reviewApi.createReview */ .o.reviewApi.createReview(input);
    return data;
});
const reviewSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "review",
    initialState,
    reducers: {
        insertNewReview (state, action) {
            state.reviewOnBook = {
                items: [
                    action.payload,
                    ...state.reviewOnBook?.items ?? []
                ],
                total: (state.reviewOnBook?.total ?? 0) + 1
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllReviewOnBook.fulfilled, (state, action)=>{
            state.reviewOnBook = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
        builder.addCase(getMoreReviewOnBook.fulfilled, (state, action)=>{
            state.reviewOnBook = {
                items: [
                    ...state.reviewOnBook?.items ?? [],
                    ...action.payload.items
                ],
                total: state.reviewOnBook?.total ?? 0
            };
        });
    }
});
const { insertNewReview  } = reviewSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reviewSlice.reducer);


/***/ }),

/***/ 2247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gu": () => (/* binding */ getvoucher),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ow": () => (/* binding */ addVoucher),
/* harmony export */   "rZ": () => (/* binding */ removeVoucher)
/* harmony export */ });
/* unused harmony exports initialState, getAllVoucherThunk, voucherSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const getAllVoucherThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getAllVouchers", async (queries)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.voucherApi.getAllVoucher */ .o.voucherApi.getAllVoucher(queries);
    return data;
});
const voucherSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "voucher",
    initialState,
    reducers: {
        getvoucher (state, action) {
            state.vouchers = {
                items: action.payload.items,
                total: action.payload.total
            };
        },
        removeVoucher (state, action) {
            const newVouchers = (state?.vouchers?.items || []).filter(({ id  })=>{
                return id !== action.payload.id;
            });
            state.vouchers = {
                items: newVouchers,
                total: newVouchers.length
            };
        },
        addVoucher (state, action) {
            const newVouchers = [
                ...state?.vouchers?.items || [],
                action.payload
            ];
            state.vouchers = {
                items: newVouchers,
                total: newVouchers.length
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllVoucherThunk.fulfilled, (state, action)=>{
            state.vouchers = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
    }
});
const { getvoucher , removeVoucher , addVoucher  } = voucherSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (voucherSlice.reducer);


/***/ })

};
;