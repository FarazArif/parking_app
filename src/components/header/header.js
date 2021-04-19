import React from "react"
import "../spaces.css"
import Landingpage from "../landingpage/landingpage";
import Singe_message from "../singlemessage/single_message"
import {BrowserRouter,Route,Link} from "react-router-dom";
export default function Header(){
    return(
      <BrowserRouter>
        <header className="header-global">
        <nav id="navbar-main" className="navbar navbar-main navbar-theme-primary navbar-expand-lg headroom py-lg-3 px-lg-6 navbar-dark navbar-transparent navbar-theme-primary">
          <div className="container">
            <a className="navbar-brand @@logo_classes" >
              Al-Muslim
              {/* <img className="navbar-brand-dark common" src="" height={35} alt="Al-muslim" />
              <img className="navbar-brand-light common" src="" height={35} alt="Al-muslim" /> */}

            </a>

            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand"><a>
                    {/* <img src="" height={35} alt="Logo Impact" /> */}
                    <p>Al-Muslims</p>
                    </a>
                    </div>
                  <div className="col-6 collapse-close"><a href="" role="button" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation" /></div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover justify-content-center">
                <li className="nav-item dropdown"><a href="" id="mainPagesDropdown" className="nav-link dropdown-toggle" aria-expanded="false" data-toggle="dropdown"><span className="nav-link-inner-text mr-1">Front pages</span>
                  <i className="fas fa-angle-down nav-link-arrow" /></a>
                  <div className="dropdown-menu dropdown-megamenu p-3 p-lg-4" aria-labelledby="mainPagesDropdown">
                    <div className="row">
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">Main pages</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a  className="megamenu-link">
                          <Link to="/landingpage">
                            
                            
                          Landing
                            </Link>
                            
                            </a></li>
                          {/* <li className="mb-2 megamenu-item"><a className="megamenu-link" >Landing 2</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Landing 3</a></li> */}
                          <li className="mb-2 megamenu-item">
                            {/* <a className="megamenu-link" > */}
                            <Link to="/">
                            
                            
                            About
                            </Link>
                            
                            
                            
                            {/* </a> */}
                            </li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Pricing</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Team</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Contact</a></li>
                        </ul>
                        <h6 className="d-block text-primary">Legal</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Legal center</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Terms &amp; agreement</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">Listing</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >All spaces</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Map view</a>
                          </li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >All spaces
                          sidebar</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Space details</a>
                          </li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Profile</a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Support</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link">Support center</a>
                          </li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Support
                          topic</a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Blog</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Blog</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Blog post</a></li>
                        </ul>
                      </div>
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">User</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Sign in</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Sign up</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Forgot
                          password</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Reset
                          password</a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Special</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >404 Not Found</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >500 Server Error</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Maintenance</a>
                          </li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link">Coming soon</a>
                          </li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Blank page</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown"><a href="#" id="dashboardPagesDropdown" className="nav-link dropdown-toggle" aria-expanded="false" data-toggle="dropdown"><span className="nav-link-inner-text mr-1">Dashboard</span> <i className="fas fa-angle-down nav-link-arrow" /></a>
                  <div className="dropdown-menu dropdown-megamenu-sm p-3 p-lg-4" aria-labelledby="dashboardPagesDropdown">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="d-block mb-3 text-primary">User dashboard</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >My
                          account</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Settings</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link">Security</a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Items</h6>
                        <ul className="list-style-none">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >My
                          items</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Edit
                          item</a></li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <h6 className="d-block mb-3 text-primary">Messaging</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Messages</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Chat</a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Billing</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Billing
                          details</a></li>
                          <li className="mb-2 megamenu-item"><a className="megamenu-link" >Invoice</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown"><a href="#" id="supportDropdown" className="nav-link dropdown-toggle" aria-expanded="false" data-toggle="dropdown"><span className="nav-link-inner-text mr-1">Support</span> <i className="fas fa-angle-down nav-link-arrow" /></a>
                  <div className="dropdown-menu dropdown-menu-lg" aria-labelledby="supportDropdown">
                    <div className="col-auto px-0">
                      <div className="list-group list-group-flush"><a  className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4"><span className="icon icon-md icon-secondary"><i className="fas fa-file-alt" /></span>
                        <div className="ml-4"><span className="text-dark d-block">Documentation<span className="badge badge-sm badge-secondary ml-2">v3.0</span></span> <span className="small">Examples
                          and guides</span></div>
                      </a><a  className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4"><span className="icon icon-md icon-primary"><i className="fas fa-microphone-alt" /></span>
                          <div className="ml-4"><span className="text-dark d-block">Support</span> <span className="small">Looking for
                          answers?</span></div>
                        </a></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="d-none d-lg-block @@cta_button_classes">
              <a href=""  className="btn btn-md btn-outline-white animate-up-2 mr-3">
                {/* <i className="fas fa-book mr-1" /> 
                <span className="d-xl-none">Docs</span>  */}
                <span className="d-none d-xl-inline">Languages</span></a>
                 <a href=""  className="btn btn-md btn-secondary animate-up-2">
                   <i className="fas fa-shopping-bag mr-2" />Login</a></div>
            <div className="d-flex d-lg-none align-items-center"><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button></div>
          </div>
        </nav>
      </header>

      
<Route path="/landingpage" component={Landingpage} />
      </BrowserRouter>
    );
}