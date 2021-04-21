
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Settings() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4a58bed1a5a', m: 'add9391805c0a99de15a80b7d2e70f1bc54d999d-1618318337-1800-Afl0csVpQHHRhjcg4pLDlCLqviUPcGarSS/fjdIHE35DF2YFEmOvdi8a6T/MNSnQBIuKCEs1XCxjxxSiCILiW/q7HqcvEg8mJ2xEUBCsInG4rXth0tSU0skREhF3/ZcHUfVSrnQLc74UXgwr7DS3p9uO6V4mo2q3DAd7jgmjUL+G', s: [0xf30c856774, 0xd91b956840], } })();
    `}
    </script>

        </Halmet>

        <>

  <main>
    {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
      <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
    </div> */}
    <div className="section section-lg bg-soft">
      <div className="container">
        <div className="row pt-5 pt-md-0">
          <div className="col-12 col-md-4 d-none d-lg-block">
            <div className="card border-light p-2">
              <div className="card-body p-2">
                <div className="profile-thumbnail small-thumbnail mx-auto"><img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                <h2 className="h5 font-weight-normal text-center mt-3 mb-0">Neil Sims</h2>
                <div className="list-group dashboard-menu list-group-sm mt-4"><a  className="d-flex list-group-item list-group-item-action">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action active">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <div className="card bg-white border-light mb-4 mb-lg-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-10 d-flex"><a  className="list-group-item list-group-item-action border-0">Overview</a> <a  className="list-group-item list-group-item-action border-0 active">Settings</a> <a  className="list-group-item list-group-item-action d-none d-sm-block border-0">My
                      Items</a> <a  className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a></div>
                  <div className="col-2 d-flex justify-content-center">
                    <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                      <div className="dropdown-menu"><a  className="list-group-item list-group-item-action d-sm-none border-0">My Items</a> <a  className="list-group-item list-group-item-action d-md-none border-0">Security</a> <a  className="list-group-item list-group-item-action border-0">Billing</a> <a  className="list-group-item list-group-item-action border-0">Messages</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-body bg-white border-light mb-4">
                  <h2 className="h5 mb-4">General information</h2>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group"><label htmlFor="first_name">First Name</label> <input className="form-control" id="first_name" type="text" placeholder="Sims" /></div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group"><label htmlFor="last_name">Last Name</label> <input className="form-control" id="last_name" type="text" placeholder="Neil" /></div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-3">
                        <div className="form-group"><label htmlFor="birthday">Birthday</label> <input type="text" className="form-control flatpickr-input" id="birthday" data-toggle="date" placeholder="Select your birth date" /></div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group"><label htmlFor="gender">Gender</label> <select className="custom-select" id="gender">
                            <option disabled="disabled" selected="selected">Select option</option>
                            <option value={1}>Female</option>
                            <option value={2}>Male</option>
                          </select></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group"><label htmlFor="email">Email</label> <input className="form-control" id="email" type="email" placeholder="name@company.com" /></div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group"><label htmlFor="phone">Phone</label> <input className="form-control" id="phone" type="number" placeholder="+12-345 678 910" /></div>
                      </div>
                    </div>
                    <h2 className="h5 my-4">Adress</h2>
                    <div className="row">
                      <div className="col-sm-9 mb-3">
                        <div className="form-group"><label htmlFor="address">Address</label> <input className="form-control" id="address" type="text" placeholder="Your address" /></div>
                      </div>
                      <div className="col-sm-3 mb-3">
                        <div className="form-group"><label htmlFor="number">Number</label> <input className="form-control" id="number" type="number" placeholder="No." /></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 mb-3">
                        <div className="form-group"><label htmlFor="city">City</label> <input className="form-control" id="city" type="text" placeholder="City" /></div>
                      </div>
                      <div className="col-sm-4 mb-3">
                        <div className="form-group"><label htmlFor="country">Country</label> <select className="form-control select2-hidden-accessible" id="country" data-toggle="select" title="Country" data-live-search="true" data-live-search-placeholder="Country" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                            <option data-select2-id={3}>United Stated</option>
                            <option>Canada</option>
                            <option>Germany</option>
                            <option>Spain</option>
                            <option>Italy</option>
                            <option>UK</option>
                          </select></div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group"><label htmlFor="zip">ZIP</label> <input className="form-control" id="zip" type="tel" placeholder="ZIP" /></div>
                      </div>
                    </div>
                    <div className="mt-3"><button type="submit" className="btn btn-primary">Save All</button></div>
                  </form>
                </div>
                <div className="card card-body bg-white border-light">
                  <h2 className="h5 mb-4">Alerts &amp; Notifications</h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between pl-0 border-bottom">
                      <div>
                        <h3 className="h6 mb-1">Company News</h3><span className="small">Get Spaces news, announcements, and
                          product updates</span>
                      </div>
                      <div>
                        <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="shop-notification-1" defaultChecked="checked" /> <label className="custom-control-label" htmlFor="shop-notification-1" /></div>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between pl-0 border-bottom">
                      <div>
                        <h3 className="h6 mb-1">Account Activity</h3><span className="small">Get important notifications about
                          you or activity you've missed</span>
                      </div>
                      <div>
                        <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="shop-notification-2" /> <label className="custom-control-label" htmlFor="shop-notification-2" /></div>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between pl-0">
                      <div>
                        <h3 className="h6 mb-1">Meetups Near You</h3><span className="small">Get an email when a Dribbble Meetup
                          is posted close to my location</span>
                      </div>
                      <div>
                        <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="shop-notification-3" defaultChecked="checked" /> <label className="custom-control-label" htmlFor="shop-notification-3" /></div>
                      </div>
                    </li>
                  </ul>
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

  export default Settings;