import { Fragment } from 'react'
import './WinnerCard.css'
const WinnerCard = () => {
    return (
        <Fragment> 
            <div id="winnerScroller" className="animatedReveal winners-campaign-area winners-body">
                <h2 className="section-title">Winners</h2>
                <p>All our winners are announced in this section.</p>
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper">




                        <div className="swiper-slide sliderReveal swiper-slide-visible swiper-slide-active"  role="group">
                            {/* style="width: 355px; margin-right: 28px;"  aria-label="1 / 25"*/}
                            <div className="winner-campagin-box">



                                <div className="campaign-image">
                                    <img src="https://www.idealz.com/on/demandware.static/-/Sites-idealz-master-catalog/default/dw19f8b772/images/campaignsliderimage/CG-03269_dashboard_image1.png" alt="[[PrizeValue]] Cash winnerProfilePic" className="combineImage lozad" data-loaded="true" />
                                </div>

                                <h4>Congratulations</h4>


                                <div className="winnerInfoBox">
                                    <h5><b>Rasheed MK</b></h5>
                                    <h5>on winning <b>AED25,000 Cash</b></h5>
                                </div>
                                <h6>
                                    <span>Ticket no: CG-03268-084976481</span>
                                    <span>
                                        Announced on:
                                        <span className="dateFixer">11:35 AM</span>
                                        <span className="dateFixer">06 October, 2023</span>
                                    </span>
                                </h6>



                            </div>
                        </div>

                        <div className="swiper-slide sliderReveal swiper-slide-visible swiper-slide-active" role="group">
                            {/* style="width: 355px; margin-right: 28px;"  aria-label="1 / 25"*/}
                            <div className="winner-campagin-box">



                                <div className="campaign-image">
                                    <img src="https://www.idealz.com/on/demandware.static/-/Sites-idealz-master-catalog/default/dw19f8b772/images/campaignsliderimage/CG-03269_dashboard_image1.png" alt="[[PrizeValue]] Cash winnerProfilePic" className="combineImage lozad" data-loaded="true" />
                                </div>

                                <h4>Congratulations</h4>


                                <div className="winnerInfoBox">
                                    <h5><b>Rasheed MK</b></h5>
                                    <h5>on winning <b>AED25,000 Cash</b></h5>
                                </div>
                                <h6>
                                    <span>Ticket no: CG-03268-084976481</span>
                                    <span>
                                        Announced on:
                                        <span className="dateFixer">11:35 AM</span>
                                        <span className="dateFixer">06 October, 2023</span>
                                    </span>
                                </h6>



                            </div>
                        </div>




                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </Fragment>
    )
}

export default WinnerCard

    {/*
<section id = "winnerScroller" className = "animatedReveal winners-campaign-area winners-body" data - urlnew="/on/demandware.store/Sites-Idealz-ae-Site/en/Search-WinnerCampaigns" data - pageno="2" data - pagesize="25" data - url="/on/demandware.store/Sites-Idealz-ae-Site/en/Search-WinnerCampaigns?pageno=1" >
                <h2 className="section-title">Winners</h2>
                <p>All our winners are announced in this section.</p>
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" id="swiper-wrapper-dda2d57e11008ede5" aria-live="polite">




                        <div className="swiper-slide sliderReveal swiper-slide-visible swiper-slide-active" style="width: 355px; margin-right: 28px;" role="group" aria-label="1 / 25">
                            <div className="winner-campagin-box" data-pid="CG-03268">



                                <div className="campaign-image">
                                    <img src="https://www.idealz.com/on/demandware.static/-/Sites-idealz-master-catalog/default/dw19f8b772/images/campaignsliderimage/CG-03269_dashboard_image1.png" alt="[[PrizeValue]] Cash winnerProfilePic" className="combineImage lozad" data-loaded="true" />
                                </div>

                                <h4>Congratulations</h4>


                                <div className="winnerInfoBox">
                                    <h5><b>Rasheed MK</b></h5>
                                    <h5>on winning <b>AED25,000 Cash</b></h5>
                                </div>
                                <h6>
                                    <span>Ticket no: CG-03268-084976481</span>
                                    <span>
                                        Announced on:
                                        <span className="dateFixer">11:35 AM</span>
                                        <span className="dateFixer">06 October, 2023</span>
                                    </span>
                                </h6>



                            </div>
                        </div>




                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>

            </ section >
*/}