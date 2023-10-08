import React, { Fragment } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
  return (
    <Fragment>

      <footer id="idealz-footer">
        <aside id="idealz-primary-footer" className="animatedReveal">
          <aside className="footer-navigation">
            <div className="content-asset">
              <h6>Quick Links</h6>
              <ul>
                <li><a href="https://www.idealz.com/about-us.html" className="link--kukuri" data-letters="About Idealz">About Idealz</a></li>
                <li><a href="https://www.idealz.com/profile" className="link--kukuri" data-letters="My Account">My Account</a></li>
                <li><a href="https://www.idealz.com/my-tickets" className="link--kukuri" data-letters="Active Tickets">Active Tickets</a></li>

              </ul>
            </div>
          </aside>

          <aside className="footer-navigation">
            <div className="content-asset">
              <h6>Customer Service</h6>
              <ul>
                <li><a href="https://www.idealz.com/helpcenter" className="link--kukuri" data-letters="Contact Us">Contact Us</a></li>
                <li><a href="https://www.idealz.com/faqs.html" className="link--kukuri" data-letters="FAQs">FAQs</a></li>
                <li><a href="https://www.idealz.com/how-it-works.html" className="link--kukuri" data-letters="How it Works">How it Works</a></li>
              </ul>
            </div>
          </aside>

          <aside className="footer-navigation">
          </aside>

          <aside className="footer-right">
            <div className="content-asset">
              {/* Social Icons */}
              <ul className="social-navigation">

                <li>
                  <a href="https://www.facebook.com/idealzworld/" className="facebook"><svg width="53" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="26.5" cy="26" rx="26.5" ry="26" fill="#F3F3F3"></ellipse>
                    <path d="M32.477 26.485H28.62V40h-5.842V26.485H20v-5.11h2.779v-3.307c0-2.365 1.09-6.068 5.894-6.068l4.327.019v4.96h-3.14c-.515 0-1.239.265-1.239 1.393v3.008h4.366l-.51 5.105z" fill="#696969"></path></svg>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/idealz" className="twitter"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                    <ellipse className="st0" cx="26.5" cy="26" rx="26.5" ry="26"></ellipse>
                    <g id="layer1" transform="translate(52.390088,-25.058597)">
                      <path id="path1009" className="st1" d="M-37.6,40l9.1,12.2l-9.2,9.9h2.1l8-8.7l6.5,8.7h7l-9.6-12.9l8.5-9.2h-2.1l-7.4,8l-6-8H-37.6z
		 M-34.6,41.5h3.2l14.2,19h-3.2L-34.6,41.5z"></path>
                    </g>
                  </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/company/idealz-enterprises-llc" className="linkedin"><svg width="52" height="51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="26" cy="25.5" rx="26" ry="25.5" fill="#F3F3F3"></ellipse>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.17 10C15.255 10 14 11.404 14 13.25c0 1.805 1.218 3.25 3.097 3.25h.037c1.954 0 3.169-1.445 3.169-3.25-.037-1.846-1.215-3.25-3.132-3.25zM40 25.984V36h-5.42v-9.344c0-2.347-.783-3.949-2.745-3.949-1.498 0-2.387 1.079-2.78 2.123-.143.374-.18.892-.18 1.416V36h-5.42s.072-15.827 0-17.465h5.42v2.475c-.005.01-.01.018-.017.027a.326.326 0 00-.018.03h.035v-.057c.72-1.187 2.005-2.885 4.886-2.885 3.566 0 6.239 2.496 6.239 7.86zM19.515 36H14V18.937h5.515V36z" fill="#696969"></path></svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/idealz/" className="instagram"><svg width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="25.815" cy="26.044" rx="25.815" ry="25.589" fill="#F3F3F3"></ellipse>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.72 12h11.83c4.808 0 8.72 3.912 8.72 8.72v11.83c0 4.808-3.912 8.72-8.72 8.72H19.72c-4.808 0-8.72-3.912-8.72-8.72V20.72c0-4.808 3.912-8.72 8.72-8.72zm11.83 26.325a5.775 5.775 0 005.775-5.775V20.72a5.775 5.775 0 00-5.775-5.775H19.72a5.775 5.775 0 00-5.775 5.775v11.83a5.775 5.775 0 005.775 5.775h11.83z" fill="#696969"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.12 26.634c0-4.143 3.37-7.515 7.514-7.515s7.516 3.371 7.516 7.515-3.372 7.516-7.516 7.516c-4.143 0-7.515-3.372-7.515-7.516zm2.922 0a4.592 4.592 0 109.184 0 4.592 4.592 0 00-9.184 0z" fill="#696969"></path>
                    <circle cx="33.546" cy="18.724" r="1.978" fill="#696969"></circle></svg>
                  </a>
                </li>

                <li>
                  <a href="https://wa.me/97143551888" className="whatsapp"><svg width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="25.815" cy="26.044" rx="25.815" ry="25.589" fill="#F3F3F3"></ellipse>
                    <path fillRule="evenodd" clipRule="evenodd" d="M41 25.614c0 8.07-6.593 14.613-14.727 14.613-2.583 0-5.009-.66-7.12-1.818L11 41l2.658-7.84a14.46 14.46 0 01-2.113-7.546C11.545 17.543 18.139 11 26.273 11 34.408 11 41 17.543 41 25.614zM26.273 13.327c-6.828 0-12.382 5.512-12.382 12.287 0 2.688.876 5.178 2.358 7.203l-1.547 4.563 4.759-1.512a12.374 12.374 0 006.812 2.032c6.827 0 12.382-5.511 12.382-12.286 0-6.774-5.555-12.287-12.382-12.287zm6.94 15.33c.253.12.423.202.497.322.09.15.09.867-.21 1.704-.303.836-1.777 1.643-2.438 1.702-.113.01-.207.033-.304.056-.466.112-.987.237-4.028-.951-3.392-1.325-5.627-4.616-6.09-5.295-.037-.056-.063-.095-.077-.113-.184-.242-1.474-1.943-1.474-3.704 0-1.649.816-2.514 1.192-2.912a7.41 7.41 0 00.071-.076c.331-.358.722-.448.963-.448.124 0 .249.008.37.016.112.007.22.014.322.014l.08-.003c.203-.013.467-.03.732.6l.384.926c.315.76.668 1.612.73 1.734.09.18.15.388.03.627l-.05.098c-.09.186-.156.32-.311.5l-.184.218c-.124.151-.25.302-.358.41-.18.178-.369.371-.158.73.21.359.935 1.53 2.008 2.48 1.154 1.021 2.157 1.453 2.665 1.671.099.043.179.078.238.107.361.179.571.149.782-.09.211-.24.903-1.046 1.143-1.405.24-.358.482-.298.813-.179.33.12 2.105.986 2.467 1.165l.195.095z" fill="#696969"></path></svg>
                  </a>
                </li>

                <li>

                  <a href="https://www.tiktok.com/@idealz"><svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="26" cy="25.5" rx="26" ry="25.5" fill="#F3F3F3"></ellipse>
                    <path d="M27.6775 12.8047C29.1559 12.8047 30.6338 12.8047 32.1122 12.8047C32.2092 16.4995 35.029 19.3255 38.7848 19.4808C39.0156 19.4902 39.0402 19.5799 39.0391 19.7633C39.0338 21.0226 39.0364 22.2823 39.0364 23.5416C39.0364 23.626 39.0364 23.7105 39.0364 23.8204C36.463 23.8095 34.1899 23.0391 32.1165 21.5407C32.1165 21.6809 32.1165 21.7721 32.1165 21.8633C32.1256 24.9118 32.138 27.9609 32.1401 31.0095C32.1406 31.4337 32.1144 31.8606 32.0624 32.2817C31.6432 35.6972 28.8775 38.6071 25.4108 39.2774C24.9069 39.3749 24.3929 39.4207 23.8831 39.4906C23.7048 39.4906 23.527 39.4906 23.3487 39.4906C22.9085 39.4379 22.4652 39.4004 22.0282 39.3295C18.7886 38.8041 16.0117 36.27 15.2839 33.1553C15.1506 32.584 15.1024 31.9935 15.0151 31.4118C15.0151 31.2904 15.0151 31.1684 15.0151 31.047C15.0291 30.9448 15.051 30.8432 15.0564 30.741C15.1281 29.4338 15.4928 28.2069 16.1932 27.0936C17.8044 24.5319 20.1685 23.1684 23.24 22.9891C23.7765 22.9578 24.319 23.0188 24.8544 23.0371C24.8544 24.5465 24.8544 25.9975 24.8544 27.4736C24.2204 27.3031 23.6057 27.2265 22.9824 27.3396C21.2812 27.6487 20.1664 28.615 19.6941 30.2355C19.2529 31.7485 19.8478 33.3674 21.1442 34.3421C22.4213 35.3021 24.1717 35.4418 25.5629 34.6595C26.9835 33.8605 27.6502 32.6341 27.6496 31.0402C27.6485 25.0917 27.6539 19.1431 27.6582 13.1946C27.6582 13.0642 27.671 12.9345 27.6775 12.8047Z" fill="#696969"></path>
                  </svg>
                  </a>
                </li>

              </ul>

              <p className="app-download-text">
                Download the Idealz app for the ultimate shopping experience!
              </p>

              <ul className="app-download-store">
                <li><a href="/" className="app-store"></a></li>
                <li><a href="/" className="play-store"></a></li>
                <li><a href="/" target="_blank"><img src="https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dw5f8ee625/images/homepage/Badge-Black.png" /></a></li>
              </ul>
{/* 

  <img src="./src/assets/App-store-badge.png" alt="" />
<img src="./src/assets/google-play-image.png" alt="" />
 */}
              {/* <div className="app-download-links">
                <a href="https://itunes.apple.com/ae/app/idealz/id374428397" className="app-store"></a>
                <a href="https://play.google.com/store/apps/details?id=app.android.idealz.com" className="play-store"></a>
              </div> */}
            </div>
          </aside>
        </aside>

        <aside id="idealz-secondary-footer" className="animatedReveal">
          <div className="content-asset">

            <div className="copyright-footer">
              <div className="copyright-footer-left">
                © 2017-2023 Idealz. All Rights Reserved.
                <ul className="footer-links">
                  <li><a href="https://www.idealz.com/user-agreement.html">User Agreement</a></li>
                  <li><a href="https://www.idealz.com/privacy-policy.html">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="copyright-footer-right">
                We accept
                <ul className="card-list">
                  <li className="apple-pay"><img src="https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dw85b71bec/images/newdesktop/homepage/footer/pay.png" /></li>
                  <li className="visa-pay"><img src="https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dwa464e9ff/images/newdesktop/homepage/footer/Visa.png" /></li>
                  <li className="master-pay"><img src="https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dw8d767656/images/newdesktop/homepage/footer/Mastercard.png" /></li>
                  <li className="american-pay"><img src="https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dw83dbd35f/images/newdesktop/homepage/footer/American-express.png" /></li>
                  <li className="g-pay"><img src="https://www.idealz.com/on/demandware.static/-/Library-Sites-IdealzSharedLibrary/default/dw244067b8/images/newdesktop/homepage/footer/gpay.png" /></li>
                </ul>
              </div>
            </div>

          </div>
        </aside>
      </footer>
    </Fragment>
  )
}

export default Footer



{/*
              <ul className="social-navigation" style="align-items:center; justify-content: center">

              </ul>

              <p>Download the Idealz app for the ultimate shopping experience!</p>
              <ul className="app-download-store" style="justify-content: center;">
                <li><a href="https://itunes.apple.com/ae/app/idealz/id374428397" className="app-store"></a></li>
                <li><a href="https://play.google.com/store/apps/details?id=app.android.idealz.com" className="play-store"></a></li>
              </ul>
*/}