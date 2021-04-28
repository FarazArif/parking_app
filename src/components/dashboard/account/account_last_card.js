import React from "react";

export default function Account_last_card() {
    return (

        <div className="row">
            <div className="col-12">
                <div className="card border-light">
                    <div className="card-body d-flex justify-content-between align-items-center flex-0 border-bottom">
                        <div className="d-block">
                            <div className="h6 font-weight-normal text-gray mb-2">Top Locations</div>
                            <h2 className="h3">Sessions by states</h2>
                            <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">38.2%</span></div>
                        </div>
                        <div className="form-group"><select className="custom-select" id="country">
                            <option>United States</option>
                            <option>Germany</option>
                            <option>France</option>
                            <option>Spain</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Japan</option>
                            <option>India</option>
                            <option>China</option>
                        </select></div>
                    </div>
                    <div className="card-body p-2">
                        <div id="vmap" style={{ width: '100%', height: 400 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}