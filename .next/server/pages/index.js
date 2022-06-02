"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_HomePageContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/collecttions/index.ts + 2 modules
var collecttions = __webpack_require__(3160);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBackIosNew"
var ArrowBackIosNew_ = __webpack_require__(5780);
var ArrowBackIosNew_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIosNew_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForwardIos"
var ArrowForwardIos_ = __webpack_require__(1658);
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_);
;// CONCATENATED MODULE: ./src/components/elements/MultipleSlider/index.tsx

/* eslint-disable require-jsdoc */ 




const PrevButton = (0,material_.styled)((ArrowBackIosNew_default()))({
    color: "#000 !important",
    left: "-55px !important",
    top: "43% !important"
});
const NextButton = (0,material_.styled)((ArrowForwardIos_default()))({
    color: "#000 !important",
    top: "43% !important"
});
const MultipleSlider = ({ children  })=>{
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        rows: 2,
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
            maxWidth: 1190,
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settings,
                children: children
            })
        })
    });
};
/* harmony default export */ const elements_MultipleSlider = (MultipleSlider);

// EXTERNAL MODULE: ./src/components/collecttions/BookCard/index.tsx
var BookCard = __webpack_require__(8980);
;// CONCATENATED MODULE: ./src/components/collecttions/MultipleBookSlider/index.tsx





const MultipleBookSlider = ({ listItem , title , description ,  })=>{
    const newTitle = title.split(" ");
    // const data = [...listItem, ...listItem].map((item) => {
    //   return item;
    // });
    const data = [
        listItem[0],
        listItem[1],
        listItem[2],
        listItem[3],
        listItem[4],
        listItem[5],
        listItem[6],
        listItem[7],
        listItem[8],
        listItem[9],
        listItem[10],
        listItem[11],
        listItem[12],
        listItem[13],
        listItem[14],
        listItem[15],
        listItem[16],
        listItem[17], 
    ];
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
                    children: /*#__PURE__*/ jsx_runtime_.jsx(elements_MultipleSlider, {
                        children: data.map((item, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                maxWidth: 270,
                                width: 270,
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
/* harmony default export */ const collecttions_MultipleBookSlider = (MultipleBookSlider);

;// CONCATENATED MODULE: ./src/components/collecttions/NewsLetter/index.tsx


const NewsLetter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wn__newsletter__area",
        style: {
            backgroundImage: `url(images/bg/bg2.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-7 offset-lg-5 col-md-12 col-12 ptb--150",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "section__title text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Stay With Us"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "newsletter__block text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                    action: "#",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "newsletter__box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                placeholder: "Enter your e-mail"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: "Subscribe"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const collecttions_NewsLetter = (NewsLetter);

;// CONCATENATED MODULE: ./src/components/elements/SliderBanner/index.tsx



const AutoPlay = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 10000,
        cssEase: "linear"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        width: "100%",
        height: "500px",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "https://www.openaccess.edu.au/images/_800x330_crop_center-top_100_none/library-banner.jpg",
            alt: "thumb",
            style: {
                width: "100%",
                height: "100%"
            }
        })
    });
};
/* harmony default export */ const SliderBanner = (AutoPlay);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./src/components/templates/OurBlog/BlogCard/index.tsx



const BlogCard = ({ id , title , content , createdAt  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-6 col-lg-4 col-sm-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "post__itam",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: content
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "post__time",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "day",
                            children: external_dayjs_default()(createdAt).format("DD/MM/YYYY")
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const OurBlog_BlogCard = (BlogCard);

;// CONCATENATED MODULE: ./src/components/templates/OurBlog/index.tsx



const OurBlog = ({ blogList  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "wn__recent__post bg--gray ptb--80",
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
                                        "Our ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "color--theme",
                                            children: "Blog"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mt--50",
                    children: blogList.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(OurBlog_BlogCard, {
                            ...item
                        }, item.id);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const templates_OurBlog = (OurBlog);

;// CONCATENATED MODULE: ./src/redux/blog/selectors.ts
const allBlog = (state)=>{
    return state.blog?.allBlog ?? [];
};

// EXTERNAL MODULE: ./src/redux/book/dto.ts
var dto = __webpack_require__(5255);
// EXTERNAL MODULE: ./src/redux/book/selectors.ts
var selectors = __webpack_require__(768);
;// CONCATENATED MODULE: ./src/containers/HomePageContainer/index.tsx












const HomePageContainer = ()=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const newBookSelector = (0,external_react_redux_.useSelector)(selectors/* newBook */.wN);
    const booksByCombosSelector = (0,external_react_redux_.useSelector)(selectors/* booksByCombos */.Cz);
    const listBook = (0,external_react_redux_.useSelector)(selectors/* allBookByFilter */.o$);
    const booksBestSaler = (0,external_react_redux_.useSelector)(selectors/* bookBestSaler */.rK);
    const blogList = (0,external_react_redux_.useSelector)(allBlog);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SliderBanner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(collecttions/* BooksSection */.A, {
                listItem: (0,dto/* transformBookCart */.D)(newBookSelector.items),
                title: t("home.title.newProduct"),
                description: t("home.description.new-product")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(collecttions_NewsLetter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(collecttions_MultipleBookSlider, {
                listItem: (0,dto/* transformBookCart */.D)(listBook.items),
                title: t("home.title.allProduct"),
                description: t("home.description.all-products")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(collecttions/* BooksSection */.A, {
                listItem: (0,dto/* transformBookCart */.D)(booksByCombosSelector.items),
                title: t("home.title.combo"),
                description: t("home.description.combo")
            }),
            blogList.length ? /*#__PURE__*/ jsx_runtime_.jsx(templates_OurBlog, {
                blogList: blogList
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(collecttions/* BooksSection */.A, {
                listItem: (0,dto/* transformBookCart */.D)(booksBestSaler.items),
                title: t("home.title.best-saler"),
                description: t("home.description.best-saler")
            })
        ]
    });
};
/* harmony default export */ const containers_HomePageContainer = (HomePageContainer);


/***/ }),

/***/ 7528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ BookStatus)
/* harmony export */ });
var BookStatus;
(function(BookStatus) {
    BookStatus["NONE"] = "";
    BookStatus["HOT"] = "HOT";
    BookStatus["NEW"] = "NEW";
})(BookStatus || (BookStatus = {}));


/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2082);
/* harmony import */ var _containers_HomePageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8734);
/* harmony import */ var _redux_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8306);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_hocs_getServerSideWithPublicRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8165);
/* harmony import */ var _libs_utils_buildQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7528);
/* harmony import */ var _libs_apis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7059);
/* harmony import */ var _redux_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Home = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_4__/* .getNewsBook */ .N6)({
            limit: 20,
            status: _libs_utils_buildQueries__WEBPACK_IMPORTED_MODULE_7__/* .BookStatus.NEW */ .C.NEW
        }));
        dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_4__/* .bookBestSaler */ .rK)());
        dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_4__/* .allBooksByFilter */ .Wo)({
            limit: 20
        }));
        dispatch((0,_redux_book__WEBPACK_IMPORTED_MODULE_4__/* .getBookByCombos */ .Wg)({
            limit: 20
        }));
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_HomePageContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        })
    });
};
const getServerSideProps = (0,_libs_hocs_getServerSideWithPublicRoute__WEBPACK_IMPORTED_MODULE_6__/* .getServerSideWithPublicRoute */ .R)(async (ctx, store)=>{
    const blog = await _libs_apis__WEBPACK_IMPORTED_MODULE_8__/* .apiSdk.blogApi.getAllBlog */ .o.blogApi.getAllBlog({
        limit: 3
    });
    store.dispatch((0,_redux_blog__WEBPACK_IMPORTED_MODULE_9__/* .getAllBlog */ .Ry)(blog));
    return {
        props: {}
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,92,554,238,225,682,82,165,768,736], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();