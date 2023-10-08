import './Card.css'

const card = () => {
    return (
        <div id="main-campagin-area" className="animatedReveal">
            <h2 className="section-title">Explore campaigns</h2>

            <div className="newReveal big-box product-detail desktopCampaignBox sold-out">

                {/* Card Component */}
                <div className="campaign-box-single creditCampaign">
                    <div className="campaign-icons nogauge">
                    </div>
                    <div className="campaign-box-left">
                        <div className="idealz-credit-campaign-box-upper-bar isTimelimited red soldout">
                            <div className="single-upper-bar" >
                                Closing in
                            </div>
                            {/* style="background-color: #FF2431; color: #FFFFFF" */}
                        </div>
                        <div className="campaign-image">
                            <div className="miniSlider newS0 swiper-container-initialized swiper-container-horizontal">
                                <div className="swiper-wrapper" id="swiper-wrapper-c539221949fd673b" aria-live="polite">
                                    {/* Inner wala photo swiper */}
                                    <div className="swiper-slide swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 2">
                                        {/* style="width: 519px;" */}
                                        <span className="quickview">
                                            <img src="https://www.idealz.com/on/demandware.static/-/Sites-idealz-master-catalog/default/dw19f8b772/images/campaignsliderimage/CG-03269_dashboard_image1.png" className="lozad" alt="[[PrizeValue]] Cash campaignSliderImages" />
                                        </span>
                                    </div>
                                    {/* Inner wala photo swiper - Need to make it like swiper*/}


                                </div>
                                {/* Golas for making them move */}
                                <div className="swiper-pagination swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span></div>
                                {/* Golas for making them move */}

                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div>

                        <div className="base-product-image noBorder isCreditCampaign">

                            <a href="javascript:;" className="js-info-creditApplied" data-id="popover-IB_0003">
                                <div className="credit-box-image">
                                    {/* style="background-color:#1FC407" */}
                                    <div className="small">MyurbanFarm credit</div>
                                    <div className="creditValue">AED3</div>
                                </div>
                                <span className="info-tick">
                                    <img src="/on/demandware.static/Sites-Idealz-ae-Site/-/default/dw7555dd30/images/components/icon-info.png" alt="" />
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className="campaign-box-copy-section">
                        <h2>Win</h2>
                        <h3 className="prize-title">
                            <b>AED10,000 Cash</b>
                        </h3>
                        <div className="campaign-information">
                            <h4>Buy a idealzbasics credit and make it yours! <span>
                                <div className="campaign-price">
                                    <span className="value" content="3.00">
                                        AED3.00
                                    </span>
                                </div></span></h4>
                        </div>
                        <div className="cart-super-actions">
                            <div className="campaign-action">
                                <a href="https://www.idealz.com/CG-03278.html" className="learn-more-link">Prize Details</a>


                                <button type="button" className="minus-from-cart-btn icon-minus-2 js-minus">
                                </button>

                                <button className="global-btn add-to-cart-global add-to-cart-btn js-plus add-to-cart-button is-disabled">
                                    Add to Cart
                                </button>

                            </div>
                            <div className="bottom-ticker ticker0 swiper-container-initialized swiper-container-vertical">
                                <div className="swiper-wrapper" id="swiper-wrapper-75727ab25edba1ac" aria-live="off">
                                    <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 1">
                                        {/* style="height: 28px; margin-bottom: 12px;" */}
                                        <div className="inner-slide">
                                            <h4>
                                                Draw Date: 10 October, 2023 or earlier based on the time passed.
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div>
                    </div>
                    <ul className="new-social-icon">


                        <li>
                            <div className="add-to-wishlist-product">
                                <a className="js-add-wishlist wishlist-icon js-add-to-wish-list not" >
                                    <span className="wishIcon"></span>
                                    <span className="toolTip">Add to Wishlist</span>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="share-trigger-box">
                                <a href="javascript:;" className="share-trigger">
                                    <img src="/on/demandware.static/Sites-Idealz-ae-Site/-/default/dw294c42f5/images/newdesktop/sharenew.png" alt="" />
                                    <span className="toolTip">Share</span>
                                </a>
                                <ul className="shareable-links">
                                    <li>
                                        <a href="/" title="Share [[PrizeValue]] Cash on Facebook" aria-label="Share [[PrizeValue]] Cash on Facebook" className="icon-facebook share-icons" target="_blank">
                                            share on facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" title="Share a link to [[PrizeValue]] Cash on Twitter" aria-label="Share a link to [[PrizeValue]] Cash on Twitter" className="icon-twitter share-icons" target="_blank">
                                            share on twitter
                                        </a>
                                    </li><li>
                                        <a href="/" title="Create a Pinterest Pin for [[PrizeValue]] Cash" aria-label="Create a Pinterest Pin for [[PrizeValue]] Cash" className="share-icons icon-linkedin " target="_blank">
                                            share on linkedin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Card Component */}




            </div>

        </div>
    )
}

export default card

/*

*/ 