import React from "react";
import Halmet from "react-helmet";
import "../spaces.css";
import About_Achivements from "./about_achivements"
import About_Card from "./about_card"
import About_description from "./about_description"
function About() {
  return (
    <div>
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d438ba2c5601', m: '3dd511baf127a48312db5655bfdbb0176a76c613-1618318320-1800-Ac27XiBK6YHn09cY93bMjKjsrYn1QYrxlq72RkYYj9LJuplTvSzgC4OkmI13VQd9jwqsFNrN/U1X0RXzjI0uj0Ir6sQ/bQh7hFY3bWt4ZB93LXWGF0xlWOhXQLO1Vk7szkkdWX1noH3+7xpb/1Hke+k=', s: [0xec1c8fae05, 0xc9ae8681cb], } })();</script>
    `}
        </script>
      </Halmet>

      <>

        <main>
          <div
          // className="preloader bg-dark flex-column justify-content-center align-items-center"
          >
            <div
            // className="position-relative"
            >
              {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
         */}
              {/* <p className="rotate-letter  splash_logo">ALMuslims</p> */}
            </div>
          </div>
          <section className="section section-header bg-primary overlay-primary text-white pb-7" data-background="../assets/img/team-hero.jpg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 text-center">
                  <h1 className="display-2 mb-4">Working alone is bad</h1>
                  <p className="lead mb-4 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p><a className="btn btn-secondary mr-3">What we do
              <span className="ml-2"><span className="fas fa-arrow-right" /></span></a>
                </div>
              </div>
            </div>

          </section>
          <section className="section section-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-4 pr-lg-4">
                  <h2 className="display-2 font-weight-light mb-5">Let's share few things <span className="font-weight-bold">about
                us.</span></h2>
                </div>
                <div className="col-md-4">
                  <p className="lead"><span className="font-weight-bold">Al Muslim</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                </div>
                <div className="col-md-4">
                  <p className="lead">Individuals and teams from <span className="font-weight-bold">105, 000</span> businesses in
              <span className="font-weight-bold">900</span> cities have connected to the Al Muslim network to solve their
              Parking needs.</p><img className="mt-4" src="https://demo.themesberg.com/spaces/assets/img/signature.svg" alt="signature" width={100} />
                </div>
              </div>
            </div>
          </section>
         

   <About_Achivements />

          <section className="section section-lg pt-0">
            <div className="container">
              <div className="row justify-content-center mb-5 mb-lg-6">
                <div className="col-12 col-md-8 text-center">
                  <h2><span className="font-weight-bold">Global</span> Experts &amp; Offices</h2>
                  <p className="lead mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                </div>
              </div>
              <About_Card />
             
              <div className="row mb-5 mb-lg-6">
                <div className="col text-center">
                  <h3 className="mb-5">You can find us here</h3><iframe className="map rounded" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20francisco&t=&z=8&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
              <About_description />
            </div>
          </section>
        </main>

      </>

    </div>
  );
}

export default About;
