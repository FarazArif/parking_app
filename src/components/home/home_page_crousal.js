import React from 'react';

export default function Chose_Us() {
    let blogcard_data = [
        {
            img: "../../assets/img/blog/image-2.jpg",
            heading: "Lorem ipsum dolor sit amet, consectetur",
            person_pic: "fas fa-chair",
            person_name: "Al-Muslim",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.. ",

        },
    ]
    return (
        <div className="section bg-white">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-9 text-center">
                        <div className="nav-wrapper">
                            <ul className="nav nav-pills nav-pill-circle flex-sm-row justify-content-center" id="tab-34" role="tablist">
                                <li className="nav-item"><a className="nav-link bg-white text-sm-center avatar-link active" id="tab-link-example-13" data-toggle="tab" role="tab" aria-controls="link-example-13" aria-selected="true"><img className="rounded-circle" src="../assets/img/team/profile-picture-3.jpg" alt="Bonnie avatar" /></a></li>
                                <li className="nav-item"><a className="nav-link bg-white text-sm-center avatar-link" id="tab-link-example-14" data-toggle="tab" role="tab" aria-controls="link-example-14" aria-selected="false"><img className="rounded-circle" src="../assets/img/team/profile-picture-1.jpg" alt="Neil avatar" /></a></li>
                                <li className="nav-item"><a className="nav-link bg-white text-sm-center avatar-link" id="tab-link-example-15" data-toggle="tab" role="tab" aria-controls="link-example-15" aria-selected="false"><img className="rounded-circle" src="../assets/img/team/profile-picture-4.jpg" alt="Christopher avatar" /></a></li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="tab-content" id="tabcontentexample-5">
                                    <div className="tab-pane fade show active" id="link-example-13" role="tabpanel" aria-labelledby="tab-link-example-13"><span className="d-block my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /></span>
                                        <blockquote className="blockquote bg-white p-0 p-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      <footer className="blockquote-footer mt-3 text-primary">Al-Muslims
                                           </footer>
                                        </blockquote>
                                    </div>
                                    <div className="tab-pane fade" id="link-example-14" role="tabpanel" aria-labelledby="tab-link-example-14">
                                        <span className="d-block my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /></span>
                                        <blockquote className="blockquote bg-white p-0 p-md-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                          <footer className="blockquote-footer mt-3 text-primary">Al-Muslims</footer>
                                        </blockquote>
                                    </div>
                                    <div className="tab-pane fade" id="link-example-15" role="tabpanel" aria-labelledby="tab-link-example-15">
                                        <span className="d-block my-3"><span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /> <span className="star fas fa-star text-warning" /></span>
                                        <blockquote className="blockquote bg-white p-0 p-md-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                 <footer className="blockquote-footer mt-3 text-primary">Al-Muslims</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}