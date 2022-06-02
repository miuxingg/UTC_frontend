"use strict";
exports.id = 238;
exports.ids = [238];
exports.modules = {

/***/ 2238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gt": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.Gt),
/* harmony export */   "I1": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.I1),
/* harmony export */   "RG": () => (/* binding */ setProfile),
/* harmony export */   "Vk": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.Vk),
/* harmony export */   "WR": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.WR),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7271);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7092);


const initialState = {};
const authSlice = (0,_libs_utils_createGenericSlice__WEBPACK_IMPORTED_MODULE_0__/* .createGenericSlice */ .O)({
    name: "auth",
    initialState,
    reducers: {
        setProfile (state, action) {
            state.profile = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_action__WEBPACK_IMPORTED_MODULE_1__/* .loginLocal.rejected */ .WR.rejected, ()=>{
            console.error("Login Failed");
        });
        builder.addCase(_action__WEBPACK_IMPORTED_MODULE_1__/* .authorized.fulfilled */ .Gt.fulfilled, (state)=>{
            state.isAuthenticated = true;
        });
        builder.addCase(_action__WEBPACK_IMPORTED_MODULE_1__/* .logout.fulfilled */ .kS.fulfilled, ()=>initialState
        );
        builder.addCase(_action__WEBPACK_IMPORTED_MODULE_1__/* .handleVerifyEmail.fulfilled */ .I1.fulfilled, (state)=>{
            state.isVerifyEmailSuccess = true;
        });
        builder.addCase(_action__WEBPACK_IMPORTED_MODULE_1__/* .updateProfile.fulfilled */ .ck.fulfilled, (state, action)=>{
            state.profile = action.payload;
        });
        builder.addCase(_action__WEBPACK_IMPORTED_MODULE_1__/* .getProfile.fulfilled */ .Ai.fulfilled, (state, action)=>{
            state.profile = action.payload;
        });
    }
});

const { setProfile  } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ })

};
;