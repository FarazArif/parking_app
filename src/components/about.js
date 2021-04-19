import React from "react";
import Halmet from "react-helmet";
import "./spaces.css";
import Footer from "./footer/footer";

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
      <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2"><svg className="fill-white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 43.4" style={{enableBackground: 'new 0 0 1920 43.4'}} xmlSpace="preserve">
          <path d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z">
          </path>
        </svg></figure>
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
    <section className="section section-lg pt-0">
      <div className="container">
        <div className="row d-none d-md-block">
          <div className="col">
            <div className="card card-body bg-soft p-0 p-lg-3">
              <div className="card-group bg-soft">
                <div className="card mb-0 bg-soft">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-users" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="counter text-dark mr-1">3</span>M+</h3>
                    <p className="text-muted mb-0">Users</p>
                  </div>
                </div>
                <div className="card mb-0 bg-soft border-left">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-city" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="counter text-dark mr-1">13</span>K</h3>
                    <p className="text-muted mb-0">Al Muslim</p>
                  </div>
                </div>
                <div className="card mb-0 bg-soft border-left">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-map-marker-alt" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="counter text-dark mr-1">120</span></h3>
                    <p className="text-muted mb-0">Locations</p>
                  </div>
                </div>
                <div className="card mb-0 bg-soft border-left">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-globe-americas" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="counter text-dark mr-1">15</span></h3>
                    <p className="text-muted mb-0">Countries</p>
                  </div>
                </div>
              </div>
              <div className="card-group">
                <div className="card mb-0 border-top bg-soft rounded-0">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-ticket-alt" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="text-dark mr-1">24/7</span></h3>
                    <p className="text-muted mb-0">Customer Service</p>
                  </div>
                </div>
                <div className="card mb-0 bg-soft border-top border-left">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-dollar-sign" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="counter text-dark mr-1">192</span>$</h3>
                    <p className="text-muted mb-0">Average Cost</p>
                  </div>
                </div>
                <div className="card mb-0 bg-soft border-top border-left">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-award" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="counter text-dark mr-1">10</span></h3>
                    <p className="text-muted mb-0">Awards</p>
                  </div>
                </div>
                <div className="card mb-0 bg-soft border-top border-left rounded-0">
                  <div className="card-body text-center">
                    <div className="icon icon-primary"><span className="fas fa-users" /></div>
                    <h3 className="font-weight-normal mt-3 mb-0"><span className="counter text-dark mr-1">300</span></h3>
                    <p className="text-muted mb-0">Peoples Join Everyday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-md-none">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-light p-4">
              <div className="card-body">
                <h2 className="display-2 mb-2">98%</h2><span>Average satisfaction rating received in the past year</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-light p-4">
              <div className="card-body">
                <h2 className="display-2 mb-2">24/7</h2><span>Our support team is a quick chat or email away — 24 hours a
                  day</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-light p-4">
              <div className="card-body">
                <h2 className="display-2 mb-2">220M</h2><span>Data points on spaces and cities distilled down to find the
                  perfect match.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg pt-0">
      <div className="container">
        <div className="row justify-content-center mb-5 mb-lg-6">
          <div className="col-12 col-md-8 text-center">
            <h2><span className="font-weight-bold">Global</span> Experts &amp; Offices</h2>
            <p className="lead mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
          </div>
        </div>
        <div className="row mb-5 mb-lg-7">
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card border-light"><img src="../assets/img/team/profile-picture-1.jpg" className="card-img-top rounded-top" alt="Joseph Portrait" />
              <div className="card-body">
                <h3 className="h4 card-title mb-2">Al Muslim</h3><span className="card-subtitle text-gray font-weight-normal">Founder</span>
                <p className="card-text my-3">SLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi..</p>
                <ul className="list-unstyled d-flex mt-3 mb-0">
                  <li><a  aria-label="facebook social link" className="icon-facebook mr-3"><span className="fab fa-facebook-f" /></a></li>
                  <li><a  aria-label="twitter social link" className="icon-twitter mr-3"><span className="fab fa-twitter" /></a></li>
                  <li><a  aria-label="slack social link" className="icon-slack mr-3"><span className="fab fa-slack-hash" /></a></li>
                  <li><a  aria-label="dribbble social link" className="icon-dribbble mr-3"><span className="fab fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="card border-light"><img src="../assets/img/team/profile-picture-2.jpg" className="card-img-top rounded-top" alt="Bonnie portrait" />
              <div className="card-body">
                <h3 className="h4 card-title mb-2">Al Muslim</h3><span className="card-subtitle text-gray font-weight-normal">Agent</span>
                <p className="card-text my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi.</p>
                <ul className="list-unstyled d-flex mt-3 mb-0">
                  <li><a  aria-label="facebook social link" className="icon-facebook mr-3"><span className="fab fa-facebook-f" /></a></li>
                  <li><a  aria-label="twitter social link" className="icon-twitter mr-3"><span className="fab fa-twitter" /></a></li>
                  <li><a  aria-label="slack social link" className="icon-slack mr-3"><span className="fab fa-slack-hash" /></a></li>
                  <li><a  aria-label="dribbble social link" className="icon-dribbble mr-3"><span className="fab fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-light"><img src="../assets/img/team/profile-picture-3.jpg" className="card-img-top rounded-top" alt="Jose Avatar" />
              <div className="card-body">
                <h3 className="h4 card-title mb-2">Al Muslim</h3><span className="card-subtitle text-gray font-weight-normal">Marketing</span>
                <p className="card-text my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. </p>
                <ul className="list-unstyled d-flex mt-3 mb-0">
                  <li><a  aria-label="facebook social link" className="icon-facebook mr-3"><span className="fab fa-facebook-f" /></a></li>
                  <li><a  aria-label="twitter social link" className="icon-twitter mr-3"><span className="fab fa-twitter" /></a></li>
                  <li><a  aria-label="slack social link" className="icon-slack mr-3"><span className="fab fa-slack-hash" /></a></li>
                  <li><a  aria-label="dribbble social link" className="icon-dribbble mr-3"><span className="fab fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 mb-lg-6">
          <div className="col text-center">
            <h3 className="mb-5">You can find us here</h3><iframe className="map rounded" id="gmap_canvas" src="https://maps.google.com/maps?q=san%20francisco&t=&z=8&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="accordion" id="accordionExample1">
              <div className="card card-sm card-body border-light mb-0"><a  data-target="#panel-1" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">I’m looking for a Parking…</span> <span className="icon"><span className="fas fa-plus" /></span></a>
                <div className="collapse" id="panel-1">
                  <div className="pt-3">
                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                  </div>
                </div>
              </div>
              <div className="card card-sm card-body border-light mb-0"><a  data-target="#panel-2" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">How does it work?</span> <span className="icon"><span className="fas fa-plus" /></span></a>
                <div className="collapse" id="panel-2">
                  <div className="pt-3">
                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                  </div>
                </div>
              </div>
              <div className="card card-sm card-body border-light"><a  data-target="#panel-3" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">Licenses</span> <span className="icon"><span className="fas fa-plus" /></span></a>
                <div className="collapse" id="panel-3">
                  <div className="pt-3">
                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tenetur a quod cum aspernatur in ea praesentium animi. Corrupti, dicta. Culpa eveniet quasi perferendis dignissimos ab aut, ratione et sed!</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center mb-4 mt-6">Would you like to work with us?</p>
            <p className="text-center"><a  className="btn btn-primary animate-up-2">Contact us.</a></p>
          </div>
        </div>
      </div>
    </section>
  </main>

</>

    </div>
  );
}

export default About;
