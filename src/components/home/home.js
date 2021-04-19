import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Chose_Us from "../whyChoseus/chose_us"
import "../spaces.css"
import Landingpage from "../landingpage/landingpage";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Footer from "../footer/footer"
import Header from "../header/header"
export default function Home() {
  return (
   
  


    
    <div>
      <Helmet>

        <script>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
    
        gtag('config', 'UA-141734189-6');
      `}
        </script>
        <script>
          {`
      (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            '../../../www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-THQTXJ7');
      `}
        </script>
        <script>
          {`
      type="text/javascript">(function ()
       { window['__CF$cv$params'] = { r: '63f4d3d378211a5a', m: '6b8d92df9aec3aae91f6d7bccd04267da9847ce7-1618318304-1800-ARjUYm/Ycc/g5MS0hoK+CYaKmdVhKQn06rtfjU64Viy4lsDkYLW//8jZSc7mdKvEcRDhjPi2pRa/3ZtNC0QsSzXjMTzcvU8DyBgD1EO48YIa4Vzv4Nwiw/anP8hmlj/M7LYy6oX6rqhjNt1nx7kV/CY=', s: [0x4132eec092, 0x575eb3866d], } })();
      `}
        </script>


      </Helmet>


      <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7" height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
      {/* <Header /> */}
      <main>
        <div 
        // className="preloader bg-dark flex-column justify-content-center align-items-center"
        >
          <div
          //  className="position-relative" 
           >
            {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
             <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
              */}
              {/* <p className="rotate-letter splash_logo">Al-Muslim</p> */}
             </div>
        </div>
        <section className="section section-header section-image bg-primary overlay-primary text-white pb-4 pb-md-7" data-background="../assets/img/hero-1.jpg">
          <div className="container">
            <div className="row justify-content-center mb-4 mb-xl-5">
              <div className="col-12 col-xl-10 text-center">
                <h1 className="display-2">
                  <Link to="/landingpage">
                  Find your Place.
                  </Link>
                  </h1>
                <p className="lead text-muted mt-4 px-md-6">
                  {/* <span className="font-weight-bold">12,000+
                </span> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut
                {/* <span className="font-weight-bold">165+</span>  */}
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12">
                <div className="card p-md-2">
                  <div className="card-body p-2 p-md-0">
                    <form autoComplete="off" className="row" method="get" action="">
                      <div className="col-12 col-lg-5">
                        <div className="form-group form-group-lg mb-lg-0">
                          <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-map-marker-alt" /></span></div><input id="search-location" type="text" className="form-control autocomplete" placeholder="Search location" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="input-group input-group-lg mb-3 mb-lg-0">
                          <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-calendar-alt" /></span></div><input className="form-control datepicker" placeholder="Select date" type="text" required />
                        </div>
                      </div>
                      <div className="col-12 col-lg-3"><button className="btn btn-lg btn-primary btn-block animate-up-2" type="submit">Book Now</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <ul className="d-flex flex-wrap justify-content-center list-unstyled mb-0">
                  <li className="mx-xl-4 mx-2 mb-5 mb-md-0"><img className="img-fluid image-xs" src="https://demo.themesberg.com/spaces/assets/img/clients/northwestern.svg" alt="northwestern logo" />
                  </li>
                  <li className="mx-xl-4 mx-2 mb-5 mb-md-0"><img className="img-fluid image-xs" src="https://demo.themesberg.com/spaces/assets/img/clients/google.svg" alt="google logo" /></li>
                  <li className="mx-xl-4 mx-2 mb-5 mb-md-0"><img className="img-fluid image-xs" src="https://demo.themesberg.com/spaces/assets/img/clients/university-of-chicago.svg" alt="university logo" /></li>
                  <li className="mx-xl-4 mx-2 mb-5 mb-md-0"><img className="img-fluid image-xs" src="https://demo.themesberg.com/spaces/assets/img/clients/corsair.svg" alt="corsair logo" /></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg pb-lg-6 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"><img className="img-fluid image-lg mb-4" src="https://demo.themesberg.com/spaces/assets/img/illustrations/easy-transaction.svg" alt="northwestern logo" />
                <h2 className="h4">Extraordinarily easy</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"><img className="img-fluid image-lg mb-4" src="https://demo.themesberg.com/spaces/assets/img/illustrations/support.svg" alt="northwestern logo" />
                <h2 className="h4">Truly transparent</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut
            </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"><img className="img-fluid image-lg mb-4" src="https://demo.themesberg.com/spaces/assets/img/illustrations/payment.svg" alt="northwestern logo" />
                <h2 className="h4">Best prices</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut</p>
              </div>
            </div>
          
            <div className="row mt-6">
              <div className="col-12 section_headings">
                <h3 className="h4 mb-5">Top Bookings</h3>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"> <a  className="card img-card fh-400 border-0 outer-bg" data-background-inner="../assets/img/newyork.jpg">
                <div className="inner-bg overlay-dark" />
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="text-uppercase text-center">CIVITAVECCHIA</h5>
                  </div>
                </div>
              </a></div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"> <a  className="card img-card fh-400 border-0 outer-bg" data-background-inner="../assets/img/paris.jpg">
                <div className="inner-bg overlay-dark" />
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="text-uppercase text-center">FIUMICINO</h5>
                  </div>
                </div>
              </a></div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"> <a  className="card img-card fh-400 border-0 outer-bg" data-background-inner="../assets/img/london.jpg">
                <div className="inner-bg overlay-dark" />
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="text-uppercase text-center">MALPENSA</h5>
                  </div>
                </div>
              </a></div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"> <a  className="card img-card fh-400 border-0 outer-bg" data-background-inner="../assets/img/tokyo.jpg">
                <div className="inner-bg overlay-dark" />
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="font-weight-normal text-uppercase text-center">PUNTA RAISI</h5>
                  </div>
                </div>
              </a></div>
            </div>

          </div>





        </section>

        <Chose_Us />



        <section className="section section-lg bg-soft">
          <div className="container">
            <div className="row justify-content-center mb-4 mb-lg-5">
              <div className="col-12 col-md-8 text-center">
                <h2 className="h1"><span className="font-weight-bold">How</span> it works?</h2>
                <p className="lead mt-3">All you’ll need are the details of the place and location, the types of place,
              pricing and some good quality photographs.</p>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-12 col-md-10 col-lg-6 mx-auto">
                <div className="nav-wrapper">
                  <ul className="nav nav-pills nav-fill flex-column flex-sm-row mb-lg-4 mb-0" id="tab-32" role="tablist">
                      <li className="nav-item mr-0 mr-sm-2 mr-md-0 mb-3 mb-lg-0"><a className="nav-link flex-sm-fill text-sm-center active" id="tab-find-space" data-toggle="tab" href="#find-space" role="tab" aria-controls="find-space" aria-selected="true"><span className="far fa-building mr-2" />Submit your Space</a></li>  
                     <li className="nav-item"><a className="nav-link flex-sm-fill text-sm-center" id="tab-submit-space" data-toggle="tab" href="#submit-space" role="tab" aria-controls="submit-space" aria-selected="false"><span className="far fa-money-bill-alt mr-2" />Submit your Space</a></li> 
                  </ul>
                </div>
              </div> */}
              <div className="col-12">
                <div className="tab-content mt-lg-5" id="tabcontentexample-3">
                   <div className="tab-pane fade show active" id="find-space" role="tabpanel" aria-labelledby="tab-find-space">
                    <div className="row">
                      {/* <div className="col-12 col-md-6 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-4 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-primary mb-4 rounded-circle"><span className="fas fa-map-pin" /></div>
                            <h3 className="h5 my-3">1. Choose a workspace</h3>
                            <p>It takes no longer than 15 minutes to list your space on themesberg. Our user friendly
                          process.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-4 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-primary mb-4 rounded-circle"><span className="far fa-calendar-check" /></div>
                            <h3 className="h5 my-3">2. Schedule a tour</h3>
                            <p>After you have uploaded your space - our website makes it easy for you to keep the details up
                          to date.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-4 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-primary mb-4 rounded-circle"><span className="fas fa-mouse-pointer" /></div>
                            <h3 className="h5 my-3">3. Book your workspace</h3>
                            <p>Orders coming from themesberg are 100% prepaid. We will bring you not just leads but new
                          clients.</p>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle"><span className="fas fa-clipboard-list" /></div>
                            <h3 className="h5 my-3">1. List your space</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle"><span className="far fa-user" /></div>
                            <h3 className="h5 my-3">2. Get ready</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle"><span className="far fa-money-bill-alt" /></div>
                            <h3 className="h5 my-3">3. Earn money</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col mt-lg-6 mt-3 text-center"><a href="" className="btn btn-primary animate-up-2">
                      <i className="fas fa-search-location mr-2" />Find a Location</a>
                    </div> */}
                  </div> 
                  <div className="tab-pane fade" id="submit-space" role="tabpanel" aria-labelledby="tab-submit-space">
                    <div className="row">
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle"><span className="fas fa-clipboard-list" /></div>
                            <h3 className="h5 my-3">1. List your space</h3>
                            <p>It takes no longer than 15 minutes to list your space on themesberg. Our user friendly
                          onboarding process.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle"><span className="far fa-user" /></div>
                            <h3 className="h5 my-3">2. Get ready</h3>
                            <p>After you have uploaded your space - our website makes it easy for you to keep the details up
                          to date.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle">
                              <span className="far fa-money-bill-alt" /></div>
                            <h3 className="h5 my-3">3. Earn money</h3>
                            <p>Orders coming from themesberg are 100% prepaid. We will bring you not just leads but new
                          clients.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col mt-6 text-center"><a href="" className="btn btn-secondary animate-up-2">
                      <i className="fas fa-plus mr-2" />List a Space</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-lg pb-lg-6 pb-5 blog_section">
          <div class="container">
        <div className="row mt-6">
          <div className="col-12">
            <h3 className="h4 mb-5 section_headings">Blogs</h3>
          </div>


         




          <div class="col-12 col-md-4">
            <div class="card bg-white border-light p-3 rounded">
              <a >
                <img src="../../assets/img/blog/image-2.jpg" class="card-img-top rounded" alt="our desk" />
              </a>
              <div class="card-body p-0 pt-4">
                <a  class="h4"> Lorem ipsum dolor sit amet, consectetur </a>
                <div class="d-flex align-items-center my-4">
                  <img class="avatar avatar-sm rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Neil avatar" />
                  <h3 class="h6 small ml-2 mb-0">Al-Muslims</h3>
                </div>
                <p class="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ...</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card bg-white border-light p-3 rounded">
              <a >
                <img src="../../assets/img/blog/image-2.jpg" class="card-img-top rounded" alt="our desk" />
              </a>
              <div class="card-body p-0 pt-4">
              <a  class="h4"> Lorem ipsum dolor sit amet, consectetur </a>
                <div class="d-flex align-items-center my-4">
                  <img class="avatar avatar-sm rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Neil avatar" />
                  <h3 class="h6 small ml-2 mb-0">Al-Muslims</h3>
                </div>
                <p class="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ...</p>              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card bg-white border-light p-3 rounded">
              <a >
                <img src="../../assets/img/blog/image-2.jpg" class="card-img-top rounded" alt="our desk" />
              </a>
              <div class="card-body p-0 pt-4">
                <a  class="h4">Lorem ipsum dolor sit amet, consectetur</a>
                <div class="d-flex align-items-center my-4">
                  <img class="avatar avatar-sm rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Neil avatar" />
                  <h3 class="h6 small ml-2 mb-0">Al-Muslims</h3>
                </div>
                <p class="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ...</p>
              </div>
            </div>
          </div>



          {/* <div className="col mt-lg-6 mt-3 d-flex flex-column text-center">
            <div><a href="" className="btn btn-primary animate-up-2 mb-2">Browse All</a></div>
            <span className="small">1422 parkings in 34 countries</span>
          </div> */}
        </div>
    </div>
    </section>

        <div className="section bg-white">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-9 text-center">
                <div className="nav-wrapper">
                  <ul className="nav nav-pills nav-pill-circle flex-sm-row justify-content-center" id="tab-34" role="tablist">
                    <li className="nav-item"><a className="nav-link bg-white text-sm-center avatar-link active" id="tab-link-example-13" data-toggle="tab"  role="tab" aria-controls="link-example-13" aria-selected="true"><img className="rounded-circle" src="../assets/img/team/profile-picture-3.jpg" alt="Bonnie avatar" /></a></li>
                    <li className="nav-item"><a className="nav-link bg-white text-sm-center avatar-link" id="tab-link-example-14" data-toggle="tab"  role="tab" aria-controls="link-example-14" aria-selected="false"><img className="rounded-circle" src="../assets/img/team/profile-picture-1.jpg" alt="Neil avatar" /></a></li>
                    <li className="nav-item"><a className="nav-link bg-white text-sm-center avatar-link" id="tab-link-example-15" data-toggle="tab"  role="tab" aria-controls="link-example-15" aria-selected="false"><img className="rounded-circle" src="../assets/img/team/profile-picture-4.jpg" alt="Christopher avatar" /></a></li>
                  </ul>
                </div>
                <div className="card">
                  <div className="card-body p-0">
                    <div className="tab-content" id="tabcontentexample-5">
                      <div className="tab-pane fade show active" id="link-example-13" role="tabpanel" aria-labelledby="tab-link-example-13"><span className="d-block my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /></span>
                        <blockquote className="blockquote bg-white p-0 p-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      <footer className="blockquote-footer mt-3 text-primary">Al-Muslims
                      </footer>
                        </blockquote>
                      </div>
                      <div className="tab-pane fade" id="link-example-14" role="tabpanel" aria-labelledby="tab-link-example-14">
                        <span className="d-block my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /></span>
                        <blockquote className="blockquote bg-white p-0 p-md-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          <footer className="blockquote-footer mt-3 text-primary">Al-Muslims</footer>
                        </blockquote>
                      </div>
                      <div className="tab-pane fade" id="link-example-15" role="tabpanel" aria-labelledby="tab-link-example-15">
                        <span className="d-block my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /></span>
                        <blockquote className="blockquote bg-white p-0 p-md-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          <footer className="blockquote-footer mt-3 text-primary">Al-Muslims</footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="section py-0">
        <div className="container z-2">
          <div className="row position-relative justify-content-center align-items-cente">
            <div className="col-12">
              <div className="card border-light">
                <div className="card-body text-left px-5 py-4">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <p className="lead mb-4"><span className="font-weight-bold">5500</span> venues in <span className="font-weight-bold">400</span> cities across <span className="font-weight-bold">73</span>
                    countries, and everyday counting.</p>
                      <div className="row mb-4">
                        <div className="col">
                          <ul className="list-group mb-3">
                            <li className="list-group-item text-gray p-0 mb-2"><a><span className="fas fa-map-marker-alt mr-2" />New York</a></li>
                            <li className="list-group-item text-gray p-0 mb-2"><a ><span className="fas fa-map-marker-alt mr-2" />Paris</a></li>
                            <li className="list-group-item text-gray p-0 mb-2"><a ><span className="fas fa-map-marker-alt mr-2" />Milano</a></li>
                            <li className="list-group-item text-gray p-0"><a ><span className="fas fa-map-marker-alt mr-2" />Rome</a></li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="list-group mb-3">
                            <li className="list-group-item text-gray p-0 mb-2"><a ><span className="fas fa-map-marker-alt mr-2" />Madrid</a></li>
                            <li className="list-group-item text-gray p-0 mb-2"><a ><span className="fas fa-map-marker-alt mr-2" />Berlin</a></li>
                            <li className="list-group-item text-gray p-0 mb-2"><a ><span className="fas fa-map-marker-alt mr-2" />London</a></li>
                            <li className="list-group-item p-0"><a >All cities<span className="fas fa-arrow-right fa-xs ml-2" /></a></li>
                          </ul>
                        </div>
                      </div><a  className="btn btn-secondary animate-up-2"><span className="fas fa-plus mr-2" />List a Space</a>
                    </div>
                    <div className="col-12 col-md-7 mt-5 mt-md-0 text-md-right d-none d-sm-block"><img src="https://demo.themesberg.com/spaces/assets/img/illustrations/world-map.svg" alt /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}




    </div>


    
    
  );
}

