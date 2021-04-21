
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function EditItem() {
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4b36c2e5601', m: '735dc04f405db78ba0ba0a624ca0a8e7104150a1-1618318339-1800-AfeuDIM8reVKX/Bunmgf26BVYzARfbsahAnKGRSjGs6f5B4ZihNB40GAUYbrKCrrEP8p0f3tR3QpaWl4ZV24Mv2bSV0Qkg5o5oHzgvV8yEbwogd9WpEb/3E1kLTEjbWBVXee1play0aY+Yu5+OU3q3ObWiFiKQSoiY+sC+AInh/E', s: [0xf3ff6ecc77, 0x80c932c856], } })();
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
    <div className="section section-lg bg-soft">
      <div className="container">
        <div className="row pt-5 pt-md-0">
          <div className="col-12 col-md-4 d-none d-lg-block">
            <div className="card border-light p-2">
              <div className="card-body p-2">
                <div className="profile-thumbnail small-thumbnail mx-auto"><img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                <h2 className="h5 font-weight-normal text-center mt-3 mb-0">Neil Sims</h2>
                <div className="list-group dashboard-menu list-group-sm mt-4"><a  className="d-flex list-group-item list-group-item-action">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action active">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a  className="d-flex list-group-item list-group-item-action border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <div className="card bg-white border-light mb-4 mb-lg-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-10 d-flex"><a  className="list-group-item list-group-item-action border-0">Overview</a> <a  className="list-group-item list-group-item-action border-0">Settings</a> <a  className="list-group-item list-group-item-action d-none d-sm-block border-0 active">My Items</a> <a  className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a></div>
                  <div className="col-2 d-flex justify-content-center">
                    <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                          Dropdown</span></button>
                      <div className="dropdown-menu"><a  className="list-group-item list-group-item-action d-sm-none border-0 active">My Items</a> <a  className="list-group-item list-group-item-action d-md-none border-0">Security</a> <a  className="list-group-item list-group-item-action border-0">Billing</a> <a  className="list-group-item list-group-item-action border-0">Messages</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <form action="#" method="post" className="card border-light p-4 mb-4">
              <h1 className="h5 mb-4">Edit item</h1>
              <div className="form-group"><label htmlFor="firstname">Title</label> <input type="text" placeholder="A nice little title" className="form-control" id="firstname" required /></div>
              <div className="form-group"><label htmlFor="location">Location</label> <input type="text" placeholder="26, Vancouver, BC, Canada - 324578" className="form-control" id="location" required /></div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="form-group"><label htmlFor="currency">Currency</label> <select className="custom-select" id="currency">
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="AUD">AUD</option>
                      <option value="CNY">CNY</option>
                      <option value="JPY">JPY</option>
                    </select></div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group"><label htmlFor="price">Monthly price</label> <input type="number" placeholder={250} className="form-control text-gray" id="price" required /></div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="form-group"><label htmlFor="term">Minimum term</label> <select className="custom-select" id="term">
                      <option value="d">day</option>
                      <option value="m">month</option>
                      <option value="y" selected="selected">year</option>
                    </select></div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group"><label htmlFor="term_amount">Amount</label> <input type="number" placeholder={1} className="form-control text-gray" id="term_amount" required /></div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="form-group"><label htmlFor="sqfeet">Number input</label> <input type="number" placeholder={180} className="form-control text-gray" id="sqfeet" required /></div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-group"><label htmlFor="people">Dropdown example</label> <input type="number" placeholder={15} className="form-control text-gray" id="people" required /></div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-group"><label htmlFor="type">Another dropdown</label> <select className="custom-select" id="type">
                      <option value="meeting" selected="selected">meeting</option>
                      <option value="work">work</option>
                      <option value="events">events</option>
                    </select></div>
                </div>
              </div>
              <div className="form-group"><label htmlFor="description">Description</label> <textarea rows={10} className="form-control text-gray" id="description" required defaultValue={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus odio, ipsum sint animi sequi totam repellat quidem, placeat neque vel enim nisi. Quia dolor in earum labore, aperiam dolorum.\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa porro consequuntur, laborum eligendi laboriosam itaque quis nobis, tempora at id in repellendus eius reiciendis error, enim fugit modi molestiae!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit, deserunt animi, debitis eum laudantium facere adipisci minus ad quaerat ipsam consectetur, obcaecati non sit! Voluptas voluptatum autem modi dolorem?\n                                "} /></div>
              <div className="row">
                <div className="col"><button className="btn btn-primary btn-dark mt-2 animate-up-2" type="submit">Update</button></div>
              </div>
            </form>
            <form action="#" method="post" className="card text-gray border-light p-4 mb-4">
              <h2 className="h6">Featured image</h2>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="profile-image-small fmxw-100 mr-4"><img className="rounded" src="../../assets/img/account/office-1.jpg" alt="Office" /></div>
                <div className="custom-file"><input id="featured_image" type="file" className="custom-file-input" /> <label className="custom-file-label" htmlFor="featured_image">Choose file</label></div>
              </div><small className="text-gray font-weight-light font-xs d-block mt-2">Image should be at least 500 pixels
                wide and only *.jpg, *.png and *.jpeg formats are accepted.</small>
            </form>
            <form action="#" method="post" className="card text-gray border-light p-4 mb-4">
              <h2 className="h6">Gallery</h2>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="custom-file"><input id="gallery" type="file" className="custom-file-input" multiple="multiple" />
                  <label className="custom-file-label" htmlFor="gallery">Choose files</label></div>
              </div><small className="text-gray font-weight-light font-xs d-block mt-2">Images should be at least 500 pixels
                wide and only *.jpg, *.png and *.jpeg formats are accepted.</small>
              <div className="d-flex flex-wrap mt-4">
                <div className="profile-image-small fmxw-100 mr-3 mb-3"><img className="rounded" src="../../assets/img/account/office-1.jpg" alt="Office Conference" /></div>
                <div className="profile-image-small fmxw-100 mr-3 mb-3"><img className="rounded" src="../../assets/img/account/office-2.jpg" alt="Office Cowork" /></div>
                <div className="profile-image-small fmxw-100 mr-3 mb-3"><img className="rounded" src="../../assets/img/account/office-3.jpg" alt="Office Lifestyle" /></div>
                <div className="profile-image-small fmxw-100 mr-3 mb-3"><img className="rounded" src="../../assets/img/account/office-1.jpg" alt="Themesberg Office" /></div>
                <div className="profile-image-small fmxw-100 mr-3 mb-3"><img className="rounded" src="../../assets/img/account/office-2.jpg" alt="Office Meeting" /></div>
                <div className="profile-image-small fmxw-100 mr-3 mb-3"><img className="rounded" src="../../assets/img/account/office-3.jpg" alt="Office Private" /></div>
              </div>
            </form>
            <form action="#" method="post" className="card text-gray border-light p-4 mb-4">
              <div className="form-group"><label htmlFor="video">Video url</label> <input type="text" defaultValue="https://vimeo.com/40842620" className="form-control text-gray" id="video" required /></div>
              <div className="row">
                <div className="col"><button className="btn btn-primary btn-dark mt-2 animate-up-2 text-right" type="submit">Update</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>

</>

      </div>
    );
  }

  export default EditItem;