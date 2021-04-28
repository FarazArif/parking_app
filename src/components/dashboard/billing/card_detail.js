import React from "react";

export default function Card_detail() {


return(
    <form action="#" method="post" className="card border-light p-3 mb-4">
    <div className="card-header border-light p-3 mb-4 mb-md-0">
      <h3 className="h5 mb-0">Card details</h3>
    </div>
    <div className="card-body p-0 p-md-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="form-group"><label className="form-label" htmlFor="cardNameLabel"><span className="small text-dark">(Full name as displayed on card)</span></label>
            <div className="input-group mb-4"><input className="form-control" id="cardNameLabel" placeholder="Name on Card *" type="text" required /></div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group"><label htmlFor="cardNumberLabel">Card Number <span className="text-danger">*</span></label>
            <div className="input-group mb-4">
              <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-credit-card" /></span></div><input className="form-control" id="cardNumberLabel" placeholder="0000 0000 0000 0000" type="number" required />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group"><label htmlFor="cardCVCLabel">CVC <span className="text-danger">*</span></label>
            <input className="form-control" id="cardCVCLabel" placeholder="CVC" type="number" required />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group"><label htmlFor="cardExpiryLabel">Card Expiry <span className="text-danger">*</span></label>
            <div className="input-group mb-4">
              <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-calendar-alt" /></span></div><input className="form-control" id="cardExpiryLabel" placeholder="MM / YY" type="number" required />
            </div>
          </div>
        </div>
        <div className="col-12"><button className="btn btn-primary btn-dark mt-2 animate-up-2" type="submit">Update</button></div>
      </div>
    </div>
  </form>
)
}