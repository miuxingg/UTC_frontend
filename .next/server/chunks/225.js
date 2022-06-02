"use strict";
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 4149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _en_common_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(699);
/* harmony import */ var _vi_common_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);
i18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    lng: "en",
    ns: [
        "common"
    ],
    defaultNS: "common",
    resources: {
        en: {
            common: _en_common_json__WEBPACK_IMPORTED_MODULE_2__
        },
        vi: {
            common: _vi_common_json__WEBPACK_IMPORTED_MODULE_3__
        }
    },
    interpolation: {
        escapeValue: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B3": () => (/* binding */ getItemDataStorage),
/* harmony export */   "Fe": () => (/* binding */ LocalStorageKey),
/* harmony export */   "JD": () => (/* binding */ setItemStorage),
/* harmony export */   "OC": () => (/* binding */ getItemStorage),
/* harmony export */   "Zv": () => (/* binding */ removeItemDataStorage),
/* harmony export */   "lg": () => (/* binding */ setItemDataStorage)
/* harmony export */ });
var LocalStorageKey;
(function(LocalStorageKey) {
    LocalStorageKey["BookStoreCart"] = "book_store_cart";
})(LocalStorageKey || (LocalStorageKey = {}));
const setItemStorage = (key, value)=>{
    if (true) return;
    localStorage.setItem(key, value);
};
const getItemStorage = (key)=>{
    if (true) return null;
    return localStorage.getItem(key);
};
const setItemDataStorage = (key, value)=>{
    if (true) return;
    localStorage.setItem(key, value);
};
const getItemDataStorage = (key)=>{
    if (true) return null;
    return localStorage.getItem(key);
};
const removeItemDataStorage = (key)=>{
    if (true) return null;
    return localStorage.removeItem(key);
};


/***/ }),

/***/ 4452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rd": () => (/* binding */ profileSelector),
/* harmony export */   "aF": () => (/* binding */ authSelector)
/* harmony export */ });
/* unused harmony exports isResetPasswordSuccess, isUpdateProfileSuccess, isVerifySuccess */
const authSelector = (state)=>{
    return !!state.auth.isAuthenticated;
};
const profileSelector = (state)=>state.auth.profile
;
const isResetPasswordSuccess = (state)=>state.auth.isResetPasswordSuccess
;
const isUpdateProfileSuccess = (state)=>state.auth.isUpdateProfileSuccess
;
const isVerifySuccess = (state)=>state.auth.isVerifyEmailSuccess
;


/***/ }),

/***/ 699:
/***/ ((module) => {

module.exports = JSON.parse('{"unAuthenticated":"UnAuthenticated","password":"Password","yup.empty":"{{field}} empty","yup.password.not.length":"The password is too short","yup.password.comfirm":"Comfirm password not equal password","home.title.allProduct":"All Products","home.title.newProduct":"New Products","home.title.combo":"Combo","home.title.best-saler":"Best saler","home.description.new-product":"Our store always updates readers with the latest books of all genres","home.description.all-products":"All products are on sale in the store","home.description.combo":"Attractive books that readers should experience","home.description.best-saler":"The best selling products on the store","header.language.vi":"Vietnamese","header.language.en":"English","login.email":"Email","login.password":"Password","login.login":"Login","login.remember":"Remember me","login.lost-password":"Lost your password?","login.sign-in":"Sign in","login.forgot-password-button":"Submit","forgot-password":"Forgot Password","forgot-content-1":"Please check ","forgot-content-2":"to receive a new password","incorrect.email":"Incorrect Email","incorrect.password":"Incorrect Password","register.register":"Register","register.comfirm":"Comfirm password","register.submit":"Register","register.first-name":"First name","register.last-name":"Last name","register.email-verify-1":"You have successfully registered an account. Please check ","register.email-verify-2":"for verification","cart.title.image":"Image","cart.title.product":"Product","cart.title.price":"Price","cart.title.quantity":"Quantity","cart.title.total":"Total","cart.title.remove":"Remove","cart.title.coupon.code":"Coupon Code","cart.title.apply.code":"Apply Code","cart.title.update.cart":"Update Cart","cart.title.checkout":"Check Out","cart.title.cart.total":"Cart total","cart.title.sub.total":"Sub Total","cart.title.grand.total":"Grand Total","header.home":"Home","header.shop":"Shop","header.books":"Books","header.cart":"Cart","header.checkout":"Checkout","header.blog":"Blog","header.contact":"Contact","header.close":"Close","header.cart.item":"items","header.cart.subtotal":"Cart Subtotal","header.cart.go-checkout":"Go to Checkout","header.cart.qty":"Qty","header.cart.view-cart":"View and edit cart","header.profile.language":"Language","header.profile.my-account":"My Account","header.profile.logout":"Logout","header.profile.login":"Login","header.profile.register":"Register","header.profile.history":"My order","header.profile.profile":"Profile","checkout-history.table.image":"Thumbnail","checkout-history.table.name":"Name","checkout-history.table.author":"Author","checkout-history.table.quantity":"Quantity","checkout-history.table.amount":"Amount","checkout-history.table.stt":"No","checkout-history.table.id":"Id","checkout-history.table.date":"Date","checkout-history.table.address":"address","checkout-history.table.total-amount":"Total amount","checkout-history.table.empty":"Empty","checkout-history.table.pending":"Waiting","checkout-history.table.shipping":"Shipping","checkout-history.table.success":"Delivered","checkout-history.table.delete":"Delete","checkout-history.table.action":"Action","checkout-history.popup.remove.confirm":"Are you sure you want to delete this order? ","checkout-history.popup.button.cancel":"Cancel","checkout-history.popup.button.accept":"Accept","checkout-history.notify.success":"You have successfully cancel orders","checkout-history.notify.failed":"Action failed","product.filter.all":"All","product.filter.filter":"Filter","product.filter.category":"Filter by categories","product.filter.publisher":"Filter by publishers","product.filter.price":"Filter by price","product.filter.cloud-tag":"Filter by cloud-tag","product-detail.category":"Categories","product-detail.share":"Share","product-detail.combo":"List book in combo","product-detail.detail":"Details","product-detail.summary":"Summary","product-detail.review":"Reviews","product-detail.add-cart":"Add to cart","product-detail.review.custom-review":"Customer Review","product-detail.review.see-more":"See more ({{total}}) comments...","product-detail.review.your-review":"Your review","product-detail.review.rating":"Rating","product-detail.review.review-content":"Review","product-detail.review.submit-review":"Submit review","check-out.shipping.title":"Shipping details","check-out.shipping.first-name":"First name","check-out.shipping.last-name":"Last name","check-out.shipping.province":"Province","check-out.shipping.districts":"District","check-out.shipping.wards":"Wards","check-out.shipping.private-home":"Private home","check-out.shipping.phone":"Phone number","check-out.shipping.emails":"Email address","check-out.order.your-order":"Your order","check-out.order.products":"Product","check-out.order.total":"Total","check-out.order.cart-sub-total":"Cart subtotal","check-out.order.shipping":"Shipping","check-out.order.discount":"Discount","check-out.order.order-total":"Order total","check-out.order.check-out":"Check out","notify.add-to-cart.error":"Add to cart error","notify.add-to-cart.success":"Add to cart success","notify.checkout.error":"Purchase failed. Payment error","notify.add-to-cart.exist":"Product is exist","notify.checkout.success":"Checkout success","notify.checkout.empty-product":"Cart empty","notify.checkout.product-not-enough":"Product quantity is not enough","notify.checkout.payment-amount-small":"The payment amount is too small to make using this payment method","submit.update":"Submit","change-password":"Change password","change-password.current":"Current password","change-password.new":"New password","change-password.comfirm":"Comfirm new password","change-password.link-to-profile":"Profile","change-password.success":"Change password success","incorrect.duplicatePassword":"The new password cannot be the same as the current password","voucher.title":"Shop voucher","voucher.click-here":"Click here","voucher.list-voucher":"List voucher","voucher.expire":"Valid ","voucher.expire-from":"from ","voucher.expire-to":"to ","voucher.submit":"Submit"}');

/***/ }),

/***/ 1439:
/***/ ((module) => {

module.exports = JSON.parse('{"unAuthenticated":"Bạn chưa đăng nhập","password":"Mật khẩu","yup.empty":"{{field}} không được để trống","yup.password.not.length":"Mật khẩu quá ngắn","yup.password.comfirm":"Xác nhận mật khẩu không chính xác","home.title.allProduct":"Tất cả sản phẩm","home.title.newProduct":"Sản phẩm mới","home.title.combo":"Sách theo bộ","home.title.best-saler":"Sản phẩm bán chạy nhất","home.description.new-product":"Cửa hàng chúng tôi luôn luôn cập nhật cho quý đọc giả những cuốn sách mới nhất với tất cả các thể loại","home.description.all-products":"Tất cả sản phẩm đang được bày bán trên cửa hàng","home.description.combo":"Những bộ sách hấp dẫn mà đọc giả nên trải nghiệm","home.description.best-saler":" Những sản phẩm bán chạy nhất tại cửa hàng","header.language.vi":"Việt Nam","header.language.en":"Tiếng Anh","login.email":"Email","login.password":"Mật khẩu","login.login":"Đăng nhập","login.remember":"Ghi nhớ","login.lost-password":"Quên mật khẩu?","login.sign-in":"Đăng nhập","forgot-password":"Quên mật khẩu","forgot-content-1":"Bạn vui lòng vào địa chỉ ","forgot-content-2":"để nhận mật khẩu mới","login.forgot-password-button":"Xác nhận","incorrect.email":"Email không tồn tại","incorrect.password":"Mật khẩu không chính xác","register.register":"Đăng kí","register.comfirm":"Xác nhận mật khẩu","register.submit":"Đăng kí","register.first-name":"Họ","register.last-name":"Tên","register.email-verify-1":"Bạn đã đăng kí tài khoản thành công. Vui lòng kiểm tra ","register.email-verify-2":"để xác thực","cart.title.image":"Ảnh","cart.title.product":"Sản phẩm","cart.title.price":"Giá","cart.title.quantity":"Số lượng","cart.title.total":"Tổng tiền","cart.title.remove":"Xoá","cart.title.coupon.code":"Mã giảm giá","cart.title.apply.code":"Áp dụng mã","cart.title.update.cart":"Cập nhật","cart.title.checkout":"Thanh toán","cart.title.cart.total":"Thành tiền","cart.title.sub.total":"Giảm giá","cart.title.grand.total":"Tổng tiền","header.home":"Trang chủ","header.shop":"Sản phẩm","header.books":"Books","header.cart":"Giỏ hàng","header.checkout":"Thanh toán","header.blog":"Blog","header.contact":"Liên hệ","header.close":"Đóng","header.cart.item":"sản phẩm","header.cart.subtotal":"Tổng tiền","header.cart.go-checkout":"Thanh toán","header.cart.qty":"Sl","header.cart.view-cart":"Thay đổi giỏ hàng","header.profile.language":"Ngôn ngữ","header.profile.my-account":"Tài khoản","header.profile.logout":"Đăng xuất","header.profile.login":"Đăng nhập","header.profile.register":"Đăng kí","header.profile.history":"Đơn hàng của tôi","header.profile.profile":"Trang cá nhân","checkout-history.table.image":"Ảnh","checkout-history.table.name":"Tên sản phẩm","checkout-history.table.author":"Tác giả","checkout-history.table.quantity":"Số lượng","checkout-history.table.amount":"Giá tiền","checkout-history.table.stt":"Stt","checkout-history.table.id":"Mã đơn hàng","checkout-history.table.date":"Ngày tạo","checkout-history.table.address":"Địa chỉ nhận","checkout-history.table.total-amount":"Thành tiền","checkout-history.table.empty":"Đơn hàng trống","checkout-history.table.pending":"Chờ xác nhận","checkout-history.table.shipping":"Đang giao","checkout-history.table.success":"Đã giao","checkout-history.table.delete":"Đã xoá","checkout-history.table.action":"Huỷ","checkout-history.popup.remove.confirm":"Bạn có chắc chắn muốn xoá đơn hàng: ","checkout-history.popup.button.cancel":"Huỷ","checkout-history.popup.button.accept":"Đồng ý","checkout-history.notify.success":"Bạn đã huỷ đơn hàng thành công","checkout-history.notify.failed":"Hành động thất bại","product.filter.all":"Tất cả","product.filter.filter":"Lọc","product.filter.category":"Lọc theo thể loại","product.filter.publisher":"Lọc theo nhà xuất bản","product.filter.price":"Lọc theo giá","product.filter.cloud-tag":"Lọc theo cloud-tag","product-detail.category":"Thể loại","product-detail.share":"Chia sẻ","product-detail.combo":"Đầu sách trong bộ","product-detail.detail":"Mô tả","product-detail.summary":"Tóm tắt","product-detail.review":"Đánh giá","product-detail.add-cart":"Thêm giỏ hàng","product-detail.review.custom-review":"Khách hàng đánh giá","product-detail.review.see-more":"Xem thêm ({{total}}) bình luận...","product-detail.review.your-review":"Nhận xét của bạn","product-detail.review.rating":"Đánh giá","product-detail.review.review-content":"Nội dung nhận xét","product-detail.review.submit-review":"Gửi đánh giá","check-out.shipping.title":"Chi tiết giao hàng","check-out.shipping.first-name":"Họ","check-out.shipping.last-name":"Tên","check-out.shipping.province":"Tỉnh/thành phố","check-out.shipping.districts":"Quận/huyện","check-out.shipping.wards":"Xã/đường","check-out.shipping.private-home":"Nhà riêng","check-out.shipping.phone":"Số điện thoại","check-out.shipping.emails":"Địa chỉ email","check-out.order.your-order":"Thông tin thanh toán","check-out.order.products":"Sản phẩm","check-out.order.total":"Tổng","check-out.order.cart-sub-total":"Tổng tiền","notify.add-to-cart.success":"Thêm vào giỏ hàng thành công","check-out.order.shipping":"Chi phí giao","check-out.order.discount":"Giảm giá","check-out.order.order-total":"Thành tiền","check-out.order.check-out":"Thanh toán","error.add-to-cart.error":"Thêm vào giỏ hàng thất bại","error.add-to-cart.success":"Thêm vào giỏ hàng thành công","error.add-to-cart.exist":"Sản phẩm đã tồn tại","notify.checkout.success":"Thanh toán thành công","notify.checkout.error":"Mua hàng thất bại. Lỗi thanh toán","notify.checkout.empty-product":"Không có sản phẩm nào để thanh toán","notify.checkout.product-not-enough":"Số lượng sản phẩm không đủ","notify.checkout.payment-amount-small":"Số tiền thanh toán quá nhỏ để thực hiện bằng phương thức thanh toán này","submit.update":"Cập nhật","change-password":"Đổi mật khẩu","change-password.current":"Mật khẩu hiện tại","change-password.new":"Mật khẩu mới","change-password.comfirm":"Xác nhận mật khẩu mới","change-password.link-to-profile":"Trang cá nhân","change-password.success":"Đổi mật khẩu thành công","incorrect.duplicatePassword":"Mật khẩu mới không được giống mật khẩu cũ","voucher.title":"Áp dụng mã giảm giá","voucher.click-here":"Vào đây để chọn","voucher.list-voucher":"Danh sách mã giảm giá","voucher.expire":"Có giá trị ","voucher.expire-from":"từ ","voucher.expire-to":"đến ","voucher.submit":"Áp dụng"}');

/***/ })

};
;