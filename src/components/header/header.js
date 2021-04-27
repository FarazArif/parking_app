import React,{useEffect,useState} from "react";
import "../spaces.css"
import { BrowserRouter, Route,Switch,Link,useLocation,useHistory} from 'react-router-dom';
export default function Header(){
  const [windowlocation, setWindowlocation] = useState("");
  const [showadmin, setshowadmin] = useState("block");

  const changeNavbarColor = () =>{
  



    if(window.scrollY >= 80){
      setWindowlocation("#0d1b48");
    }
    else{
     if(window.location.href=="http://localhost:3000/" || window.location.href=="http://localhost:3000/booking" || window.location.href=="http://localhost:3000/about" || window.location.href=="http://localhost:3000/contact_us" || window.location.href=="http://localhost:3000/all_spaces"|| window.location.href=="http://localhost:3000/all_spaces_sidbar"|| window.location.href=="http://localhost:3000/single_space"|| window.location.href=="http://localhost:3000/reset_password"|| window.location.href=="http://localhost:3000/sign_in" || window.location.href=="http://localhost:3000/sign_up" || window.location.href=="http://localhost:3000/forget_password"){
       setWindowlocation("transparent");
     }else{
       setWindowlocation("#0d1b48");
     }
     
    }
 };
 useEffect(() => {


  if(window.location.href=="http://localhost:3000/" || window.location.href=="http://localhost:3000/booking" || window.location.href=="http://localhost:3000/about" || window.location.href=="http://localhost:3000/contact_us" || window.location.href=="http://localhost:3000/all_spaces"|| window.location.href=="http://localhost:3000/all_spaces_sidbar"|| window.location.href=="http://localhost:3000/single_space"|| window.location.href=="http://localhost:3000/reset_password"|| window.location.href=="http://localhost:3000/sign_in" || window.location.href=="http://localhost:3000/sign_up" || window.location.href=="http://localhost:3000/forget_password"){
    setWindowlocation("transparent");
}else{
 setWindowlocation("#0d1b48");
}
if(window.location.href=="http://localhost:3000/adminpanel"){
setshowadmin("none");
}else{
setshowadmin("block");
}

  //  function updateSize() {
  //    let width=window.innerWidth;
  //    if(width<="992"){
      
  //      setWindowDimensions(true)
  //     }else{
  //       setWindowDimensions(false)
  //     }
  //   }
  //   window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', changeNavbarColor);
  // updateSize();



 },
   []
  
 );



    return(
      <BrowserRouter>
        <header style={{display:showadmin}}  className="header-global">
        <nav
        
        style={{backgroundColor:windowlocation}}
        id="navbar-main" className="navbar navbar-main navbar-theme-primary navbar-expand-lg headroom py-lg-3 px-lg-6 navbar-dark navbar-transparent navbar-theme-primary">
       

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
                  <div className="col-6 collapse-close">
                    <a href="" role="button" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation" />
                    </div>
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
                          <li  className="mb-2 megamenu-item">
                         <a className="megamenu-link" href="/">
                           Home
                     {/* {windowDimensions ?
                          <a  href="" role="button" className="" data-toggle="collapse" data-target="#navbar_global" aria-controls="" aria-expanded="false" aria-label="Toggle navigation" >
                       
                         
                          <Link onClick={() => {
        
                                  // window.location.href="/";
                                  window.scrollTo(0, 0)

                                 }}
                          className="megamenu-link" to="/">
                            
                          Home
                          
                            </Link>
                             </a> 
                             :
                             <Link 
                             onClick={() => {
        
                              
                              window.scrollTo(0, 0)

                                
                                                       }}
                             
                             className="megamenu-link" to="/">
                            
                             Home
                             
                               </Link>

                             }  */}

                           </a>
                            </li>
                       
                          <li className="mb-2 megamenu-item">
                          <a className="megamenu-link" href="/booking">
                           Booking
                    
                           </a>
        

                           

                            {/* {windowDimensions ?
                          <a href="" role="button" className="" data-toggle="collapse" data-target="#navbar_global" aria-controls="" aria-expanded="false" aria-label="Toggle navigation" >
                         
                         
                          <Link  
                          onClick={() => {
        
                            // window.location.href="/landingpage";
                            window.scrollTo(0, 0);

                           }} 
                          className="megamenu-link" to="/landingpage">
                            
                          Booking
                          
                            </Link>
                             </a> 
                             :
                             <Link  
                             onClick={() => {
        
                              // window.location.href="/landingpage";
                              window.scrollTo(0, 0)

                             }} 
                             className="megamenu-link" to="/landingpage">
                            
                            Booking
                             
                               </Link>

                             } 

                          
                            
                            
                             */}
                            {/* </a> */}
                            </li>
                          <li className="mb-2 megamenu-item">
                            
                            <a href="/about" className="megamenu-link" >



                         
                          About
                    
                          
                                                     
                            
                            </a>
                            
                            
                            </li>
                        
                          <li className="mb-2 megamenu-item">
                            <a href="contact_us" className="megamenu-link" >
                          Contact Us
                         
                            
                            </a>
                            
                            
                            </li>
                        </ul>
                        <h6 className="d-block text-primary">Legal</h6>

                        <ul className="list-style-none mb-4">

                          <li className="mb-2 megamenu-item">
                            
                            <a href="/legal" className="megamenu-link" >
                            Leagal
                         
                            
                         
                            
                            
                            </a></li>
                          
                          <li className="mb-2 megamenu-item">
                            <a href="/pricing" className="megamenu-link" >
                            Pricing
                         
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">Listing</h6>


                        <ul className="list-style-none mb-4">

                          <li className="mb-2 megamenu-item">
                            <a href="/all_spaces" className="megamenu-link" >
                            All spaces
                          
                           </a></li>
                          {/* <li className="mb-2 megamenu-item">
                            <a href="/all_spaces_mAp" className="megamenu-link" >
                            Map View
                            
                            
                            </a>
                          </li> */}
                          <li className="mb-2 megamenu-item">
                            <a href="/all_spaces_sidbar"  className="megamenu-link" >
                            All spaces
                          sidebar
                         
                           </a></li>
                          <li className="mb-2 megamenu-item">
                            <a href="/single_space" className="megamenu-link" >
                            
                            Space Detail
                           
                            </a>
                          </li>
                        
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Support</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a href="/support" className="megamenu-link">
                            Support center
                          
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a href="/support_topic" className="megamenu-link" >
                            Support
                          topic
                          

                           </a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Blog</h6>
                        <ul className="list-style-none mb-4">


                        <li className="mb-2 megamenu-item">
                          <a href="/blog" className="megamenu-link" >
                          Blog
                          
                            </a></li>
                            <li className="mb-2 megamenu-item">
                              <a href="/blog_post" className="megamenu-link" >
                              Blog Post 
                         
                         
                            </a></li>
                        </ul>
                      </div>
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">User</h6>
                        <ul className="list-style-none mb-4">
                        <li className="mb-2 megamenu-item">
                          <a href="/profile" className="megamenu-link" >
                          Profile
                        
                          </a></li>
                        <li className="mb-2 megamenu-item">
                          <a href="/reset_password" className="megamenu-link" >
                          Reset
                          password
                        
                          </a></li>
                          <li className="mb-2 megamenu-item">
                            <a href="/sign_in" className="megamenu-link" >
                            Sign in
                          
                            </a></li>
                          <li className="mb-2 megamenu-item">
                            <a href="/sign_up" className="megamenu-link" >
                            Sign up

                         
                            </a></li>
                          <li className="mb-2 megamenu-item">
                            <a href="/forget_password" className="megamenu-link" >
                            Forgot
                          password
                         
                           </a></li>
                        
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Special</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a href="/error404" className="megamenu-link" >
                            404 Not Found 
                         
                            </a></li>
                          <li className="mb-2 megamenu-item">
                            <a href="/error500" className="megamenu-link" >
                            500 Server Error
                         
                            </a></li>
                          <li className="mb-2 megamenu-item">
                            <a href="/maintenance" className="megamenu-link" >
                            Maintenance
                         
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a href="/coming_soon" className="megamenu-link">
                            Coming soon
                             </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a href="/blank" className="megamenu-link" >
                            Blank page
                         
                           </a></li>
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
                          <li className="mb-2 megamenu-item"><a href="/dashboard_account" className="megamenu-link" >My
                          account</a></li>
                          <li className="mb-2 megamenu-item"><a href="/dashboard_settings"  className="megamenu-link" >Settings</a></li>
                          <li className="mb-2 megamenu-item"><a href="/dashboard_secuirty"  className="megamenu-link">Security</a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Items</h6>
                        <ul className="list-style-none">
                          <li className="mb-2 megamenu-item"><a href="/dashboard_myItem"  className="megamenu-link" >My
                          items</a></li>
                          <li className="mb-2 megamenu-item"><a href="/dashboard_editItem"  className="megamenu-link" >Edit
                          item</a></li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <h6 className="d-block mb-3 text-primary">Messaging</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a href="/dashboard_messages"  className="megamenu-link" >Messages</a></li>
                          <li className="mb-2 megamenu-item"><a href="/dashboard_chat"  className="megamenu-link" >Chat</a></li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Billing</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item"><a href="/dashboard_billing"  className="megamenu-link" >Billing
                          details</a></li>
                          <li className="mb-2 megamenu-item"><a href="/dashboard_invoice"  className="megamenu-link" >Invoice</a>
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
                <span className=" d-xl-inline">Languages</span></a>
                 <a href=""  className="btn btn-md btn-secondary animate-up-2">
                   <i className="fas fa-shopping-bag mr-2" />Login</a></div>
            <div className="d-flex d-lg-none align-items-center"><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button></div>
          </div>
        </nav>
      </header>
             </BrowserRouter>
    );
}