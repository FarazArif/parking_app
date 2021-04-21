
import React from 'react';
import Halmet from "react-helmet";
import "./spaces.css";



function Blog_post() {
    return (
      <div >
  <Halmet>
        <script>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'UA-141734189-6');
      `}
    </script>

    <script>
      {`
    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            '../../../www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-THQTXJ7');
      `}
    </script>

    <script>
      {`
    $('#loadOnClick').click(function () {
        $button = $(this);
        $loadContent = $('#extraContent');
        $allLoaded = $('#allLoadedText');
        $button.addClass('btn-loading');
        $button.attr('disabled', true);

        setTimeout(function () {
          $loadContent.show();
          $button.hide();
          $allLoaded.show();
        }, 1500);
      });
      `}
    </script>

    <script>
      {`
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d47ecf425601', m: '433a78a4fd339ec41d3c90407f485518e4f3748b-1618318330-1800-AfCYBUxO4N426lTXKbzRPL3yZ11CpIqEYiDweONFqVP6mT1/HZWDOWCIhHBQ3f/eOMlb3hDkvdxJOl429H5YnFZSBbBZQKdBUwrt+mB0TbLEXqfMt4o6518gwstxinDNQDj0T7UqVcnReVqaas4+Z2M=', s: [0x32542a7c11, 0x7a1dd741e4], } })();
    `}
    </script>

        </Halmet>

        <>
  
  <main>
    {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
      <div className="position-relative">

        <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
 <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> 
 <p className="rotate-letter  splash_logo">ALMuslims</p>
 </div>
    </div> */}
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
    </div>
    <div className="section section-md bg-white text-black pt-0 line-bottom-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div><label className="h5 mb-4" htmlFor="exampleFormControlTextarea1"><span className="badge badge-md badge-primary text-uppercase mr-2">23</span> Comments</label> <textarea className="form-control border border-light-gray" id="exampleFormControlTextarea1" placeholder="Add your comment" rows={6} data-bind-characters-target="#charactersRemaining" maxLength={1000} defaultValue={""} />
              <div className="d-flex justify-content-between mt-3"><small className="font-weight-light text-dark"><span id="charactersRemaining" /> characters remaining</small> <button className="btn btn-primary animate-up-2">Send</button></div>
              <div className="mt-5">
                <div className="card bg-soft border-light rounded p-4 mb-4">
                  <div className="d-flex justify-content-between mb-4"><span className="font-small"><a href="#"><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-1.jpg" alt="avatar" /> <span className="font-weight-bold">John Doe</span> </a><span className="ml-2">2 min
                        ago</span></span>
                    <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                  </div>
                  <p className="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab
                    needed.<br /><br />When is the next product coming? :)</p>
                  <div className="mt-4 mb-3 d-flex justify-content-between">
                    <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" /> <span className="font-small font-weight-light">4 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer1" aria-expanded="false" aria-controls="replyContainer1"><span className="fas fa-reply mr-2" /> Reply</a>
                  </div>
                  <div className="collapse" id="replyContainer1"><label className="mb-4" htmlFor="exampleFormControlTextarea10">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea10" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply" maxLength={1000} defaultValue={""} />
                    <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                  </div>
                </div>
                <div className="card bg-soft border-light rounded p-4 ml-5 mb-4">
                  <div className="d-flex justify-content-between mb-4"><span className="font-small"><a href="#"><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-2.jpg" alt="Bonnie avatar" /> <span className="font-weight-bold">Bonnie Green</span> </a><span className="ml-2">2 min ago</span></span>
                    <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                  </div>
                  <p className="m-0">Hi John Doe,<br /><br />We're happy to hear you like our product. A new one will come soon
                    enough!</p>
                  <div className="mt-4 mb-3 d-flex justify-content-between">
                    <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" /> <span className="font-small font-weight-light">2 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer2" aria-expanded="false" aria-controls="replyContainer2"><span className="fas fa-reply mr-2" /> Reply</a>
                  </div>
                  <div className="collapse" id="replyContainer2"><label className="mb-4" htmlFor="exampleFormControlTextarea11">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea11" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply2" maxLength={1000} defaultValue={""} />
                    <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply2" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                  </div>
                </div>
                <div className="card bg-soft border-light rounded p-4 mb-4">
                  <div className="d-flex justify-content-between mb-4"><span className="font-small"><a href="#"><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-3.jpg" alt="James avatar" /> <span className="font-weight-bold">James Curran</span> </a><span className="ml-2">2 min ago</span></span>
                    <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                  </div>
                  <p className="m-0">Hey there! We want to say that <span className="text-tertiary">you're awesome</span> and we
                    think you'll build great websites! Why not use Pixel to make things easier?</p>
                  <div className="mt-4 mb-3 d-flex justify-content-between">
                    <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" /> <span className="font-small font-weight-light">4 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer3" aria-expanded="false" aria-controls="replyContainer3"><span className="fas fa-reply mr-2" /> Reply</a>
                  </div>
                  <div className="collapse" id="replyContainer3"><label className="mb-4" htmlFor="exampleFormControlTextarea12">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea12" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply3" maxLength={1000} defaultValue={""} />
                    <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply3" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                  </div>
                </div>
                <div id="extraContent" style={{display: 'none'}}>
                  <div className="card bg-soft border-light p-4 mb-4">
                    <div className="d-flex justify-content-between mb-4"><span className="font-small"><a href="#"><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-2.jpg" alt="Neil avatar" /> <span className="font-weight-bold">Neil Sims</span> </a><span className="ml-2">2 min ago</span></span>
                      <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                    </div>
                    <p className="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab<br /><br />When is the next product coming? :)</p>
                    <div className="mt-4 mb-3 d-flex justify-content-between">
                      <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" />
                        <span className="font-small font-weight-light">4 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer4" aria-expanded="false" aria-controls="replyContainer4"><span className="fas fa-reply mr-2" /> Reply</a>
                    </div>
                    <div className="collapse" id="replyContainer4"><label className="mb-4" htmlFor="exampleFormControlTextarea13">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea13" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply4" maxLength={1000} defaultValue={""} />
                      <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply4" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                    </div>
                  </div>
                  <div className="card bg-soft rounded border-light p-4 ml-5 mb-4">
                    <div className="d-flex justify-content-between mb-4"><span className="font-small"><a href="#"><img className="avatar-sm img-fluid rounded-circle mr-2" src="../assets/img/team/profile-picture-5.jpg" alt="Jose avatar" /> <span className="font-weight-bold">Jose Leos</span> </a><span className="ml-2">2 min ago</span></span>
                      <div><button className="btn btn-link text-danger" aria-label="report button" data-toggle="tooltip" data-placement="top" title="Report comment" data-original-title="Report comment"><span className="far fa-flag" /></button></div>
                    </div>
                    <p className="m-0">Hi John Doe,<br /><br />We're happy to hear you like our product. A new one will come
                      soon enough!</p>
                    <div className="mt-4 mb-3 d-flex justify-content-between">
                      <div><span className="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" title="Like comment" data-original-title="Like comment" /> <span className="far fa-thumbs-down text-action text-danger mr-3" data-toggle="tooltip" data-placement="top" title="Dislike comment" data-original-title="Dislike comment" />
                        <span className="font-small font-weight-light">2 likes</span></div><a className="text-action font-weight-light font-small" data-toggle="collapse" role="button" href="#replyContainer5" aria-expanded="false" aria-controls="replyContainer5"><span className="fas fa-reply mr-2" /> Reply</a>
                    </div>
                    <div className="collapse" id="replyContainer5"><label className="mb-4" htmlFor="exampleFormControlTextarea14">Reply</label> <textarea className="form-control border" id="exampleFormControlTextarea14" placeholder="Reply to John Doe" rows={6} data-bind-characters-target="#charactersRemainingReply5" maxLength={1000} defaultValue={""} />
                      <div className="d-flex justify-content-between mt-3"><small className="font-weight-light"><span id="charactersRemainingReply5" /> characters remaining</small> <button className="btn btn-primary btn-sm animate-up-2">Send</button></div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center"><button id="loadOnClick" className="btn btn-primary btn-loading-overlay mr-2 mb-2"><span className="spinner"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> </span><span className="ml-1 btn-inner-text">Load more comments</span></button>
                  <p id="allLoadedText" style={{display: 'none'}}>That's all, Sparky!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
 
</>


      </div>
    );
  }

  export default Blog_post;