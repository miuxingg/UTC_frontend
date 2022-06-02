"use strict";
exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cz": () => (/* binding */ booksByCombos),
/* harmony export */   "o$": () => (/* binding */ allBookByFilter),
/* harmony export */   "rK": () => (/* binding */ bookBestSaler),
/* harmony export */   "vg": () => (/* binding */ bookDetailSelector),
/* harmony export */   "wN": () => (/* binding */ newBook),
/* harmony export */   "y4": () => (/* binding */ allCloudtag)
/* harmony export */ });
/* unused harmony export allBookOnCart */
const newBook = (state)=>{
    return state.books.newBook ?? {
        total: 0,
        items: []
    };
};
const booksByCombos = (state)=>{
    return state.books.bookByCombos ?? {
        total: 0,
        items: []
    };
};
const allBookByFilter = (state)=>{
    return state.books.allBooks ?? {
        total: 0,
        items: []
    };
};
const bookBestSaler = (state)=>{
    return state.books.bookBestSaler ?? {
        total: 0,
        items: []
    };
};
const allBookOnCart = (state)=>{
    return state.books.bookonCart ?? {
        total: 0,
        items: []
    };
};
const bookDetailSelector = (state)=>{
    return state.books.bookDetail ?? {
        id: "",
        name: "",
        price: 0,
        priceUnDiscount: 0,
        description: "",
        author: "",
        category: [],
        cloudTag: [],
        thumbnail: "",
        images: [],
        status: "",
        quantity: 0,
        summary: "",
        isCombo: false,
        books: [],
        isFavorite: false,
        rating: 0
    };
};
const allCloudtag = (state)=>{
    return state.books.cloudtag ?? {
        total: 0,
        items: []
    };
};


/***/ })

};
;