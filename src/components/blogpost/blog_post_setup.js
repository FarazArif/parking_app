import React from "react"

export default function Blog_post_setup() {
    return (

        <div className="section section-sm bg-white pt-6">
            <article className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <p>Adding a dark mode is basically adding a theme. The principles are the same for adding a light mode to a
              dark website or alternative styling based on user-defined variables, the time of year or holidays.</p>
                        <p>I added theming with a mix of and CSS. In this post I’ll go step by step into the details of how I did it
              and what I learned.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias expedita earum modi sint voluptatum
                        nemo assumenda explicabo laboriosam unde excepturi, necessitatibus consequatur quo! Quis impedit excepturi
              ut, alias omnis harum?</p>
                        <p><img className="rounded" src="../assets/img/blog/image-2.jpg" alt="Themesberg office" /></p>
                        <h2>Setup</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab
            </p>
                        <ol>
                            <li>I assume people don’t want the theme to change when they navigate between pages. So if the page loaded
                isn’t the first page they visit, I want to use the theme that was used before.</li>
                            <li>If it’s the first page they view on my site, their browser may be able to tell their preference.</li>
                            <li>If no preference is available, we can base the choice based on whether it’s day or night.</li>
                        </ol>
                        <p>Every time a page is loaded, in the current or a new tab, it checks if a theme was set previously.
                        Because the preference for a light or dark theme can change during the day, with every change, I add a
              time stamp to the saved setting. Only when the state was saved less than two hours ago, it’s applied:</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque distinctio nemo tempora similique
                        necessitatibus asperiores inventore ipsum, nostrum velit, quasi vitae natus numquam veritatis nobis,
              reiciendis deleniti facere molestias a.</p>
                        <h2>Header 2</h2>
                        <h3>Header 3</h3>
                        <h4>Header 4</h4>
                        <h5>Header 5</h5>
                        <h6>Header 6</h6>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit perferendis labore vel,
                        necessitatibus laboriosam fugit inventore ad odio tenetur vitae veritatis, earum numquam consectetur
              voluptatem illum, sequi asperiores commodi?</p>
                        <ul>
                            <li>list item 1</li>
                            <li>list item 2</li>
                            <li>list item 3</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti dolorem at iste perferendis! Modi
                        praesentium vel, rem aliquid illo, nostrum asperiores dolorem corrupti odio tempora impedit deleniti eius
              voluptatibus.</p>
                    </div>
                </div>
                <div className="row justify-content-sm-center align-items-center py-3 mt-3">
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            <div className="col-9 col-md-6">
                                <h6 className="font-weight-bolder d-inline mb-0 mr-3">Share:</h6><button className="btn btn-sm mr-2 btn-icon-only btn-pill btn-twitter d-inline" aria-label="twitter social link"><span className="fab fa-twitter" /></button> <button className="btn btn-sm mr-2 btn-icon-only btn-pill btn-facebook d-inline" aria-label="facebook social link"><span className="fab fa-facebook-f" /></button> <button className="btn btn-sm btn-icon-only btn-pill btn-reddit d-inline" aria-label="reddit social link"><span className="fab fa-reddit-alien" /></button>
                            </div>
                            <div className="col-3 col-md-6 text-right"><span className="far fa-bookmark text-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Bookmark story" /></div>
                        </div>
                    </div>
                </div>
            </article>
        </div>)
}