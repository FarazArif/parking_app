
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";

function Blank() {
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
    type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d49afd4a1a5a', m: '1bce1ada3b60e3c550f0b642135312d9cf47251d-1618318336-1800-AUHFKRWT9bPVNRjKM68Lj/GKLzMQoyoOd5agYrckD3473CfJpWNIdsn67vTvdIxekO2d237UoaUvKRExMYPyYr9jzHNy0Im5ba9jq5ctQGm1M9b2bEiI2eWEDIAuMKcCu/QW9q+x5a8mdTnKd2NAgLc=', s: [0xc3564c3fb8, 0x52f3c069d9], } })();</script>
    `}
    </script>

        </Halmet>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
 
  <main>
    {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
      <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
    </div> */}
    <section className="section-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1 className="display-2 mb-3">Blank starter page</h1>
            <p>Hello world!</p>
          </div>
        </div>
      </div>
    </section>
  </main>

    </div>
  );
}

export default Blank;