import React from "react";

export default function Chat_answer_card() {


return(
    <div className="card bg-primary text-white border-light p-4 ml-md-5 ml-lg-6 mb-4">
    <div className="d-flex justify-content-between align-items-center mb-2"><span className="font-small"><span className="font-weight-bold">Your Answer</span> <span className="ml-2">March 26, 19:25</span></span>
      <div className="d-none d-sm-block"><button className="btn btn-link text-white" aria-label="phone" data-toggle="tooltip" data-placement="top" title="Sent from the phone " data-original-title="Sent from the phone"><span className="fas fa-mobile-alt" /></button></div>
    </div>
    <p className="m-0">Hi Neil, thanks for sharing your thoughts regarding Spaces. Hi Neil, thanks for sharing
      your thoughts regarding Spaces.</p>
  </div>
);
}