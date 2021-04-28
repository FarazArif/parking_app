import React from "react";

export default function Account_aside() {
    return (
        <div className="card border-light p-2">
            <div className="card-body p-2">
                <div className="profile-thumbnail small-thumbnail mx-auto"><img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                <h2 className="h5 font-weight-normal text-center mt-3 mb-0">Neil Sims</h2>
                <div className="list-group dashboard-menu list-group-sm mt-4"><a className="d-flex list-group-item list-group-item-action active">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
            </div>
        </div>
    )
}