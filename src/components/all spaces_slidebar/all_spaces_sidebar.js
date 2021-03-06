
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";
import All_Sapces_Sidebar_card from "./all_spaces_sidebar_card";


function AllSpacesSidbar() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d45a4a305601', m: 'a9fd09cd6f78406a90efaad27dcc0a77911f8fa9-1618318325-1800-AQnFpGDMRoubyAQrXQGBvgXGin9VAVFpdWZMUj6RX5oTVNVWXXNn7S5TLQlUbXp63CkZg8DTZR+BMN6yib/zZv/6vLCzwf4vDASN82uet0fx7uNVLtpWc8kpbdLY4KhgoNi9KyGbGrq5RvHd2penzxR3HIed22t48VOwvl5QSo5Q', s: [0x00c0848ef2, 0x28b16a4258], } })();
    `}
        </script>

      </Halmet>

      <>

        <main>
          {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
            <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
          </div> */}
          <div className="section section-header section-image bg-tertiary overlay-primary text-white overflow-hidden pb-6" data-background="../assets/img/new-york-hero.jpg">
            <div className="container z-2">
              <div className="row justify-content-center pt-3">
                <div className="col-12 text-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-transparent justify-content-center mb-4">
                      <li className="breadcrumb-item text-secondary"><a >Home</a>
                      </li>
                      <li className="breadcrumb-item text-secondary"><a  >United States</a></li>
                      <li className="breadcrumb-item text-muted active" aria-current="page">New York</li>
                    </ol>
                  </nav>
                  <h1 className="mb-5">Find a Space in <span className="font-weight-bolder">New York</span></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-lg pt-6">
            <div id="spaces-container" className="container">
              <div className="row">
                <div className="col-12 mb-4">
                  <form autoComplete="off" className="row" action="#">
                    <div className="col-12 col-lg-4">
                      <div className="form-group mb-lg-0">
                        <div className="input-group input-group-md mb-lg-0">
                          <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-search" /></span></div><input id="search-location" type="text" className="form-control autocomplete" placeholder="Search location" tabIndex={1} required />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3">
                      <div className="input-group input-group-md mb-3 mb-lg-0">
                        <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-calendar-alt" /></span></div><input className="form-control datepicker" placeholder="Select date" type="text" required />
                      </div>
                    </div>
                    <div className="col-12 col-lg-2"><button className="btn btn-primary btn-block mb-3 mt-md-0 animate-up-2" type="submit">Find a Parking</button></div>
                    {/* <div className="col-12 col-lg-3"><a  data-toggle="modal" data-target="#map-listings" className="card bg-soft border-light p-3 mb-lg-3 flex-row align-items-center justify-content-center text-primary">
                      <span className="fas fa-map-marker-alt mr-2" /> <span>Map View</span></a></div> */}
                  </form>
                </div>
                <div className="col-12 d-lg-none"><span className="d-block font-small text-primary mt-2 text-right" id="show-filters-button">Show filters</span></div>
              </div>
              <div className="row">
                <aside id="filters-container" className="col-12 col-lg-3 mt-3 mt-lg-0 z-2 order-lg-2">
                  <div id="filters-sidebar" className="d-none d-lg-block">
                    <form action="#" method="get" className="sidebar-inner">
                      <div className="card border-light p-3"><a   data-target="#price" className="accordion-panel-header w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="price"><span className="icon-title h6 mb-0 font-weight-bold">Price range</span> <span className="icon icon-xs"><span className="fas fa-plus" /></span></a>
                        <div id="price" className="collapse">
                          <div className="pt-5">
                            <div id="input-slider-range" data-range-value-min={100} data-range-value-max={500} />
                            <div className="row d-none">
                              <div className="col-6"><span className="range-slider-value value-low" data-range-value-low={200} id="input-slider-range-value-low" /></div>
                              <div className="col-6 text-right"><span className="range-slider-value value-high" data-range-value-high={400} id="input-slider-range-value-high" /></div>
                            </div><span className="font-xs text-gray">*Prices are in USD</span>
                          </div>
                        </div>
                      </div>
                      <div className="card border-light mt-4 p-3"><a   data-target="#capacity" className="accordion-panel-header w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="capacity"><span className="icon-title h6 mb-0 font-weight-bold">Capacity</span> <span className="icon icon-xs"><span className="fas fa-plus" /></span></a>
                        <div id="capacity" className="collapse pt-4">
                          {/* <div className="form-group"><label htmlFor="people" className="pt-2">People</label> <select className="custom-select custom-select-sm" id="people">
                            <option>1 Person</option>
                            <option>2-5 Persons</option>
                            <option>10-20 Persons</option>
                            <option>20-40 Persons</option>
                            <option>50+ Persons</option>
                          </select></div> */}
                          <div className="form-group"><label htmlFor="size">Size</label> <select className="custom-select custom-select-sm" id="size">
                            <option>10 Sq. Ft - 20 Sq. Ft</option>
                            <option>20 Sq. Ft - 50 Sq. Ft</option>
                            <option>50 Sq. Ft - 100 Sq. Ft</option>
                            <option>100 Sq. Ft - 200 Sq. Ft</option>
                            <option>200+ Sq. Ft</option>
                          </select></div>
                        </div>
                      </div>
                      <div className="card border-light mt-3 p-3"><a   data-target="#reviews" className="accordion-panel-header w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="reviews"><span className="icon-title h6 mb-0 font-weight-bold">Rating</span> <span className="icon"><span className="fas fa-plus" /></span></a>
                        <ul id="reviews" className="collapse list-group list-group-flush pt-4 border-0">
                          <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" /> <label className="form-check-label" htmlFor="defaultCheck1"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" />
                              <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" />
                              <span className="small font-weight-normal ml-2">(12)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" /> <label className="form-check-label" htmlFor="defaultCheck2"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" />
                              <i className="star fas fa-star text-warning" /> <i className="star far fa-star text-dark" />
                              <span className="small font-weight-normal ml-2">(22)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3" /> <label className="form-check-label" htmlFor="defaultCheck3"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" />
                              <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" /> <span className="small font-weight-normal ml-2">(32)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck4" /> <label className="form-check-label" htmlFor="defaultCheck4"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" /> <span className="small font-weight-normal ml-2">(9)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck5" /> <label className="form-check-label" htmlFor="defaultCheck5"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" /> <span className="small font-weight-normal ml-2">(4)</span></span></label></div>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="card border-light mt-4 p-3"><a   data-target="#amenities-1" className="accordion-panel-header w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="amenities-1"><span className="icon-title h6 mb-0 font-weight-bold">Amenities</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                        <ul id="amenities-1" className="collapse list-group list-group list-group-flush pt-4 border-0">
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck6" /> <label className="form-check-label" htmlFor="defaultCheck6">Kitchen</label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck7" /> <label className="form-check-label" htmlFor="defaultCheck7">Conference
                          Room</label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck8" /> <label className="form-check-label" htmlFor="defaultCheck8">Coffee &amp;
                          Drinks</label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck9" /> <label className="form-check-label" htmlFor="defaultCheck9">Bike Parking</label>
                            </div>
                          </li>
                        </ul>
                      </div> */}

                      <button className="btn btn-sm btn-block btn-primary animate-up-2 mt-4" type="submit">Apply
                  filters</button>
                    </form>
                  </div>
                </aside>
                <div className="col-12 col-lg-9 order-lg-1">
                  <div className="justify-content-between align-items-center d-none d-md-flex">
                    <div className="mr-3">
                      <h2 className="h5 mb-3 mb-md-0">Total Property Find: <span className="font-weiht-bolder text-primary">207</span>
                      </h2>
                    </div>
                    {/* <div className="nav-wrapper position-relative p-0">
                      <ul className="nav nav-pills small-pills" id="tab-34" role="tablist">
                        <li className="nav-item pr-0"><a className="nav-link text-sm-center border-0 active" id="tab-link-example-14" data-toggle="tab" role="tab" aria-controls="link-example-14" aria-selected="false"><span className="nav-link-icon d-block"><span className="fas fa-th-large" /></span></a></li>
                        <li className="nav-item pr-0"><a className="nav-link text-sm-center border-0" id="tab-link-example-13" data-toggle="tab" role="tab" aria-controls="link-example-13" aria-selected="true"><span className="nav-link-icon d-block"><span className="fas fa-th-list" /></span></a></li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="tab-content mt-4 mt-lg-4" id="tabcontentexample-5">
                    <div className="tab-pane fade" id="link-example-13" role="tabpanel" aria-labelledby="tab-link-example-13">
                      <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                          <div className="card border-light mb-4 animate-up-5">
                            <div className="row no-gutters align-items-center">
                              <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/private-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                              <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card-body"><a  >
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
                              <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/meeting-office.jpg" alt="meeting office" className="card-img p-2 rounded-xl" /></a></div>
                              <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card-body"><a  >
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
                              <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/conference-office.jpg" alt="conference office" className="card-img p-2 rounded-xl" /></a></div>
                              <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card-body"><a  >
                                  <h4 className="h5">Conference Room</h4>
                                </a>
                                  <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="fas fa-star-half text-warning" /> <span className="badge badge-pill badge-primary ml-2">4.7</span></div>
                                  <ul className="list-group mb-3">
                                    <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />Paris, ??le-de-France, France</li>
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
                              <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/lifestyle-office.jpg" alt="lifestyle office" className="card-img p-2 rounded-xl" /></a></div>
                              <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card-body"><a  >
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
                    </div>
                    <div className="tab-pane fade show active" id="link-example-14" role="tabpanel" aria-labelledby="tab-link-example-14">
                      <div className="row">
                      {/* Row */}
                      <All_Sapces_Sidebar_card/>
                        {/* <div className="col-12 col-md-6">
                          <div className="card border-light mb-4 animate-up-5"><a   className="position-relative"><img src="../assets/img/image-office.jpg" className="card-img-top rounded-xl p-2" alt="themesberg office" /></a>
                            <div className="card-body"><a  >
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
                          <div className="card border-light mb-4 animate-up-5"><a   className="position-relative"><img src="../assets/img/cowork-office.jpg" className="card-img-top rounded-xl p-2" alt="developer desk" /></a>
                            <div className="card-body"><a  >
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
                          <div className="card border-light mb-4 animate-up-5"><a   className="position-relative"><img src="../assets/img/meeting-office.jpg" className="card-img-top rounded-xl p-2" alt="wood office" /></a>
                            <div className="card-body"><a  >
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
                          <div className="card border-light mb-4 animate-up-5"><a   className="position-relative"><img src="../assets/img/conference-office.jpg" className="card-img-top rounded-xl p-2" alt="pixel room" /></a>
                            <div className="card-body"><a  >
                              <h4 className="h5">Conference Room</h4>
                            </a>
                              <div className="d-flex my-4"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <i className="fas fa-star-half text-warning" />
                                <span className="badge badge-pill badge-primary ml-2">4.7</span></div>
                              <ul className="list-group mb-3">
                                <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />Paris,
                            ??le-de-France, France</li>
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
                          <div className="card border-light mb-4 animate-up-5"><a   className="position-relative"><img src="../assets/img/lifestyle-office.jpg" className="card-img-top rounded-xl p-2" alt="modern desk" /></a>
                            <div className="card-body"><a  >
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
                          <div className="card border-light mb-4 animate-up-5"><a   className="position-relative"><img src="../assets/img/private-office.jpg" className="card-img-top rounded-xl p-2" alt="office modern" /></a>
                            <div className="card-body"><a  >
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
                        </div> */}
                      </div>
                    </div>
                    <div className="col mt-3 d-flex justify-content-center">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item disabled"><a className="page-link" tabIndex={-1}  >Previous</a></li>
                          <li className="page-item"><a className="page-link"  >1</a></li>
                          <li className="page-item active"><a className="page-link"  >2</a></li>
                          <li className="page-item"><a className="page-link"  >3</a></li>
                          <li className="page-item"><a className="page-link"  >4</a></li>
                          <li className="page-item"><a className="page-link"  >5</a></li>
                          <li className="page-item"><a className="page-link"  >Next</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="modal fade" id="map-listings" tabIndex={-1} role="dialog" aria-labelledby="map-listings" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-full" role="document">
            <div className="modal-content position-relative">
              <div className="preloadermap bg-dark flex-column justify-content-center align-items-center">
                <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
              </div>
              <div className="modal-header border-0 pb-1 d-block">
                <div className="d-flex justify-content-end d-lg-none mb-2"><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button></div>
                <form action="#" className="row align-items-center">
                  <div className="col-12 col-lg-3">
                    <div className="form-group m-lg-0">
                      <div className="input-group input-group-md mb-2 m-lg-0">
                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-search" /></span>
                        </div><input id="search-location-map" type="text" className="form-control autocomplete" placeholder="Search location" tabIndex={1} required />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="input-group input-group-md mb-3 m-lg-0">
                      <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-calendar-alt" /></span></div><input className="form-control datepicker" placeholder="Select date" type="text" required />
                    </div>
                  </div>
                  <div className="col-12 col-lg-2 mb-2 mb-lg-0"><button className="btn btn-primary btn-block m-0 animate-up-2" type="submit">Find a desk</button></div>
                  <div className="col-lg-2 d-flex align-items-center">
                    <p className="m-0 font-small">Showing 13 results</p>
                  </div>
                  <div className="d-none col-lg-2 d-lg-block"><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button></div>
                </form>
              </div>
              <div className="modal-body overflow-hidden d-flex py-4">
                <div className="row h-100">
                  <div className="d-none d-xl-block col-12 col-lg-5 overflow-auto h-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="card border-light mb-4 animate-up-5">
                          <div className="row no-gutters align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/private-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                            <div className="col-12 col-lg-6 col-xl-7">
                              <div className="card-body px-3 py-2"><a  >
                                <h4 className="h6">Collaborative Workspace</h4>
                              </a>
                                <div className="d-flex my-2 small"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill small badge-primary ml-2">5.0</span></div>
                                <div className="d-flex justify-content-between">
                                  <div className="col pl-0"><span className="text-muted small d-block mb-1">Monthly</span> <span className="h5 small text-dark font-weight-bold">500$</span></div>
                                  <div className="col"><span className="text-muted small d-block mb-1">People</span> <span className="h5 small text-dark font-weight-bold">12</span></div>
                                  <div className="col pr-0"><span className="text-muted small d-block mb-1">Sq.Ft</span> <span className="h5 small text-dark font-weight-bold">600</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="card border-light mb-4 animate-up-5">
                          <div className="row no-gutters align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/meeting-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                            <div className="col-12 col-lg-6 col-xl-7">
                              <div className="card-body px-3 py-2"><a  >
                                <h4 className="h6">Meeting Office</h4>
                              </a>
                                <div className="d-flex my-2 small"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star-half text-warning" /> <span className="badge badge-pill small badge-primary ml-2">4.7</span></div>
                                <div className="d-flex justify-content-between">
                                  <div className="col pl-0"><span className="text-muted small d-block mb-1">Monthly</span> <span className="h5 small text-dark font-weight-bold">200$</span></div>
                                  <div className="col"><span className="text-muted small d-block mb-1">People</span> <span className="h5 small text-dark font-weight-bold">40</span></div>
                                  <div className="col pr-0"><span className="text-muted small d-block mb-1">Sq.Ft</span> <span className="h5 small text-dark font-weight-bold">1200</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="card border-light mb-4 animate-up-5">
                          <div className="row no-gutters align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/lifestyle-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                            <div className="col-12 col-lg-6 col-xl-7">
                              <div className="card-body px-3 py-2"><a  >
                                <h4 className="h6">Lifestyle Office</h4>
                              </a>
                                <div className="d-flex my-2 small"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill small badge-primary ml-2">5.0</span></div>
                                <div className="d-flex justify-content-between">
                                  <div className="col pl-0"><span className="text-muted small d-block mb-1">Monthly</span> <span className="h5 small text-dark font-weight-bold">500$</span></div>
                                  <div className="col"><span className="text-muted small d-block mb-1">People</span> <span className="h5 small text-dark font-weight-bold">10-50</span></div>
                                  <div className="col pr-0"><span className="text-muted small d-block mb-1">Sq.Ft</span> <span className="h5 small text-dark font-weight-bold">900</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="card border-light mb-4 animate-up-5">
                          <div className="row no-gutters align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/conference-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                            <div className="col-12 col-lg-6 col-xl-7">
                              <div className="card-body px-3 py-2"><a  >
                                <h4 className="h6">Conference Office</h4>
                              </a>
                                <div className="d-flex my-2 small"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill small badge-primary ml-2">5.0</span></div>
                                <div className="d-flex justify-content-between">
                                  <div className="col pl-0"><span className="text-muted small d-block mb-1">Monthly</span> <span className="h5 small text-dark font-weight-bold">500$</span></div>
                                  <div className="col"><span className="text-muted small d-block mb-1">People</span> <span className="h5 small text-dark font-weight-bold">10-50</span></div>
                                  <div className="col pr-0"><span className="text-muted small d-block mb-1">Sq.Ft</span> <span className="h5 small text-dark font-weight-bold">900</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="extraContent" style={{ display: 'none' }}>
                        <div className="col-12">
                          <div className="card border-light mb-4 animate-up-5">
                            <div className="row no-gutters align-items-center">
                              <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/meeting-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                              <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card-body px-3 py-2"><a  >
                                  <h4 className="h6">Meeting Office</h4>
                                </a>
                                  <div className="d-flex my-2 small"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star-half text-warning" /> <span className="badge badge-pill small badge-primary ml-2">4.7</span></div>
                                  <div className="d-flex justify-content-between">
                                    <div className="col pl-0"><span className="text-muted small d-block mb-1">Monthly</span> <span className="h5 small text-dark font-weight-bold">200$</span></div>
                                    <div className="col"><span className="text-muted small d-block mb-1">People</span> <span className="h5 small text-dark font-weight-bold">40</span></div>
                                    <div className="col pr-0"><span className="text-muted small d-block mb-1">Sq.Ft</span> <span className="h5 small text-dark font-weight-bold">1200</span></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="card border-light mb-4 animate-up-5">
                            <div className="row no-gutters align-items-center">
                              <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/lifestyle-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                              <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card-body px-3 py-2"><a  >
                                  <h4 className="h6">Lifestyle Office</h4>
                                </a>
                                  <div className="d-flex my-2 small"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill small badge-primary ml-2">5.0</span></div>
                                  <div className="d-flex justify-content-between">
                                    <div className="col pl-0"><span className="text-muted small d-block mb-1">Monthly</span> <span className="h5 small text-dark font-weight-bold">500$</span></div>
                                    <div className="col"><span className="text-muted small d-block mb-1">People</span> <span className="h5 small text-dark font-weight-bold">10-50</span></div>
                                    <div className="col pr-0"><span className="text-muted small d-block mb-1">Sq.Ft</span> <span className="h5 small text-dark font-weight-bold">900</span></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="card border-light mb-4 animate-up-5">
                            <div className="row no-gutters align-items-center">
                              <div className="col-12 col-lg-6 col-xl-5"><a  ><img src="../assets/img/conference-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                              <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card-body px-3 py-2"><a  >
                                  <h4 className="h6">Conference Office</h4>
                                </a>
                                  <div className="d-flex my-2 small"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill small badge-primary ml-2">5.0</span></div>
                                  <div className="d-flex justify-content-between">
                                    <div className="col pl-0"><span className="text-muted small d-block mb-1">Monthly</span> <span className="h5 small text-dark font-weight-bold">500$</span></div>
                                    <div className="col"><span className="text-muted small d-block mb-1">People</span> <span className="h5 small text-dark font-weight-bold">10-50</span></div>
                                    <div className="col pr-0"><span className="text-muted small d-block mb-1">Sq.Ft</span> <span className="h5 small text-dark font-weight-bold">900</span></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-2 mb-4 text-center"><button id="loadOnClick" className="btn btn-primary shadow-soft border-soft btn-loading-overlay mr-2 mb-2" type="button"><span className="spinner"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> </span><span className="ml-1 btn-inner-text">Show more</span></button>
                        <p id="allLoadedText" style={{ display: 'none' }}>That's all, Sparky!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div id="mapListings" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>

    </div>
  );
}

export default AllSpacesSidbar;