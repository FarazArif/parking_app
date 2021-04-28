import React from "react";

export default function Billing_detail() {


return(
    <form action="#" method="post" className="card border-light p-3 mb-4">
    <div className="card-header border-light p-3 mb-4 mb-md-0">
      <h3 className="h5 mb-0">Billing details</h3>
    </div>
    <div className="card-body p-0 p-md-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
          <div className="form-group mb-4"><label htmlFor="cartInputEmail1">Email address *</label> <input type="email" className="form-control" placeholder="example@company.com" id="cartInputEmail1" aria-describedby="cartInputEmail1" required /></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group"><label className="my-1 mr-2" htmlFor="cartFormCustomSelectPref1">Country</label>
            <select className="custom-select my-1 mr-sm-2" id="cartFormCustomSelectPref1">
              <option selected="selected">Choose...</option>
              <option value={1}>United States</option>
              <option value={2}>Germany</option>
              <option value={3}>Canada</option>
            </select></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group mb-4"><label htmlFor="cartInputAdress1">Adress</label> <input type="text" placeholder="Texas" className="form-control" id="cartInputAdress1" aria-describedby="cartInputAdress1" /></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group mb-4"><label htmlFor="cartInputCity1">City</label> <input type="text" placeholder="Dallas" className="form-control" id="cartInputCity1" aria-describedby="cartInputCity1" /></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group mb-4"><label htmlFor="cartInputZip1">Zip/Postal code</label> <input type="number" placeholder={123456} className="form-control" id="cartInputZip1" aria-describedby="cartInputZip1" /></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group mb-4"><label htmlFor="cartInputCompany1">Company Name *</label> <input type="text" placeholder="Company LLC" className="form-control" id="cartInputCompany1" aria-describedby="cartInputCompany1" required /></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group mb-4"><label htmlFor="cartInputVAT1">VAT ID</label> <input type="number" placeholder="NL232142" className="form-control" id="cartInputVAT1" aria-describedby="cartInputVAT1" /></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-group mb-4"><label htmlFor="cartInputPhone1">Phone Number</label> <input type="number" placeholder="+(12)345 6789" className="form-control" id="cartInputPhone1" aria-describedby="cartInputPhone1" /></div>
        </div>
        <div className="col-12"><button className="btn btn-primary btn-dark mt-2 animate-up-2" type="submit">Update</button></div>
      </div>
    </div>
  </form>
)
}