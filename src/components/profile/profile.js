import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";
import Footer from "../footer/footer";
import Profile_aside from './profile_aside';
import Profile_cards from './profile_cards';

export default function Profile() {
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
         type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d465aed15601', m: '481d25eb0e949479055c4c355ea85ba3837c9298-1618318327-1800-ARTnWFzaawVvij72C6aztfHQyPOuqX1ayShgOBqTANAh7Jt6lTsP2ELw7T6et3XXojK5yISXblFs++LOGKhZ0geJ0PeeKkhss1vw6D62XNZNOH3s24AaICZIUJkT9Po2FOcx0hhDRuMp2c+F1WX9eoM=', s: [0xac3dfc4c82, 0xc90028ddc5], } })();
      `}
                </script>
            </Helmet>


            <main>
                <div
                // className="preloader bg-dark flex-column justify-content-center align-items-center"
                >
                    <div
                    // className="position-relative"
                    >
                        {/* <img src="https://demo.our.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.our.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> */}
                    </div>
                </div>
                <div className="section section-header pb-md-6 pb-lg-0 bg-soft">
                    <div className="container z-2">
                        <div className="row justify-content-end d-none d-lg-flex">
                            <div className="col-auto">
                                <div className="d-flex align-items-center flex-column flex-md-row z-2">
                                    {/* <div className="nav-wrapper position-relative pb-4">
                                        <ul className="nav nav-pills nav-pill-rounded" id="tab-34" role="tablist">
                                            <li className="nav-item mr-3 mr-md-0"><a className="nav-link text-sm-center active" id="tab-grid-1-tab" data-toggle="tab"  role="tab" aria-controls="tab-grid-1" aria-selected="true"><span className="nav-link-icon d-block"><i className="fas fa-th-list" /></span></a>
                                            </li>
                                            <li className="nav-item mr-3 mr-md-0"><a className="nav-link text-sm-center" id="tab-grid-2-tab" data-toggle="tab"  role="tab" aria-controls="tab-grid-2" aria-selected="false"><span className="nav-link-icon d-block"><i className="fas fa-th-large" /></span></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-lg-0">
                    <div id="spaces-container" className="container">
                        <div className="row">
                            <aside className="col-12 col-lg-4 d-block z-10">
                                <div id="profile-sidebar">
                                    <div className="sidebar-inner">

                                        <Profile_aside />

                                    </div>
                                </div>
                                <div className="card d-lg-none border-light text-center mt-n5 mt-md-n7 p-2">
                                    <div className="card-body p-2">
                                        <div className="profile-thumbnail small-thumbnail mt-n6 mx-auto"><img src="../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                                        <h4 className="font-weight-normal mt-4 mb-0">Neil Sims</h4>
                                        <ul className="list-inline row mx-auto my-4">
                                            <li className="list-inline-item col-4 px-2 px-xl-3 my-2 mx-0">
                                                <h6 className="font-weight-normal font-small">Rentals</h6><a className="d-sm-block h6 text-gray font-weight-normal font-small" >20.5% <span className="icon icon-xs text-success"><i className="fas fa-angle-up" /></span></a>
                                            </li>
                                            <li className="list-inline-item col-4 px-2 px-xl-3 my-2 mx-0">
                                                <h6 className="font-weight-normal font-small">Reviews</h6><a className="d-sm-block h6 text-gray font-weight-normal font-small" >4.5/5 <span className="icon icon-xs text-danger"><i className="fas fa-angle-down" /></span></a>
                                            </li>
                                            <li className="list-inline-item col-4 px-2 px-xl-3 my-2 mx-0">
                                                <h6 className="font-weight-normal font-small">Status</h6><a className="d-sm-block h6 text-gray font-weight-normal font-small" ><span className="icon icon-xs text-success"><i className="fas fa-award" /></span> Verified</a>
                                            </li>
                                        </ul><a className="btn btn-sm btn-secondary mb-3" ><span className="fas fa-user-plus mr-1" /> Send
                        Message</a>
                                    </div>
                                </div>
                            </aside>
                            <Profile_cards/>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}