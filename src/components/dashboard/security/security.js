
import React from 'react';
import Halmet from "react-helmet";
import "../../spaces.css";
import Security_Authentication from './security_authentication';
import Security_aside from './security_card';
import Security_Password from './security_password'
import Security_Session from './security_session';



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

                  <Security_aside />

                </div>
                <div className="col-12 d-lg-none">
                  <div className="card bg-white border-light mb-4 mb-lg-5">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-10 d-flex"><a className="list-group-item list-group-item-action border-0">Overview</a> <a className="list-group-item list-group-item-action border-0">Settings</a> <a className="list-group-item list-group-item-action d-none d-sm-block border-0">My Items</a> <a className="list-group-item list-group-item-action d-none d-md-block border-0 active">Security</a>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                          <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                            <div className="dropdown-menu"><a className="list-group-item list-group-item-action d-sm-none border-0">My Items</a> <a className="list-group-item list-group-item-action d-md-none border-0 active">Security</a> <a className="list-group-item list-group-item-action border-0">Billing</a> <a className="list-group-item list-group-item-action border-0">Messages</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">

                  <Security_Authentication />

                  <Security_Password />

                  <Security_Session />

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