import React from "react";
import "../spaces.css";
import { Helmet } from "react-helmet";
import Support_icon_card from "./support_icon_card";
import Support_blog_card from "./support_blog_card";

export default function Support() {
  return (
    <div>
      <Helmet>
        <script>
          {`window.dataLayer = window.dataLayer || [];
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
            '../../../

            www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-THQTXJ7');
      `}
        </script>
        <script>
          {`
         type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d46d6d0a1a5a', m: '7273f1fe17451a588128bff4de42804ce1b5e54a-1618318329-1800-AR4j5lsWfZx+Zbe+w8TiIg3yYbwsf+AIWKcRFcj8bZEvU7p7ID422OetCTA85tMmbrPS9u7DqGKkNvBdWOq0+wrp6ThxvoVFZ4afvRg4vsNfuxCwgqbp6wz9Q9RiyxFmqdz0nVjBxTAIYo4USBV0dG8=', s: [0x01e3116460, 0x9f718c89c9], } })();
      `}
        </script>
      </Helmet>

      <main>
        {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
                    <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
                </div> */}
        <section className="section-header bg-primary pb-9 pb-lg-10 text-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 text-center">
                <h1 className="mb-3">Lorem ipsum dolor sit amet</h1>
                <p className="lead px-lg-5 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                  ipsum dolor
                </p>
                <form action="#">
                  <div className="form-group bg-white shadow-soft rounded-pill mb-4 px-3 py-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="input-group input-group-merge shadow-none">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent border-0">
                              <i className="fas fa-search" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control border-0 form-control-flush shadow-none pb-2"
                            placeholder="Search for answers..."
                            required
                          />
                        </div>
                      </div>
                      <div className="col-auto">
                        <button
                          type="submit"
                          className="btn btn-block btn-primary rounded-pill"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="pattern bottom" />
        </section>
        <section className="section section-md pb-0">
          <div className="container z-2 mt-n9 mt-lg-n10">
          <Support_icon_card/>
            {/* <div className="row">

              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                {" "}
                <a className="card text-center shadow-soft border-light animate-up-3">
                  <div className="card-body p-5">
                    <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
                      <span className="fas fa-clipboard-list" />
                    </div>
                    <h6 className="text-gray mb-0">Requirements</h6>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                {" "}
                <a className="card text-center shadow-soft border-light animate-up-3">
                  <div className="card-body p-5">
                    <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
                      <span className="fas fa-receipt" />
                    </div>
                    <h6 className="text-gray mb-0">Licensing</h6>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                {" "}
                <a className="card text-center shadow-soft border-light animate-up-3">
                  <div className="card-body p-5">
                    <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
                      <span className="fas fa-code-branch" />
                    </div>
                    <h6 className="text-gray mb-0">Troubleshooting</h6>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                {" "}
                <a className="card text-center shadow-soft border-light animate-up-3">
                  <div className="card-body p-5">
                    <div className="icon icon-shape icon-shape-secondary rounded-circle mb-4">
                      <span className="fab fa-cloudversify" />
                    </div>
                    <h6 className="text-gray mb-0">Team and Cloud</h6>
                  </div>
                </a>
              </div>

            </div> */}
          </div>
        </section>
        <section className="section section-md bg-white">
          <div className="container">
            <div className="row justify-content-center">


              <div className="col-lg-10 mb-3">
                <h5>Getting Started</h5>
              </div>
              <Support_blog_card/>
              <Support_blog_card/>
              {/* <div className="col-lg-10 mb-3">
                <a className="card border-light animate-up-3 shadow-soft p-0 p-lg-4">
                  <div className="card-body">
                    <h4>Account Settings, Language &amp; Dark Mode</h4>
                    <p className="lead text-gray mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur{" "}
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="avatar-lg">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/profile-picture-1.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div className="small text-gray ml-3">
                        <div>
                          <span>Updated 2 days ago</span>
                        </div>
                        <div>
                          Written by&nbsp;<strong>Richard Thomas</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div> */}
              {/* <div className="col-lg-10 mb-3">
                <a className="card border-light animate-up-3 shadow-soft p-0 p-lg-4">
                  <div className="card-body">
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h4>
                    <p className="lead text-gray mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elitLorem ipsum dolor sit amet{" "}
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="avatar-lg">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/profile-picture-2.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div className="small text-gray ml-3">
                        <div>
                          <span>Lorem ipsum dolor sit amet consectetur </span>
                        </div>
                        <div>
                          Written by&nbsp;<strong>Richard Thomas</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div> */}
              <div className="col-md-10 mt-5 mb-3">
                <h5>Adding &amp; Styling Elements</h5>
              </div>
              <Support_blog_card/>
              <Support_blog_card/>
              {/* <div className="col-lg-10 mb-3">
                <a className="card border-light animate-up-3 shadow-soft p-0 p-lg-4">
                  <div className="card-body">
                    <h4>Add &amp; style boxes &amp; other elements</h4>
                    <p className="lead text-gray mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="avatar-lg">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/profile-picture-3.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div className="small text-gray ml-3">
                        <div>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipi
                          </span>
                        </div>
                        <div>
                          Written by&nbsp;<strong>Richard Thomas</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-10 mb-3">
                <a className="card border-light animate-up-3 shadow-soft p-0 p-lg-4">
                  <div className="card-body">
                    <h4>Add &amp; style images</h4>
                    <p className="lead text-gray mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elitLorem ipsum dolor sitamet
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="avatar-lg">
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/profile-picture-4.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div className="small text-gray ml-3">
                        <div>
                          <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div>
                          Written by&nbsp;<strong>Richard Thomas</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </section>
        <section className="section section-md bg-soft">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <div className="text-center">
                  <h3 className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h3>
                  <a className="text-secondary font-weight-normal h4">
                    Drop us a line{" "}
                    <span className="icon icon-sm icon-primary ml-1">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
