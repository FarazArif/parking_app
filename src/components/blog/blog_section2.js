import React from 'react'



export default function Blog_section2() {


    let Blog_section2_main_card = [
        {
            img: "../assets/img/blog/image-1.jpg",
            heading: "Designing a dashboard for business",
            dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab ...",
            logo: "../assets/img/team/profile-picture-1.jpg",
            logo_heading: "Al Muslim",
            date: "21 February,2019"
        },
    ];






    let Blog_section2_card = [
        {
            img: "../assets/img/blog/image-2.jpg",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab",
            logo: "../assets/img/team/profile-picture-2.jpg",
            logo_heading: "Neil Sims Curran",
            // date: "21 February,2019"
        },
        {
            img: "../assets/img/blog/image-3.jpg",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab",
            logo: "../assets/img/team/profile-picture-3.jpg",
            logo_heading: "Neil Sims Curran",
            // date: "21 February,2019"
        },
        {
            img: "../assets/img/blog/image-1.jpg",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab",
            logo: "../assets/img/team/profile-picture-1.jpg",
            logo_heading: "Neil Sims Curran",
            // date: "21 February,2019"
        },
        {
            img: "../assets/img/blog/image-3.jpg",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab",
            logo: "../assets/img/team/profile-picture-3.jpg",
            logo_heading: "Neil Sims Curran",
            // date: "21 February,2019"
        },
        {
            img: "../assets/img/blog/image-2.jpg",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab",
            logo: "../assets/img/team/profile-picture-5.jpg",
            logo_heading: "Neil Sims Curran",
            // date: "21 February,2019"
        },
        {
            img: "../assets/img/blog/image-1.jpg",
            heading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            dec: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab",
            logo: "../assets/img/team/profile-picture-4.jpg",
            logo_heading: "Neil Sims Curran",
            // date: "21 February,2019"
        },
    ];
    return (
        <section className="section section-lg line-bottom-light">


            <div className="container mt-n8 mt-md-n9 mt-lg-n12 z-2">
                <div className="row">
                    {Blog_section2_main_card.map((data, i) => {
                        return (

                            <div index={i} className="col-lg-12 mb-5">
                                <div className="card bg-white border-light flex-lg-row align-items-center no-gutters p-4"><a
                                    // "blog-post.html"
                                    className="col-12 col-lg-6"><img src={data.img} alt="themesberg office" className="card-img-top rounded" /></a>
                                    <div className="card-body d-flex flex-column justify-content-between col-auto py-4 p-lg-3 p-xl-5"><a >
                                        <h2>{data.heading}</h2>
                                    </a>
                                        <p>{data.dec}</p>
                                        <div className="d-flex align-items-center mt-3"><img className="avatar avatar-sm rounded-circle" src={data.logo} alt="Richard avatar" />
                                            <h3 className="h6 small ml-2 mb-0">{data.logo_heading}</h3><span className="h6 text-muted small font-weight-normal mb-0 ml-auto"><time dateTime="2019-04-25">{data.date}</time></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    {Blog_section2_card.map((data , i) => {

                        return (
                            <div index={i} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                                <div className="card bg-white border-light p-3 rounded"><a

                                // "blog-post.html"
                                ><img src={data.img} className="card-img-top rounded" alt="our desk" />{data.heading}</a>
                                    <div className="card-body p-0 pt-4"><a className="h4"></a>
                                        <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src={data.logo} alt="Neil avatar" />
                                            <h3 className="h6 small ml-2 mb-0">{data.logo_heading}</h3>
                                        </div>
                                        <p className="mb-0">{data.dec}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

{/* 
                    <div index={i} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                        <div className="card bg-white border-light p-3 rounded"><a ><img src={data.img} className="card-img-top rounded" alt="web desk" />{data.heading}</a>
                            <div className="card-body p-0 pt-4"><a className="h4">Apple Details Reveal Remarkable
              MacBook</a>
                                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src={data.logo} alt="David avatar" />
                                    <h3 className="h6 small ml-2 mb-0">{data.logo_heading}</h3>
                                </div>
                                <p className="mb-0">{data.dec}</p>
                            </div>
                        </div>
                    </div>
                        )



                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                        <div className="card bg-white border-light p-3 rounded"><a><img src={data.img} className="card-img-top rounded" alt="pixel room" />{data.heading}</a>
                            <div className="card-body p-0 pt-4"><a className="h4">One of Google Maps’ best new
              features</a>
                                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src={data.logo} alt="Jose avatar" />
                                    <h3 className="h6 small ml-2 mb-0">{data.logo_heading}</h3>
                                </div>
                                <p className="mb-0">{data.dec}</p>
                            </div>
                        </div>
                    </div>
                        )



                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                        <div className="card bg-white border-light p-3 rounded"><a ><img src={data.img} className="card-img-top rounded" alt="designer office" />{data.heading}</a>
                            <div className="card-body p-0 pt-4"><a className="h4">Google launches Cloud AI Platform
              Pipelines</a>
                                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src={data.logo} alt="James avatar" />
                                    <h3 className="h6 small ml-2 mb-0">{data.logo_heading}</h3>
                                </div>
                                <p className="mb-0">{data.dec}</p>
                            </div>
                        </div>
                    </div>
                        )



                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                        <div className="card bg-white border-light p-3 rounded"><a ><img src={data.img} className="card-img-top rounded" alt="white laptop" />{data.heading}</a>
                            <div className="card-body p-0 pt-4"><a className="h4">Apple Details Reveal Remarkable
              MacBook</a>
                                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src={data.logo} alt="Bonnie avatar" />
                                    <h3 className="h6 small ml-2 mb-0">{data.logo_heading}</h3>
                                </div>
                                <p className="mb-0">{data.logo_heading}</p>
                            </div>
                        </div>
                    </div>
                        )



                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                        <div className="card bg-white border-light p-3 rounded"><a ><img src={data.img} className="card-img-top rounded" alt="photoshop books" />{data.heading}</a>
                            <div className="card-body p-0 pt-4"><a className="h4">One of Google Maps’ best new
              features</a>
                                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src={data.logo} alt="Joseph avatar" />
                                    <h3 className="h6 small ml-2 mb-0">{data.logo_heading}</h3>
                                </div>
                                <p className="mb-0">{data.logo_heading}</p>
                            </div>
                        </div>
                    </div>
                        ) */}




                    <div className="d-flex justify-content-center w-100 mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" >Previous</a></li>
                                <li className="page-item"><a className="page-link" >1</a></li>
                                <li className="page-item active"><a className="page-link" >2</a></li>
                                <li className="page-item"><a className="page-link" >3</a></li>
                                <li className="page-item"><a className="page-link" >4</a></li>
                                <li className="page-item"><a className="page-link">5</a></li>
                                <li className="page-item"><a className="page-link" >Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}