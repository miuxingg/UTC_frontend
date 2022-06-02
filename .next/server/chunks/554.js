"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 8306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N6": () => (/* binding */ getNewsBook),
/* harmony export */   "OI": () => (/* binding */ bookOnCart),
/* harmony export */   "PA": () => (/* binding */ checkQuantityBook),
/* harmony export */   "Wg": () => (/* binding */ getBookByCombos),
/* harmony export */   "Wo": () => (/* binding */ allBooksByFilter),
/* harmony export */   "ZN": () => (/* binding */ bookById),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rK": () => (/* binding */ bookBestSaler),
/* harmony export */   "wq": () => (/* binding */ cloudtag)
/* harmony export */ });
/* unused harmony exports initialState, bookSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);
/* harmony import */ var _favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4593);




const initialState = {};
const getNewsBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getNewsBooks", async (queries)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.getAllBook */ .o.bookApis.getAllBook(queries);
    return data;
});
const getBookByCombos = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getBookByCombos", async (queries)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.getBookByCombos */ .o.bookApis.getBookByCombos(queries);
    return data;
});
const allBooksByFilter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("allBooksByFilter", async (queries)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.getAllBook */ .o.bookApis.getAllBook(queries);
    return data;
});
const bookBestSaler = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("bookBestSaler", async ()=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.getBestSalerBooks */ .o.bookApis.getBestSalerBooks();
    return data;
});
const bookById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("bookById", async (id)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.getBookById */ .o.bookApis.getBookById(id);
    return data;
});
const bookOnCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("bookOnCart", async (ids)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.getBookByIds */ .o.bookApis.getBookByIds(ids);
    return data;
});
const cloudtag = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cloudtag", async ()=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.getCloundTag */ .o.bookApis.getCloundTag();
    return data;
});
const checkQuantityBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("checkQuantityBook", async (input)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.bookApis.checkQuantityBooks */ .o.bookApis.checkQuantityBooks(input);
    return data;
});
const bookSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getNewsBook.fulfilled, (state, action)=>{
            state.newBook = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
        builder.addCase(getBookByCombos.fulfilled, (state, action)=>{
            state.bookByCombos = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
        builder.addCase(allBooksByFilter.fulfilled, (state, action)=>{
            state.allBooks = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
        builder.addCase(bookById.fulfilled, (state, action)=>{
            state.bookDetail = action.payload;
        });
        builder.addCase(bookOnCart.fulfilled, (state, action)=>{
            state.bookonCart = action.payload;
        });
        builder.addCase(cloudtag.fulfilled, (state, action)=>{
            state.cloudtag = action.payload;
        });
        builder.addCase(bookBestSaler.fulfilled, (state, action)=>{
            state.bookBestSaler = {
                items: action.payload.items,
                total: action.payload.total
            };
        });
        builder.addCase(_favorite__WEBPACK_IMPORTED_MODULE_3__/* .toggleFavorite.fulfilled */ .mN.fulfilled, (state, action)=>{
            const allBooks = state.allBooks?.items.map((item)=>{
                return item.id === action.payload.bookId ? {
                    ...item,
                    isFavorite: action.payload.status
                } : {
                    ...item
                };
            });
            state.allBooks = {
                items: allBooks ?? [],
                total: state.allBooks?.total ?? 0
            };
            const bookBestSaler1 = state.bookBestSaler?.items.map((item)=>{
                return item.id === action.payload.bookId ? {
                    ...item,
                    isFavorite: action.payload.status
                } : {
                    ...item
                };
            });
            state.bookBestSaler = {
                items: bookBestSaler1 ?? [],
                total: state.bookBestSaler?.total ?? 0
            };
            const newBook = state.newBook?.items.map((item)=>{
                return item.id === action.payload.bookId ? {
                    ...item,
                    isFavorite: action.payload.status
                } : {
                    ...item
                };
            });
            state.newBook = {
                items: newBook ?? [],
                total: state.newBook?.total ?? 0
            };
            let bookDetail = state.bookDetail;
            if (bookDetail) bookDetail.isFavorite = action.payload.status;
            state.bookDetail = bookDetail;
        });
    }
});
// export const {} = bookSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookSlice.reducer);


/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "El": () => (/* binding */ updateQuantityCart),
/* harmony export */   "RV": () => (/* binding */ setCart),
/* harmony export */   "ST": () => (/* binding */ updateQuantityItem),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aJ": () => (/* binding */ createCartItem),
/* harmony export */   "al": () => (/* binding */ deleteCart),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "dm": () => (/* binding */ addItemToCart),
/* harmony export */   "jv": () => (/* binding */ getAllCart),
/* harmony export */   "wz": () => (/* binding */ deleteItem)
/* harmony export */ });
/* unused harmony exports initialState, categorySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const createCartItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("createCartItem", async (input)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.cartApis.createCartItem */ .o.cartApis.createCartItem(input);
    return data;
});
const getAllCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getAllCart", async (query)=>{
    return await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.cartApis.getAllCart */ .o.cartApis.getAllCart(query);
});
const removeItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("removeItem", async (id)=>{
    return _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.cartApis.removeItem */ .o.cartApis.removeItem(id);
});
const updateQuantityItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("updateQuantityItem", async ({ id , quantity  })=>{
    await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.cartApis.updateQuantity */ .o.cartApis.updateQuantity(id, quantity);
    return {
        id,
        quantity
    };
});
const categorySlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "cart",
    initialState,
    reducers: {
        deleteCart (state, action) {
            state.cartItems = {
                items: [],
                total: 0
            };
        },
        setCart (state, action) {
            state.cartItems = action.payload;
        },
        addItemToCart (state, action) {
            const current = state.cartItems?.items.filter((item)=>{
                return item.id !== action.payload.id;
            });
            const newCart = [
                ...current ?? [],
                action.payload
            ];
            state.cartItems = {
                items: newCart,
                total: newCart.length
            };
        },
        deleteItem (state, action) {
            state.cartItems = {
                items: state.cartItems?.items.filter((item)=>item.id !== action.payload.id
                ) ?? [],
                total: state.cartItems?.total ?? 0
            };
        },
        updateQuantityCart (state, action) {
            const newState = state.cartItems?.items.map((item)=>{
                return {
                    ...item,
                    quantity: item.id === action.payload.id ? action.payload.quantity : item.quantity
                };
            });
            state.cartItems = {
                items: newState ?? [],
                total: state.cartItems?.total ?? 0
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createCartItem.fulfilled, (state, action)=>{
            const currentItem = state.cartItems?.items.filter((item)=>item.id !== action.payload.id
            );
            state.cartItems = {
                items: [
                    ...currentItem || [],
                    {
                        ...action.payload
                    }
                ],
                total: [
                    ...currentItem || [],
                    {
                        ...action.payload
                    }
                ].length
            };
        });
        builder.addCase(getAllCart.fulfilled, (state, action)=>{
            state.cartItems = action.payload;
        });
        builder.addCase(removeItem.fulfilled, (state, action)=>{
            state.cartItems = {
                items: (state?.cartItems?.items || []).filter((item)=>item.id !== action.payload.id
                ),
                total: (state.cartItems?.total || 1) - 1
            };
        });
    }
});
const { deleteCart , setCart , deleteItem , addItemToCart , updateQuantityCart ,  } = categorySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 4593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mN": () => (/* binding */ toggleFavorite)
/* harmony export */ });
/* unused harmony exports initialState, getAllCategory, categorySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);



const initialState = {};
const getAllCategory = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getAllCategory", async ()=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.categoryApis.getAllCategory */ .o.categoryApis.getAllCategory();
    return data;
});
const toggleFavorite = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("toggleFavorite", async (bookId)=>{
    const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.favoriteApi.toggleFavorite */ .o.favoriteApi.toggleFavorite(bookId);
    return data;
});
const categorySlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{}
});
// export const {} = bookSlice.actions;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 4803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E7": () => (/* binding */ updateOrderStatus),
/* harmony export */   "GB": () => (/* binding */ getOrderByStatus),
/* harmony export */   "LV": () => (/* binding */ createOrder),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dA": () => (/* binding */ updateOrderStatusThunk)
/* harmony export */ });
/* unused harmony exports initialState, orderSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(868);




const initialState = {};
const createOrder = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("createOrder", async (orderInput)=>{
    try {
        const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.orderApis.createOrder */ .o.orderApis.createOrder(orderInput);
        return data;
    } catch (error) {
        console.log(error);
    }
});
const getOrderByStatus = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getOrderByStatus", async (queries)=>{
    try {
        const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.orderApis.getOrderByStatus */ .o.orderApis.getOrderByStatus(queries);
        return data;
    } catch (err) {
        console.log(err);
    }
});
const updateOrderStatusThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("updateOrderStatusThunk", async ({ id , status  }, { dispatch  })=>{
    try {
        const data = await _libs_apis__WEBPACK_IMPORTED_MODULE_1__/* .apiSdk.orderApis.updateStatusOrder */ .o.orderApis.updateStatusOrder(id, status);
        dispatch((0,_app__WEBPACK_IMPORTED_MODULE_3__/* .setSuccess */ .xM)({
            message: "B\u1EA1n \u0111\xe3 hu\u1EF7 \u0111\u01A1n h\xe0ng th\xe0nh c\xf4ng"
        }));
        return data;
    } catch (error) {
        // return error;
        dispatch((0,_app__WEBPACK_IMPORTED_MODULE_3__/* .setError */ .sT)({
            message: "H\xe0nh \u0111\u1ED9ng th\u1EA5t b\u1EA1i"
        }));
        console.log(error);
    }
});
const orderSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_2__/* .createGenericSlice */ .O)({
    name: "order",
    initialState,
    reducers: {
        updateOrderStatus (state, action) {
            state.ordersByStatus = {
                items: (state.ordersByStatus?.items ?? []).filter((item)=>item.id !== action.payload.id
                ),
                total: state.ordersByStatus?.total ?? 0
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getOrderByStatus.fulfilled, (state, action)=>{
            state.ordersByStatus = action.payload;
        });
        builder.addCase(updateOrderStatusThunk.fulfilled, (state, action)=>{
            console.log(action.payload);
            state.ordersByStatus = {
                items: (state.ordersByStatus?.items ?? []).filter((item)=>item.id !== action.payload?.id
                ),
                total: (state.ordersByStatus?.total ?? 1) - 1
            };
        });
    }
});
const { updateOrderStatus  } = orderSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderSlice.reducer);


/***/ })

};
;