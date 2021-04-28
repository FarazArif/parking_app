import React from "react";

export default function Order_history() {


return(
    <div className="card card-body bg-white border-light p-0 p-md-4">
    <div className="card-header border-bottom p-3">
      <h3 className="h5">Order History</h3>
      <p className="small pr-lg-10">This is a list of devices that have logged into your account. Revoke any
    sessions that you do not recognize.</p>
    </div>
    <div className="card-body px-0 pt-0">
      <div className="card card-sm card-body border-light mb-0"><a data-target="#panel-1" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1"><span className="h6 mb-0 font-weight-bold">History</span> <span className="icon"><span className="fas fa-plus" /></span></a>
        <div className="collapse" id="panel-1">
          <div className="pt-3">
          <ul className="list-group">
        <li className="list-group-item border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="h6 mb-1"><a  >Invoice #120345</a></h3> <small className="text-gray-700">Billed August 21, 2019</small>
            </div>
            <div className="col-auto"><button className="btn btn-xs btn-outline-dark">Pay now</button></div>
          </div>
        </li>
        <li className="list-group-item border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="h6 mb-1"><a  >Invoice #120344</a></h3> <small className="text-gray-700">Billed July 21, 2019</small>
            </div>
            <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
          </div>
        </li>
        <li className="list-group-item border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="h6 mb-1"><a  >Invoice #120343</a></h3> <small className="text-gray-700">Billed June 21, 2019</small>
            </div>
            <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
          </div>
        </li>
      </ul>

          </div>
        </div>
      </div>
      {/* <ul className="list-group">
        <li className="list-group-item border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="h6 mb-1"><a  >Invoice #120345</a></h3> <small className="text-gray-700">Billed August 21, 2019</small>
            </div>
            <div className="col-auto"><button className="btn btn-xs btn-outline-dark">Pay now</button></div>
          </div>
        </li>
        <li className="list-group-item border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="h6 mb-1"><a  >Invoice #120344</a></h3> <small className="text-gray-700">Billed July 21, 2019</small>
            </div>
            <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
          </div>
        </li>
        <li className="list-group-item border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="h6 mb-1"><a  >Invoice #120343</a></h3> <small className="text-gray-700">Billed June 21, 2019</small>
            </div>
            <div className="col-auto"><span className="badge badge-pill badge-success"><span className="text-uppercase font-weight-bold">Paid</span></span></div>
          </div>
        </li>
      </ul> */}
    </div>
  </div>
)
}