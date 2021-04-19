
import React from 'react';
import Halmet from "react-helmet";
import "./spaces.css";
import Footer from "./footer/footer"
function Blog() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d47bdd7b1a5a', m: '45e11210c7505fbe2c5067fe462bc98a103b30a1-1618318330-1800-AaQ7RqMpakh7CrbMTGo2gzW586/7584fti8YGo6WtqYQhNefQv1UlE/MVgBxbUKMQm2VHUv8kAjKZkX24KFMPB2sgoREE+ZUaldohd/XhVIYsUTNdxizP2/1RivWqd8N7A9UMRnp5dH2Q4qvq7c9FMU=', s: [0xac9900addc, 0xc03ecb2898], } })();</script>
    `}
    </script>

        </Halmet>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
 <>
  
  <main>
    <div 
    // className="preloader bg-dark flex-column justify-content-center align-items-center"
    >
      <div 
      // className="position-relative"
      >

        {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> */}
        {/* <p className="rotate-letter  splash_logo">ALMuslims</p> */}
        </div>
    </div>
    <section className="section-header bg-primary text-white pb-7 pb-lg-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1 className="display-2 mb-4">Our Blog</h1>
            <p className="lead d-none d-lg-inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg line-bottom-light">
      <div className="container mt-n8 mt-md-n9 mt-lg-n12 z-2">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="card bg-white border-light flex-lg-row align-items-center no-gutters p-4"><a 
            // "blog-post.html"
             className="col-12 col-lg-6"><img src="../assets/img/blog/image-1.jpg" alt="themesberg office" className="card-img-top rounded" /></a>
              <div className="card-body d-flex flex-column justify-content-between col-auto py-4 p-lg-3 p-xl-5"><a >
                  <h2>Designing a dashboard for business</h2>
                </a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab ...</p>
                <div className="d-flex align-items-center mt-3"><img className="avatar avatar-sm rounded-circle" src="../assets/img/team/profile-picture-1.jpg" alt="Richard avatar" />
                  <h3 className="h6 small ml-2 mb-0">Al Muslim</h3><span className="h6 text-muted small font-weight-normal mb-0 ml-auto"><time dateTime="2019-04-25">21 February,
                      2019</time></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
            <div className="card bg-white border-light p-3 rounded"><a 

            // "blog-post.html"
            ><img src="../assets/img/blog/image-2.jpg" className="card-img-top rounded" alt="our desk" /></a>
              <div className="card-body p-0 pt-4"><a  className="h4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a>
                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src="../assets/img/team/profile-picture-2.jpg" alt="Neil avatar" />
                  <h3 className="h6 small ml-2 mb-0">Neil Sims Curran</h3>
                </div>
                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
            <div className="card bg-white border-light p-3 rounded"><a ><img src="../assets/img/blog/image-3.jpg" className="card-img-top rounded" alt="web desk" /></a>
              <div className="card-body p-0 pt-4"><a  className="h4">Apple Details Reveal Remarkable
                  MacBook</a>
                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src="../assets/img/team/profile-picture-3.jpg" alt="David avatar" />
                  <h3 className="h6 small ml-2 mb-0">David L. Brown</h3>
                </div>
                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab ...</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
            <div className="card bg-white border-light p-3 rounded"><a><img src="../assets/img/blog/image-1.jpg" className="card-img-top rounded" alt="pixel room" /></a>
              <div className="card-body p-0 pt-4"><a  className="h4">One of Google Maps’ best new
                  features</a>
                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src="../assets/img/team/profile-picture-1.jpg" alt="Jose avatar" />
                  <h3 className="h6 small ml-2 mb-0">Jose Evans</h3>
                </div>
                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab...</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
            <div className="card bg-white border-light p-3 rounded"><a ><img src="../assets/img/blog/image-3.jpg" className="card-img-top rounded" alt="designer office" /></a>
              <div className="card-body p-0 pt-4"><a  className="h4">Google launches Cloud AI Platform
                  Pipelines</a>
                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src="../assets/img/team/profile-picture-3.jpg" alt="James avatar" />
                  <h3 className="h6 small ml-2 mb-0">James Curran</h3>
                </div>
                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab ...</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
            <div className="card bg-white border-light p-3 rounded"><a ><img src="../assets/img/blog/image-2.jpg" className="card-img-top rounded" alt="white laptop" /></a>
              <div className="card-body p-0 pt-4"><a  className="h4">Apple Details Reveal Remarkable
                  MacBook</a>
                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src="../assets/img/team/profile-picture-5.jpg" alt="Bonnie avatar" />
                  <h3 className="h6 small ml-2 mb-0">Bonnie Green</h3>
                </div>
                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab ...</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
            <div className="card bg-white border-light p-3 rounded"><a ><img src="../assets/img/blog/image-1.jpg" className="card-img-top rounded" alt="photoshop books" /></a>
              <div className="card-body p-0 pt-4"><a  className="h4">One of Google Maps’ best new
                  features</a>
                <div className="d-flex align-items-center my-4"><img className="avatar avatar-sm rounded-circle" src="../assets/img/team/profile-picture-4.jpg" alt="Joseph avatar" />
                  <h3 className="h6 small ml-2 mb-0">Joseph Garth</h3>
                </div>
                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ratione sed deleniti quas, quae culpa suscipit beatae dignissimos qui ab ...</p>
              </div>
            </div>
          </div>
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
  </main>

</>





    </div>
  );
}

export default Blog;