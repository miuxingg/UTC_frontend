"use strict";
(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 2554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Typo = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontFamily: "Roboto"
});
const Typograhy = ({ children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Typo, {
        ...props,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(Typograhy));


/***/ }),

/***/ 2932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductDetails)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/elements/Typography/index.tsx
var Typography = __webpack_require__(2554);
// EXTERNAL MODULE: ./src/configs/index.ts
var configs = __webpack_require__(7331);
// EXTERNAL MODULE: ./src/libs/utils/localStorage.ts
var localStorage = __webpack_require__(6747);
// EXTERNAL MODULE: ./src/redux/app/index.ts
var app = __webpack_require__(868);
// EXTERNAL MODULE: ./src/redux/auth/selectors.ts
var selectors = __webpack_require__(4452);
// EXTERNAL MODULE: ./src/redux/book/selectors.ts
var book_selectors = __webpack_require__(768);
// EXTERNAL MODULE: ./src/redux/cart/index.ts
var cart = __webpack_require__(577);
// EXTERNAL MODULE: ./src/redux/review/index.ts
var review = __webpack_require__(8736);
;// CONCATENATED MODULE: ./src/redux/review/selectors.ts
const allReviewOnBook = (state)=>{
    return state.review?.reviewOnBook ?? {
        total: 0,
        items: []
    };
};

// EXTERNAL MODULE: external "@mui/icons-material/ArrowBackIosNew"
var ArrowBackIosNew_ = __webpack_require__(5780);
var ArrowBackIosNew_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIosNew_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForwardIos"
var ArrowForwardIos_ = __webpack_require__(1658);
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_);
;// CONCATENATED MODULE: ./src/containers/ProductDetails/ImageSlide/index.tsx





const PrimaryImage = (0,material_.styled)(material_.Box)(({ image , width , height , m  })=>({
        width: width,
        height: height,
        margin: m,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        //   backgroundAttachment: 'fixed',
        backgroundSize: "100% 100%",
        position: "relative",
        transition: "0.5s"
    })
);
const Icon = (0,material_.styled)(material_.Box)(({ top , left , right , bottom  })=>({
        position: "absolute",
        top,
        left,
        right,
        bottom,
        transition: "0.5s"
    })
);
const ImageSlide = ({ listImage  })=>{
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(0);
    const { 0: horver , 1: setHorver  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setImage(0);
    }, [
        listImage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        height: 600,
        width: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PrimaryImage, {
                image: listImage[image],
                width: "100%",
                height: "527px",
                onMouseEnter: ()=>setHorver(true)
                ,
                onMouseLeave: ()=>setHorver(false)
                ,
                children: horver ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                            top: "50%",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowBackIosNew_default()), {
                                style: {
                                    color: `${image === 0 ? "#c6c6c6" : "#fff"}`,
                                    cursor: "pointer"
                                },
                                onClick: ()=>setImage((pre)=>pre - 1 < 0 ? 0 : pre - 1
                                    )
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                            top: "50%",
                            right: "0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIos_default()), {
                                style: {
                                    color: `${image === listImage.length - 1 ? "#c6c6c6" : "#fff"}`,
                                    cursor: "pointer"
                                },
                                onClick: ()=>setImage((pre)=>pre + 1 === listImage.length ? pre : pre + 1
                                    )
                            })
                        })
                    ]
                }) : null
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                width: "100%",
                height: 64,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                children: listImage.map((item, i)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(PrimaryImage, {
                        image: item,
                        width: "64px",
                        height: "100%",
                        m: "0 2px",
                        style: {
                            cursor: "pointer"
                        },
                        onClick: ()=>setImage(i)
                    }, i);
                })
            })
        ]
    });
};
/* harmony default export */ const ProductDetails_ImageSlide = (ImageSlide);

;// CONCATENATED MODULE: ./src/containers/ProductDetails/Reviews/index.tsx




const Review = ({ username , avatar , rating , comment , timestamps ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        mx: 1,
        my: 3,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                        alt: "Remy Sharp",
                        src: avatar ?? "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        ml: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: username
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                ml: 1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                                    fontSize: "12px",
                                    children: timestamps
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                ml: 3,
                my: 1,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "review__ratings__type d-flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "review-ratings",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                // className="rating-summary d-flex"
                                display: "flex",
                                alignItems: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                                            fontWeight: 600,
                                            children: "\u0110\xe1nh gi\xe1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            mt: "3px",
                                            mx: 2,
                                            display: "flex",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Rating, {
                                                name: "size-small",
                                                value: rating,
                                                size: "small",
                                                defaultValue: rating,
                                                disabled: true
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: comment
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Reviews = (Review);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./src/libs/utils/index.ts
var utils = __webpack_require__(9069);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/containers/ProductDetails/Combo/index.tsx





const Image = (0,material_.styled)(material_.Box)(({ src  })=>({
        width: 80,
        height: "100px",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    })
);
const Text = (0,material_.styled)(Typography/* default */.Z)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "2",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    cursor: "pointer",
    ":hover": {
        color: "#e59285"
    }
});
const BookInCombo = ({ name , thumbnail , author , id ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        width: "250px",
        height: "100px",
        style: {
            backgroundColor: "#eee"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                        src: thumbnail || ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    xs: 8,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        p: 1,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            spacing: 1,
                            direction: "column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/products/${id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                            width: "100%",
                                            fontWeight: 600,
                                            fontSize: 16,
                                            children: name
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                        fontSize: 14,
                                        children: author
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
const ListBookInCombo = ({ list  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        container: true,
        spacing: 4,
        children: list.map((book, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                item: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BookInCombo, {
                    ...book
                })
            }, i);
        })
    });
};
/* harmony default export */ const Combo = ((/* unused pure expression or super */ null && (ListBookInCombo)));

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: ./src/redux/favorite/index.ts
var favorite = __webpack_require__(4593);
;// CONCATENATED MODULE: ./src/containers/ProductDetails/index.tsx




















const SeeMore = (0,material_.styled)("span")({
    color: "blue",
    cursor: "pointer"
});
const ProductDetailContainer = ()=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const isAuthenticated = (0,external_react_redux_.useSelector)(selectors/* authSelector */.aF);
    const { 0: quantity , 1: setQuantity  } = (0,external_react_.useState)(1);
    const bookDetail = (0,external_react_redux_.useSelector)(book_selectors/* bookDetailSelector */.vg);
    // const newBookSelector = useSelector(newBook);;
    const reviews = (0,external_react_redux_.useSelector)(allReviewOnBook);
    const { 0: rating , 1: setRating  } = (0,external_react_.useState)(5);
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)("");
    const { 0: favoriteHover , 1: setFavoriteHover  } = (0,external_react_.useState)(false);
    const handleAddToCart = ()=>{
        if (bookDetail.id && quantity > 0) {
            if (isAuthenticated) {
                dispatch((0,cart/* createCartItem */.aJ)({
                    bookId: bookDetail.id,
                    quantity: quantity
                }));
                dispatch((0,app/* setSuccess */.xM)({
                    message: "Th\xeam v\xe0o gi\u1ECF h\xe0ng th\xe0nh c\xf4ng"
                }));
            } else {
                const cartLocal = (0,localStorage/* getItemDataStorage */.B3)(localStorage/* LocalStorageKey.BookStoreCart */.Fe.BookStoreCart);
                const currentCart = cartLocal ? JSON.parse(cartLocal) : [];
                const isBookOnCart = currentCart.find((item)=>item.bookId === bookDetail.id
                );
                if (!isBookOnCart) {
                    currentCart.push({
                        bookId: bookDetail.id,
                        quantity: quantity
                    });
                    (0,localStorage/* setItemDataStorage */.lg)(localStorage/* LocalStorageKey.BookStoreCart */.Fe.BookStoreCart, JSON.stringify(currentCart));
                } else {
                    (0,localStorage/* setItemDataStorage */.lg)(localStorage/* LocalStorageKey.BookStoreCart */.Fe.BookStoreCart, JSON.stringify(currentCart.map((item)=>{
                        return item.bookId === isBookOnCart.bookId ? {
                            ...item,
                            quantity: quantity
                        } : item;
                    })));
                }
                dispatch((0,cart/* addItemToCart */.dm)({
                    id: bookDetail.id,
                    quantity: quantity,
                    item: {
                        id: bookDetail.id,
                        name: bookDetail.name,
                        thumbnail: bookDetail.thumbnail,
                        price: bookDetail.price,
                        priceUnDiscount: bookDetail.priceUnDiscount
                    }
                }));
                dispatch((0,app/* setSuccess */.xM)({
                    message: "Th\xeam v\xe0o gi\u1ECF h\xe0ng th\xe0nh c\xf4ng"
                }));
            }
        } else {
            if (quantity <= 0) {
                dispatch((0,app/* setError */.sT)({
                    message: "S\u1ED1 l\u01B0\u1EE3ng kh\xf4ng h\u1EE3p l\u1EC7"
                }));
            } else dispatch((0,app/* setError */.sT)({
                message: "Th\xeam v\xe0o gi\u1ECF h\xe0ng th\u1EA5t b\u1EA1i"
            }));
        }
    };
    const handleSlideRange = (startPrice, endPrice)=>{};
    const handleRatingChange = (event, value)=>{
        if (value) {
            setRating(value);
        }
    };
    const handleSubmitReview = ()=>{
        if (isAuthenticated) {
            dispatch((0,review/* createReviewOnBook */.xe)({
                rating,
                comment,
                bookId: bookDetail.id
            }));
        } else {
            dispatch((0,app/* setError */.sT)({
                message: "C\u1EA7n ph\u1EA3i \u0111\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c"
            }));
        }
    };
    const handleSeeMoreReview = ()=>{
        dispatch((0,review/* getMoreReviewOnBook */.JZ)({
            idBook: bookDetail.id,
            queries: {
                limit: configs/* REVIEW_COUNT */.aU,
                offset: reviews.items.length
            }
        }));
    };
    const handleToggleFavoriteClick = ()=>{
        if (!isAuthenticated) {
            dispatch((0,app/* setError */.sT)({
                message: t("unAuthenticated")
            }));
        } else {
            dispatch((0,favorite/* toggleFavorite */.mN)(bookDetail.id));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "wrapper",
        id: "wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ht__bradcaump__area bg-image--4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "maincontent bg--white pt--80 pb--55",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-9 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "wn__single__product",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6 col-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductDetails_ImageSlide, {
                                                    listImage: bookDetail.images
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6 col-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product__info__main",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            children: bookDetail.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Rating, {
                                                            name: "size-small",
                                                            value: bookDetail.rating,
                                                            size: "small",
                                                            defaultValue: bookDetail.rating,
                                                            disabled: true
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                                                            fontSize: "14px",
                                                            children: bookDetail.author
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "price-box",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: (0,utils/* moneyFormat */.E)(bookDetail.price)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "product__overview",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                                                                className: "wedget__categories poroduct--tag",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                    children: bookDetail.cloudTag?.map((item, i)=>{
                                                                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                children: item
                                                                            })
                                                                        }, i);
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "box-tocart d-flex",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Qty"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    id: "qty",
                                                                    className: "input-text qty",
                                                                    name: "qty",
                                                                    min: 1,
                                                                    defaultValue: 1,
                                                                    title: "Qty",
                                                                    type: "number",
                                                                    onChange: (e)=>setQuantity(+e.target.value)
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "addtocart__actions",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        className: "tocart",
                                                                        type: "button",
                                                                        title: "Add to Cart",
                                                                        onClick: ()=>handleAddToCart()
                                                                        ,
                                                                        children: t("product-detail.add-cart")
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "product-addto-links clearfix",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "wishlist",
                                                                            onClick: handleToggleFavoriteClick,
                                                                            style: {
                                                                                backgroundColor: bookDetail.isFavorite || favoriteHover ? "#e59285" : "#fff",
                                                                                // color:
                                                                                //   bookDetail.isFavorite || favoriteHover
                                                                                //     ? '#fff'
                                                                                //     : '#333',
                                                                                borderColor: bookDetail.isFavorite || favoriteHover ? "#e59285" : "#ebebeb",
                                                                                cursor: "pointer"
                                                                            },
                                                                            onMouseEnter: ()=>setFavoriteHover(true)
                                                                            ,
                                                                            onMouseLeave: ()=>setFavoriteHover(false)
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            className: "compare",
                                                                            href: "#"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "product_meta",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "posted_in",
                                                                children: [
                                                                    t("product-detail.category"),
                                                                    ":\xa0",
                                                                    bookDetail?.category ? bookDetail.category.map((item, i)=>{
                                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            children: [
                                                                                item.name,
                                                                                "\xa0",
                                                                                i !== bookDetail?.category?.length - 1 ? ", " : null
                                                                            ]
                                                                        }, item.id);
                                                                    }) : null
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "product-share",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "categories-title",
                                                                        children: [
                                                                            t("product-detail.share"),
                                                                            " :"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-social-twitter icons"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-social-tumblr icons"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-social-facebook icons"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "icon-social-linkedin icons"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                bookDetail.isCombo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    mt: 6,
                                    mb: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                                                fontWeight: 600,
                                                fontSize: 24,
                                                mb: 3,
                                                children: t("product-detail.combo")
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ListBookInCombo, {
                                            list: bookDetail.books || []
                                        })
                                    ]
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "product__info__detailed",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "pro_details_nav nav justify-content-start",
                                            role: "tablist",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-item nav-link active",
                                                    "data-toggle": "tab",
                                                    href: "#nav-details",
                                                    role: "tab",
                                                    children: t("product-detail.detail")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-item nav-link",
                                                    "data-toggle": "tab",
                                                    href: "#nav-summary",
                                                    role: "tab",
                                                    children: t("product-detail.summary")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-item nav-link",
                                                    "data-toggle": "tab",
                                                    href: "#nav-review",
                                                    role: "tab",
                                                    children: t("product-detail.review")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "tab__container",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pro__tab_label tab-pane fade show active",
                                                    id: "nav-details",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "description__attribute",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: bookDetail.description
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pro__tab_label tab-pane fade",
                                                    id: "nav-summary",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "description__attribute",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: bookDetail?.summary || ""
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "pro__tab_label tab-pane fade",
                                                    id: "nav-review",
                                                    role: "tabpanel",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    children: t("product-detail.review.custom-review")
                                                                }),
                                                                reviews.items.map((item, i)=>{
                                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Reviews, {
                                                                                comment: item.comment,
                                                                                rating: item.rating,
                                                                                username: `${item.user.firstName} ${item.user.lastName}`,
                                                                                avatar: item.user.avatar,
                                                                                timestamps: external_dayjs_default()(item.createdAt).format("DD/MM/YYYY")
                                                                            }),
                                                                            i !== reviews.items.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}) : null
                                                                        ]
                                                                    }, i);
                                                                }),
                                                                reviews.total !== reviews.items.length ? /*#__PURE__*/ jsx_runtime_.jsx(SeeMore, {
                                                                    onClick: handleSeeMoreReview,
                                                                    children: t("product-detail.review.see-more", {
                                                                        total: reviews.total - reviews.items.length
                                                                    })
                                                                }) : null
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "review-fieldset",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    children: t("product-detail.review.your-review")
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "review_form_field",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "review__ratings__type d-flex",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "review-ratings",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    mb: 3,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                                                                                            fontWeight: 600,
                                                                                            children: t("product-detail.review.rating")
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                                            mt: 1,
                                                                                            mx: 2,
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Rating, {
                                                                                                name: "size-small",
                                                                                                onChange: handleRatingChange,
                                                                                                size: "small"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "input__box",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                                                                                    fontWeight: 600,
                                                                                    children: t("product-detail.review.review-content")
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                                    name: "review",
                                                                                    onChange: (e)=>setComment(e.target.value)
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "review-form-actions",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                onClick: handleSubmitReview,
                                                                                children: t("product-detail.review.submit-review")
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const ProductDetails = (ProductDetailContainer);


/***/ }),

/***/ 6701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2082);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7331);
/* harmony import */ var _containers_ProductDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2932);
/* harmony import */ var _libs_hocs_getServerSideWithPublicRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8165);
/* harmony import */ var _redux_book__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8306);
/* harmony import */ var _redux_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3119);
/* harmony import */ var _redux_review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__]);
_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ProductDetail = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { id  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (id) {
            dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_8__/* .bookById */ .ZN)(id));
            dispatch((0,_redux_categories__WEBPACK_IMPORTED_MODULE_9__/* .getAllCategory */ .KQ)());
            dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_8__/* .cloudtag */ .wq)());
            dispatch((0,_redux_review__WEBPACK_IMPORTED_MODULE_10__/* .getAllReviewOnBook */ .lg)({
                idBook: String(id),
                queries: {
                    limit: _configs__WEBPACK_IMPORTED_MODULE_5__/* .REVIEW_COUNT */ .aU
                }
            }));
        }
    }, [
        dispatch,
        id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_ProductDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        })
    });
};
const getServerSideProps = (0,_libs_hocs_getServerSideWithPublicRoute__WEBPACK_IMPORTED_MODULE_7__/* .getServerSideWithPublicRoute */ .R)(async (_, store)=>{
    return {
        props: {}
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosNew");

/***/ }),

/***/ 1658:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardIos");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,92,554,238,225,682,82,165,768], () => (__webpack_exec__(6701)));
module.exports = __webpack_exports__;

})();