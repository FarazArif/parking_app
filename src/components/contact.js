
import React from 'react';
import Halmet from "react-helmet";
import "./spaces.css";
import Footer from "./footer/footer";



function Contact() {
    return (
      <div >
  <Halmet>
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4466a511a5a', m: '05390f4465d021a73ddeb16fe4f318fdcba37fc3-1618318321-1800-ASa3N1v5YGSSqddts4KjoULeTsyJpdU9eiVlWL7WBvqhZBiPDGXMS4BQmOIq5r1PopAq2mca0TJfiEdBNZr6lydSRf7u7QlqKouQzG/KfUhn4B74pNFLFgCYkqXRuZi1FpccjK6iG53y7rhqb3UIo9Y=', s: [0x5700780dd6, 0x7fbe9bdfe6], } })();
    `}
    </script>

        </Halmet>

        <>
  
  <main>
    <div 
    // className="preloader bg-dark flex-column justify-content-center align-items-center"
    >
      <div 
      // className="position-relative"
      >

        {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> */}
        {/* <p className="rotate-letter  splash_logo">ALMuslims</p> */}
        </div>
    </div>
    <section className="section section-header bg-primary overlay-primary text-white pb-11" data-background="../assets/img/team-hero.jpg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7 text-center">
            <h1 className="display-2 mb-3">Get in touch today</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab, quaerat maiores aliquam porro dolore vitae minima quis id possimus dolores et fugit odit totam!</p>
          </div>
        </div>
      </div>
    </section>
    <div className="section py-0">
      <div className="container mt-n10">
        <div className="row">
          <div className="col-12"><iframe className="map rounded" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20francisco&t=&z=8&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
      </div>
    </div>
    <section className="section section-lg pt-6">
      <div className="container">
        <div className="row justify-content-center mb-5 mb-lg-6">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card border-0 p-2 p-md-3">
              <div className="card-body px-0">
                <div className="row">
                  <div className="col-sm-6 col-md-4 text-center">
                    <div className="icon-box mb-4">
                      <div className="icon icon-dark mb-4"><span className="fas fa-map-marker-alt" /></div>
                      <h2 className="h5 icon-box-title">Visit us</h2><span>27 Garden Valley<br />Fsd, Pakistan</span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 text-center d-sm-none d-md-block">
                    <div className="icon-box mb-4">
                      <div className="icon icon-dark mb-4"><span className="fas fa-phone-volume" /></div>
                      <h2 className="h5 icon-box-title">Call</h2><span>+92378584986</span>
                      <div className="text-small text-gray">Mon - Fri, 8am - 4pm</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 text-center">
                    <div className="icon-box mb-4">
                      <div className="icon icon-dark mb-4"><span className="far fa-paper-plane" /></div>
                      <h2 className="h5 icon-box-title">Email</h2><a ><span className="__cf_email__" data-cfemail="bad2dfd6d6d5fad9d5d7cadbd4c394d3d5">[email&nbsp;protected]</span></a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-4 mt-lg-5">
                  <div className="col-12">
                    <div className="card border-0 p-0 p-md-5">
                      <div className="card-header text-center p-0 pb-5">
                        <h2>Want to work with us?</h2>
                        <p>Cool! Let’s talk about your project</p>
                      </div>
                      <div className="card-body p-0">
                        <form  >
                          <div className="form-group"><label htmlFor="name">Your Name</label>
                            <div className="input-group mb-4">
                              <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-user-circle" /></span></div><input className="form-control" id="name" placeholder="e.g. Bonnie Green" type="text" aria-label="contact name input" required />
                            </div>
                          </div>
                          <div className="form-group"><label htmlFor="email">Your Email</label>
                            <div className="input-group mb-4">
                              <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-envelope" /></span></div><input className="form-control" id="email" placeholder="example@company.com" type="email" aria-label="contact email input" />
                            </div>
                          </div>
                          <div className="form-group"><label htmlFor="message">Your message</label> <textarea className="form-control" placeholder="Enter your message..." id="message" rows={4} defaultValue={""} />
                          </div> <button  className="btn btn-block rounded btn-secondary">Send message</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2>Our support team</h2>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card text-center">
              <div className="card-header bg-white"><img src="../assets/img/team/profile-picture-2.jpg" className="card-img-top rounded shadow border-0" alt="Christopher Avatar" /></div>
              <div className="card-body"><span className="card-subtitle text-gray font-weight-normal">Sales</span>
                <h3 className="h4 card-title mt-2">Al Muslim</h3>
                <ul className="list-unstyled d-flex justify-content-center mt-3">
                  <li><a   aria-label="facebook social link" className="icon icon-sm icon-facebook mr-3"><span className="fab fa-facebook-f" /></a></li>
                  <li><a   aria-label="twitter social link" className="icon icon-sm icon-twitter mr-3"><span className="fab fa-twitter" /></a></li>
                  <li><a   aria-label="slack social link" className="icon icon-sm icon-slack mr-3"><span className="fab fa-slack-hash" /></a></li>
                  <li><a   aria-label="dribbble social link" className="icon icon-sm icon-dribbble mr-3"><span className="fab fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card text-center">
              <div className="card-header bg-white"><img src="../assets/img/team/profile-picture-3.jpg" className="card-img-top rounded shadow border-0" alt="Bonnie Avatar" /></div>
              <div className="card-body"><span className="card-subtitle text-gray font-weight-normal">Marketing</span>
                <h3 className="h4 card-title mt-2">Al Muslim</h3>
                <ul className="list-unstyled d-flex justify-content-center mt-3">
                  <li><a  aria-label="facebook social link" className="icon icon-sm icon-facebook mr-3"><span className="fab fa-facebook-f" /></a></li>
                  <li><a   aria-label="twitter social link" className="icon icon-sm icon-twitter mr-3"><span className="fab fa-twitter" /></a></li>
                  <li><a   aria-label="slack social link" className="icon icon-sm icon-slack mr-3"><span className="fab fa-slack-hash" /></a></li>
                  <li><a   aria-label="dribbble social link" className="icon icon-sm icon-dribbble mr-3"><span className="fab fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center">
              <div className="card-header bg-white"><img src="../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded shadow border-0" alt="Neil Avatar" /></div>
              <div className="card-body"><span className="card-subtitle text-gray font-weight-normal">Invoice</span>
                <h3 className="h4 card-title mt-2">Al Muslim</h3>
                <ul className="list-unstyled d-flex justify-content-center mt-3">
                  <li><a   aria-label="facebook social link" className="icon icon-sm icon-facebook mr-3"><span className="fab fa-facebook-f" /></a></li>
                  <li><a  aria-label="twitter social link" className="icon icon-sm icon-twitter mr-3"><span className="fab fa-twitter" /></a></li>
                  <li><a  aria-label="slack social link" className="icon icon-sm icon-slack mr-3"><span className="fab fa-slack-hash" /></a></li>
                  <li><a  aria-label="dribbble social link" className="icon icon-sm icon-dribbble mr-3"><span className="fab fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</>

      </div>
    );
  }

  export default Contact;