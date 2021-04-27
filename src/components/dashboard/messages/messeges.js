import React from 'react';
import Halmet from "react-helmet";
import "../../spaces.css";



function Dashboard_Messages() {
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4b67b001a5a', m: '1757bb37c697ae8812e62580cb8118715ef29012-1618318339-1800-AaZcdzmo39QC3Gv0Y3CQC0OX6IwEidBmb17l7wKEQexQJeMPCBXuCwMXuYpnNKA0JTG40fEprDOSfAHDUcwr8bQO1pc5wTtM4GvSGVnklFT+HvedFS0RTltmacvwXbeS0ChEtRwK94bHebDa3AmRRIx5YjNXImFZOObrhsTCbKZf', s: [0xaa7f344f70, 0x2dfe16b9aa], } })();
    `}
        </script>

      </Halmet>

      <main>
        {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
    <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
  </div> */}
        <div className="section section-lg bg-soft">
          <div className="container">
            <div className="row pt-5 pt-md-0">
              <div className="col-12 col-md-4 d-none d-lg-block">
                <div className="card border-light p-2">
                  <div className="card-body p-2">
                    <div className="profile-thumbnail small-thumbnail mx-auto"><img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded-circle border-white" alt="Joseph Portrait" /></div>
                    <h2 className="h5 font-weight-normal text-center mt-3 mb-0">Neil Sims</h2>
                    <div className="list-group dashboard-menu list-group-sm mt-4"><a className="d-flex list-group-item list-group-item-action">Overview <span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Settings<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">My Items<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Security<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action">Billing<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span> </a><a className="d-flex list-group-item list-group-item-action active border-0">Messages<span className="icon icon-xs ml-auto"><span className="fas fa-chevron-right" /></span></a></div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-lg-none">
                <div className="card bg-white border-light mb-4 mb-lg-5">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-10 d-flex"><a className="list-group-item list-group-item-action border-0">Overview</a> <a className="list-group-item list-group-item-action border-0">Settings</a> <a className="list-group-item list-group-item-action d-none d-sm-block border-0">My Items</a> <a className="list-group-item list-group-item-action d-none d-md-block border-0">Security</a></div>
                      <div className="col-2 d-flex justify-content-center">
                        <div className="btn-group dropleft"><button className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-sm"><span className="fas fa-ellipsis-h icon-secondary fa-lg" /> </span><span className="sr-only">Toggle
                        Dropdown</span></button>
                          <div className="dropdown-menu"><a className="list-group-item list-group-item-action d-sm-none border-0">My Items</a> <a className="list-group-item list-group-item-action d-md-none border-0">Security</a> <a className="list-group-item list-group-item-action border-0">Billing</a> <a className="list-group-item list-group-item-action border-0 active">Messages</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="d-flex align-items-center mb-3">
                  <h1 className="h5 mb-3">Inbox</h1>
                  <div className="ml-auto">
                    <div className="form-group"><select className="custom-select" id="inbox">
                      <option>All messages</option>
                      <option>Unread</option>
                      <option>Favorite</option>
                    </select></div>
                  </div>
                </div>
                <div className="card border-light mb-3 py-3">
                  <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-auto col-lg-1 d-flex align-items-center px-0">
                      <div className="form-check inbox-check mr-2"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" /> <label className="form-check-label" htmlFor="defaultCheck1" /></div>
                      <div className="rating-star d-none d-sm-inline-block"><input type="checkbox" id="InboxStar1" name="star" />
                        <label className="rating-star-label" htmlFor="InboxStar1"><span className="sr-only">Star</span></label></div>
                    </div>
                    <div className="col-lg-3 col-8 pl-0 ml-2"><a className="h6 text-sm">Neil Sims</a>
                    </div>
                    <div className="col col-lg-1 text-right px-0 order-lg-4"><span className="text-muted text-sm">Dec 25</span>
                    </div>
                    <div className="col-12 col-lg-7 d-flex align-items-center px-0">
                      <div className="col col-lg-11 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center"><a className="col-12 col-lg pl-0 font-weight-normal text-dark d-none d-sm-block mt-2 mt-lg-0">I want to
                      rent today, is the house still valid ...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-light mb-3 py-3">
                  <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-auto col-lg-1 d-flex align-items-center px-0">
                      <div className="form-check inbox-check mr-2"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" /> <label className="form-check-label" htmlFor="defaultCheck2" /></div>
                      <div className="rating-star d-none d-sm-inline-block"><input type="checkbox" id="InboxStar2" name="star" />
                        <label className="rating-star-label" htmlFor="InboxStar2"><span className="sr-only">Star</span></label></div>
                    </div>
                    <div className="col-lg-3 col-8 pl-0 ml-2"><a className="h6 text-sm">Bonnie Green</a>
                    </div>
                    <div className="col col-lg-1 text-right px-0 order-lg-4"><span className="text-muted text-sm">Dec 22</span>
                    </div>
                    <div className="col-12 col-lg-7 d-flex align-items-center px-0">
                      <div className="col col-lg-11 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center"><a className="col-12 col-lg pl-0 font-weight-normal text-dark d-none d-sm-block mt-2 mt-lg-0">I want to
                      rent today, is the house still valid ...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-light mb-3 py-3">
                  <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-auto col-lg-1 d-flex align-items-center px-0">
                      <div className="form-check inbox-check mr-2"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3" /> <label className="form-check-label" htmlFor="defaultCheck3" /></div>
                      <div className="rating-star d-none d-sm-inline-block"><input type="checkbox" id="InboxStar3" name="star" defaultChecked="checked" /> <label className="rating-star-label" htmlFor="InboxStar3"><span className="sr-only">Star</span></label></div>
                    </div>
                    <div className="col-lg-3 col-8 pl-0 ml-2"><a className="h6 text-sm">Jose Leos</a>
                    </div>
                    <div className="col col-lg-1 text-right px-0 order-lg-4"><span className="text-muted text-sm">Dec 2</span></div>
                    <div className="col-12 col-lg-7 d-flex align-items-center px-0">
                      <div className="col col-lg-11 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center"><a className="col-12 col-lg pl-0 font-weight-light text-gray d-none d-sm-block mt-2 mt-lg-0">I want to
                      rent today, is the house still valid ...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-light mb-3 py-3">
                  <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-auto col-lg-1 d-flex align-items-center px-0">
                      <div className="form-check inbox-check mr-2"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck4" /> <label className="form-check-label" htmlFor="defaultCheck4" /></div>
                      <div className="rating-star d-none d-sm-inline-block"><input type="checkbox" id="InboxStar4" name="star" defaultChecked="checked" /> <label className="rating-star-label" htmlFor="InboxStar4"><span className="sr-only">Star</span></label></div>
                    </div>
                    <div className="col-lg-3 col-8 pl-0 ml-2"><a className="h6 text-sm">Chris Garth</a>
                    </div>
                    <div className="col col-lg-1 text-right px-0 order-lg-4"><span className="text-muted text-sm">Nov 28</span>
                    </div>
                    <div className="col-12 col-lg-7 d-flex align-items-center px-0">
                      <div className="col col-lg-11 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center"><a className="col-12 col-lg pl-0 font-weight-light text-gray d-none d-sm-block mt-2 mt-lg-0">I want to
                      rent today, is the house still valid ...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-light mb-3 py-3">
                  <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-auto col-lg-1 d-flex align-items-center px-0">
                      <div className="form-check inbox-check mr-2"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck5" /> <label className="form-check-label" htmlFor="defaultCheck5" /></div>
                      <div className="rating-star d-none d-sm-inline-block"><input type="checkbox" id="InboxStar5" name="star" />
                        <label className="rating-star-label" htmlFor="InboxStar5"><span className="sr-only">Star</span></label></div>
                    </div>
                    <div className="col-lg-3 col-8 pl-0 ml-2"><a className="h6 text-sm">Roberta Casas</a>
                    </div>
                    <div className="col col-lg-1 text-right px-0 order-lg-4"><span className="text-muted text-sm">Nov 12</span>
                    </div>
                    <div className="col-12 col-lg-7 d-flex align-items-center px-0">
                      <div className="col col-lg-11 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center"><a className="col-12 col-lg pl-0 font-weight-light text-gray d-none d-sm-block mt-2 mt-lg-0">I want to
                      rent today, is the house still valid ...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-light mb-3 py-3">
                  <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-auto col-lg-1 d-flex align-items-center px-0">
                      <div className="form-check inbox-check mr-2"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck6" /> <label className="form-check-label" htmlFor="defaultCheck6" /></div>
                      <div className="rating-star d-none d-sm-inline-block"><input type="checkbox" id="InboxStar6" name="star" />
                        <label className="rating-star-label" htmlFor="InboxStar6"><span className="sr-only">Star</span></label></div>
                    </div>
                    <div className="col-lg-3 col-8 pl-0 ml-2"><a className="h6 text-sm">Chris Garth</a>
                    </div>
                    <div className="col col-lg-1 text-right px-0 order-lg-4"><span className="text-muted text-sm">Nov 15</span>
                    </div>
                    <div className="col-12 col-lg-7 d-flex align-items-center px-0">
                      <div className="col col-lg-11 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center"><a className="col-12 col-lg pl-0 font-weight-light text-gray d-none d-sm-block">I want to rent today,
                      is the house still valid ...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-light mb-3 py-3">
                  <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
                    <div className="col-auto col-lg-1 d-flex align-items-center px-0">
                      <div className="form-check inbox-check mr-2"><input className="form-check-input" type="checkbox" defaultValue id="defaultCheck7" /> <label className="form-check-label" htmlFor="defaultCheck7" /></div>
                      <div className="rating-star d-none d-sm-inline-block"><input type="checkbox" id="InboxStar7" name="star" />
                        <label className="rating-star-label" htmlFor="InboxStar7"><span className="sr-only">Star</span></label></div>
                    </div>
                    <div className="col-lg-3 col-8 pl-0 ml-2"><a className="h6 text-sm">Robert Bailey</a>
                    </div>
                    <div className="col col-lg-1 text-right px-0 order-lg-4"><span className="text-muted text-sm">Oct 30</span>
                    </div>
                    <div className="col-12 col-lg-7 d-flex align-items-center px-0">
                      <div className="col col-lg-11 px-0">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center"><a className="col-12 col-lg pl-0 font-weight-light text-gray d-none d-sm-block">I want to rent today,
                      is the house still valid ...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center mt-5">
                    <li className="page-item"><a className="page-link" >Previous</a></li>
                    <li className="page-item active"><a className="page-link" >1</a></li>
                    <li className="page-item"><a className="page-link" >2</a></li>
                    <li className="page-item"><a className="page-link" >3</a></li>
                    <li className="page-item"><a className="page-link" >4</a></li>
                    <li className="page-item"><a className="page-link" >5</a></li>
                    <li className="page-item"><a className="page-link" >Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Dashboard_Messages;