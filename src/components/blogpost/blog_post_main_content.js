import React from "react"

export default function Blog_post_main_content() {
    return (
        <section className="section-header pb-7 bg-primary text-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 text-center">
                        <div className="mb-4"><a href="blog.html" className="badge badge-danger text-uppercase mr-2 px-3">Seo</a> <a href="#" className="badge badge-secondary text-uppercase px-3">Marketing</a></div>
                        <h1 className="display-3 mb-4 px-lg-5">90% of content gets no traffic from Google. How to improve it ?</h1>
                        <div className="post-meta"><span className="font-weight-bold mr-3">James Curran</span> <span className="post-date mr-3">January 31, 2020</span> <span className="font-weight-bold">7 min read</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
