
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Error404() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d48e89591a5a', m: 'a857766b369374e74c61a7c12e553b776d81bf21-1618318333-1800-AT+fFD6ahBt2ihoQhhVn8/XYnP8BwPfaRJJy6LVf6uwdf+GkjWG8IN0KqSHlCjp6QCEmzUBntqqVSAM+GkVaQmGGBExVoD64+KGxWbIuk4lzyUW0B8GdVrxKJxt+9Stwg3IK9K0Nyvrwyg0krawBQdA=', s: [0xe6eaa96af6, 0x7ca20708b9], } })();
    `}
    </script>

        </Halmet>

        <main>
  {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
    <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
  </div> */}
  <section className="min-vh-100 d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-dark d-flex align-items-center justify-content-center">
          <div><a ><img className="img-fluid w-50" src="https://demo.themesberg.com/spaces/assets/img/illustrations/404.svg" alt="girl illustration" /></a>
            <h1 className="mt-4">404 Page <span className="font-weight-bolder text-primary">not found</span></h1>
            <p className="lead my-4 px-lg-11">Oops! Looks like you followed a bad link. If you think this is a problem
              with us, please tell us.</p><a className="btn btn-secondary animate-hover" ><span className="fas fa-chevron-left mr-3 pl-2 animate-left-3" />Go back home</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

      </div>
    );
  }

  export default Error404;