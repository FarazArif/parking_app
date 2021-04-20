import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Forget_password() {
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d48859971a5a', m: '55871b5a34c76f14cd87827308fc2c5749a8ace9-1618318332-1800-AbicSUJwvw6tWNO5Dfrw6skF/awnEehML/1Ugb6UuRNzjx0zdqRgjpX3UVCSdNtevXjqTdhTrRljxmGIlUuhZOnSWALr+USM8QPglOX9NCPRauLeey/QQGGpCfswSXjSTAR5Y7xo6A8jv6Q4S/c6tmv70WhyrMo8Fq9PI5upRUxp', s: [0x7c0d71591b, 0xf6be353567], } })();
    `}
    </script>

        </Halmet>

        <main>
  {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
    <div className="position-relative">
      <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
       <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
       <p className="rotate-letter  splash_logo">ALMuslims</p>
       </div>
  </div> */}
  <section className="min-vh-100 d-flex align-items-center section-image overlay-soft-dark py-5 py-lg-0" data-background="../assets/img/form-image.jpg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="text-center text-md-center mb-5 mt-md-0 text-white">
            <h1 className="mb-0 h3">Forgot your password?</h1>
          </div>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center">
          <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <form action="#">
              <div className="form-group"><label htmlFor="email">Your email</label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-envelope" /></span></div><input className="form-control" id="email" placeholder="example@company.com" type="text" aria-label="email adress" required />
                </div>
              </div> <button type="submit" className="btn btn-block btn-primary">Send reset password link</button>
            </form>
            <div className="d-block d-sm-flex justify-content-center align-items-center mt-4"><span className="font-weight-normal">Go back to the <a href="" className="font-weight-bold">login
                  page</a></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>


      </div>
    );
  }

  export default Forget_password;