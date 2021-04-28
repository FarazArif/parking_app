import React from "react";

export default function Setting_Alert() {
    return (

        <div className="card card-body bg-white border-light">
            <h2 className="h5 mb-4">Alerts &amp; Notifications</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between pl-0 border-bottom">
                    <div>
                        <h3 className="h6 mb-1">Company News</h3><span className="small">Get Spaces news, announcements, and
          product updates</span>
                    </div>
                    <div>
                        <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="shop-notification-1" defaultChecked="checked" /> <label className="custom-control-label" htmlFor="shop-notification-1" /></div>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between pl-0 border-bottom">
                    <div>
                        <h3 className="h6 mb-1">Account Activity</h3><span className="small">Get important notifications about
          you or activity you've missed</span>
                    </div>
                    <div>
                        <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="shop-notification-2" /> <label className="custom-control-label" htmlFor="shop-notification-2" /></div>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between pl-0">
                    <div>
                        <h3 className="h6 mb-1">Meetups Near You</h3><span className="small">Get an email when a Dribbble Meetup
          is posted close to my location</span>
                    </div>
                    <div>
                        <div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="shop-notification-3" defaultChecked="checked" /> <label className="custom-control-label" htmlFor="shop-notification-3" /></div>
                    </div>
                </li>
            </ul>
        </div>
    )
}