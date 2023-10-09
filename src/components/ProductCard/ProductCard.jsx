import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className="closing-soon-campaigns animatedReveal">
      <h2 className="section-title">Selling Fast</h2>
      <div className="swiper-container swiper-container-initialized swiper-container-horizontal">

        <div className="swiper-wrapper" id="swiper-wrapper-3f7e8106a21219150" aria-live="polite">


          {/* Card Component */}
          <div className="swiper-slide sliderReveal swiper-slide-visible swiper-slide-active" role="group" aria-label="3 / 6">
            {/* style="width: 259.333px; margin-right: 16px;" */}
            <div className="campaign-box-ui closing-soon__item product-detail" data-pid="LS-00262">
              <div className="recommended-timer red">
                <div className="single-upper-bar">
                  Closing in <b className="time-remaining show" data-seconds="11889">03 : 17 : 21</b>
                </div>
              </div>
              <div className="image-container">
                <span data-href="/on/demandware.store/Sites-Idealz-ae-Site/en/Product-ShowQuickView?pid=LS-00262" data-toggle="modal" data-target="#quickViewModal" data-module="Quick View" className="js-analytics-track quickview" data-pid="LS-00262">
                  <img src="https://www.idealz.com/on/demandware.static/-/Sites-idealz-master-catalog/default/dwa3081f91/images/prize/440-LS-00251.png" alt="50 entries into our US$1,000,000 campaign prize" />
                </span>
              </div>
              <h3>Get a chance to <b>WIN</b></h3>
              <h2 className="closing-soon__item-title">
                50 entries into our US$1,000,000 campaign
              </h2>
              <div className="campaign-action ">
                <button type="button" className="minus-from-cart-btn icon-minus-2 js-minus" data-type="minus" data-field="quantity-LS-00262" data-lineitem-uuid="null" data-refresh="null" data-pid="LS-00262" data-remove-action="/on/demandware.store/Sites-Idealz-ae-Site/en/Cart-RemoveProductLineItem" data-module="Closing Soon">
                </button>
                <input type="text" name="quantity-LS-00262" data-already-added="1" className="cart-quantity input-number" min="1" max="999.0" data-gtag-remove-event="remove_quantity" data-gtag-remove-param="[object Object]" data-gtag-add-event="add_quantity" data-gtag-add-param="[object Object]" value="1" />
                <input type="hidden" className="add-to-cart-url" value="/on/demandware.store/Sites-Idealz-ae-Site/en/Cart-AddProduct" data-action-update="/on/demandware.store/Sites-Idealz-ae-Site/en/Cart-UpdateQuantity" />
                <button className="global-btn  add-to-cart-global add-to-cart-btn  js-plus add-to-cart-button ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* Card Component */}

          {/* 2nd type of Card Component */}


          <div className="swiper-slide sliderReveal swiper-slide-visible swiper-slide-next" role="group" aria-label="6 / 6">
            {/* style="width: 259.333px; margin-right: 16px;"  */}
            <div className="campaign-box-ui closing-soon__item product-detail" >
              <div className="sold-out-bar sold-bar">
                <p>532 sold out of 685</p>
                <div className="sold-out-indicator ">

                  {/* Filling component of the sold-out-indicator */}


                  {/* <div className="item-indicator closing-campaign blink" data-circle="78" style="width: 78%;"></div> */}
                </div>
              </div>
              <div className="image-container">
                <span data-href="/on/demandware.store/Sites-Idealz-ae-Site/en/Product-ShowQuickView?pid=EL-01381" data-toggle="modal" data-target="#quickViewModal" data-module="Quick View" className="js-analytics-track quickview" data-pid="EL-01381">
                  <img src="https://www.idealz.com/on/demandware.static/-/Sites-idealz-master-catalog/default/dw345cee0c/images/prize/440-EL-01319.png" alt="Galaxy Z Flip5 prize" />
                </span>
              </div>
              <h3>Get a chance to <b>WIN</b></h3>
              <h2 className="closing-soon__item-title">
                Galaxy Z Flip5
              </h2>
              <div className="campaign-action ">
                <button type="button" className="minus-from-cart-btn icon-minus-2 js-minus" >
                </button>
                <input type="text" name="quantity-EL-01381" data-already-added="1" className="cart-quantity input-number" min="1" max="154.0" data-gtag-remove-event="remove_quantity" data-gtag-remove-param="[object Object]" data-gtag-add-event="add_quantity" data-gtag-add-param="[object Object]" value="1" />
                <input type="hidden" className="add-to-cart-url" value="/on/demandware.store/Sites-Idealz-ae-Site/en/Cart-AddProduct" data-action-update="/on/demandware.store/Sites-Idealz-ae-Site/en/Cart-UpdateQuantity" />
                <button className="global-btn  add-to-cart-global add-to-cart-btn  js-plus add-to-cart-button ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* 2nd type of Card Component */}


        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
  )
}

export default ProductCard;


