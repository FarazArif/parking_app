
import React from 'react';
import Halmet from "react-helmet";
import "../../spaces.css";
import Setting_Alert from './setting_alert';
import Setting_aside from './setting_aside';
import Setting_Information from './setting_Information';



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

                  <Setting_aside />

                </div>
                <div className="col-12 d-lg-none">
                  <div className="card bg-white border-light mb-4 mb-lg-5">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-10 d-flex"><a className="list-group-item list-group-item-action border-0">Overview</a> <a className="list-group-item list-group-item-action border-0 active">Settings</a> <a className="list-group-item list-group-item-action d-none d-sm-block border-0">My
                      Items</a> <a className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a></div>
                        <div className="col-2 d-flex justify-content-center">
                          <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                            <div className="dropdown-menu"><a className="list-group-item list-group-item-action d-sm-none border-0">My Items</a> <a className="list-group-item list-group-item-action d-md-none border-0">Security</a> <a className="list-group-item list-group-item-action border-0">Billing</a> <a className="list-group-item list-group-item-action border-0">Messages</a>
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

                      <Setting_Information />

                      <Setting_Alert />

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