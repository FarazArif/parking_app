
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Comingsoon() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d497fb3f5601', m: 'c431da6fa742e6b167a348504ca21cf4c6f01fb1-1618318334-1800-Ae81L2rAkA2ouZ0jzEmJ4QHTtdVoKxYse3R5mix3RQoP046DhxzjxN8/uCMgKTHkM3yWzNx//KjmptuL9tO7176chjRIZt8vcQXomsSAnYNDcjEMy7+DIRqTGwhUvLYV4I5DzkXluALMogD7CSDWUaE=', s: [0xecd6dae547, 0x076a9a063a], } })();
    `}
    </script>

        </Halmet>
        <main>
  {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
    <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
  </div> */}
  <section className="section p-0 min-vh-100 d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col col-12 col-lg-6 text-dark order-2 order-lg-1">
          <div>
            <h1 className="display-2 mb-2">We're coming soon</h1>
            <p className="lead mb-4">Our website is <span className="text-italic">under construction</span>.</p>
            <div className="form-group mt-2">
              <form action="" method="post" className="d-flex flex-row justify-content-center">
                <div className="input-group"><input className="form-control form-control-xl" id="exampleInputEmail6" placeholder="Your email address" type="email" required />
                  <div className="input-group-prepend"><button type="submit" className="btn btn-primary rounded-right">Subscribe</button></div>
                </div>
              </form>
            </div>
            <p className="small"><strong>Subscribe</strong> to be one of the first to use our intuitive platform.</p>
          </div>
        </div>
        <div className="col col-12 col-sm-10 col-md-8 col-lg-6 my-6 my-lg-0 mx-auto order-1 order-lg-2 d-none d-sm-block">
          <img className="img-fluid" src="https://demo.themesberg.com/spaces/assets/img/illustrations/coming-soon.svg" alt="people illustration" /></div>
      </div>
    </div>
  </section>
</main>


      </div>
    );
  }

  export default Comingsoon;