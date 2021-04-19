import React from "react"
import "../spaces.css"
export default function Footer(){
    return(
        <footer className="footer pb-5 bg-primary text-white pt-9 mt-n9">
        <div className="container">
          <div className="row mt-6 section_headings">
            <div className="col-xl-3 mb-3 mb-xl-0">
              {/* <img src="" height={30} className="mb-3" alt="Al-Muslim" /> */}
                <p>Al-Muslims</p>
              <p>Premium Bootstrap Directory Listing Template</p>
            </div>
            <div className="col-6 col-xl-2 mb-5 mb-xl-0"><span className="h5">Al-Muslims</span>
              <ul className="footer-links mt-2">
                <li><a  >Blog</a></li>
                <li><a  >Products</a></li>
                <li><a >About Us</a></li>
                <li><a  >Contact Us</a></li>
              </ul>
            </div>
            <div className="col-6 col-xl-3 mb-5 mb-xl-0"><span className="h5">Other</span>
              <ul className="footer-links mt-2">
                <li><a >Documentation <span className="badge badge-sm badge-secondary ml-2">v3.0</span></a></li>
                <li><a >Changelog</a></li>
                <li><a >Support</a></li>
                <li><a >License</a></li>
              </ul>
            </div>
            <div className="col-12 col-xl-4 mb-5 mb-xl-0"><span className="h5">Get the app</span>
              <p className="text-muted font-small mt-2">It's easy. Just select your device.</p><button className="btn btn-sm btn-white mb-xl-0 mr-2 mr-lg-2"><span className="d-flex align-items-center"><span className="icon icon-brand mr-2"><span className="fab fa-apple" /></span> <span className="d-inline-block text-left"><small className="font-weight-normal d-block">Available on</small> App
                Store</span></span></button> <button className="btn btn-sm btn-white"><span className="icon icon-brand mr-2"><span className="fab fa-google-play" /></span> <span className="d-inline-block text-left"><small className="font-weight-normal d-block">Available on</small> Google
              Play</span></button>
            </div>
          </div>
          <hr className="my-3 my-lg-5" />
          <div className="row">
            <div className="col mb-md-0"><a  className="d-flex justify-content-center">
              {/* <img src="https://demo.themesberg.com/spaces/assets/img/themesberg.svg" height={25} className="mb-3" alt="Themesberg Logo" /> */}
              </a>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Al-Muslims <span className="current-year">2020</span>.
              All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}