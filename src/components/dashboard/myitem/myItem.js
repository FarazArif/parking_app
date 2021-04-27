
import React from 'react';
import Halmet from "react-helmet";
import "../../spaces.css";



function MyItem() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4b02c281a5a', m: '23119b57454f8b61070a153fda41b2c80bba4743-1618318338-1800-Ab5obrm12Ox2EVD9N79lE5dD04pJ42z3IzBgpq3Hc9Tk+4+EoAYNJulqE7rFL+pm/vXohrZLOGi5V5Qyv0Q7i/66511Ia9FreEpqLgmkdKxEyGMAMTKGBZb8xeXlgGqZTyONMq0SeZaF6/IgOGrVHiN/HzZtBiwKj2EPVtxebfrt', s: [0x4a17e7b1b3, 0xdfa338ef08], } })();
    `}
    </script>

        </Halmet>

        <>

  <main>
    {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
      <div className="position-relative">
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
         <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
         <p className="rotate-letter  splash_logo">ALMuslims</p>
         </div>
    </div> */}
    <div className="section section-lg bg-soft">
      <div className="container">
        <div className="row pt-5 pt-md-0">
          <div className="col-12 col-md-4 d-none d-lg-block">
            <div className="card border-light p-2">
              <div className="card-body p-2">
                <div className="profile-thumbnail small-thumbnail mx-auto"><img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                <h2 className="h5 font-weight-normal text-center mt-3 mb-0">Neil Sims</h2>
                <div className="list-group dashboard-menu list-group-sm mt-4"><a  className="d-flex list-group-item list-group-item-action">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action active">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <div className="card bg-white border-light mb-4 mb-lg-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-10 d-flex"><a  className="list-group-item list-group-item-action border-0">Overview</a> <a  className="list-group-item list-group-item-action border-0">Settings</a> <a  className="list-group-item list-group-item-action d-none d-sm-block border-0 active">My Items</a> <a  className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a></div>
                  <div className="col-2 d-flex justify-content-center">
                    <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                      <div className="dropdown-menu"><a  className="list-group-item list-group-item-action d-sm-none border-0 active">My Items</a> <a  className="list-group-item list-group-item-action d-md-none border-0">Security</a> <a  className="list-group-item list-group-item-action border-0">Billing</a> <a  className="list-group-item list-group-item-action border-0">Messages</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-6 col-lg-12"><a  className="btn btn-outline-secondary btn-block mb-4 py-4"><span className="mr-2"><span className="fas fa-plus" /></span>Submit New Item</a>
                <div className="card border-light mb-4">
                  <div className="row no-gutters align-items-center">
                    <div className="col-12 col-lg-6 col-xl-4"><a ><img src="../../assets/img/meeting-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                    <div className="col-12 col-lg-6 col-xl-8">
                      <div className="card-body py-lg-0">
                        <div className="d-flex no-gutters align-items-center mb-3">
                          <div className="col text-left">
                            <ul className="list-group mb-0">
                              <li className="list-group-item small p-0"><span className="fas fa-medal text-tertiary mr-2" />Promoted until: 12 June</li>
                            </ul>
                            <div className="modal fade bd-example-modal-lg" id="modal-notification" tabIndex={-1} role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content bg-white px-0">
                                  <div className="modal-header">
                                    <h2 className="h5 mb-3">Collaborative Workspace</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="d-flex align-items-center">
                                      <div className="col">
                                        <h2 className="h4">Views</h2>
                                      </div>
                                      <div className="col-3">
                                        <div className="form-group"><select className="custom-select" id="exampleFormControlSelect2">
                                            <option>15 days</option>
                                            <option>30 days</option>
                                            <option>60 days</option>
                                            <option>90 days</option>
                                          </select></div>
                                      </div>
                                    </div>
                                    <div className="ct-chart-statistics ct-golden-section ct-series-a" />
                                  </div>
                                  <div className="modal-footer"><button type="button" className="btn btn-sm btn-secondary">Go to
                                      Dashboard</button></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col text-right">
                            <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary" />
                                </span><span className="sr-only">Toggle Dropdown</span></button>
                              <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit Item</a> <a className="dropdown-item text-danger" ><span className="fa fa-trash mr-2" aria-hidden="true" /> Disable</a> <a className="dropdown-item" data-toggle="modal" data-target="#modal-notification"><span className="fas fa-chart-line mr-2" />Statistics</a></div>
                            </div>
                          </div>
                        </div><a >
                          <h2 className="h5">Collaborative Workspace</h2>
                        </a>
                        <div className="col d-flex pl-0"><span className="text-success font-small mr-3"><span className="fas fa-check-circle mr-2" />Active</span> <span className="text-muted font-small mr-3"><span className="fas fa-eye mr-2" />680</span> <span className="text-muted font-small mr-3"><span className="far fa-heart mr-2" />10</span> <a className="font-small text-dark" ><span className="fas fa-envelope mr-2" />8</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-10 col-md-6 col-lg-12">
                <div className="card border-light mb-4">
                  <div className="row no-gutters align-items-center">
                    <div className="col-12 col-lg-6 col-xl-4"><a ><img src="../../assets/img/spaces/meeting.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                    <div className="col-12 col-lg-6 col-xl-8">
                      <div className="card-body py-lg-0">
                        <div className="d-flex no-gutters align-items-center mb-3">
                          <div className="col text-left">
                            <ul className="list-group mb-0">
                              <li className="list-group-item small p-0"><span className="fas fa-medal text-tertiary mr-2" />Promoted until: 12 June</li>
                            </ul>
                            <div className="modal fade bd-example-modal-lg" id="modal-notification-2" tabIndex={-1} role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content bg-white px-0">
                                  <div className="modal-header">
                                    <h2 className="h5 mb-3">Meeting Workspace</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="d-flex align-items-center">
                                      <div className="col">
                                        <h2 className="h4">Views</h2>
                                      </div>
                                      <div className="col-3">
                                        <div className="form-group"><select className="custom-select" id="exampleFormControlSelect3">
                                            <option>15 days</option>
                                            <option>30 days</option>
                                            <option>60 days</option>
                                            <option>90 days</option>
                                          </select></div>
                                      </div>
                                    </div>
                                    <div className="ct-chart-statistics-2 ct-golden-section ct-series-b" />
                                  </div>
                                  <div className="modal-footer"><button type="button" className="btn btn-sm btn-secondary">Go to
                                      Dashboard</button></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col text-right">
                            <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary" />
                                </span><span className="sr-only">Toggle Dropdown</span></button>
                              <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit Item</a> <a className="dropdown-item text-success" ><span className="fas fa-plus mr-2" aria-hidden="true" /> Publish</a> <a className="dropdown-item" data-toggle="modal" data-target="#modal-notification-2"><span className="fas fa-chart-line mr-2" />Statistics</a></div>
                            </div>
                          </div>
                        </div><a >
                          <h2 className="h5">Meeting Workspace</h2>
                        </a>
                        <div className="col d-flex pl-0"><span className="text-danger font-small mr-3"><span className="fas fa-times-circle mr-2" />Disabled</span> <span className="text-muted font-small mr-3"><span className="fas fa-eye mr-2" />3880</span> <span className="text-muted font-small mr-3"><span className="far fa-heart mr-2" />30</span> <a className="font-small text-dark" ><span className="fas fa-envelope mr-2" />80</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-10 col-md-6 col-lg-12">
                <div className="card border-light mb-4">
                  <div className="row no-gutters align-items-center">
                    <div className="col-12 col-lg-6 col-xl-4"><a ><img src="../../assets/img/private-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                    <div className="col-12 col-lg-6 col-xl-8">
                      <div className="card-body py-lg-0">
                        <div className="d-flex no-gutters align-items-center mb-3">
                          <div className="col text-left">
                            <ul className="list-group mb-0">
                              <li className="list-group-item small p-0"><span className="fas fa-medal text-tertiary mr-2" />Promoted until: 12 June</li>
                            </ul>
                            <div className="modal fade bd-example-modal-lg" id="modal-notification-3" tabIndex={-1} role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content bg-white px-0">
                                  <div className="modal-header">
                                    <h2 className="h5 mb-3">Private Office</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="d-flex align-items-center">
                                      <div className="col">
                                        <h2 className="h4">Views</h2>
                                      </div>
                                      <div className="col-3">
                                        <div className="form-group"><select className="custom-select" id="exampleFormControlSelect4">
                                            <option>15 days</option>
                                            <option>30 days</option>
                                            <option>60 days</option>
                                            <option>90 days</option>
                                          </select></div>
                                      </div>
                                    </div>
                                    <div className="ct-chart-statistics-3 ct-golden-section ct-series-c" />
                                  </div>
                                  <div className="modal-footer"><button type="button" className="btn btn-sm btn-secondary">Go to
                                      Dashboard</button></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col text-right">
                            <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary" />
                                </span><span className="sr-only">Toggle Dropdown</span></button>
                              <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit Item</a> <a className="dropdown-item text-danger" ><span className="fa fa-trash mr-2" aria-hidden="true" /> Disable</a> <a className="dropdown-item" data-toggle="modal" data-target="#modal-notification-3"><span className="fas fa-chart-line mr-2" />Statistics</a></div>
                            </div>
                          </div>
                        </div><a >
                          <h2 className="h5">Pivate Workspace</h2>
                        </a>
                        <ul className="list-group mb-3">
                          <li className="list-group-item small p-0"><span className="fas fa-medal text-tertiary mr-2" />Promoted until: 12 June</li>
                        </ul>
                        <div className="col d-flex pl-0"><span className="text-success font-small mr-3"><span className="fas fa-check-circle mr-2" />Active</span> <span className="text-muted font-small mr-3"><span className="fas fa-eye mr-2" />680</span> <span className="text-muted font-small mr-3"><span className="far fa-heart mr-2" />10</span> <a className="font-small text-dark" ><span className="fas fa-envelope mr-2" />8</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-10 col-md-6 col-lg-12">
                <div className="card border-light mb-4">
                  <div className="row no-gutters align-items-center">
                    <div className="col-12 col-lg-6 col-xl-4"><a ><img src="../../assets/img/meeting-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                    <div className="col-12 col-lg-6 col-xl-8">
                      <div className="card-body py-lg-0">
                        <div className="d-flex no-gutters align-items-center mb-3">
                          <div className="col text-left">
                            <ul className="list-group mb-0">
                              <li className="list-group-item small p-0"><span className="fas fa-medal text-tertiary mr-2" />Promoted until: 12 June</li>
                            </ul>
                            <div className="modal fade bd-example-modal-lg" id="modal-notification-4" tabIndex={-1} role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content bg-white px-0">
                                  <div className="modal-header">
                                    <h2 className="h5 mb-3">Collaborative Workspace</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="d-flex align-items-center">
                                      <div className="col">
                                        <h2 className="h4">Views</h2>
                                      </div>
                                      <div className="col-3">
                                        <div className="form-group"><select className="custom-select" id="exampleFormControlSelect1">
                                            <option>15 days</option>
                                            <option>30 days</option>
                                            <option>60 days</option>
                                            <option>90 days</option>
                                          </select></div>
                                      </div>
                                    </div>
                                    <div className="ct-chart-statistics-4 ct-golden-section ct-series-d" />
                                  </div>
                                  <div className="modal-footer"><button type="button" className="btn btn-sm btn-secondary">Go to
                                      Dashboard</button></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col text-right">
                            <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary" />
                                </span><span className="sr-only">Toggle Dropdown</span></button>
                              <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit Item</a> <a className="dropdown-item text-danger" ><span className="fa fa-trash mr-2" aria-hidden="true" /> Disable</a> <a className="dropdown-item" data-toggle="modal" data-target="#modal-notification-4"><span className="fas fa-chart-line mr-2" />Statistics</a></div>
                            </div>
                          </div>
                        </div><a >
                          <h2 className="h5">Collaborative Workspace</h2>
                        </a>
                        <ul className="list-group mb-3">
                          <li className="list-group-item small p-0"><span className="fas fa-medal text-tertiary mr-2" />Promoted until: 12 June</li>
                        </ul>
                        <div className="col d-flex pl-0"><span className="text-success font-small mr-3"><span className="fas fa-check-circle mr-2" />Active</span> <span className="text-muted font-small mr-3"><span className="fas fa-eye mr-2" />680</span> <span className="text-muted font-small mr-3"><span className="far fa-heart mr-2" />10</span> <a className="font-small text-dark" ><span className="fas fa-envelope mr-2" />8</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center mt-5">
                    <li className="page-item"><a className="page-link" >Previous</a></li>
                    <li className="page-item active"><a className="page-link" >1</a></li>
                    <li className="page-item"><a className="page-link" >2</a></li>
                    <li className="page-item"><a className="page-link" >3</a></li>
                    <li className="page-item"><a className="page-link" >4</a></li>
                    <li className="page-item"><a className="page-link" >5</a></li>
                    <li className="page-item"><a className="page-link" >Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</>

      </div>
    );
  }

  export default MyItem;