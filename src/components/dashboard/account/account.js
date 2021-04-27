
import React from 'react';
import Halmet from "react-helmet";
import "../../spaces.css";



function Account() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4a27c825601', m: '36f36bfff9f1ea46d22d2c100d780a5dbea37e17-1618318336-1800-AUeR3+rTilDXotNu8y/Ey6WvhGcUkCLizjVI5+8HaoOYatgzcdlR3l7YvAk0h/Gjd8qg5PRfSuzOOHe/f+DPJo4Z6PFW/6RS+/vvypRws2gW73CyiVoIRTXX2r+O4lO/z8wYLUYEWmrZGY7hIelen34U4oNyA5a9MEWM+4HW6flE', s: [0xefb6dc30b7, 0x25d42b6b39], } })();
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
                <div className="list-group dashboard-menu list-group-sm mt-4"><a  className="d-flex list-group-item list-group-item-action active">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <div className="card bg-white border-light mb-4 mb-lg-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-10 d-flex"><a  className="list-group-item list-group-item-action border-0 active">Overview</a> <a  className="list-group-item list-group-item-action border-0">Settings</a> <a  className="list-group-item list-group-item-action d-none d-sm-block border-0">My
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
              <div className="col-12 col-sm-6 mb-4">
                <div className="card border-light">
                  <div className="card-body d-block d-md-flex align-items-center">
                    <div className="icon icon-shape icon-md icon-shape-primary rounded-circle mr-3 mb-4 mb-md-0"><span className="fas fa-wallet" /></div>
                    <div><span className="d-block h6 font-weight-normal">Global Budget</span>
                      <h5 className="h3 font-weight-bold mb-1">$25,370.00</h5>
                      <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">18.2%</span> higher vs previous month</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-4">
                <div className="card border-light">
                  <div className="card-body d-block d-md-flex align-items-center">
                    <div className="icon icon-shape icon-md icon-shape-primary rounded-circle mr-3 mb-4 mb-md-0"><span className="fas fa-file-invoice-dollar" /></div>
                    <div><span className="d-block h6 font-weight-normal">Sales</span>
                      <h5 className="h3 font-weight-bold mb-1">$5,220.00</h5>
                      <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">4.2%</span> higher vs previous month</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card border-light">
                  <div className="card-body d-flex flex-row align-items-center flex-0 border-bottom">
                    <div className="d-block">
                      <div className="h6 font-weight-normal text-gray mb-2">New customers</div>
                      <h2 className="h3">452</h2>
                      <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">18.2%</span></div>
                    </div>
                    <div className="d-block ml-auto">
                      <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-dark mr-2" /> <span className="font-weight-normal small">Last month</span></div>
                      <div className="d-flex align-items-center text-right"><span className="shape-xs rounded-circle bg-tertiary mr-2" /> <span className="font-weight-normal small">This month</span></div>
                    </div>
                  </div>
                  <div className="card-body p-2">
                    <div className="ct-chart-5 ct-golden-section ct-series-e" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card border-light">
                  <div className="card-body d-flex flex-row align-items-center flex-0 border-bottom">
                    <div className="d-block">
                      <div className="h6 font-weight-normal text-gray mb-2">Revenues</div>
                      <h2 className="h3">10,567</h2>
                      <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">$10.57%</span></div>
                    </div>
                    <div className="d-block ml-auto">
                      <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-dark mr-2" /> <span className="font-weight-normal small">Meeting Space</span></div>
                      <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-tertiary mr-2" /> <span className="font-weight-normal small">Loft Space</span></div>
                      <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-primary mr-2" /> <span className="font-weight-normal small">Private Space</span></div>
                      <div className="d-flex align-items-center text-right"><span className="shape-xs rounded-circle bg-success mr-2" /> <span className="font-weight-normal small">Conference Space</span></div>
                    </div>
                  </div>
                  <div className="card-body p-2">
                    <div className="ct-chart-7 ct-golden-section ct-series-e" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card border-light">
                  <div className="card-body d-flex justify-content-between align-items-center flex-0 border-bottom">
                    <div className="d-block">
                      <div className="h6 font-weight-normal text-gray mb-2">Top Locations</div>
                      <h2 className="h3">Sessions by states</h2>
                      <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">38.2%</span></div>
                    </div>
                    <div className="form-group"><select className="custom-select" id="country">
                        <option>United States</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Spain</option>
                        <option>Italy</option>
                        <option>Russia</option>
                        <option>Japan</option>
                        <option>India</option>
                        <option>China</option>
                      </select></div>
                  </div>
                  <div className="card-body p-2">
                    <div id="vmap" style={{width: '100%', height: 400}} />
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

  export default Account;