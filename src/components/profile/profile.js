import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";
import Footer from "../footer/footer";

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
                                        <div className="card mt-n7 d-none d-lg-block border-light text-center p-2">
                                            <div className="profile-cover rounded-top" data-background="../assets/img/coworking.jpg" />
                                            <div className="card-body p-2">
                                                <div className="profile-thumbnail small-thumbnail mt-n6 mx-auto"><img src="../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                                                <h4 className="font-weight-normal mt-4 mb-0">Neil Sims</h4>
                                                <ul className="list-inline row mx-auto my-4">
                                                    <li className="list-inline-item col-sm-4 col-auto px-2 px-xl-3 my-2 mx-0">
                                                        <h6 className="font-weight-normal font-small">Rentals</h6><a className="d-sm-block h6 text-gray font-weight-normal font-small" >20.5% <span className="icon icon-xs text-success"><i className="fas fa-angle-up" /></span></a>
                                                    </li>
                                                    <li className="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                                                        <h6 className="font-weight-normal font-small">Reviews</h6><a className="d-sm-block h6 text-gray font-weight-normal font-small" >4.5/5 <span className="icon icon-xs text-danger"><i className="fas fa-angle-down" /></span></a>
                                                    </li>
                                                    <li className="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                                                        <h6 className="font-weight-normal font-small">Status</h6><a className="d-sm-block h6 text-gray font-weight-normal font-small" ><span className="icon icon-xs text-success"><i className="fas fa-award" /></span> Verified</a>
                                                    </li>
                                                </ul><a className="btn btn-sm btn-secondary mb-3" ><span className="fas fa-user-plus mr-1" />
                            Send Message</a>
                                            </div>
                                        </div>
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
                            <div className="col-12 col-lg-8">
                                <div className="tab-content mt-4">
                                    <div className="tab-pane fade show active" id="tab-grid-1" role="tabpanel" aria-labelledby="tab-grid-1-tab">
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                                                <div className="card border-light mb-4 animate-up-5">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/private-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                                                        <div className="col-12 col-lg-6 col-xl-7">
                                                            <div className="card-body p-3 p-md-1"><a >
                                                                <h4 className="h5">Collaborative Workspace</h4>
                                                            </a>
                                                                <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill badge-primary ml-2">5.0</span></div>
                                                                <ul className="list-group mb-3">
                                                                    <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />New
                                      York, Manhattan, USA</li>
                                                                    <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Old Street
                                      (2 mins walk)</li>
                                                                </ul>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="col pl-0"><span className="text-muted font-small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">500$</span></div>
                                                                    <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">12</span></div>
                                                                    <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">1200</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                                                <div className="card border-light mb-4 animate-up-5">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/meeting-office.jpg" alt="meeting office" className="card-img p-2 rounded-xl" /></a></div>
                                                        <div className="col-12 col-lg-6 col-xl-7">
                                                            <div className="card-body p-3 p-md-1"><a >
                                                                <h4 className="h5">Meeting Office Space</h4>
                                                            </a>
                                                                <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-light" /> <span className="badge badge-pill badge-primary ml-2">4.0</span></div>
                                                                <ul className="list-group mb-3">
                                                                    <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />New
                                      York, Manhattan, USA</li>
                                                                    <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Old Street
                                      (2 mins walk)</li>
                                                                </ul>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="col pl-0"><span className="text-muted font-small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">50$</span></div>
                                                                    <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">2-4</span></div>
                                                                    <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">400</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                                                <div className="card border-light mb-4 animate-up-5">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/conference-office.jpg" alt="conference office" className="card-img p-2 rounded-xl" /></a></div>
                                                        <div className="col-12 col-lg-6 col-xl-7">
                                                            <div className="card-body p-3 p-md-1"><a >
                                                                <h4 className="h5">Conference Room</h4>
                                                            </a>
                                                                <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="fas fa-star-half text-warning" /> <span className="badge badge-pill badge-primary ml-2">4.7</span></div>
                                                                <ul className="list-group mb-3">
                                                                    <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />Paris, Île-de-France, France</li>
                                                                    <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />LE BHV
                                      MARAIS (5 mins walk)</li>
                                                                </ul>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="col pl-0"><span className="text-muted font-small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">150$</span></div>
                                                                    <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">2-10</span></div>
                                                                    <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">200</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-10 col-md-6 col-lg-12">
                                                <div className="card border-light mb-4 animate-up-5">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/lifestyle-office.jpg" alt="lifestyle office" className="card-img p-2 rounded-xl" /></a></div>
                                                        <div className="col-12 col-lg-6 col-xl-7">
                                                            <div className="card-body p-3 p-md-1"><a >
                                                                <h4 className="h5">Lifestyle Space</h4>
                                                            </a>
                                                                <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill badge-primary ml-2">4.7</span></div>
                                                                <ul className="list-group mb-3">
                                                                    <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />Madrid, Hortaleza, Spain</li>
                                                                    <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Plaza
                                      Mayor (2 mins walk)</li>
                                                                </ul>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="col pl-0"><span className="text-muted font-small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">200$</span></div>
                                                                    <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">10-30</span></div>
                                                                    <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">500</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="extraContent" style={{ display: 'none' }}>
                                            <div className="row">
                                                <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                                                    <div className="card border-light mb-4 animate-up-5">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/private-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                                                            <div className="col-12 col-lg-6 col-xl-7">
                                                                <div className="card-body p-1"><a >
                                                                    <h4 className="h5">Collaborative Workspace</h4>
                                                                </a>
                                                                    <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill badge-primary ml-2">5.0</span></div>
                                                                    <ul className="list-group mb-3">
                                                                        <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />New York, Manhattan, USA</li>
                                                                        <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Old
                                        Street (2 mins walk)</li>
                                                                    </ul>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="col pl-0"><span className="text-muted font-small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">500$</span></div>
                                                                        <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">12</span></div>
                                                                        <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">1200</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                                                    <div className="card border-light mb-4 animate-up-5">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/meeting-office.jpg" alt="meeting office" className="card-img p-2 rounded-xl" /></a></div>
                                                            <div className="col-12 col-lg-6 col-xl-7">
                                                                <div className="card-body p-1"><a >
                                                                    <h4 className="h5">Meeting Office Space</h4>
                                                                </a>
                                                                    <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-light" /> <span className="badge badge-pill badge-primary ml-2">4.0</span></div>
                                                                    <ul className="list-group mb-3">
                                                                        <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />New York, Manhattan, USA</li>
                                                                        <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Old
                                        Street (2 mins walk)</li>
                                                                    </ul>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="col pl-0"><span className="text-muted font-small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">50$</span></div>
                                                                        <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">2-4</span></div>
                                                                        <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">400</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                                                    <div className="card border-light mb-4 animate-up-5">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/conference-office.jpg" alt="conference office" className="card-img p-2 rounded-xl" /></a></div>
                                                            <div className="col-12 col-lg-6 col-xl-7">
                                                                <div className="card-body p-1"><a >
                                                                    <h4 className="h5">Conference Room</h4>
                                                                </a>
                                                                    <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="fas fa-star-half text-warning" /> <span className="badge badge-pill badge-primary ml-2">4.7</span></div>
                                                                    <ul className="list-group mb-3">
                                                                        <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />Paris, Île-de-France, France</li>
                                                                        <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />LE BHV
                                        MARAIS (5 mins walk)</li>
                                                                    </ul>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="col pl-0"><span className="text-muted font-small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">150$</span></div>
                                                                        <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">2-10</span></div>
                                                                        <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">200</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <button id="loadOnClick" className="btn btn-primary shadow-soft border-soft btn-loading-overlay mr-2 mb-2" type="button">
                                                <span className="spinner"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> 
                                                </span>
                                                <span className="ml-1 btn-inner-text">Show more</span></button>
                                            <p id="allLoadedText" style={{ display: 'none' }}>That's all, Sparky!</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-grid-2" role="tabpanel" aria-labelledby="tab-grid-2-tab">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="card border-light mb-4 animate-up-5"><a  className="position-relative"><img src="../assets/img/image-office.jpg" className="card-img-top rounded-xl p-2" alt="" /></a>
                                                    <div className="card-body"><a >
                                                        <h4 className="h5">Coworking Workspace</h4>
                                                    </a>
                                                        <div className="d-flex my-4"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill badge-primary ml-2">5.0</span></div>
                                                        <ul className="list-group mb-3">
                                                            <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />California, USA</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Penny Market
                                  Street (15 mins walk)</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Museum Street
                                  (20 mins walk)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer bg-soft border-top">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">300$</span></div>
                                                            <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">24</span></div>
                                                            <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">2000</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="card border-light mb-4 animate-up-5"><a  className="position-relative"><img src="../assets/img/cowork-office.jpg" className="card-img-top rounded-xl p-2" alt="developer desk" /></a>
                                                    <div className="card-body"><a >
                                                        <h4 className="h5">Coworking Workspace</h4>
                                                    </a>
                                                        <div className="d-flex my-4"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <i className="star fas fa-star text-light" /> <i className="star fas fa-star text-light" /> <span className="badge badge-pill badge-primary ml-2">3.0</span></div>
                                                        <ul className="list-group mb-3">
                                                            <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />California, USA</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Penny Market
                                  Street (15 mins walk)</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Museum Street
                                  (20 mins walk)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer bg-soft border-top">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">300$</span></div>
                                                            <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">24</span></div>
                                                            <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">2000</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="card border-light mb-4 animate-up-5"><a  className="position-relative"><img src="../assets/img/meeting-office.jpg" className="card-img-top rounded-xl p-2" alt="wood office" /></a>
                                                    <div className="card-body"><a >
                                                        <h4 className="h5">Meeting Office Space</h4>
                                                    </a>
                                                        <div className="d-flex my-4"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <i className="star fas fa-star text-light" />
                                                            <span className="badge badge-pill badge-primary ml-2">4.0</span></div>
                                                        <ul className="list-group mb-3">
                                                            <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />London,
                                  Canary Wharf, UK</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Stamford
                                  Bridge Stadium (5 mins walk)</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Bluebird
                                  Chelsea Restaurant (15 mins walk)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer bg-soft border-top">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">50$</span></div>
                                                            <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">2-4</span></div>
                                                            <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">400</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="card border-light mb-4 animate-up-5"><a  className="position-relative"><img src="../assets/img/conference-office.jpg" className="card-img-top rounded-xl p-2" alt="pixel room" /></a>
                                                    <div className="card-body"><a >
                                                        <h4 className="h5">Conference Room</h4>
                                                    </a>
                                                        <div className="d-flex my-4"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <i className="fas fa-star-half text-warning" />
                                                            <span className="badge badge-pill badge-primary ml-2">4.7</span></div>
                                                        <ul className="list-group mb-3">
                                                            <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />Paris,
                                  Île-de-France, France</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />LE BHV MARAIS
                                  (5 mins walk)</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Shakespeare &amp;
                                  Company (15 mins walk)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer bg-soft border-top">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">150$</span></div>
                                                            <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">2-10</span></div>
                                                            <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">200</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="card border-light mb-4 animate-up-5"><a  className="position-relative"><img src="../assets/img/lifestyle-office.jpg" className="card-img-top rounded-xl p-2" alt="modern desk" /></a>
                                                    <div className="card-body"><a >
                                                        <h4 className="h5">Lifestyle Space</h4>
                                                    </a>
                                                        <div className="d-flex my-4"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill badge-primary ml-2">4.7</span></div>
                                                        <ul className="list-group mb-3">
                                                            <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />Madrid,
                                  Hortaleza, Spain</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Plaza Mayor (2
                                  mins walk)</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />eal Casa de
                                  Correos (15 mins walk)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer bg-soft border-top">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">200$</span></div>
                                                            <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">10-30</span></div>
                                                            <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">500</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="card border-light mb-4 animate-up-5"><a  className="position-relative"><img src="../assets/img/private-office.jpg" className="card-img-top rounded-xl p-2" alt="office modern" /></a>
                                                    <div className="card-body"><a >
                                                        <h4 className="h5">Private Space</h4>
                                                    </a>
                                                        <div className="d-flex my-4"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill badge-primary ml-2">5.0</span></div>
                                                        <ul className="list-group mb-3">
                                                            <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />New
                                  York, Manhattan, USA</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Old Street (2
                                  mins walk)</li>
                                                            <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />Shoreditch
                                  High Street (10 mins walk)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer bg-soft border-top">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">100$</span></div>
                                                            <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">1</span></div>
                                                            <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">10</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
           
        </div>
    )
}