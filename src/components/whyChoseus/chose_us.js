import React from 'react';
    

export default function Chose_Us() {
    let serves_array = [
        {
            icon: "fas fa-chair",
            heading: "Professionalism",
            detail: "We have a highly qualified team of professionals" ,
           
        },
        {
            icon: "fas fa-chair",
            heading: "Precision",
            detail: "We have a highly qualified team of professionals" ,
           
        },
        {
            icon: "fas fa-chair",
            heading: "Confidence",
            detail: "We have a highly qualified team of professionals" ,
           
        },
    ]
    return (
        <section className="section section-lg bg-soft pb-11 chose_us_main_section">
            <div className="container">
                <div className="row justify-content-center mb-4 mb-lg-6">
                    <div className="col-12 col-md-8 text-center">
                        <h2 className="h1"> WHY CHOOSE US?
</h2>
                        <p className="lead mt-3">All youâ€™ll need are the details of the building and location, the types of space,
                    pricing and some good quality photographs.</p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-7 mb-5"><img className="img-fluid d-none d-md-block" src="https://demo.themesberg.com/spaces/assets/img/illustrations/why-us.svg" alt="Laptop illustration" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {serves_array.map((person, index) => (

                            <div index={index} className="card mb-2 bg-soft">
                                <div className="card-body p-0">
                                    <div className="d-flex p-2">
                                        <div>
                                            <div className="icon icon-secondary">
                                                <span className={person.icon} /></div>
                                        </div>
                                        <div className="pl-4 section_headings">
                                            <h3 className="h5 icon-box-title">	{person.heading}</h3>

                                            <p>{person.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}