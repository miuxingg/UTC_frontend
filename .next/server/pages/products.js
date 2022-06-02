"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
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

/***/ 5643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_ProductsContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/configs/index.ts
var configs = __webpack_require__(7331);
// EXTERNAL MODULE: ./src/redux/book/index.ts
var book = __webpack_require__(8306);
// EXTERNAL MODULE: ./src/redux/book/dto.ts
var dto = __webpack_require__(5255);
// EXTERNAL MODULE: ./src/redux/book/selectors.ts
var selectors = __webpack_require__(768);
;// CONCATENATED MODULE: ./src/redux/categories/selectors.ts
const allCategories = (state)=>{
    return state.categories.allCategories ?? {
        total: 0,
        items: []
    };
};
const currentCategories = (state)=>{
    return state.categories.currentCategories ?? [];
};

;// CONCATENATED MODULE: ./src/redux/publisher/selectors.ts
const allPublisher = (state)=>{
    return state?.publisher?.allPublisher ?? {
        total: 0,
        items: []
    };
};

// EXTERNAL MODULE: ./src/components/collecttions/index.ts + 2 modules
var collecttions = __webpack_require__(3160);
;// CONCATENATED MODULE: ./src/containers/ProductsContainer/BooksSectionGrid/index.tsx




const BooksSectionGrid = ({ listItem  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        ml: 3,
        display: "flex",
        flexWrap: "wrap",
        children: listItem.map((item, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                mx: 1,
                width: "270px",
                height: "400px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(collecttions/* BookCart */.N, {
                    ...item,
                    name: item.name,
                    price: item.price,
                    thumbnail: item.thumbnail,
                    status: "HOT"
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const ProductsContainer_BooksSectionGrid = (BooksSectionGrid);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/elements/Typography/index.tsx
var Typography = __webpack_require__(2554);
// EXTERNAL MODULE: ./src/configs/navigator.ts
var configs_navigator = __webpack_require__(325);
// EXTERNAL MODULE: ./src/libs/utils/localStorage.ts
var localStorage = __webpack_require__(6747);
// EXTERNAL MODULE: ./src/redux/app/index.ts
var app = __webpack_require__(868);
// EXTERNAL MODULE: ./src/redux/auth/selectors.ts
var auth_selectors = __webpack_require__(4452);
// EXTERNAL MODULE: ./src/redux/cart/index.ts
var cart = __webpack_require__(577);
// EXTERNAL MODULE: ./src/redux/favorite/index.ts
var favorite = __webpack_require__(4593);
;// CONCATENATED MODULE: ./src/containers/ProductsContainer/BooksSectionLine/BookLineItem.tsx













const BookLineItem = ({ id , name , image , price , priceUnDiscount , description , rating , isFavorite ,  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const isAuthenticated = (0,external_react_redux_.useSelector)(auth_selectors/* authSelector */.aF);
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { 0: favoriteHover , 1: setFavoriteHover  } = (0,external_react_.useState)(false);
    const handleAddToCart = ()=>{
        if (isAuthenticated) {
            if (id) {
                dispatch((0,cart/* createCartItem */.aJ)({
                    bookId: id,
                    quantity: 1
                }));
                dispatch((0,app/* setSuccess */.xM)({
                    message: t("notify.add-to-cart.success")
                }));
            } else {
                dispatch((0,app/* setError */.sT)({
                    message: t("notify.add-to-cart.error")
                }));
            }
        } else {
            const cartLocal = (0,localStorage/* getItemDataStorage */.B3)(localStorage/* LocalStorageKey.BookStoreCart */.Fe.BookStoreCart);
            const currentCart = cartLocal ? JSON.parse(cartLocal) : [];
            const isBookOnCart = currentCart.find((item)=>item?.bookId === id
            );
            if (!isBookOnCart) {
                currentCart.push({
                    bookId: id,
                    quantity: 1
                });
                (0,localStorage/* setItemDataStorage */.lg)(localStorage/* LocalStorageKey.BookStoreCart */.Fe.BookStoreCart, JSON.stringify(currentCart));
                dispatch((0,cart/* addItemToCart */.dm)({
                    id: id,
                    quantity: 1,
                    item: {
                        id: id,
                        name: name,
                        thumbnail: image,
                        price: price,
                        priceUnDiscount: priceUnDiscount
                    }
                }));
                dispatch((0,app/* setSuccess */.xM)({
                    message: t("notify.add-to-cart.success")
                }));
            } else {
                dispatch((0,app/* setWarning */.C1)({
                    message: t("notify.add-to-cart.exist")
                }));
            }
        }
    };
    const handleToggleFavoriteClick = ()=>{
        if (!isAuthenticated) {
            dispatch((0,app/* setError */.sT)({
                message: t("unAuthenticated")
            }));
        } else {
            dispatch((0,favorite/* toggleFavorite */.mN)(id));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "list__view",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "thumb",
                style: {
                    minHeight: 270,
                    maxHeight: 270
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `${configs_navigator/* Routers.products.path */.H.products.path}/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "first__img",
                            style: {
                                minHeight: 270,
                                maxHeight: 270
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: image ?? "images/product/1.jpg",
                                alt: "product images"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `${configs_navigator/* Routers.products.path */.H.products.path}/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "second__img animation1",
                            href: "single-product.html",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: image ?? "images/product/1.jpg",
                                alt: "product images"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `${configs_navigator/* Routers.products.path */.H.products.path}/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: {
                                fontSize: 16,
                                fontWeight: "400"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                                fontWeight: 600,
                                style: {
                                    fontSize: 16
                                },
                                children: name
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Rating, {
                        name: "size-small",
                        value: rating,
                        size: "small",
                        defaultValue: rating,
                        disabled: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "prize__box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: price
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "old__prize",
                                children: priceUnDiscount
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "cart__action d-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "cart",
                                onClick: handleAddToCart,
                                style: {
                                    cursor: "pointer"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Add to cart"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "wishlist",
                                onClick: handleToggleFavoriteClick,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        cursor: "pointer",
                                        backgroundColor: isFavorite || favoriteHover ? "#ce7852" : "#f5f5f5",
                                        color: isFavorite || favoriteHover ? "#fff" : "#333"
                                    },
                                    onMouseEnter: ()=>setFavoriteHover(true)
                                    ,
                                    onMouseLeave: ()=>setFavoriteHover(false)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "compare",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BooksSectionLine_BookLineItem = (BookLineItem);

;// CONCATENATED MODULE: ./src/containers/ProductsContainer/BooksSectionLine/index.tsx




const BooksSectionLine = ({ listItem  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: listItem.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                my: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BooksSectionLine_BookLineItem, {
                    ...item,
                    id: item.id,
                    rating: item?.rating ?? 0,
                    name: item.name,
                    image: item.thumbnail,
                    price: item.price,
                    description: item.description,
                    isFavorite: !!item?.isFavorite
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const ProductsContainer_BooksSectionLine = (BooksSectionLine);

// EXTERNAL MODULE: ./src/libs/utils/index.ts
var utils = __webpack_require__(9069);
;// CONCATENATED MODULE: ./src/containers/ProductsContainer/SliderRange.tsx





const valuetext = (value)=>{
    return `${value / 10000}đ`;
};
const min = 0;
const max = 500000;
const minDistance = 0;
const SliderRangeMui = (0,material_.styled)(material_.Slider)({
    color: "#222",
    "& .MuiSlider-track": {
        border: "none"
    },
    "& .MuiSlider-thumb": {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit"
        },
        "&:before": {
            display: "none"
        }
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 42,
        height: 42,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#222",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": {
            display: "none"
        },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
        },
        "& > *": {
            transform: "rotate(45deg)"
        }
    }
});
const Button = (0,material_.styled)(material_.Button)({
    width: 110,
    height: 30,
    backgroundColor: "#222",
    color: "#fff",
    ":hover": {
        backgroundColor: "#222"
    },
    ":focus": {
        outline: "none"
    }
});
const SliderRange = ({ onFilter  })=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const [value1, setValue1] = external_react_default().useState([
        min,
        max
    ]);
    const handleChange1 = (event, newValue, activeThumb)=>{
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue1([
                Math.min(newValue[0], value1[1] - minDistance),
                value1[1]
            ]);
        } else {
            setValue1([
                value1[0],
                Math.max(newValue[1], value1[0] + minDistance)
            ]);
        }
    };
    const marks = [
        {
            value: min,
            label: (0,utils/* moneyFormat */.E)(value1[0])
        },
        {
            value: max,
            label: `${(0,utils/* moneyFormat */.E)(value1[1])}${value1[1] === max ? "+" : ""}`
        }, 
    ];
    const handleFilterPrice = ()=>{
        onFilter(value1[0], value1[1]);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        width: "250px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SliderRangeMui, {
                getAriaLabel: ()=>"Minimum distance"
                ,
                value: value1,
                onChange: handleChange1,
                valueLabelDisplay: "auto",
                getAriaValueText: valuetext,
                min: min,
                max: max,
                marks: marks,
                disableSwap: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                onClick: handleFilterPrice,
                children: t("product.filter.filter")
            })
        ]
    });
};
/* harmony default export */ const ProductsContainer_SliderRange = (SliderRange);

;// CONCATENATED MODULE: ./src/containers/ProductsContainer/index.tsx















const ProductsContainer = ()=>{
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { search  } = router.query;
    const dispatch = (0,external_react_redux_.useDispatch)();
    // const [filterPrice, setFilterPrice] = useState<{
    //   startPrice: number;
    //   endPrice: number;
    // }>({
    //   startPrice: 0,
    //   endPrice: 0,
    // });
    const { 0: queries , 1: setQueries  } = (0,external_react_.useState)({
        search: search ?? "",
        category: "",
        publisher: "",
        limit: configs/* ITEM_PER_PAGE */.BJ,
        offset: 0,
        cloudTag: ""
    });
    const cloudtag = (0,external_react_redux_.useSelector)(selectors/* allCloudtag */.y4);
    const listCategories = (0,external_react_redux_.useSelector)(allCategories);
    const listPublisher = (0,external_react_redux_.useSelector)(allPublisher);
    const listBook = (0,external_react_redux_.useSelector)(selectors/* allBookByFilter */.o$);
    // console.log(listBook);
    (0,external_react_.useEffect)(()=>{
        dispatch((0,book/* allBooksByFilter */.Wo)(queries));
    }, [
        queries
    ]);
    const handleCategoryClick = (id)=>{
        if (id) {
            setQueries((pre)=>{
                return {
                    ...pre,
                    category: id
                };
            });
        } else {
            setQueries((pre)=>{
                return {
                    ...pre,
                    category: ""
                };
            });
        }
    };
    const handlePublisherClick = (id)=>{
        if (id) {
            setQueries((pre)=>{
                return {
                    ...pre,
                    publisher: id
                };
            });
        } else {
            setQueries((pre)=>{
                return {
                    ...pre,
                    publisher: ""
                };
            });
        }
    };
    const handleSlideRange = (startPrice, endPrice)=>{
        if (endPrice !== max) {
            setQueries((pre)=>{
                return {
                    ...pre,
                    ...{
                        startPrice,
                        endPrice
                    }
                };
            });
        } else {
            setQueries((pre)=>{
                delete pre["endPrice"];
                return {
                    ...pre,
                    ...{
                        startPrice
                    }
                };
            });
        }
    };
    const handlePaginationChange = (e, value)=>{
        setQueries((pre)=>{
            return {
                ...pre,
                offset: (value - 1) * configs/* ITEM_PER_PAGE */.BJ
            };
        });
    };
    const handleClickCloudTag = (value)=>{
        setQueries((pre)=>{
            return {
                ...pre,
                cloudTag: value
            };
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "wrapper",
        id: "wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ht__bradcaump__area bg-image--6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bradcaump__inner text-center"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-shop-sidebar left--sidebar bg--white section-padding--lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shop__sidebar",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                                            className: "wedget__categories poroduct--cat",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "wedget__title",
                                                    children: t("product.filter.category")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                onClick: ()=>handleCategoryClick()
                                                                ,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        t("product.filter.all"),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        listCategories.items.map((item)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                style: {
                                                                    cursor: "pointer"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    onClick: ()=>handleCategoryClick(item.id)
                                                                    ,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        children: [
                                                                            item.name,
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                        ]
                                                                    })
                                                                })
                                                            }, item.id);
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                                            className: "wedget__categories poroduct--cat",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "wedget__title",
                                                    children: t("product.filter.publisher")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                onClick: ()=>handlePublisherClick()
                                                                ,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        t("product.filter.all"),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        listPublisher.items.map((item)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                style: {
                                                                    cursor: "pointer"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                                    onClick: ()=>handlePublisherClick(item.id)
                                                                    ,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        children: [
                                                                            item.name,
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                        ]
                                                                    })
                                                                })
                                                            }, item.id);
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                                            className: "wedget__categories pro--range",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "wedget__title",
                                                    children: t("product.filter.price")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "content-shopby",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "price_filter s-filter clear",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductsContainer_SliderRange, {
                                                            onFilter: handleSlideRange
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                                            className: "wedget__categories poroduct--tag",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "wedget__title",
                                                    children: t("product.filter.cloud-tag")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: cloudtag.items.map((item, i)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            onClick: ()=>handleClickCloudTag(item)
                                                            ,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: item
                                                            })
                                                        }, i);
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-9 col-12 order-1 order-lg-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "shop__list nav justify-content-center",
                                                    role: "tablist",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-item nav-link active",
                                                            "data-toggle": "tab",
                                                            href: "#nav-grid",
                                                            role: "tab",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-th"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-item nav-link",
                                                            "data-toggle": "tab",
                                                            href: "#nav-list",
                                                            role: "tab",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-list"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "tab__container",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "shop-grid tab-pane fade show active",
                                                id: "nav-grid",
                                                role: "tabpanel",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductsContainer_BooksSectionGrid, {
                                                            listItem: (0,dto/* transformBookCart */.D)(listBook.items ?? [])
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Pagination, {
                                                            count: Math.ceil(listBook.total / configs/* ITEM_PER_PAGE */.BJ),
                                                            shape: "rounded",
                                                            onChange: handlePaginationChange
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "shop-grid tab-pane fade",
                                                id: "nav-list",
                                                role: "tabpanel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "list__view__wrapper",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProductsContainer_BooksSectionLine, {
                                                        listItem: (0,dto/* transformBookCart */.D)(listBook.items ?? [])
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "quickview-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal fade",
                    id: "productmodal",
                    tabIndex: -1,
                    role: "dialog",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "modal-dialog modal__container",
                        role: "document",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "modal-header modal__header",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "aria-hidden": "true",
                                            children: "\xd7"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "modal-body",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "modal-product",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "product-images",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-image images",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        alt: "big images",
                                                        src: "images/product/big-img/1.jpg"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "product-info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        children: "Simple Fabric Bags"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "rating__and__review",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "rating",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "ti-star"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "ti-star"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "ti-star"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "ti-star"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "ti-star"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "review",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: "4 customer reviews"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "price-box-3",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "s-price-box",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "new-price",
                                                                    children: "$17.20"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "old-price",
                                                                    children: "$45.00"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "quick-desc",
                                                        children: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "select__color",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: "Select color"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "color__list",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "red",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "Red",
                                                                            href: "#",
                                                                            children: "Red"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "gold",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "Gold",
                                                                            href: "#",
                                                                            children: "Gold"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "orange",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "Orange",
                                                                            href: "#",
                                                                            children: "Orange"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "orange",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "Orange",
                                                                            href: "#",
                                                                            children: "Orange"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "select__size",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: "Select size"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "color__list",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "l__size",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "L",
                                                                            href: "#",
                                                                            children: "L"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "m__size",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "M",
                                                                            href: "#",
                                                                            children: "M"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "s__size",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "S",
                                                                            href: "#",
                                                                            children: "S"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "xl__size",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "XL",
                                                                            href: "#",
                                                                            children: "XL"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "xxl__size",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "XXL",
                                                                            href: "#",
                                                                            children: "XXL"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "social-sharing",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "widget widget_socialsharing_widget",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "widget-title-modal",
                                                                    children: "Share this product"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "social__net social__net--2 d-flex justify-content-start",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "facebook",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "rss social-icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "zmdi zmdi-rss"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "linkedin",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "linkedin social-icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "zmdi zmdi-linkedin"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "pinterest",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "pinterest social-icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "zmdi zmdi-pinterest"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "tumblr",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                className: "tumblr social-icon",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "zmdi zmdi-tumblr"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "addtocart-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Add to cart"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const containers_ProductsContainer = (ProductsContainer);


/***/ }),

/***/ 9724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage),
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
/* harmony import */ var _containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5643);
/* harmony import */ var _libs_hocs_getServerSideWithPublicRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8165);
/* harmony import */ var _redux_book__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8306);
/* harmony import */ var _redux_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3119);
/* harmony import */ var _redux_publisher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__]);
_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ProductPage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { search  } = router.query;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const queries = {
            limit: _configs__WEBPACK_IMPORTED_MODULE_5__/* .ITEM_PER_PAGE */ .BJ
        };
        if (search) {
            queries["search"] = search;
        }
        dispatch((0,_redux_categories__WEBPACK_IMPORTED_MODULE_9__/* .getAllCategory */ .KQ)());
        dispatch((0,_redux_publisher__WEBPACK_IMPORTED_MODULE_10__/* .getAllPublishers */ .k8)());
        dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_8__/* .allBooksByFilter */ .Wo)({
            ...queries
        }));
        dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_8__/* .cloudtag */ .wq)());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
    });
};
const getServerSideProps = (0,_libs_hocs_getServerSideWithPublicRoute__WEBPACK_IMPORTED_MODULE_7__/* .getServerSideWithPublicRoute */ .R)(async (_, store)=>{
    return {
        props: {}
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,92,554,238,225,682,82,165,768,736], () => (__webpack_exec__(9724)));
module.exports = __webpack_exports__;

})();