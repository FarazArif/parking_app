
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function AllSpacesMAp() {
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
  type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d45729a31a5a', m: '051af5612734f8e06dbbfadabd372964892c7c55-1618318324-1800-AVjEaaCkeNq5ezPF5j4NGMXyK3T62Wim7wbRUsrUJCu043d0UZjJms1RjdQXiNq67sZbBgja0y3JPSos4MMqzFG482jBLKpw++C9rpWY3Z8++coDZ+TPT++UsQM7JdbbnsqPTOxvzlSeUj63kgHPbsh0SA4PQ9OQ/ey1PihL1V8C', s: [0x066a11620f, 0x66d926ed34], } })();
    `}
    </script>

        </Halmet>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
        <main>
  {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
    <div className="position-relative">

       <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
      <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> 

      <p className="rotate-letter  splash_logo">AL-Muslims</p>
      </div>
  </div> */}
  <div className="section section-header py-0 position-relative"><a className="navbar-brand pt-4 mx-2 mx-lg-6 logo-map" ><img className="navbar-brand-light" src="https://demo.themesberg.com/spaces/assets/img/brand/dark.svg" height={30} alt="Logo dark" /></a>
    <div className="search-map">
      <div className="card border-light p-md-2 mx-3 mx-xl-6">
        <div className="card-body p-4">
          <form autoComplete="off" method="get" action="#">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col">
                    <div className="form-group form-group-lg mb-lg-0">
                      <div className="input-group">
                        <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-map-marker-alt" /></span></div><input id="search-location" type="text" className="form-control autocomplete" placeholder="Location: e.g. Manhattan" tabIndex={1} required />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group form-group-lg mb-0">
                      <div className="input-group">
                        <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-calendar-alt" /></span></div><input className="form-control datepicker" placeholder="Select date" type="text" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <div id="collapseAdvanced" className="collapse">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div className="input-group input-group-lg mt-3">
                        <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-sliders-h" /></span></div><select className="custom-select" id="exampleFormControlSelect1">
                          <option>Type</option>
                          <option>On-Demand Meeting Spaces</option>
                          <option>Office Space</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="input-group input-group-lg mt-3">
                        <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-ruler-combined" /></span></div><select className="custom-select" id="exampleFormControlSelect2">
                          <option>Area</option>
                          <option>10 Sq. Ft - 20 Sq. Ft</option>
                          <option>20 Sq. Ft - 50 Sq. Ft</option>
                          <option>50 Sq. Ft - 100 Sq. Ft</option>
                          <option>100 Sq. Ft - 200 Sq. Ft</option>
                          <option>200+ Sq. Ft</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="input-group input-group-lg mt-3">
                        <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-user-circle" /></span></div><select className="custom-select" id="exampleFormControlSelect3">
                          <option>Team Size</option>
                          <option>Any</option>
                          <option>1-20</option>
                          <option>21-50</option>
                          <option>51-100</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="card border-light mt-3 p-3"><a  data-target="#reviews" className="accordion-panel-header w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="reviews"><span className="icon-title h6 mb-0 font-weight-bold">Rating</span> <span className="icon"><span className="fas fa-plus" /></span></a>
                        <ul id="reviews" className="collapse list-group list-group list-group-flush pt-4 border-0">
                          <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" /> <label className="form-check-label" htmlFor="defaultCheck1"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <span className="small font-weight-normal ml-2">(12)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" /> <label className="form-check-label" htmlFor="defaultCheck2"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star far fa-star text-dark" /> <span className="small font-weight-normal ml-2">(22)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3" /> <label className="form-check-label" htmlFor="defaultCheck3"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" />
                                  <span className="small font-weight-normal ml-2">(32)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck4" /> <label className="form-check-label" htmlFor="defaultCheck4"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star fas fa-star text-warning" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" />
                                  <i className="star far fa-star text-dark" /> <span className="small font-weight-normal ml-2">(9)</span></span></label></div>
                          </li>
                          <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck5" /> <label className="form-check-label" htmlFor="defaultCheck5"><span className="d-flex"><i className="star fas fa-star text-warning" /> <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" />
                                  <i className="star far fa-star text-dark" /> <i className="star far fa-star text-dark" /> <span className="small font-weight-normal ml-2">(4)</span></span></label></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="card border-light mt-3 p-3"><a  data-target="#amenities-1" className="accordion-panel-header w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="amenities-1"><span className="icon-title h6 mb-0 font-weight-bold">Amenities</span> <span className="icon"><i className="fas fa-plus" /></span></a>
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
                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck9" /> <label className="form-check-label" htmlFor="defaultCheck9">Bike
                                Parking</label></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="card border-light mt-3 p-3"><a  data-target="#price-1" className="accordion-panel-header w-100 d-flex align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="price-1"><span className="icon-title h6 mb-0 font-weight-bold">Price</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                        <div id="price-1" className="collapse pt-5">
                          <div id="input-slider-range" data-range-value-min={100} data-range-value-max={500} />
                          <div className="row d-none">
                            <div className="col-6"><span className="range-slider-value value-low" data-range-value-low={200} id="input-slider-range-value-low" /></div>
                            <div className="col-6 text-right"><span className="range-slider-value value-high" data-range-value-high={400} id="input-slider-range-value-high" /></div>
                          </div><span className="font-xs small text-gray">*Prices are in USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-6 col-lg-4 mb-3 mb-lg-0"><button className="btn btn-primary btn-block animate-up-2" type="submit">Find a desk</button></div>
                  <div className="col-6 col-lg-4 mb-3 mb-lg-0"><button className="btn btn-outline-gray btn-block animate-up-2" type="reset">Reset</button></div>
                  <div className="col-12 col-lg-4"><a  data-target="#collapseAdvanced" className="accordion-panel-header d-none d-lg-block" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseAdvanced"><span className="icon"><span className="fas fa-plus-circle" /></span> <span className="icon-title font-weight-normal text-gray ml-2 mb-0">Advanced Search</span></a></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="mapListings2" />
  </div>
</main>


      </div>
    );
  }

  export default AllSpacesMAp;