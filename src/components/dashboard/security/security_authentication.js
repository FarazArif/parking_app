import React from "react";

export default function Security_Authentication() {
    return (
        <div className="card border-light p-0 p-md-4 mb-4">
            <div className="card-header">
                <h3 className="h5 mb-0">Two Factor Authentication</h3>
                <p className="text-sm mb-0">Keep your account secure by enabling two-factor authentication.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row mx-n2">
                        <div className="col-12 col-lg-4 px-2">
                            <div className="form-group"><select className="custom-select">
                                <option>Google Auth</option>
                                <option>SMS Code</option>
                                <option>Backup Code</option>
                            </select></div>
                        </div>
                        <div className="col col-lg px-2">
                            <div className="form-group"><input type="text" className="form-control" placeholder="Description" /></div>
                        </div>
                        <div className="col-auto px-2"><button type="button" className="btn btn-secondary px-3"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg></button></div>
                    </div>
                </li>
                <li className="list-group-item border-bottom">
                    <div className="row align-items-center">
                        <div className="col-auto"><span className="icon icon-md"><span className="fab fa-google" /></span></div>
                        <div className="col ml-n2">
                            <h6 className="text-sm mb-0">Google Auth</h6>
                            <p className="card-text small text-muted">iPhone</p>
                        </div>
                        <div className="col-md d-none d-md-block"><span className="text-muted">Added:</span> 2020-03-12 01:14:22
        </div>
                        <div className="col-auto">
                            <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-v icon-dark" /> </span><span className="sr-only">Toggle Dropdown</span></button>
                                <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit post</a> <a className="dropdown-item text-danger" ><span className="fa fa-trash mr-2" aria-hidden="true" /> Disable</a></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-auto"><span className="icon icon-md"><span className="fas fa-sms" /></span></div>
                        <div className="col ml-n2">
                            <h6 className="text-sm mb-0">SMS Code</h6>
                        </div>
                        <div className="col d-none d-md-block"><span className="text-muted">Added:</span> 2020-02-12 14:34:12</div>
                        <div className="col-auto">
                            <div className="btn-group"><button className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-v icon-dark" /> </span><span className="sr-only">Toggle Dropdown</span></button>
                                <div className="dropdown-menu"><a className="dropdown-item" ><span className="fas fa-edit mr-2" /> Edit post</a> <a className="dropdown-item text-danger" ><span className="fa fa-trash mr-2" aria-hidden="true" /> Disable</a></div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
