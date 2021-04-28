import React from "react";

export default function Dashboard_side_card() {


return(

    <div className="col-12 col-md-4 d-none d-lg-block">
    <div className="card border-light p-2">
      <div className="card-body p-2">
        <div className="profile-thumbnail small-thumbnail mx-auto">
          <img
            src="../../assets/img/team/profile-picture-4.jpg"
            className="card-img-top rounded-circle border-white"
            alt="Joseph Portrait"
          />
        </div>
        <h2 className="h5 font-weight-normal text-center mt-3 mb-0">
          Neil Sims
        </h2>
        <div className="list-group dashboard-menu list-group-sm mt-4">
          <a className="d-flex list-group-item list-group-item-action">
            Overview{" "}
            <span className="icon icon-xs ml-auto">
              <span className="fas fa-chevron-right" />
            </span>{" "}
          </a>
          <a className="d-flex list-group-item list-group-item-action">
            Settings
            <span className="icon icon-xs ml-auto">
              <span className="fas fa-chevron-right" />
            </span>{" "}
          </a>
          <a className="d-flex list-group-item list-group-item-action">
            My Items
            <span className="icon icon-xs ml-auto">
              <span className="fas fa-chevron-right" />
            </span>{" "}
          </a>
          <a className="d-flex list-group-item list-group-item-action">
            Security
            <span className="icon icon-xs ml-auto">
              <span className="fas fa-chevron-right" />
            </span>{" "}
          </a>
          <a className="d-flex list-group-item list-group-item-action">
            Billing
            <span className="icon icon-xs ml-auto">
              <span className="fas fa-chevron-right" />
            </span>{" "}
          </a>
          <a className="d-flex list-group-item list-group-item-action active border-0">
            Messages
            <span className="icon icon-xs ml-auto">
              <span className="fas fa-chevron-right" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>


);
}


  {/* <div className="col-12 d-lg-none">
    <div className="card bg-white border-light mb-4 mb-lg-5">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-10 d-flex">
            <a className="list-group-item list-group-item-action border-0">
              Overview
            </a>{" "}
            <a className="list-group-item list-group-item-action border-0">
              Settings
            </a>{" "}
            <a className="list-group-item list-group-item-action d-none d-sm-block border-0">
              My Items
            </a>{" "}
            <a className="list-group-item list-group-item-action d-none d-md-block border-0">
              Security
            </a>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <div className="btn-group dropleft">
              <button
                className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="icon icon-sm">
                  <span className="fas fa-ellipsis-h icon-secondary fa-lg" />{" "}
                </span>
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="list-group-item list-group-item-action d-sm-none border-0">
                  My Items
                </a>{" "}
                <a className="list-group-item list-group-item-action d-md-none border-0">
                  Security
                </a>{" "}
                <a className="list-group-item list-group-item-action border-0">
                  Billing
                </a>{" "}
                <a className="list-group-item list-group-item-action border-0 active">
                  Messages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}