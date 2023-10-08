import './Banner.css'
const Banner = () => {
    return (
        <div id="main-page-slider" className="animatedReveal">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                <div className="swiper-wrapper" id="swiper-wrapper-81e910a34910a15286" aria-live="off" >
                    {/* style="transition: all 0ms ease 0s; transform: translate3d(-810px, 0px, 0px);" */}
                    <div className="swiper-slide content-box swiper-slide-1" role="group" aria-label="1 / 2">
                        {/* style="background-image: url(&quot;https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dw963fc165/images/newdesktop/homepage/porsche-big-banner-opti.png&quot;); width: 810px;" */}
                        <div className="content-right align-left no-bg">
                            <h3 >Win</h3>
                            <h4 >2023 Porsche 911 Carrera GCC</h4>
                            <h5 >Buy Idealzbasics Credit<br />and make it yours!</h5>
                            <a href="/CR-00097.html" className="normal">See details</a>
                        </div>
                    </div>

                    <div className="swiper-slide content-box swiper-slide-2" role="group" aria-label="2 / 2">
                        {/* style="background-image: url(&quot;https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dw8a879327/images/homepage/5500-winner-banner-en-opti.png&quot;); width: 810px;" */}
                        <div className="content-right align-left no-bg"></div>
                    </div>
                </div>
                <div className="swiper-button-prev" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-81e910a34910a15286" aria-disabled="false" ></div>
                <div className="swiper-button-next swiper-button-disabled" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-81e910a34910a15286" aria-disabled="true" ></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

        </div>
    )
}

export default Banner

