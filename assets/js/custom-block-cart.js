jQuery(document).ready(function ($) {
    function replaceCartButton() {
        let checkoutButton = $(".wc-block-cart__submit-button");
 
        if (checkoutButton.length && !$(".payu-checkout").length) {
            checkoutButton.hide(); // Existing button hide karein
 
            // Replace button add karein
            checkoutButton.after(
                '<a href="javascript:void(0);" class="wc-block-components-button wp-element-button checkout-button payu-checkout button alt wc-forward">Buy Now with PayU</a>'
            );
        }
    }
 
    // MutationObserver se page change detect karein
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            replaceCartButton();
        });
    });
 
    // Cart container observe karein
    const cartContainer = document.querySelector(".wc-block-cart");
    if (cartContainer) {
        observer.observe(cartContainer, { childList: true, subtree: true });
    }
 
    // Page load hone par function execute karein
    replaceCartButton();
});