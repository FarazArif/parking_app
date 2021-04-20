
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Error500() {
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d491bdd05601', m: 'eecb9962348715ced4ddf53e0b93c8217964a5cb-1618318334-1800-Ab4Rc0dfJDB7YOqIEzTBFUL3LIpE3XXKVCaI0t2CY1DkvzjT0x+I63PbDMRS1+31dK+gnssc9TC1WOlQ3VA0d8WvrdtM6FiiN3eie+L8e7G2fk/PDHnnvKkv362Du4r3uETV9IrmJfUjPRdCwjZ1TOI=', s: [0x9850b1398d, 0x0ba4417a6e], } })();</script>
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
          <div><a ><img className="img-fluid w-50" src="https://demo.themesberg.com/spaces/assets/img/illustrations/server-error.svg" alt="girl illustration" /></a>
            <h1 className="mt-4">500 Server <span className="font-weight-bolder text-primary">error</span></h1>
            <p className="lead my-4 px-lg-9 px-xl-11">Something has went seriously wrong. We should be back by the time
              you finish your coffee.</p><a className="btn btn-secondary animate-hover" ><span className="fas fa-chevron-left mr-3 pl-2 animate-left-3" />Go back home</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>


      </div>
    );
  }

  export default Error500;