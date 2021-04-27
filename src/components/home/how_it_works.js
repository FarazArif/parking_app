import React from 'react';


export default function Chose_Us() {
    let serves_array = [
        {
            icon: "fas fa-chair",
            heading: "1. List your space",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut",

        },
        {
            icon: "far fa-user",
            heading: "2. Get ready",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut",

        },
        {
            icon: "far fa-money-bill-alt",
            heading: "3. Earn money",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut",

        },
    ]
    return (
        <section className="section section-lg bg-soft">
            <div className="container">
                <div className="row justify-content-center mb-4 mb-lg-5">
                    <div className="col-12 col-md-8 text-center">
                        <h2 className="h1"><span className="font-weight-bold">How</span> it works?</h2>
                        <p className="lead mt-3">All you’ll need are the details of the place and location, the types of place,
              pricing and some good quality photographs.</p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">
                        <div className="tab-content mt-lg-5" id="tabcontentexample-3">
                            <div className="tab-pane fade show active" id="find-space" role="tabpanel" aria-labelledby="tab-find-space">
                                <div className="row">
                                    {serves_array.map((person, index) => (
                                        
                                        <div index={index} className="col-12 col-lg-4">
                                            <div className="card border-light mb-4 mb-lg-0 text-center">
                                                <div className="card-body p-3 px-xl-4 py-xl-6">
                                                    <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle"><span className={person.icon} /></div>
                                                    <h3 className="h5 my-3">{person.heading}</h3>
                                                    <p> {person.detail}</p>
                                                </div>
                                            </div>
                                        </div>

                                    ))}



                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}