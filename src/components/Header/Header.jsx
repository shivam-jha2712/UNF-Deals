import React, { Fragment } from 'react'
import './Header.css'

const Header = () => {
  return (
    <Fragment>
      <header id="idealz-header" className="animatedReveal">
        <div className="header-left">
          <a href="/" title="UNF-Deals" className="idealz-logo">
            <img className="idealz-logo" src="./src/assets/logo.png" alt="myurbanfarm" width="109"/>
          </a>
          <ul className="header-primary-navigation">
             {/* <li><a href="?campaign=winnerScroller" className="link--kukuri notLinkWinner" data-letters="WINNERS">WINNERS</a></li>  */}
          </ul>
        </div>
        <div className="header-right">
          <ul className="header-secondary-navigation">
            <li><a href="/helpcenter" className="link--kukuri" data-letters="Need Help? Contact us">Need Help? Contact
              us</a></li>
            <li><a href="tel:+971800433259" className="link--kukuri" data-letters="Call 0800-IDEALZ"><b>Call
              0800-IDEALZ</b></a>
            </li>
            <li className="input-field flagSelect">
              <div className="custom-select-flag">
                <span className="currency-switch" id="dropdownCurrencySelector"><i
                  className="flag-sm flag-sm-AE"></i>AED</span>
                
              </div>
            </li>

            <li>
              <a href="https://shop.myurbanfarm.org/account/login"
                className="link--kukuri gtm-login-register js-open-popup-register" data-letters="Register/Login">
                Register/Login
              </a>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  )
}

export default Header