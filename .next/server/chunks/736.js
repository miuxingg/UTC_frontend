"use strict";
exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 8980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ BookCart),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configs_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(325);
/* harmony import */ var _libs_utils_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6747);
/* harmony import */ var _redux_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(868);
/* harmony import */ var _redux_auth_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4452);
/* harmony import */ var _redux_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(577);
/* harmony import */ var _redux_favorite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4593);












const BookCart = ({ id ="" , status ="" , name ="" , price =0 , priceUnDiscount =0 , thumbnail ="" , isFavorite =false , rating =0 ,  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const isAuthenticated = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_auth_selectors__WEBPACK_IMPORTED_MODULE_11__/* .authSelector */ .aF);
    const { 0: favoriteHover , 1: setFavoriteHover  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleAddToCart = ()=>{
        if (isAuthenticated) {
            if (id) {
                dispatch((0,_redux_cart__WEBPACK_IMPORTED_MODULE_9__/* .createCartItem */ .aJ)({
                    bookId: id,
                    quantity: 1
                }));
                dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_8__/* .setSuccess */ .xM)({
                    message: t("notify.add-to-cart.success")
                }));
            } else {
                dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_8__/* .setError */ .sT)({
                    message: t("notify.add-to-cart.error")
                }));
            }
        } else {
            const cartLocal = (0,_libs_utils_localStorage__WEBPACK_IMPORTED_MODULE_7__/* .getItemDataStorage */ .B3)(_libs_utils_localStorage__WEBPACK_IMPORTED_MODULE_7__/* .LocalStorageKey.BookStoreCart */ .Fe.BookStoreCart);
            const currentCart = cartLocal ? JSON.parse(cartLocal) : [];
            const isBookOnCart = currentCart.find((item)=>item?.bookId === id
            );
            if (!isBookOnCart) {
                currentCart.push({
                    bookId: id,
                    quantity: 1
                });
                (0,_libs_utils_localStorage__WEBPACK_IMPORTED_MODULE_7__/* .setItemDataStorage */ .lg)(_libs_utils_localStorage__WEBPACK_IMPORTED_MODULE_7__/* .LocalStorageKey.BookStoreCart */ .Fe.BookStoreCart, JSON.stringify(currentCart));
                dispatch((0,_redux_cart__WEBPACK_IMPORTED_MODULE_9__/* .addItemToCart */ .dm)({
                    id: id,
                    quantity: 1,
                    item: {
                        id: id,
                        name: name,
                        thumbnail: thumbnail,
                        price: price,
                        priceUnDiscount: priceUnDiscount
                    }
                }));
                dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_8__/* .setSuccess */ .xM)({
                    message: t("notify.add-to-cart.success")
                }));
            } else {
                dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_8__/* .setWarning */ .C1)({
                    message: t("notify.add-to-cart.exist")
                }));
            }
        }
    };
    const handleToggleFavoriteClick = ()=>{
        if (!isAuthenticated) {
            dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_8__/* .setError */ .sT)({
                message: t("unAuthenticated")
            }));
        } else {
            dispatch((0,_redux_favorite__WEBPACK_IMPORTED_MODULE_10__/* .toggleFavorite */ .mN)(id));
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product product__style--3",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product__thumb",
                    style: {
                        minHeight: 270,
                        maxHeight: 270
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `${_configs_navigator__WEBPACK_IMPORTED_MODULE_6__/* .Routers.products.path */ .H.products.path}/${id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "first__img",
                                style: {
                                    minHeight: 270,
                                    maxHeight: 270
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: thumbnail ? thumbnail : "images/books/1.jpg",
                                    alt: "product image"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `${_configs_navigator__WEBPACK_IMPORTED_MODULE_6__/* .Routers.products.path */ .H.products.path}/${id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "second__img animation1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: thumbnail ? thumbnail : "images/books/2.jpg",
                                    alt: "product image"
                                })
                            })
                        }),
                        status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hot__box",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "hot-label",
                                children: status
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product__content content--center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `${_configs_navigator__WEBPACK_IMPORTED_MODULE_6__/* .Routers.products.path */ .H.products.path}/${id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: name
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "prize d-flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: price
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "old_prize",
                                    children: priceUnDiscount
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "action",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "actions_inner",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "add_to_links",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "cart",
                                                    title: "chua biet",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "bi bi-shopping-bag4"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: handleAddToCart,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "wishlist",
                                                    title: "Add To Cart",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "bi bi-shopping-cart-full"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: handleToggleFavoriteClick,
                                                className: "compare",
                                                title: "Favorite",
                                                style: {
                                                    backgroundColor: isFavorite || favoriteHover ? "#ce7852" : "#f5f5f5",
                                                    color: isFavorite || favoriteHover ? "#fff" : "#333",
                                                    cursor: "pointer"
                                                },
                                                onMouseEnter: ()=>setFavoriteHover(true)
                                                ,
                                                onMouseLeave: ()=>setFavoriteHover(false)
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "bi bi-heart-beat"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "data-toggle": "modal",
                                                    title: "Quick View",
                                                    className: "quickview modal-view detail-link",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "bi bi-search"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product__hover--content",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Rating, {
                                name: "size-small",
                                value: rating,
                                size: "small",
                                defaultValue: rating,
                                disabled: true
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookCart);


/***/ }),

/***/ 3160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ BookCard/* BookCart */.N),
  "A": () => (/* reexport */ BooksSection)
});

// EXTERNAL MODULE: ./src/components/collecttions/BookCard/index.tsx
var BookCard = __webpack_require__(8980);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBackIosNew"
var ArrowBackIosNew_ = __webpack_require__(5780);
var ArrowBackIosNew_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIosNew_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForwardIos"
var ArrowForwardIos_ = __webpack_require__(1658);
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_);
;// CONCATENATED MODULE: ./src/components/elements/SimpleSlider/index.tsx

/* eslint-disable no-unused-vars */ /* eslint-disable require-jsdoc */ 




// import cn from 'classnames';
const PrevButton = (0,material_.styled)((ArrowBackIosNew_default()))({
    color: "#000 !important",
    left: "-55px !important",
    top: "38% !important"
});
const NextButton = (0,material_.styled)((ArrowForwardIos_default()))({
    color: "#000 !important",
    top: "38% !important"
});
// const SlickArrowLeft: React.FC<any> = ({
//   currentSlide,
//   slideCount,
//   ...props
// }) => (
//   <button
//     {...props}
//     className={cn(
//       'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : ''),
//     )}
//     sx={{ top: '40% !important' }}
//     aria-hidden="true"
//     aria-disabled={currentSlide === 0 ? true : false}
//     type="button"
//   >
//     <PrevButton />
//   </button>
// );
// const SlickArrowRight: React.FC<any> = ({
//   currentSlide,
//   slideCount,
//   ...props
// }) => (
//   <button
//     {...props}
//     className={
//       'slick-next slick-arrow' +
//       (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
//     }
//     aria-hidden="true"
//     aria-disabled={currentSlide === slideCount - 1 ? true : false}
//     type="button"
//   >
//     <NextButton />
//   </button>
// );
// export interface ISimpleSlider {
//   listItem: IBook[];
// }
const SimpleSlider = ({ children  })=>{
    const settings = {
        infinite: false,
        className: "center",
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        slidesToScroll: 4,
        initialSlide: 0,
        // currentSlide: 4,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(NextButton, {}),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(PrevButton, {}),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, 
        ]
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            width: "100%",
            maxWidth: 1190,
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settings,
                children: children
            })
        })
    });
};
/* harmony default export */ const elements_SimpleSlider = (SimpleSlider);

;// CONCATENATED MODULE: ./src/components/collecttions/BooksSection/index.tsx





const BooksSection = ({ listItem , description , title ,  })=>{
    const newTitle = title.split(" ");
    const data = listItem.map((item)=>{
        return item;
    });
    // const data = [
    //   listItem[0],
    //   listItem[1],
    //   listItem[2],
    //   listItem[3],
    //   listItem[4],
    // ];
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wn__product__area brown--color pt--80 pb--30",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section__title text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: "title__be--2",
                                    children: [
                                        newTitle.slice(0, Math.ceil(newTitle.length / 2)).join(" "),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "color--theme",
                                            children: newTitle.slice(Math.ceil(newTitle.length / 2), newTitle.length).join(" ")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: description
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    mt: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(elements_SimpleSlider, {
                        children: data.map((item, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                maxWidth: 270,
                                minWidth: 270,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BookCard/* default */.Z, {
                                    ...item
                                })
                            }, index);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const collecttions_BooksSection = ((/* unused pure expression or super */ null && (BooksSection)));

;// CONCATENATED MODULE: ./src/components/collecttions/index.ts




/***/ }),

/***/ 5255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ transformBookCart)
/* harmony export */ });
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9069);

const transformBookCart = (items)=>{
    return items.map((book)=>{
        return {
            id: book?.id,
            name: book.name,
            price: (0,_libs_utils__WEBPACK_IMPORTED_MODULE_0__/* .moneyFormat */ .E)(book.price),
            priceUnDiscount: (0,_libs_utils__WEBPACK_IMPORTED_MODULE_0__/* .moneyFormat */ .E)(book.priceUnDiscount),
            thumbnail: book.thumbnail,
            description: book.description,
            author: book.author,
            category: book.category,
            cloudtag: book.cloudtag,
            images: book.images,
            status: book.status,
            summary: book?.summary,
            isFavorite: book?.isFavorite,
            rating: book?.rating
        };
    });
};


/***/ })

};
;