import logo from './logo.svg';
import React,{useEffect,useState} from "react";
import './App.css';
import { BrowserRouter, Route,Switch,Link,useLocation,useHistory} from 'react-router-dom';
import Landingpage from "./components/landingpage/landingpage"
import Home from "./components/home/home"
import Blog from "./components/blog/blog"
import Blog_Post from "./components/blogpost/blog_post"
import Contact_Us from "./components/contect/contact"
import About from "./components/about/about";
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
import Dashboard_Account from "./components/dashboard/account/account";
import Dashboard_Settings from "./components/dashboard/setting/setting";
import Dashboard_Security from "./components/dashboard/security/security";
import Dashboard_Messages from "./components/dashboard/messages/messeges";
import Dashboard_Chat from "./components/dashboard/chat/chat";
import Dashboard_Billing from "./components/dashboard/billing/billing";
import Dashboard_Invoice from "./components/dashboard/invoices/invoice";
import Dashboard_MyItem from "./components/dashboard/myitem/myItem";
import Dashboard_EditItem from "./components/dashboard/edititem/editItem";
import Checkout from "./components/checkout/checkout"
import Checkout_Billing from "./components/checkoutcard_detail/checkout_card_detail"
 import AdminPanel from "./components/adminpanel/adminpanel";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"





function App() {
  const [windowlocation, setWindowlocation] = useState("");
  const [showadmin, setshowadmin] = useState("block");
  const history = useHistory() 



     
 
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

   
      window.addEventListener('scroll', changeNavbarColor);
   



   },
     []
    
   );

  return (
    <BrowserRouter>
    <div>
      
     
    
<Header />





      <Switch>
     
         <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/booking">
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
         <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/checkout_billing">
            <Checkout_Billing />
          </Route> 
          <Route path="/adminpanel">
            <AdminPanel />
          </Route>  
      </Switch>
      </div>

<Footer />
     
    </BrowserRouter>
  );
}

export default App;
