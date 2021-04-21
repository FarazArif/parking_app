
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Secuirty() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4ad2df65601', m: '34b3efcb1cd343840abbb1921100688c285dc12b-1618318338-1800-ASxJ2gDhMg0PNyY2G9+/i3yVWvFJSTJOeMfKbomVsUgImr/ybMkusUW7KP7JhBZiegm8PhnQOg+Egh+JY2uBpP1J4y3nfbEzRdaI6RuK3G9mikmwt5+kAQo45SERA7FOzgdS+VN2XPYVO0q2CTdhed6GxEd5VuJc965OQskyQ24m', s: [0x67ffb295df, 0x28b16a4258], } })();
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
                <div className="list-group dashboard-menu list-group-sm mt-4"><a  className="d-flex list-group-item list-group-item-action">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action active">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <div className="card bg-white border-light mb-4 mb-lg-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-10 d-flex"><a  className="list-group-item list-group-item-action border-0">Overview</a> <a  className="list-group-item list-group-item-action border-0">Settings</a> <a  className="list-group-item list-group-item-action d-none d-sm-block border-0">My Items</a> <a  className="list-group-item list-group-item-action d-none d-md-block border-0 active">Security</a>
                  </div>
                  <div className="col-2 d-flex justify-content-center">
                    <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                      <div className="dropdown-menu"><a  className="list-group-item list-group-item-action d-sm-none border-0">My Items</a> <a  className="list-group-item list-group-item-action d-md-none border-0 active">Security</a> <a  className="list-group-item list-group-item-action border-0">Billing</a> <a  className="list-group-item list-group-item-action border-0">Messages</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="card border-light p-0 p-md-4 mb-4">
              <div className="card-header">
                <h3 className="h5 mb-0">Two Factor Authentication</h3>
                <p className="text-sm mb-0">Keep your account secure by enabling two-factor authentication.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row mx-n2">
                    <div className="col-12 col-lg-4 px-2">
                      <div className="form-group"><select className="custom-select">
                          <option>Google Auth</option>
                          <option>SMS Code</option>
                          <option>Backup Code</option>
                        </select></div>
                    </div>
                    <div className="col col-lg px-2">
                      <div className="form-group"><input type="text" className="form-control" placeholder="Description" /></div>
                    </div>
                    <div className="col-auto px-2"><button type="button" className="btn btn-secondary px-3"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg></button></div>
                  </div>
                </li>
                <li className="list-group-item border-bottom">
                  <div className="row align-items-center">
                    <div className="col-auto"><span className="icon icon-md"><span className="fab fa-google" /></span></div>
                    <div className="col ml-n2">
                      <h6 className="text-sm mb-0">Google Auth</h6>
                      <p className="card-text small text-muted">iPhone</p>
                    </div>
                    <div className="col-md d-none d-md-block"><span className="text-muted">Added:</span> 2020-03-12 01:14:22
                    </div>
                    <div className="col-auto">
                      <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-v icon-dark" /> </span><span className="sr-only">Toggle Dropdown</span></button>
                        <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit post</a> <a className="dropdown-item text-danger" ><span className="fa fa-trash mr-2" aria-hidden="true" /> Disable</a></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto"><span className="icon icon-md"><span className="fas fa-sms" /></span></div>
                    <div className="col ml-n2">
                      <h6 className="text-sm mb-0">SMS Code</h6>
                    </div>
                    <div className="col d-none d-md-block"><span className="text-muted">Added:</span> 2020-02-12 14:34:12</div>
                    <div className="col-auto">
                      <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-v icon-dark" /> </span><span className="sr-only">Toggle Dropdown</span></button>
                        <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit post</a> <a className="dropdown-item text-danger" ><span className="fa fa-trash mr-2" aria-hidden="true" /> Disable</a></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card border-light p-0 p-md-4 mb-4">
              <div className="card-body">
                <h3 className="h5 mb-0">Change Password</h3>
                <form className="form mt-5" autoComplete="off">
                  <div className="form-group mb-4"><label htmlFor="inputPasswordOld">Current Password</label> <input type="password" className="form-control" id="inputPasswordOld" required /></div>
                  <div className="form-group mb-4"><label htmlFor="inputPasswordNew">New Password</label> <input type="password" className="form-control" id="inputPasswordNew" required /> <span className="form-text small text-muted">The password must be 8-20 characters, and must <em>not</em>
                      contain spaces.</span></div>
                  <div className="form-group mb-4"><label htmlFor="inputPasswordNewVerify">Verify</label> <input type="password" className="form-control" id="inputPasswordNewVerify" required /> <span className="form-text small text-muted">To confirm, type the new password again.</span></div>
                  <div className="form-group"><button type="submit" className="btn btn-dark">Save</button></div>
                </form>
              </div>
            </div>
            <div className="card card-body bg-white border-light p-0 p-md-4">
              <div className="card-header">
                <div className="row d-block d-md-flex align-items-center">
                  <div className="col">
                    <h3 className="h5">Your Sessions</h3>
                    <p className="small">This is a list of devices that have logged into your account.<br />Revoke any
                      sessions that you do not recognize.</p>
                  </div>
                  <div className="col-auto"><span className="btn btn-sm btn-dark ">Log out all</span></div>
                </div>
              </div>
              <div className="card-body p-md-0">
                <ul className="list-group">
                  <li className="list-group-item border-bottom py-md-4">
                    <div className="row d-block d-md-flex align-items-center">
                      <div className="col-auto">
                        <div className="icon icon-lg mr-md-5 fw-60"><span className="fas fa-mobile-alt" /></div>
                      </div>
                      <div className="col ml-md-n5 my-4 my-md-0">
                        <h3 className="h6 mb-1">iPhone X</h3>
                        <div className="small">New York, USA</div><span className="small"><span className="text-dark font-weight-bold">Last accessed:</span> March 10 at 6:06PM</span>
                      </div>
                      <div className="col-auto"><button className="btn btn-xs btn-outline-gray">Log out</button></div>
                    </div>
                  </li>
                  <li className="list-group-item py-md-4">
                    <div className="row d-block d-md-flex align-items-center">
                      <div className="col-auto">
                        <div className="icon icon-lg mr-md-5 fw-60"><span className="fas fa-laptop" /></div>
                      </div>
                      <div className="col ml-md-n5 my-4 my-md-0">
                        <h3 className="h6 mb-1">Chrome on Macintosh</h3>
                        <div className="small">New York, USA</div><span className="small"><span className="text-dark font-weight-bold">Last accessed:</span> March 11 at 4:26PM</span>
                      </div>
                      <div className="col-auto"><button className="btn btn-xs btn-outline-gray">Log out</button></div>
                    </div>
                  </li>
                </ul>
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

  export default Secuirty;