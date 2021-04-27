import React from "react"
export default function Home_section_2() {

    let top_bookings_array = [
        {
            img: "../assets/img/newyork.jpg",
            name: "CIVITAVECCHIA",
        },
        {
            img: "../assets/img/paris.jpg",
            name: "FIUMICINO",
        },
        {
            img: "../assets/img/london.jpg",
            name: "MALPENSA",
        },
        {
            img: "../assets/img/tokyo.jpg",
            name: "PUNTA RAISI",
        }

    ]

    return (
        <section className="section section-lg pb-lg-6 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"><img className="img-fluid image-lg mb-4" src="https://demo.themesberg.com/spaces/assets/img/illustrations/easy-transaction.svg" alt="northwestern logo" />
                        <h2 className="h4">Extraordinarily easy</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"><img className="img-fluid image-lg mb-4" src="https://demo.themesberg.com/spaces/assets/img/illustrations/support.svg" alt="northwestern logo" />
                        <h2 className="h4">Truly transparent</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut </p>

                    </div>
                    <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"><img className="img-fluid image-lg mb-4" src="https://demo.themesberg.com/spaces/assets/img/illustrations/payment.svg" alt="northwestern logo" />
                        <h2 className="h4">Best prices</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut</p>
                    </div>
                </div>

                <div className="row mt-6">
                    <div className="col-12 section_headings">
                        <h3 className="h4 mb-5">Top Bookings</h3>
                    </div>
                    {top_bookings_array.map((person, index) => (

                        <div index={index} className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <a className="card img-card fh-400 border-0 outer-bg" data-background-inner={person.img}>
                                <div className="inner-bg overlay-dark" />
                                <div className="card-img-overlay d-flex align-items-center">
                                    <div className="card-body text-white p-3">
                                        <h5 className="text-uppercase text-center">{person.name}</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}

                </div>

            </div>





        </section>
    );
}