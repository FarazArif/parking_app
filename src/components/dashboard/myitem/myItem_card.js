import React from "react";

export default function MyItem_Card() {


    let MyItem_card = [
        {
            img: "../../assets/img/meeting-office.jpg",
            heading: "Collaborative Workspace",
            time: "Promoted until: 12 June"

        },
        {
            img: "../../assets/img/meeting-office.jpg",
            heading: "Collaborative Workspace",
            time: "Promoted until: 12 June"

        },
        {
            img: "../../assets/img/meeting-office.jpg",
            heading: "Collaborative Workspace",
            time: "Promoted until: 12 June"

        },
        {
            img: "../../assets/img/meeting-office.jpg",
            heading: "Collaborative Workspace",
            time: "Promoted until: 12 June"

        },
    ]
    return (
        <div className="col-12 col-lg-8">
            <div className="row justify-content-center">

                <div className="col-12 col-sm-10 col-md-6 col-lg-12"><a className="btn btn-outline-secondary btn-block mb-4 py-4"><span className="mr-2"><span className="fas fa-plus" /></span>Submit New Item</a>

                    {MyItem_card.map((data, i) => {
                        return (
                            <div className="card border-light mb-4">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-12 col-lg-6 col-xl-4"><a ><img src={data.img} alt="private office" className="card-img p-2 rounded-xl" /></a></div>
                                    <div className="col-12 col-lg-6 col-xl-8">
                                        <div className="card-body py-lg-0">
                                            <div className="d-flex no-gutters align-items-center mb-3">
                                                <div className="col text-left">
                                                    <ul className="list-group mb-0">
                                                        <li className="list-group-item small p-0"><span className="fas fa-medal text-tertiary mr-2" />{data.time}</li>
                                                    </ul>
                                                    <div className="modal fade bd-example-modal-lg" id="modal-notification" tabIndex={-1} role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                                            <div className="modal-content bg-white px-0">
                                                                <div className="modal-header">
                                                                    <h2 className="h5 mb-3">{data.heading}</h2><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
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
                        )
                    })}

                </div>

                {/* <div className="col-12 col-sm-10 col-md-6 col-lg-12">
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
                </div> */}
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
    )
}