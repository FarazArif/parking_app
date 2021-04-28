import React from "react";

export default function Chat_item_card() {


return(
<div className="card bg-soft-green border-light mb-4">
<div className="row no-gutters align-items-center">
  <div className="col-12 col-lg-4 col-xl-4"><a  ><img src="../../assets/img/private-office.jpg" alt="private office" className="card-img p-2 rounded-xl" /></a></div>
  <div className="col-12 col-lg-7 col-xl-8">
    <div className="card-body text-dark"><a  >
        <h4 className="h6">Collaborative Workspace</h4>
      </a>
      <ul className="list-group mb-3">
        <li className="list-group-item small p-0 border-0"><span className="fas fa-map-marker-alt mr-2" />New
          York, Manhattan, USA</li>
      </ul>
      <div className="d-flex justify-content-between">
        <div className="col pl-0"><span className="small d-block">Monthly</span> <span className="h6 text-dark font-weight-bold">500$</span></div>
        <div className="col"><span className="small d-block">People</span> <span className="h6 text-dark font-weight-bold">12</span></div>
        <div className="col pr-0"><span className="small d-block">Sq.Ft</span> <span className="h6 text-dark font-weight-bold">1200</span></div>
      </div>
    </div>
  </div>
</div>
</div>);
}