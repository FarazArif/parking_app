import React from "react";

export default function Security_Password() {
    return (

        <div className="card border-light p-0 p-md-4 mb-4">
            <div className="card-body">
                <h3 className="h5 mb-0">Change Password</h3>
                <form className="form mt-5" autoComplete="off">
                    <div className="form-group mb-4"><label htmlFor="inputPasswordOld">Current Password</label> <input type="password" className="form-control" id="inputPasswordOld" required /></div>
                    <div className="form-group mb-4"><label htmlFor="inputPasswordNew">New Password</label> <input type="password" className="form-control" id="inputPasswordNew" required /> <span className="form-text small text-muted">The password must be 8-20 characters, and must <em>not</em>
                      contain spaces.</span></div>
                    <div className="form-group mb-4"><label htmlFor="inputPasswordNewVerify">Verify</label> <input type="password" className="form-control" id="inputPasswordNewVerify" required /> <span className="form-text small text-muted">To confirm, type the new password again.</span></div>
                    <div className="form-group"><button type="submit" className="btn btn-dark">Save</button></div>
                </form>
            </div>
        </div>
    )
}