import React from "react"

export default function Profile_cards() {
    let Profile_aside_array = [{
        img: "../assets/img/private-office.jpg",
        heading: "Collaborative Workspace",
        rating: "5.0",
        location: "New York, Manhattan, USA",
        gprs: "Old Street(2 mins walk)",
        monthPrice: "500$",
        peopleAmount: "2-10",
        sqftData: "1200"
    }, {
        img: "../assets/img/private-office.jpg",
        heading: "Collaborative Workspace",
        rating: "5.0",
        location: "New York, Manhattan, USA",
        gprs: "Old Street(2 mins walk)",
        monthPrice: "500$",
        peopleAmount: "2-10",
        sqftData: "1200"
    }, {
        img: "../assets/img/private-office.jpg",
        heading: "Collaborative Workspace",
        rating: "5.0",
        location: "New York, Manhattan, USA",
        gprs: "Old Street(2 mins walk)",
        monthPrice: "500$",
        peopleAmount: "2-10",
        sqftData: "1200"
    }
    ]
    return (

        <div className="col-12 col-lg-8">
            <div className="tab-content mt-4">
                <div className="tab-pane fade show active" id="tab-grid-1" role="tabpanel" aria-labelledby="tab-grid-1-tab">
                    <div className="row justify-content-center">

                        {Profile_aside_array.map((data) => {
                            return (
                                <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                                    <div className="card border-light mb-4 animate-up-5">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-12 col-lg-6 col-xl-5"><a ><img src={data.img} alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                                            <div className="col-12 col-lg-6 col-xl-7">
                                                <div className="card-body p-3 p-md-1"><a >
                                                    <h4 className="h5">{data.heading}</h4>
                                                </a>
                                                    <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="badge badge-pill badge-primary ml-2">{data.rating}</span></div>
                                                    <ul className="list-group mb-3">
                                                        <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />{data.location}</li>
                                                        <li className="list-group-item small p-0"><span className="fas fa-bullseye mr-2" />{data.gprs}</li>
                                                    </ul>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0"><span className="text-muted font-small d-block">Month</span> <span className="h6 text-dark font-weight-bold">{data.price}</span></div>
                                                        <div className="col"><span className="text-muted font-small d-block">People</span> <span className="h6 text-dark font-weight-bold">{data.people}</span></div>
                                                        <div className="col pr-0"><span className="text-muted font-small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">{data.sqftData}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                            <div className="card border-light mb-4 animate-up-5">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-12 col-lg-6 col-xl-5"><a ><img src="../assets/img/meeting-office.jpg" alt="meeting office" className="card-img p-2 rounded-xl" /></a></div>
                                    <div className="col-12 col-lg-6 col-xl-7">
                                        <div className="card-body p-3 p-md-1"><a >
                                            <h4 className="h5">Meeting Office Space</h4>
                                        </a>
                                            <div className="d-flex my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-light" /> <span className="badge badge-pill badge-primary ml-2">4.0</span></div>
                                            <ul className="list-group mb-3">
                                                <li className="list-group-item small p-0"><span className="fas fa-map-marker-alt mr-2" />erty ,iy ,iuyj</li>
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
                            <div className="card border-light mb-4 animate-up-5"><a className="position-relative"><img src="../assets/img/image-office.jpg" className="card-img-top rounded-xl p-2" alt="" /></a>
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
                            <div className="card border-light mb-4 animate-up-5"><a className="position-relative"><img src="../assets/img/cowork-office.jpg" className="card-img-top rounded-xl p-2" alt="developer desk" /></a>
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
                            <div className="card border-light mb-4 animate-up-5"><a className="position-relative"><img src="../assets/img/meeting-office.jpg" className="card-img-top rounded-xl p-2" alt="wood office" /></a>
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
                            <div className="card border-light mb-4 animate-up-5"><a className="position-relative"><img src="../assets/img/conference-office.jpg" className="card-img-top rounded-xl p-2" alt="pixel room" /></a>
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
                            <div className="card border-light mb-4 animate-up-5"><a className="position-relative"><img src="../assets/img/lifestyle-office.jpg" className="card-img-top rounded-xl p-2" alt="modern desk" /></a>
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
                            <div className="card border-light mb-4 animate-up-5"><a className="position-relative"><img src="../assets/img/private-office.jpg" className="card-img-top rounded-xl p-2" alt="office modern" /></a>
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}