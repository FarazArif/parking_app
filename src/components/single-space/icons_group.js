import React from "react";

export default function Single_space_icons_group() {
    return(

        <div className="card-group bg-soft">
        <div className="card mb-0">
          <div className="card-body text-center px-0 px-md-3">
            <div className="icon icon-secondary">
              <span className="far fa-calendar-alt" />
            </div>
            <div className="h5 mt-3 mb-0">1 Year</div>{" "}
            <span className="text-muted h6 font-weight-normal mb-0">
              Minimum term
            </span>
          </div>
        </div>
        <div className="card mb-0 border-left">
          <div className="card-body text-center px-0 px-md-3">
            <div className="icon icon-secondary">
              <span className="fas fa-ruler-combined" />
            </div>
            <div className="h5 mt-3 mb-0">180SqFt</div>{" "}
            <span className="text-muted h6 font-weight-normal mb-0">
              Space size
            </span>
          </div>
        </div>
        <div className="card mb-0 border-left">
          <div className="card-body text-center px-0 px-md-3">
            <div className="icon icon-secondary">
              <span className="fas fa-users" />
            </div>
            <div className="h5 mt-3 mb-0">10-30</div>{" "}
            <span className="text-muted h6 font-weight-normal mb-0">
              Peoples
            </span>
          </div>
        </div>
        <div className="card mb-0 border-left">
          <div className="card-body text-center px-0 px-md-3">
            <div className="icon icon-secondary">
              <span className="fas fa-couch" />
            </div>
            <div className="h5 mt-3 mb-0">Meeting</div>{" "}
            <span className="text-muted h6 font-weight-normal mb-0">
              Space type
            </span>
          </div>
        </div>
      </div>
    );
}
