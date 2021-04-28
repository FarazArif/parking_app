import React from "react";

export default function Security_Session() {
    return (

        <div className="card card-body bg-white border-light p-0 p-md-4">
            <div className="card-header">
                <div className="row d-block d-md-flex align-items-center">
                    <div className="col">
                        <h3 className="h5">Your Sessions</h3>
                        <p className="small">This is a list of devices that have logged into your account.<br />Revoke any
                      sessions that you do not recognize.</p>
                    </div>
                    <div className="col-auto"><span className="btn btn-sm btn-dark ">Log out all</span></div>
                </div>
            </div>
            <div className="card-body p-md-0">
                <ul className="list-group">
                    <li className="list-group-item border-bottom py-md-4">
                        <div className="row d-block d-md-flex align-items-center">
                            <div className="col-auto">
                                <div className="icon icon-lg mr-md-5 fw-60"><span className="fas fa-mobile-alt" /></div>
                            </div>
                            <div className="col ml-md-n5 my-4 my-md-0">
                                <h3 className="h6 mb-1">iPhone X</h3>
                                <div className="small">New York, USA</div><span className="small"><span className="text-dark font-weight-bold">Last accessed:</span> March 10 at 6:06PM</span>
                            </div>
                            <div className="col-auto"><button className="btn btn-xs btn-outline-gray">Log out</button></div>
                        </div>
                    </li>
                    <li className="list-group-item py-md-4">
                        <div className="row d-block d-md-flex align-items-center">
                            <div className="col-auto">
                                <div className="icon icon-lg mr-md-5 fw-60"><span className="fas fa-laptop" /></div>
                            </div>
                            <div className="col ml-md-n5 my-4 my-md-0">
                                <h3 className="h6 mb-1">Chrome on Macintosh</h3>
                                <div className="small">New York, USA</div><span className="small"><span className="text-dark font-weight-bold">Last accessed:</span> March 11 at 4:26PM</span>
                            </div>
                            <div className="col-auto"><button className="btn btn-xs btn-outline-gray">Log out</button></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}