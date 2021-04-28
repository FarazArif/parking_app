import React from "react";

export default function Chat_message_card() {


return(
    <div className="card bg-white border-light p-4 mb-4">
    <div className="d-flex justify-content-between align-items-center mb-2"><span className="font-small"><a ><img className="avatar-sm img-fluid rounded-circle mr-2" src="../../assets/img/team/profile-picture-1.jpg" alt="avatar" /> <span className="font-weight-bold">Neil Sims</span> </a><span className="ml-2">March 26, 19:25</span></span>
      <div className="d-none d-sm-block"><button className="btn btn-link text-dark" aria-label="phone" data-toggle="tooltip" data-placement="top" title="Sent from the phone " data-original-title="Sent from the phone"><span className="fas fa-mobile-alt" /></button></div>
    </div>
    <p className="m-0">Hi Chris! Thanks a lot for this very useful template. Saved me a lot of time and searches
      on the internet.</p>
  </div>
);
}