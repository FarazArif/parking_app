import logo from './logo.svg';
import React,{useEffect,useState} from "react";
import './App.css';
import Landingpage from "./components/landingpage/landingpage"
import Home from "./components/home/home"
import Blog from "./components/blog"
import Blog_Post from "./components/blog_post"
import Contact_Us from "./components/contact"
import About from "./components/about";
import { BrowserRouter, Route,Switch,Link,useLocation,useHistory} from 'react-router-dom';
import Legal from "./components/legal/legal";
import Maintenance from "./components/maintenance/maintenance";
import Pricing from "./components/pricing/pricing";
import Profile from "./components/profile/profile";
import Reset_Password from "./components/reset-password/reset-password";
import SignIn from "./components/signIn/signIn"
import SignUp from "./components/signUp/signUp"
import SingleSpace from "./components/single-space/singleSpace"
import Support from "./components/support/support"
import SupportTopic from "./components/support-topic/support-topic"
import AllSpaces from "./components/all spaces/allsapaces"
import AllSpacesMAp from "./components/all spaces_map/all_spaces_map"
import AllSpacesSidbar from "./components/all spaces_slidebar/all_spaces_sidebar"
import Blank from "./components/blank page/blank"
import Comingsoon from "./components/comingsoon/comingsoon"
import Error404 from "./components/error_404/404"
import Error500 from "./components/error_500/500"
import Forget_password from "./components/forgetpassword/forgetpassword"
import Dashboard_Account from "./components/dashboard/account";
import Dashboard_Settings from "./components/dashboard/setting";
import Dashboard_Security from "./components/dashboard/security";
import Dashboard_Messages from "./components/dashboard/messeges";
import Dashboard_Chat from "./components/dashboard/chat";
import Dashboard_Billing from "./components/dashboard/billing";
import Dashboard_Invoice from "./components/dashboard/invoice";
import Dashboard_MyItem from "./components/dashboard/myItem";
import Dashboard_EditItem from "./components/dashboard/editItem";









function App() {
  const [windowDimensions, setWindowDimensions] = useState(false);
  const [windowlocation, setWindowlocation] = useState("");
  const history = useHistory() 
  // function refreshPage(){    
  //     window.parent.location = window.parent.location.href;
  //    } 

  // const Root = () => { 
  //   const history = useHistory() 
 
  //   useEffect(() => {
  //      return history.listen((location) => { 
  //         console.log(`You changed the page to: ${location.pathname}`) 
  //      }) 
  //   },[history]) 

     
  function Linkfunctionality(evt) {
   console.log(evt.target.value);
    // window.location.href="/";
    //  window.scrollTo({
    //     top: this.statsRef.current.offsetTop,
    //    behavior: "smooth"
    //  });
   }
   const changeNavbarColor = () =>{
  



     if(window.scrollY >= 80){
       setWindowlocation("#0d1b48");
     }
     else{
      if(window.location.href=="http://localhost:3000/" || window.location.href=="http://localhost:3000/landingpage" || window.location.href=="http://localhost:3000/about" || window.location.href=="http://localhost:3000/contact_us" || window.location.href=="http://localhost:3000/all_spaces"|| window.location.href=="http://localhost:3000/all_spaces_sidbar"|| window.location.href=="http://localhost:3000/single_space"|| window.location.href=="http://localhost:3000/reset_password"|| window.location.href=="http://localhost:3000/sign_in" || window.location.href=="http://localhost:3000/sign_up" || window.location.href=="http://localhost:3000/forget_password"){
        setWindowlocation("transparent");
      }else{
        setWindowlocation("#0d1b48");
      }
      
     }
  };




   useEffect(() => {


    if(window.location.href=="http://localhost:3000/" || window.location.href=="http://localhost:3000/landingpage" || window.location.href=="http://localhost:3000/about" || window.location.href=="http://localhost:3000/contact_us" || window.location.href=="http://localhost:3000/all_spaces"|| window.location.href=="http://localhost:3000/all_spaces_sidbar"|| window.location.href=="http://localhost:3000/single_space"|| window.location.href=="http://localhost:3000/reset_password"|| window.location.href=="http://localhost:3000/sign_in" || window.location.href=="http://localhost:3000/sign_up" || window.location.href=="http://localhost:3000/forget_password"){
      setWindowlocation("transparent");
 }else{
   setWindowlocation("#0d1b48");
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

  return (
    <BrowserRouter>
    <div>
      
     
     <header  className="header-global">
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
                          <a className="megamenu-link" href="/landingpage">
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
   






      <Switch>
     
         <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/landingpage">
          <Landingpage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/contact_us">
          <Contact_Us />
        </Route> 
        <Route path="/legal">
          <Legal />
        </Route> 
        <Route path="/maintenance">
          <Maintenance />
        </Route> 
        <Route path="/pricing">
          <Pricing />
        </Route> 
        <Route path="/profile">
          <Profile />
        </Route> 
        <Route path="/reset_password">
          <Reset_Password />
        </Route> 
          <Route path="/sign_in">
            <SignIn />
          </Route>
          <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/single_space">
            <SingleSpace />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/support_topic">
            <SupportTopic />
          </Route>
          <Route path="/all_spaces">
            <AllSpaces />
          </Route>
          <Route path="/all_spaces_mAp">
            <AllSpacesMAp />
          </Route>
          <Route path="/all_spaces_sidbar">
            <AllSpacesSidbar />
          </Route>
          <Route path="/blank">
            <Blank />
          </Route>
          <Route path="/coming_soon">
            <Comingsoon />
          </Route>
          <Route path="/blog_post">
            <Blog_Post />
          </Route>
          <Route path="/error404">
            <Error404 />
          </Route>
          <Route path="/error500">
            <Error500 />
          </Route>
          <Route path="/forget_password">
          <Forget_password />
          </Route>


          <Route path="/dashboard_account">
            <Dashboard_Account />
          </Route>
          <Route path="/dashboard_settings">
            <Dashboard_Settings />
          </Route>
          <Route path="/dashboard_secuirty">
            <Dashboard_Security />
          </Route>
          <Route path="/dashboard_myItem">
            <Dashboard_MyItem />
          </Route>
          <Route path="/dashboard_editItem">
            <Dashboard_EditItem />
          </Route>
          <Route path="/dashboard_messages">
            <Dashboard_Messages />
          </Route>
          <Route path="/dashboard_chat">
            <Dashboard_Chat />
          </Route>
          <Route path="/dashboard_billing">
            <Dashboard_Billing />
          </Route>
          <Route path="/dashboard_invoice">
            <Dashboard_Invoice />
          </Route>
       
       
      
      </Switch>
      </div>


      <footer className="footer pb-5 bg-primary text-white   footer_padding_property">
        <div className="container">
          <div className="row mt-6 section_headings">
            <div className="col-xl-3 mb-3 mb-xl-0">
              {/* <img src="" height={30} className="mb-3" alt="Al-Muslim" /> */}
                <p>Al-Muslims</p>
              <p>Premium Bootstrap Directory Listing Template</p>
            </div>
            <div className="col-6 col-xl-2 mb-5 mb-xl-0"><span className="h5">Al-Muslims</span>
              <ul className="footer-links mt-2">
                <li><a  >Blog</a></li>
                <li><a  >Products</a></li>
                <li><a >About Us</a></li>
                <li><a  >Contact Us</a></li>
              </ul>
            </div>
            <div className="col-6 col-xl-3 mb-5 mb-xl-0"><span className="h5">Other</span>
              <ul className="footer-links mt-2">
                <li><a >Documentation <span className="badge badge-sm badge-secondary ml-2">v3.0</span></a></li>
                <li><a >Changelog</a></li>
                <li><a >Support</a></li>
                <li><a >License</a></li>
              </ul>
            </div>
            <div className="col-12 col-xl-4 mb-5 mb-xl-0"><span className="h5">Get the app</span>
              <p className="text-muted font-small mt-2">It's easy. Just select your device.</p><button className="btn btn-sm btn-white mb-xl-0 mr-2 mr-lg-2"><span className="d-flex align-items-center"><span className="icon icon-brand mr-2"><span className="fab fa-apple" /></span> <span className="d-inline-block text-left"><small className="font-weight-normal d-block">Available on</small> App
                Store</span></span></button> <button className="btn btn-sm btn-white"><span className="icon icon-brand mr-2"><span className="fab fa-google-play" /></span> <span className="d-inline-block text-left"><small className="font-weight-normal d-block">Available on</small> Google
              Play</span></button>
            </div>
          </div>
          <hr className="my-3 my-lg-5" />
          <div className="row">
            <div className="col mb-md-0"><a  className="d-flex justify-content-center">
              {/* <img src="https://demo.themesberg.com/spaces/assets/img/themesberg.svg" height={25} className="mb-3" alt="Themesberg Logo" /> */}
              </a>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Al-Muslims <span className="current-year">2020</span>.
              All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
