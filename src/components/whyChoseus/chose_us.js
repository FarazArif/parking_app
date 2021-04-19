import React from 'react';
 import '../spaces.css';

export default function Chose_Us(){
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
                        <div className="card mb-2 bg-soft">
                            <div className="card-body p-0">
                                <div className="d-flex p-2">
                                    <div>
                                        <div className="icon icon-secondary"><span className="fas fa-chair" /></div>
                                    </div>
                                    <div className="pl-4 section_headings">
                                        <h3 className="h5 icon-box-title">	
Professionalism</h3>
                                        <p>We have a highly qualified team  &amp; of professionals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-2 bg-soft">
                            <div className="card-body p-0">
                                <div className="d-flex p-2">
                                    <div>
                                        <div className="icon icon-secondary"><span className="fas fa-chair" /></div>
                                    </div>
                                    <div className="pl-4 section_headings">
                                        <h3 className="h5 icon-box-title">Precision</h3>
                                        <p>We guarantee maximum punctuality and very  &amp; fast delivery times</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-2 bg-soft">
                            <div className="card-body p-0">
                                <div className="d-flex p-2">
                                    <div>
                                        <div className="icon icon-secondary"><span className="fas fa-chair" /></div>
                                    </div>
                                    <div className="pl-4 section_headings">
                                        <h3 className="h5 icon-box-title">Confidence</h3>
                                        <p>We are rewarded by the loyalty of our customers &amp; our customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}