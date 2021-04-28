import React from "react";

export default function Account_card() {
    return (

        <div className="row">
            <div className="col-12 col-sm-6 mb-4">
                <div className="card border-light">
                    <div className="card-body d-block d-md-flex align-items-center">
                        <div className="icon icon-shape icon-md icon-shape-primary rounded-circle mr-3 mb-4 mb-md-0"><span className="fas fa-wallet" /></div>
                        <div><span className="d-block h6 font-weight-normal">Global Budget</span>
                            <h5 className="h3 font-weight-bold mb-1">$25,370.00</h5>
                            <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">18.2%</span> higher vs previous month</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 mb-4">
                <div className="card border-light">
                    <div className="card-body d-block d-md-flex align-items-center">
                        <div className="icon icon-shape icon-md icon-shape-primary rounded-circle mr-3 mb-4 mb-md-0"><span className="fas fa-file-invoice-dollar" /></div>
                        <div><span className="d-block h6 font-weight-normal">Sales</span>
                            <h5 className="h3 font-weight-bold mb-1">$5,220.00</h5>
                            <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">4.2%</span> higher vs previous month</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
                <div className="card border-light">
                    <div className="card-body d-flex flex-row align-items-center flex-0 border-bottom">
                        <div className="d-block">
                            <div className="h6 font-weight-normal text-gray mb-2">New customers</div>
                            <h2 className="h3">452</h2>
                            <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">18.2%</span></div>
                        </div>
                        <div className="d-block ml-auto">
                            <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-dark mr-2" /> <span className="font-weight-normal small">Last month</span></div>
                            <div className="d-flex align-items-center text-right"><span className="shape-xs rounded-circle bg-tertiary mr-2" /> <span className="font-weight-normal small">This month</span></div>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <div className="ct-chart-5 ct-golden-section ct-series-e" />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
                <div className="card border-light">
                    <div className="card-body d-flex flex-row align-items-center flex-0 border-bottom">
                        <div className="d-block">
                            <div className="h6 font-weight-normal text-gray mb-2">Revenues</div>
                            <h2 className="h3">10,567</h2>
                            <div className="small mt-2"><span className="fas fa-angle-up text-success" /> <span className="text-success font-weight-bold">$10.57%</span></div>
                        </div>
                        <div className="d-block ml-auto">
                            <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-dark mr-2" /> <span className="font-weight-normal small">Meeting Space</span></div>
                            <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-tertiary mr-2" /> <span className="font-weight-normal small">Loft Space</span></div>
                            <div className="d-flex align-items-center text-right mb-2"><span className="shape-xs rounded-circle bg-primary mr-2" /> <span className="font-weight-normal small">Private Space</span></div>
                            <div className="d-flex align-items-center text-right"><span className="shape-xs rounded-circle bg-success mr-2" /> <span className="font-weight-normal small">Conference Space</span></div>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <div className="ct-chart-7 ct-golden-section ct-series-e" />
                    </div>
                </div>
            </div>
        </div>
    )
}