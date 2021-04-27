import React from "react";
import "../spaces.css";
import { Helmet } from "react-helmet";
import SingleSpaceCard from "./single_spaces_detail_card";
import SingleSpaceIconGroup from "./icons_group";

export default function SingleSpace() {
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
         type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d45da8101a5a', m: 'd784845fe9f7a878184334e4cc8f13b6a9f5ea3e-1618318326-1800-AVYsVJDRQInmmtnJkqwFTZXBF7MVizbPId70goaP0ImYQvEbXkPrqNHBlooXorhmbuUz7n5+vKSMrChK8HX3l8DMFjVpAKQDZ4ulNWo3HsMaWz8r+hc6WG4MzyCB7ezFC9L7Y5GD2ZeTr+EOTcU62jQ=', s: [0x50fabddfa8, 0xeb16087225], } })();
      `}
        </script>
      </Helmet>

      <main>
        {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
                    <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
                </div> */}
        <div
          className="section section-header section-image bg-primary overlay-primary text-white overflow-hidden pb-6"
          data-background="../assets/img/team-hero.jpg"
        >
          <div className="container z-2">
            <div className="row justify-content-center pt-3">
              <div className="col-12 text-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-transparent justify-content-center mb-4">
                    <li className="breadcrumb-item text-secondary">
                      <a>Home</a>
                    </li>
                    <li className="breadcrumb-item text-secondary">
                      <a>United States</a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Lorem ipsum dolor sit
                    </li>
                  </ol>
                </nav>
                <h1 className="mb-4">
                  Lorem ipsum dolor sit amet consectetur{" "}
                </h1>
                <div className="d-block d-md-flex justify-content-center">
                  <span className="h6 font-weight-light">
                    <span className="fas fa-check-circle mr-1 pr-1" />
                    Verified
                  </span>{" "}
                  <span className="lh-120 ml-md-4">
                    <i className="fas fa-map-marker-alt mr-1 pr-1" />
                    26, Vancouver, BC, Canada - 324578{" "}
                    <a data-fancyboxw className="ml-md-3">
                      See Location
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-lg pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <nav>
                  <div
                    className="nav nav-tabs flex-column flex-md-row border-light mb-3"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="nav-about-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-about"
                      aria-selected="true"
                    >
                      <span className="far fa-address-card mr-2" />
                      About
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-video-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-video"
                      aria-selected="false"
                    >
                      <span className="far fa-play-circle mr-2" />
                      Video
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-amenities-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-amenities"
                      aria-selected="false"
                    >
                      <span className="fas fa-cubes mr-2" />
                      Amenities
                    </a>{" "}
                    <a
                      className="nav-item nav-link"
                      id="nav-reviews-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-reviews"
                      aria-selected="false"
                    >
                      <span className="far fa-star mr-2" />
                      Reviews
                    </a>{" "}
                    <a
                      className="nav-item nav-link"
                      id="nav-location-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-location"
                      aria-selected="false"
                    >
                      <span className="fas fa-map-marker-alt mr-2" />
                      Location
                    </a>
                  </div>
                </nav>
                <div className="tab-content mt-5 mb-3" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-about"
                    role="tabpanel"
                    aria-labelledby="nav-about-tab"
                  >
                    <div className="row mb-5">
                      <div className="col-12">
                        <div className="fancy-gallery mb-5">
                          <div className="row">
                            <a
                              className="mb-4 col-6 col-sm-4 img-fluid"
                              data-fancybox="images"
                              data-caption="Conference Space"
                            >
                              <img
                                className="rounded"
                                src="../assets/img/conference-office.jpg"
                                alt=""
                              />{" "}
                            </a>
                            <a
                              className="mb-4 col-6 col-sm-4 img-fluid"
                              data-fancybox="images"
                              data-caption="Cowork Office"
                            >
                              <img
                                className="rounded"
                                src="../assets/img/cowork-office.jpg"
                                alt=""
                              />{" "}
                            </a>
                            <a
                              className="mb-4 col-6 col-sm-4 img-fluid"
                              data-fancybox="images"
                              data-caption="Lifestyle Space"
                            >
                              <img
                                className="rounded"
                                src="../assets/img/lifestyle-office.jpg"
                                alt=""
                              />{" "}
                            </a>
                            <a
                              className="mb-4 col-6 col-sm-4 img-fluid"
                              data-fancybox="images"
                              data-caption="Conference Space"
                            >
                              <img
                                className="rounded"
                                src="../assets/img/image-office.jpg"
                                alt=""
                              />{" "}
                            </a>
                            <a
                              className="mb-4 col-6 col-sm-4 img-fluid"
                              data-fancybox="images"
                              data-caption="Meeting Office"
                            >
                              <img
                                className="rounded"
                                src="../assets/img/meeting-office.jpg"
                                alt=""
                              />{" "}
                            </a>
                            <a
                              className="mb-4 col-6 col-sm-4 img-fluid"
                              data-fancybox="images"
                              data-caption="Private Space"
                            >
                              <img
                                className="rounded"
                                src="../assets/img/private-office.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <p>
                          <span className="font-weight-bold">L'atelier</span>{" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit Lorem ipsum dolor sit amet consectetur
                          adipisicing elitLorem ipsum dolor sit amet consectetur
                          adipisicing elit Lorem ipsum dolor sit amet
                          consectetur adipisicing elit
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elitLoremLorem ipsum dolor sit amet consectetur
                          adipisicing elit Lorem ipsum dolor sit amet
                          consectetur adipisicing elit Lorem ipsum dolor sit
                          amet consectetur adipisicing elit Lorem ipsum dolor
                          sit amet consectetur adipisicing elit
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elitLoremLorem ipsum dolor sit amet consectetur
                          adipisicing elitLorem Lorem ipsum dolor sit amet
                          consectetur adipisicing elitLorem Lorem ipsum dolor
                          sit amet consectetur adipisicing elitLorem Lorem ipsum
                          dolor sit amet consectetur adipisicing elitLorem.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="card card-body bg-soft border-light p-2">
                        <SingleSpaceIconGroup/>
                          {/* <div className="card-group bg-soft">
                            <div className="card mb-0">
                              <div className="card-body text-center px-0 px-md-3">
                                <div className="icon icon-secondary">
                                  <span className="far fa-calendar-alt" />
                                </div>
                                <div className="h5 mt-3 mb-0">1 Year</div>{" "}
                                <span className="text-muted h6 font-weight-normal mb-0">
                                  Minimum term
                                </span>
                              </div>
                            </div>
                            <div className="card mb-0 border-left">
                              <div className="card-body text-center px-0 px-md-3">
                                <div className="icon icon-secondary">
                                  <span className="fas fa-ruler-combined" />
                                </div>
                                <div className="h5 mt-3 mb-0">180SqFt</div>{" "}
                                <span className="text-muted h6 font-weight-normal mb-0">
                                  Space size
                                </span>
                              </div>
                            </div>
                            <div className="card mb-0 border-left">
                              <div className="card-body text-center px-0 px-md-3">
                                <div className="icon icon-secondary">
                                  <span className="fas fa-users" />
                                </div>
                                <div className="h5 mt-3 mb-0">10-30</div>{" "}
                                <span className="text-muted h6 font-weight-normal mb-0">
                                  Peoples
                                </span>
                              </div>
                            </div>
                            <div className="card mb-0 border-left">
                              <div className="card-body text-center px-0 px-md-3">
                                <div className="icon icon-secondary">
                                  <span className="fas fa-couch" />
                                </div>
                                <div className="h5 mt-3 mb-0">Meeting</div>{" "}
                                <span className="text-muted h6 font-weight-normal mb-0">
                                  Space type
                                </span>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-video"
                    role="tabpanel"
                    aria-labelledby="nav-video-tab"
                  >
                    <div className="video-poster overlay-dark position-relative rounded">
                      <a data-fancybox>
                        <span className="icon icon-white icon-xl">
                          <span className="fas fa-play-circle" />
                        </span>{" "}
                      </a>
                      <img
                        src="../assets/img/lifestyle-office.jpg"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-amenities"
                    role="tabpanel"
                    aria-labelledby="nav-amenities-tab"
                  >
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Basic</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>High-Speed WiFi</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Air Conditioning</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Heating</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Seating</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Standing Desks</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Ergonomic Chairs</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Beanbags</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Community</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Events</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Community Lunches</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Workshops</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Community Drinks</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Facebook Group for Members</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Mentorship Programs</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Pitching events</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Accelerator programs</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Toastmasters</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Facilities</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Kitchen</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Skype Room</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Nearby Restaurants</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Makerspace</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Personal Lockers</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Phone Booth</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Event Space For Rent</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Nearby Airbnb</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Onsite Airbnb</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Equipment</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Printer</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>3D Printer</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Projector</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Transportation</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>5 Minute Walk From Public Transit</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>10 Minute Walk From Metro Station</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Bike Parking</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Relax Zones</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Outdoor Terrace</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Lounge / Chill-out Area</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card border-bottom rounded-0 p-4">
                          <h2 className="h5">Caffeine Fix</h2>
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Free Tea</span>
                            </li>
                            <li className="d-flex py-1">
                              <span className="icon icon-xs icon-primary">
                                <span className="fas fa-check-circle mr-2" />{" "}
                              </span>
                              <span>Free Coffee</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-reviews"
                    role="tabpanel"
                    aria-labelledby="nav-reviews-tab"
                  >
                    <div className="card bg-white border border-light p-4 mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <a className="h5">Awesome place</a>
                          <ul className="list-unstyled d-flex mt-1 mb-0">
                            <li className="list-item small mr-3">
                              by Margaret Mead
                            </li>
                            <li className="list-item small">2 weeks ago</li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-end">
                          <span className="d-flex justify-content-center">
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star far fa-star text-gray" />
                          </span>
                        </div>
                      </div>
                      <p className="m-0">
                        Always remember that you are absolutely unique. Just
                        like everyone else.
                      </p>
                    </div>
                    <div className="card bg-white border border-light p-4 mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <a className="h5">Great working environment</a>
                          <ul className="list-unstyled d-flex mt-1 mb-0">
                            <li className="list-item small mr-3">
                              by Neil Sims
                            </li>
                            <li className="list-item small">2 weeks ago</li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-end">
                          <span className="d-flex justify-content-center">
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star far fa-star text-gray" />
                          </span>
                        </div>
                      </div>
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitLorem Lorem ipsum dolor sit amet consectetur
                        adipisicing elitLorem.
                      </p>
                    </div>
                    <div className="card bg-white border border-light p-4 mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <a className="h5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elitLorem
                          </a>
                          <ul className="list-unstyled d-flex mt-1 mb-0">
                            <li className="list-item small mr-3">
                              by Jose Leos
                            </li>
                            <li className="list-item small">2 weeks ago</li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-end">
                          <span className="d-flex justify-content-center">
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star fa-star fas text-warning mr-2" />{" "}
                            <i className="star far fa-star text-gray" />
                          </span>
                        </div>
                      </div>
                      <p className="m-0">
                        TLorem ipsum dolor sit amet consectetur adipisicing
                        elitLo remLorem ipsum dolor sit amet consectetur
                        adipisicing{" "}
                      </p>
                    </div>
                    <form method="post">
                      <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
                        <h2 className="h5 m-0">Add a review</h2>
                        <span className="d-flex justify-content-center stars-rating">
                          <i
                            className="star far fa-star text-gray mr-2"
                            data-rating-value={1}
                          />{" "}
                          <i
                            className="star far fa-star text-gray mr-2"
                            data-rating-value={2}
                          />{" "}
                          <i
                            className="star far fa-star text-gray mr-2"
                            data-rating-value={3}
                          />{" "}
                          <i
                            className="star far fa-star text-gray mr-2"
                            data-rating-value={4}
                          />{" "}
                          <i
                            className="star far fa-star text-gray"
                            data-rating-value={5}
                          />
                        </span>
                      </div>
                      <textarea
                        name="description"
                        className="form-control border"
                        placeholder="Add a review"
                        rows={6}
                        data-bind-characters-target="#charactersRemaining"
                        maxLength={1000}
                        required
                        defaultValue={""}
                      />
                      <div className="d-flex justify-content-between mt-3">
                        <small className="font-weight-light">
                          <span id="charactersRemaining">1000</span> characters
                          remaining
                        </small>{" "}
                        <button
                          type="submit"
                          className="btn btn-primary animate-up-2"
                        >
                          Add review
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-location"
                    role="tabpanel"
                    aria-labelledby="nav-location-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <iframe
                          className="map rounded"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=san%20francisco&t=&z=8&ie=UTF8&iwloc=&output=embed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="col-12 col-lg-4 mt-3 mt-lg-0">
                <div className="card bg-soft border-light p-3">
                  <div className="d-flex align-items-baseline">
                    <span className="h3 font-weight-bold mb-0 mr-1">$ 250</span>{" "}
                    <span className="small">/month</span>
                  </div>
                </div>
                <div className="card border-light mt-4 p-3">
                  <button
                    className="btn btn-primary availability"
                    value="06/20/2018"
                  >
                    Booking Availability
                  </button>
                </div>
                <div className="card border-light mt-4 p-3">
                  <h5 className="font-weight-normal">Property Owner</h5>
                  <div className="media d-flex align-items-center my-3">
                    <a
                      className="avatar-lg mr-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="More details"
                    >
                      <img
                        className="img-fluid rounded-circle"
                        src="../assets/img/team/profile-picture-1.jpg"
                        alt="avatar"
                      />
                    </a>
                    <div className="avatar-name">
                      <a
                        className="text-gray"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="More details"
                      >
                        Jose Leos
                      </a>
                    </div>
                  </div>{" "}
                  <button
                    type="button"
                    className="btn btn-block btn-secondary mb-3"
                    data-toggle="modal"
                    data-target="#modal-form"
                  >
                    Contact Host
                  </button>
                  <div
                    className="modal fade"
                    id="modal-form"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modal-form"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered modal-md"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-body p-0">
                          <div className="card shadow-md border-0">
                            <div className="card-body position-relative">
                              <button
                                type="button"
                                className="close mb-2"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                              <form className="mt-3">
                                <div className="form-group">
                                  <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="far fa-user" />
                                      </span>
                                    </div>
                                    <input
                                      className="form-control"
                                      placeholder="Name"
                                      type="text"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="far fa-envelope" />
                                      </span>
                                    </div>
                                    <input
                                      className="form-control"
                                      placeholder="Email"
                                      type="email"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    placeholder="Write message"
                                    id="message-2"
                                    rows={4}
                                    required
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-block btn-primary mt-4"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-light mt-4 p-3">
                  <h5 className="font-weight-normal">Request Desk</h5>
                  <form className="mt-3">
                    <div className="form-group">
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-user" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Name"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-envelope" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Email"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-mobile" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Phone"
                          type="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Write short message to host"
                        id="message"
                        rows={4}
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary mt-4"
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <section className="section bg-soft">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="mb-5 font-weight-bold">
                  Lorem ipsum dolor sit amet consectetur
                </h4>
            </div>
            <SingleSpaceCard/>
             {/*  <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-light mb-4 animate-up-5">
                  <a className="position-relative">
                    <img
                      src="../assets/img/meeting-office.jpg"
                      className="card-img-top rounded-xl p-2"
                      alt="wood office"
                    />
                  </a>
                  <div className="card-body">
                    <a>
                      <h4 className="h5">Meeting Office Space</h4>
                    </a>
                    <div className="d-flex my-4">
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-light" />{" "}
                      <span className="badge badge-pill badge-primary ml-2">
                        4.0
                      </span>
                    </div>
                    <ul className="list-group mb-3">
                      <li className="list-group-item small p-0">
                        <span className="fas fa-map-marker-alt mr-2" />
                        London, Canary Wharf, UK
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Stamford Bridge Stadium (5 mins walk)
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Bluebird Chelsea Restaurant (15 mins walk)
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top">
                    <div className="d-flex justify-content-between">
                      <div className="col pl-0">
                        <span className="text-muted font-small d-block mb-2">
                          Monthly
                        </span>{" "}
                        <span className="h5 text-dark font-weight-bold">
                          50$
                        </span>
                      </div>
                      <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">2-4</span></div>
                      <div className="col pr-0">
                        <span className="text-muted font-small d-block mb-2">
                          Sq.Ft
                        </span>{" "}
                        <span className="h5 text-dark font-weight-bold">
                          400
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-light mb-4 animate-up-5">
                  <a className="position-relative">
                    <img
                      src="../assets/img/conference-office.jpg"
                      className="card-img-top rounded-xl p-2"
                      alt="pixel room"
                    />
                  </a>
                  <div className="card-body">
                    <a>
                      <h4 className="h5">Conference Room</h4>
                    </a>
                    <div className="d-flex my-4">
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="fas fa-star-half text-warning" />{" "}
                      <span className="badge badge-pill badge-primary ml-2">
                        4.7
                      </span>
                    </div>
                    <ul className="list-group mb-3">
                      <li className="list-group-item small p-0">
                        <span className="fas fa-map-marker-alt mr-2" />
                        Paris, Île-de-France, France
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        LE BHV MARAIS (5 mins walk)
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Shakespeare &amp; Company (15 mins walk)
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top">
                    <div className="d-flex justify-content-between">
                      <div className="col pl-0">
                        <span className="text-muted font-small d-block mb-2">
                          Monthly
                        </span>{" "}
                        <span className="h5 text-dark font-weight-bold">
                          150$
                        </span>
                      </div>
                      <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">2-10</span></div>
                      <div className="col pr-0">
                        <span className="text-muted font-small d-block mb-2">
                          Sq.Ft
                        </span>{" "}
                        <span className="h5 text-dark font-weight-bold">
                          200
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-light mb-4 animate-up-5">
                  <a className="position-relative">
                    <img
                      src="../assets/img/lifestyle-office.jpg"
                      className="card-img-top rounded-xl p-2"
                      alt="modern desk"
                    />
                  </a>
                  <div className="card-body">
                    <a>
                      <h4 className="h5">Lifestyle Space</h4>
                    </a>
                    <div className="d-flex my-4">
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <i className="star fas fa-star text-warning" />{" "}
                      <span className="badge badge-pill badge-primary ml-2">
                        4.7
                      </span>
                    </div>
                    <ul className="list-group mb-3">
                      <li className="list-group-item small p-0">
                        <span className="fas fa-map-marker-alt mr-2" />
                        Madrid, Hortaleza, Spain
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Plaza Mayor (2 mins walk)
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        eal Casa de Correos (15 mins walk)
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top">
                    <div className="d-flex justify-content-between">
                      <div className="col pl-0">
                        <span className="text-muted font-small d-block mb-2">
                          Monthly
                        </span>{" "}
                        <span className="h5 text-dark font-weight-bold">
                          200$
                        </span>
                      </div>
                      <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">10-30</span></div>
                      <div className="col pr-0">
                        <span className="text-muted font-small d-block mb-2">
                          Sq.Ft
                        </span>{" "}
                        <span className="h5 text-dark font-weight-bold">
                          500
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
