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
        {
            img: "../../assets/img/blog/image-2.jpg",
            heading: "Lorem ipsum dolor sit amet, consectetur",
            person_pic: "fas fa-chair",
            person_name: "Al-Muslim",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.. ",

        },
        {
            img: "../../assets/img/blog/image-2.jpg",
            heading: "Lorem ipsum dolor sit amet, consectetur",
            person_pic: "fas fa-chair",
            person_name: "Al-Muslim",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.. ",

        },
    ]
    return (
        <section class="section section-lg pb-lg-6 pb-5 blog_section">
            <div class="container">
                <div className="row mt-6">
                    <div className="col-12">
                        <h3 className="h4 mb-5 section_headings">Blogs</h3>
                    </div>

                    {blogcard_data.map((person, index) => (

                        <div index={index} class="col-12 col-md-4">
                            <div class="card bg-white border-light p-3 rounded">
                                <a >
                                    <img src={person.img} class="card-img-top rounded" alt="our desk" />
                                </a>
                                <div class="card-body p-0 pt-4">
                                    <a class="h4"> Lorem ipsum dolor sit amet, consectetur </a>
                                    <div class="d-flex align-items-center my-4">
                                        <img class="avatar avatar-sm rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Neil avatar" />
                                        <h3 class="h6 small ml-2 mb-0">Al-Muslims</h3>
                                    </div>
                                    <p class="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ...</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>





    )
}