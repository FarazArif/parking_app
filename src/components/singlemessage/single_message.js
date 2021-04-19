import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
 import "../spaces.css"
 import {BrowserRouter,Route,Link} from "react-router-dom";

 import Header from "../header/header"
 import Footer from "../footer/footer"
 
export default function Single_message() {
  return (
    <BrowserRouter>
    <Route exact path="/singlemessage" render={()=>(
    <div>
      <Helmet>

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
         type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4b98aca5601', m: '31012c0bf3fabcb2e5cc136e852f9c26d72d664a-1618318340-1800-AV5ReoiFdNekdpQaP5kPoKKM+DtsNHvWcoz6wW7VMD75cU26gB6NSuuTMeR5y3BTyi7Ztj4+atwlQ42T2NCSbYvV/v50Ny+SOwz+SDAl8mOQqMvwEz6nEzqkB9YILUVVKiTQKezaXpvuGpjDupp89+3+218qDMIPOM2ll8YNwjf6', s: [0x2525da087b, 0x794c6870bc], } })();</script>

      `}
        </script>


      </Helmet>


      <>
  <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7" height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
  <Header />
  <main>
  <div className="preloader bg-dark flex-column justify-content-center align-items-center">
          <div className="position-relative">
            {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
             <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
              */}
              <p className="rotate-letter splash_logo">Al-Muslim</p>
             </div>
        </div>
    <div className="section section-lg bg-soft">
      <div className="container">
        <div className="row pt-5 pt-md-0">
          <div className="col-12 col-md-4 d-none d-lg-block">
            <div className="card border-light p-2">
              <div className="card-body p-2">
                <div className="profile-thumbnail small-thumbnail mx-auto"><img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                <h2 className="h5 font-weight-normal text-center mt-3 mb-0">Neil Sims</h2>
                <div className="list-group dashboard-menu list-group-sm mt-4"><a  className="d-flex list-group-item list-group-item-action">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action active border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <div className="card bg-white border-light mb-4 mb-lg-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-10 d-flex"><a className="list-group-item list-group-item-action border-0">Overview</a> <a  className="list-group-item list-group-item-action border-0">Settings</a> <a  className="list-group-item list-group-item-action d-none d-sm-block border-0">My Items</a> <a  className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a></div>
                  <div className="col-2 d-flex justify-content-center">
                    <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                      <div className="dropdown-menu"><a  className="list-group-item list-group-item-action d-sm-none border-0">My Items</a> <a  className="list-group-item list-group-item-action d-md-none border-0">Security</a> <a  className="list-group-item list-group-item-action border-0">Billing</a> <a  className="list-group-item list-group-item-action border-0 active">Messages</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="text-left mb-3"><a ><span className="icon icon-xs"><span className="fas fa-chevron-left mr-2" /></span> Back to all messages</a></div>
            <div className="card bg-soft-green border-light mb-4">
              <div className="row no-gutters align-items-center">
                <div className="col-12 col-lg-4 col-xl-4"><a href="../single-space.html"><img src="../../assets/img/private-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                <div className="col-12 col-lg-7 col-xl-8">
                  <div className="card-body text-dark"><a href="../single-space.html">
                      <h4 className="h6">Collaborative Workspace</h4>
                    </a>
                    <ul className="list-group mb-3">
                      <li className="list-group-item small p-0 border-0"><span className="fas fa-map-marker-alt mr-2" />New
                        York, Manhattan, USA</li>
                    </ul>
                    <div className="d-flex justify-content-between">
                      <div className="col pl-0"><span className="small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">500$</span></div>
                      <div className="col"><span className="small d-block">People</span> <span className="h6 text-dark font-weight-bold">12</span></div>
                      <div className="col pr-0"><span className="small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">1200</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-white border-light p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2"><span className="font-small"><a href="#"><img className="avatar-sm img-fluid rounded-circle mr-2" src="../../assets/img/team/profile-picture-1.jpg" alt="avatar" /> <span className="font-weight-bold">Neil Sims</span> </a><span className="ml-2">March 26, 19:25</span></span>
                <div className="d-none d-sm-block"><button className="btn btn-link text-dark" aria-label="phone" data-toggle="tooltip" data-placement="top" title="Sent from the phone " data-original-title="Sent from the phone"><span className="fas fa-mobile-alt" /></button></div>
              </div>
              <p className="m-0">Hi Chris! Thanks a lot for this very useful template. Saved me a lot of time and searches
                on the internet.</p>
            </div>
            <div className="card bg-primary text-white border-light p-4 ml-md-5 ml-lg-6 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2"><span className="font-small"><span className="font-weight-bold">Your Answer</span> <span className="ml-2">March 26, 19:25</span></span>
                <div className="d-none d-sm-block"><button className="btn btn-link text-white" aria-label="phone" data-toggle="tooltip" data-placement="top" title="Sent from the phone " data-original-title="Sent from the phone"><span className="fas fa-mobile-alt" /></button></div>
              </div>
              <p className="m-0">Hi Neil, thanks for sharing your thoughts regarding Spaces. Hi Neil, thanks for sharing
                your thoughts regarding Spaces.</p>
            </div>
            <div className="card bg-white border-light p-4 mb-5">
              <div className="d-flex justify-content-between align-items-center mb-2"><span className="font-small"><a href="#"><img className="avatar-sm img-fluid rounded-circle mr-2" src="../../assets/img/team/profile-picture-1.jpg" alt="avatar" /> <span className="font-weight-bold">Neil Sims</span> </a><span className="ml-2">March 26, 19:25</span></span>
                <div className="d-none d-sm-block"><button className="btn btn-link text-dark" aria-label="phone" data-toggle="tooltip" data-placement="top" title="Sent from the phone " data-original-title="Sent from the phone"><span className="fas fa-mobile-alt" /></button></div>
              </div>
              <p className="m-0">Hi Chris! Thanks a lot for this very useful template. Saved me a lot of time and searches
                on the internet.</p>
            </div>
            <form action="#" className="mt-4"><textarea className="form-control border border-light-gray mb-4" id="message" placeholder="Your Message" rows={6} maxLength={1000} required defaultValue={""} />
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="file-field">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex"><span className="icon icon-md h6"><span className="fas fa-paperclip mr-3" /></span>
                      <input type="file" />
                      <div className="d-md-block text-left d-none d-sm-block">
                        <div className="font-weight-normal text-dark mb-1">Add File</div>
                        <div className="text-gray small pr-3 pr-md-11">Supported files are: jpg, jpeg, png, doc, pdf, gif,
                          zip, rare, tar, txt, xls, docx, xlsx, odt</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div><button type="submit" className="btn btn-dark">Send</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
 <Footer />
</>





    </div>
    )} />
    </BrowserRouter>
  );
}

