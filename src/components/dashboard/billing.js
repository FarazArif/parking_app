import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Billing() {
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4bc88951a5a', m: '4f4c2a310d3aa24c23bd1e6b44dc3c172f90116a-1618318340-1800-AR9ulKQBVR1l6IFyQ+yyKgQlzu1xxXcBNpdemJctiplAE57t9pxuy3+XuWp3iU6YodfeRRYWjI7E8WeFb/nr4xnjMhiDKVCR5CD4IZYWSE+3lCZPwPt2JqYGFixAKYiHUYSoOmQzT+VjifGuBHXlsvmFhZ/uswNyMdUHX6QREIc6', s: [0x7067029a21, 0xd657751619], } })();
    `}
        </script>

      </Halmet>

      <>

        <main>
          {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
      <div className="position-relative">
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
        <p className="rotate-letter  splash_logo">ALMuslims</p>
         </div>
    </div> */}
          <div className="section section-lg bg-soft">
            <div className="container">
              <div className="row pt-5 pt-md-0">
                <div className="col-12 col-md-4 d-none d-lg-block">
                  <div className="card border-light p-2">
                    <div className="card-body p-2">
                      <div className="profile-thumbnail small-thumbnail mx-auto"><img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                      <h2 className="h5 font-weight-normal text-center mt-3 mb-0">Neil Sims</h2>
                      <div className="list-group dashboard-menu list-group-sm mt-4"><a className="d-flex list-group-item list-group-item-action">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action active">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-lg-none">
                  <div className="card bg-white border-light mb-4 mb-lg-5">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-10 d-flex"><a className="list-group-item list-group-item-action border-0">Overview</a> <a className="list-group-item list-group-item-action border-0">Settings</a> <a className="list-group-item list-group-item-action d-none d-sm-block border-0">My Items</a> <a className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a></div>
                        <div className="col-2 d-flex justify-content-center">
                          <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                            <div className="dropdown-menu"><a className="list-group-item list-group-item-action d-sm-none border-0">My Items</a> <a className="list-group-item list-group-item-action d-md-none border-0">Security</a> <a className="list-group-item list-group-item-action border-0 active">Billing</a>
                              <a className="list-group-item list-group-item-action border-0">Messages</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row mb-5">
                    <div className="col-12 mb-4">
                      <div className="card border-light text-center py-4 mb-4">
                        <div className="card-body">
                          <h2 className="display-4 mb-3">Spaces<span className="pixel-pro-badge subscription-badge bg-secondary font-weight-bolder text-white">PRO</span>
                          </h2>
                          <p className="my-4">Next payment of <span className="font-weight-bold">$36 (yearly)</span> occurs on August
                      13, 2020.</p>
                          <a className="btn btn-sm btn-dark btn-primary" >Cancel subscription</a>
                        </div>
                      </div>
                      <form action="#" method="post" className="card border-light p-3 mb-4">
                        <div className="card-header border-light p-3 mb-4 mb-md-0">
                          <h3 className="h5 mb-0">Billing details</h3>
                        </div>
                        <div className="card-body p-0 p-md-4">
                          <div className="row justify-content-center">
                            <div className="col-12 col-lg-6">
                              <div className="form-group mb-4"><label htmlFor="cartInputEmail1">Email address *</label> <input type="email" className="form-control" placeholder="example@company.com" id="cartInputEmail1" aria-describedby="cartInputEmail1" required /></div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-group"><label className="my-1 mr-2" htmlFor="cartFormCustomSelectPref1">Country</label>
                                <select className="custom-select my-1 mr-sm-2" id="cartFormCustomSelectPref1">
                                  <option selected="selected">Choose...</option>
                                  <option value={1}>United States</option>
                                  <option value={2}>Germany</option>
                                  <option value={3}>Canada</option>
                                </select></div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-group mb-4"><label htmlFor="cartInputAdress1">Adress</label> <input type="text" placeholder="Texas" className="form-control" id="cartInputAdress1" aria-describedby="cartInputAdress1" /></div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-group mb-4"><label htmlFor="cartInputCity1">City</label> <input type="text" placeholder="Dallas" className="form-control" id="cartInputCity1" aria-describedby="cartInputCity1" /></div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-group mb-4"><label htmlFor="cartInputZip1">Zip/Postal code</label> <input type="number" placeholder={123456} className="form-control" id="cartInputZip1" aria-describedby="cartInputZip1" /></div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-group mb-4"><label htmlFor="cartInputCompany1">Company Name *</label> <input type="text" placeholder="Company LLC" className="form-control" id="cartInputCompany1" aria-describedby="cartInputCompany1" required /></div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-group mb-4"><label htmlFor="cartInputVAT1">VAT ID</label> <input type="number" placeholder="NL232142" className="form-control" id="cartInputVAT1" aria-describedby="cartInputVAT1" /></div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-group mb-4"><label htmlFor="cartInputPhone1">Phone Number</label> <input type="number" placeholder="+(12)345 6789" className="form-control" id="cartInputPhone1" aria-describedby="cartInputPhone1" /></div>
                            </div>
                            <div className="col-12"><button className="btn btn-primary btn-dark mt-2 animate-up-2" type="submit">Update</button></div>
                          </div>
                        </div>
                      </form>
                      <form action="#" method="post" className="card border-light p-3 mb-4">
                        <div className="card-header border-light p-3 mb-4 mb-md-0">
                          <h3 className="h5 mb-0">Card details</h3>
                        </div>
                        <div className="card-body p-0 p-md-4">
                          <div className="row justify-content-center">
                            <div className="col-12">
                              <div className="form-group"><label className="form-label" htmlFor="cardNameLabel"><span className="small text-dark">(Full name as displayed on card)</span></label>
                                <div className="input-group mb-4"><input className="form-control" id="cardNameLabel" placeholder="Name on Card *" type="text" required /></div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group"><label htmlFor="cardNumberLabel">Card Number <span className="text-danger">*</span></label>
                                <div className="input-group mb-4">
                                  <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-credit-card" /></span></div><input className="form-control" id="cardNumberLabel" placeholder="0000 0000 0000 0000" type="number" required />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group"><label htmlFor="cardCVCLabel">CVC <span className="text-danger">*</span></label>
                                <input className="form-control" id="cardCVCLabel" placeholder="CVC" type="number" required />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group"><label htmlFor="cardExpiryLabel">Card Expiry <span className="text-danger">*</span></label>
                                <div className="input-group mb-4">
                                  <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-calendar-alt" /></span></div><input className="form-control" id="cardExpiryLabel" placeholder="MM / YY" type="number" required />
                                </div>
                              </div>
                            </div>
                            <div className="col-12"><button className="btn btn-primary btn-dark mt-2 animate-up-2" type="submit">Update</button></div>
                          </div>
                        </div>
                      </form>
                      <div className="card card-body bg-white border-light p-0 p-md-4">
                        <div className="card-header border-bottom p-3">
                          <h3 className="h5">Order History</h3>
                          <p className="small pr-lg-10">This is a list of devices that have logged into your account. Revoke any
                        sessions that you do not recognize.</p>
                        </div>
                        <div className="card-body px-0 pt-0">
                          <div className="card card-sm card-body border-light mb-0"><a data-target="#panel-1" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">History</span> <span className="icon"><span className="fas fa-plus" /></span></a>
                            <div className="collapse" id="panel-1">
                              <div className="pt-3">
                              <ul className="list-group">
                            <li className="list-group-item border-bottom">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h3 className="h6 mb-1"><a  >Invoice #120345</a></h3> <small className="text-gray-700">Billed August 21, 2019</small>
                                </div>
                                <div className="col-auto"><button className="btn btn-xs btn-outline-dark">Pay now</button></div>
                              </div>
                            </li>
                            <li className="list-group-item border-bottom">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h3 className="h6 mb-1"><a  >Invoice #120344</a></h3> <small className="text-gray-700">Billed July 21, 2019</small>
                                </div>
                                <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
                              </div>
                            </li>
                            <li className="list-group-item border-bottom">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h3 className="h6 mb-1"><a  >Invoice #120343</a></h3> <small className="text-gray-700">Billed June 21, 2019</small>
                                </div>
                                <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
                              </div>
                            </li>
                          </ul>
                               
                              </div>
                            </div>
                          </div>
                          {/* <ul className="list-group">
                            <li className="list-group-item border-bottom">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h3 className="h6 mb-1"><a  >Invoice #120345</a></h3> <small className="text-gray-700">Billed August 21, 2019</small>
                                </div>
                                <div className="col-auto"><button className="btn btn-xs btn-outline-dark">Pay now</button></div>
                              </div>
                            </li>
                            <li className="list-group-item border-bottom">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h3 className="h6 mb-1"><a  >Invoice #120344</a></h3> <small className="text-gray-700">Billed July 21, 2019</small>
                                </div>
                                <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
                              </div>
                            </li>
                            <li className="list-group-item border-bottom">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h3 className="h6 mb-1"><a  >Invoice #120343</a></h3> <small className="text-gray-700">Billed June 21, 2019</small>
                                </div>
                                <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
                              </div>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </>


    </div>
  );
}

export default Billing;