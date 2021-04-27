
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css"
import Message_us from "./contact_send_message"
import About_Card from "../about/about_card"

function Contact() {
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4466a511a5a', m: '05390f4465d021a73ddeb16fe4f318fdcba37fc3-1618318321-1800-ASa3N1v5YGSSqddts4KjoULeTsyJpdU9eiVlWL7WBvqhZBiPDGXMS4BQmOIq5r1PopAq2mca0TJfiEdBNZr6lydSRf7u7QlqKouQzG/KfUhn4B74pNFLFgCYkqXRuZi1FpccjK6iG53y7rhqb3UIo9Y=', s: [0x5700780dd6, 0x7fbe9bdfe6], } })();
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
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> */}
              {/* <p className="rotate-letter  splash_logo">ALMuslims</p> */}
            </div>
          </div>
          <section className="section section-header bg-primary overlay-primary text-white pb-11" data-background="../assets/img/team-hero.jpg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-7 text-center">
                  <h1 className="display-2 mb-3">Get in touch today</h1>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab, quaerat maiores aliquam porro dolore vitae minima quis id possimus dolores et fugit odit totam!</p>
                </div>
              </div>
            </div>
          </section>
          <div className="section py-0">
            <div className="container mt-n10">
              <div className="row">
                <div className="col-12"><iframe className="map rounded" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20francisco&t=&z=8&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
            </div>
          </div>
          <section className="section section-lg pt-6">
            <div className="container">
             <Message_us />
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2>Our support team</h2>
                </div>
              
                <About_Card />
              </div>
            </div>
          </section>
        </main>

      </>

    </div>
  );
}

export default Contact;