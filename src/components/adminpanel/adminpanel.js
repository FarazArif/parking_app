import React from "react"
import "./adminpanel.css"


export default function Admin_Panel(){
    return(
        <div className="admin_most_main_div">
           <div className="wrapper">
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link admin_header_nav_link" data-widget="pushmenu" href="" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="" className="nav-link admin_header_nav_link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="" className="nav-link admin_header_nav_link">Contact</a>
      </li>
    </ul>
    {/* SEARCH FORM */}
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
    {/* Right navbar links */}
   
  </nav>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="" className="brand-link">
      <img src="https://img.icons8.com/bubbles/50/000000/system-administrator-male.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Admin</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="https://avatars2.githubusercontent.com/u/1122076?v=4" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="" className="d-block">Alexander Pierce</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column side_bar_fist_div" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open ">
            <a href="" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                {/* <i className="right fas fa-angle-left" /> */}
              </p>
            </a>
            {/* <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul> */}
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          {/* <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Layout Options
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">6</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation + Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/boxed.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Boxed</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-topnav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-footer.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li> */}
          <li className="nav-item ">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
               
              </p>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
               
              </p>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
               
              </p>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
               
              </p>
            </a>
          </li>
          <li className="nav-header">EXAMPLES</li>
         
          <li className="nav-item">
            <a href="" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Gallery
              </p>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
             
              <li className="nav-item">
            <a href="" className="nav-link">
            <i className="nav-icon fas fa-book" />
              <p>
                Pages
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="" className="nav-link">
              <i className="nav-icon far fa-plus-square" />
              <p>
                Extras
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Login</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Register</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Forgot Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Recover Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Lockscreen</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Legacy User Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Language Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 404</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 500</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Pace</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Blank Page</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Starter Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">MISCELLANEOUS</li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-file" />
              <p>Documentation</p>
            </a>
          </li>
       
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
          {/* <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href=" ">Home</a></li>
             
            </ol>
          </div> */}
          
          {/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Info boxes */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
              <div className="info-box-content">
                <span className="info-box-text">CPU Traffic</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* fix for small devices only */}
          <div className="clearfix hidden-md-up" />
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Sales</span>
                <span className="info-box-number">760</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
              <div className="info-box-content">
                <span className="info-box-text">New Members</span>
                <span className="info-box-number">2,000</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Monthly Recap Report</h5>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <div className="btn-group">
                    {/* <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                      <i className="fas fa-wrench" />
                    </button> */}
                    <div className="dropdown-menu dropdown-menu-right" role="menu">
                      <a href="" className="dropdown-item">Action</a>
                      <a href="" className="dropdown-item">Another action</a>
                      <a href="" className="dropdown-item">Something else here</a>
                      <a className="dropdown-divider" />
                      <a href="" className="dropdown-item">Separated link</a>
                    </div>
                  </div>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <p className="text-center">
                      <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                    </p>
                    <div className="chart">
                      {/* Sales Chart Canvas */}
                      <canvas id="salesChart" height={180} style={{height: 180}} />
                    </div>
                    {/* /.chart-responsive */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    <p className="text-center">
                      <strong>Goal Completion</strong>
                    </p>
                    <div className="progress-group">
                      Add Products to Cart
                      <span className="float-right"><b>160</b>/200</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-primary" style={{width: '80%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      Complete Purchase
                      <span className="float-right"><b>310</b>/400</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-danger" style={{width: '75%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      <span className="progress-text">Visit Premium Page</span>
                      <span className="float-right"><b>480</b>/800</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-success" style={{width: '60%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      Send Inquiries
                      <span className="float-right"><b>250</b>/500</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-warning" style={{width: '50%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* ./card-body */}
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 17%</span>
                      <h5 className="description-header">$35,210.43</h5>
                      <span className="description-text">TOTAL REVENUE</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-warning"><i className="fas fa-caret-left" /> 0%</span>
                      <h5 className="description-header">$10,390.90</h5>
                      <span className="description-text">TOTAL COST</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 20%</span>
                      <h5 className="description-header">$24,813.53</h5>
                      <span className="description-text">TOTAL PROFIT</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block">
                      <span className="description-percentage text-danger"><i className="fas fa-caret-down" /> 18%</span>
                      <h5 className="description-header">1200</h5>
                      <span className="description-text">GOAL COMPLETIONS</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                </div>
                {/* /.row */}
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <div className="col-md-8">
            {/* MAP & BOX PANE */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">US-Visitors Report</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="d-md-flex">
                  <div className="p-1 flex-fill" style={{overflow: 'hidden'}}>
                    {/* Map will be created here */}
                    <div id="world-map-markers" style={{height: 325, overflow: 'hidden'}}>
                      <div className="map" />
                    </div>
                  </div>
                  <div className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                    <div className="description-block mb-4">
                      <div className="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                      <h5 className="description-header">8390</h5>
                      <span className="description-text">Visits</span>
                    </div>
                    {/* /.description-block */}
                    <div className="description-block mb-4">
                      <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                      <h5 className="description-header">30%</h5>
                      <span className="description-text">Referrals</span>
                    </div>
                    {/* /.description-block */}
                    <div className="description-block">
                      <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                      <h5 className="description-header">70%</h5>
                      <span className="description-text">Organic</span>
                    </div>
                    {/* /.description-block */}
                  </div>{/* /.card-pane-right */}
                </div>{/* /.d-md-flex */}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="row">
              <div className="col-md-6">
                {/* DIRECT CHAT */}
                <div className="card direct-chat direct-chat-warning">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      {/* <span data-toggle="tooltip" title="3 New Messages" className="badge badge-warning">3</span> */}
                      <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                      </button>
                      {/* <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                        <i className="fas fa-comments" /></button> */}
                      <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">Alexander Pierce</span>
                          <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="https://lh3.googleusercontent.com/-TLQOwdbs61M/V3KgoFF9-NI/AAAAAAAAfFU/8a5sNQmTJcA/s640/Joaquin-Phoenix-dp-profile-pics-whatsapp-Facebook-926.jpg" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">Sarah Bullock</span>
                          <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzF7O4G9bcVDrwo7JBpQD0MavseIr4NUtZjQ&usqp=CAU" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">Alexander Pierce</span>
                          <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="https://lh3.googleusercontent.com/-TLQOwdbs61M/V3KgoFF9-NI/AAAAAAAAfFU/8a5sNQmTJcA/s640/Joaquin-Phoenix-dp-profile-pics-whatsapp-Facebook-926.jpg" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Working with AdminLTE on a great new app! Wanna join?
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">Sarah Bullock</span>
                          <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzF7O4G9bcVDrwo7JBpQD0MavseIr4NUtZjQ&usqp=CAU" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          I would love to.
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="">
                            <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">2/28/2015</small>
                              </span>
                              <span className="contacts-list-msg">How have you been? I was...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="">
                            <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Sarah Doe
                                <small className="contacts-list-date float-right">2/23/2015</small>
                              </span>
                              <span className="contacts-list-msg">I will be waiting for...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="">
                            <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nadia Jolie
                                <small className="contacts-list-date float-right">2/20/2015</small>
                              </span>
                              <span className="contacts-list-msg">I'll call you back at...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="">
                            <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nora S. Vans
                                <small className="contacts-list-date float-right">2/10/2015</small>
                              </span>
                              <span className="contacts-list-msg">Where is your new...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="">
                            <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                John K.
                                <small className="contacts-list-date float-right">1/27/2015</small>
                              </span>
                              <span className="contacts-list-msg">Can I take a look at...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="">
                            <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Kenneth M.
                                <small className="contacts-list-date float-right">1/4/2015</small>
                              </span>
                              <span className="contacts-list-msg">Never mind I found...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contacts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="" method="post">
                      <div className="input-group">
                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                        <span className="input-group-append">
                          <button type="button" className="btn btn-warning">Send</button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                {/* USERS LIST */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Latest Members</h3>
                    <div className="card-tools">
                      <span className="badge badge-danger">8 New Members</span>
                      <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <ul className="users-list clearfix">
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbx88qACc4dpCrS4KVDf1S991M6L5xmht7aL9bK5ZKZuo2Kaz_Ouw6faABLAdmuxiBIA&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="">Alexander Pierce</a>
                        <span className="users-list-date">Today</span>
                      </li>
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NvF6exmMSxqoOymOwZbK_qNS3WlGxCAESmyx4KrFK4mZwGxKCz5Dn4Ax1i5Y9ZdvxTs&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="">Norman</a>
                        <span className="users-list-date">Yesterday</span>
                      </li>
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vEkfd2uNbJbYgjpQ6VpkNvjQ4Lk4oU6hKq-nVsLOUNgg4L2qN8TNRfeWU0IFQEIbMSI&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="">Jane</a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="">John</a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-JmDfLz7ErRiTZ9vIme55A9JGQqdx8qJ_xQ_lB2UIqGAFELpsKQQ8xuTSrlqrly-tSQ&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="">Alexander</a>
                        <span className="users-list-date">13 Jan</span>
                      </li>
                      <li>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_uYRRMcALeZNr0XPv_41iyWd9t0clH2dogIOzrwVANvp83XMxIYc-Syl94r8qmBNmRFQ&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="">Sarah</a>
                        <span className="users-list-date">14 Jan</span>
                      </li>
                      <li>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbx88qACc4dpCrS4KVDf1S991M6L5xmht7aL9bK5ZKZuo2Kaz_Ouw6faABLAdmuxiBIA&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="#">Nora</a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                      <li>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vEkfd2uNbJbYgjpQ6VpkNvjQ4Lk4oU6hKq-nVsLOUNgg4L2qN8TNRfeWU0IFQEIbMSI&usqp=CAU" alt="User Image" />
                        <a className="users-list-name" href="">Nadia</a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                    </ul>
                    {/* /.users-list */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer text-center">
                    <a href="javascript::">View All Users</a>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/*/.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* TABLE: LATEST ORDERS */}
            <div className="card">
              <div className="card-header border-transparent">
                <h3 className="card-title">Latest Orders</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Status</th>
                        <th>Popularity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="badge badge-success">Shipped</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="badge badge-danger">Delivered</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-info">Processing</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="badge badge-danger">Delivered</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="badge badge-success">Shipped</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.table-responsive */}
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
          <div className="col-md-4">
            {/* Info Boxes Style 2 */}
            <div className="info-box mb-3 bg-warning">
              <span className="info-box-icon"><i className="fas fa-tag" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Inventory</span>
                <span className="info-box-number">5,200</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-success">
              <span className="info-box-icon"><i className="far fa-heart" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Mentions</span>
                <span className="info-box-number">92,050</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-danger">
              <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Downloads</span>
                <span className="info-box-number">114,381</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-info">
              <span className="info-box-icon"><i className="far fa-comment" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Direct Messages</span>
                <span className="info-box-number">163,921</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Browser Usage</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="chart-responsive">
                      <canvas id="pieChart" height={150} />
                    </div>
                    {/* ./chart-responsive */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    <ul className="chart-legend clearfix">
                      <li><i className="far fa-circle text-danger" /> Chrome</li>
                      <li><i className="far fa-circle text-success" /> IE</li>
                      <li><i className="far fa-circle text-warning" /> FireFox</li>
                      <li><i className="far fa-circle text-info" /> Safari</li>
                      <li><i className="far fa-circle text-primary" /> Opera</li>
                      <li><i className="far fa-circle text-secondary" /> Navigator</li>
                    </ul>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.card-body */}
              <div className="card-footer bg-white p-0">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      United States of America
                      <span className="float-right text-danger">
                        <i className="fas fa-arrow-down text-sm" />
                        12%</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      India
                      <span className="float-right text-success">
                        <i className="fas fa-arrow-up text-sm" /> 4%
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      China
                      <span className="float-right text-warning">
                        <i className="fas fa-arrow-left text-sm" /> 0%
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.footer */}
            </div>
            {/* /.card */}
            {/* PRODUCT LIST */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Parking</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  <li className="item">
                    <div className="product-img">
                    <img src="https://images.squarespace-cdn.com/content/v1/57ad32275016e1c4d4ae7dc8/1478038627173-CEH5E033D7PDUQPN90ET/ke17ZwdGBToddI8pDm48kJdf_00J0cvWIdhE3ttFCxp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdEQzUi22avLNI6QpkbASI8ZER7lTMb8u1oF3n21WzkmcNVsHRUrlD6_mru2Rtg_ww/image-asset.jpeg" alt="Product Image" className="img-size-50" />

                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Parking
                        <span className="badge badge-warning float-right">$15</span></a>
                      <span className="product-description">
                       Awesome place For Parking
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                    <img src="https://images.squarespace-cdn.com/content/v1/57ad32275016e1c4d4ae7dc8/1478038627173-CEH5E033D7PDUQPN90ET/ke17ZwdGBToddI8pDm48kJdf_00J0cvWIdhE3ttFCxp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdEQzUi22avLNI6QpkbASI8ZER7lTMb8u1oF3n21WzkmcNVsHRUrlD6_mru2Rtg_ww/image-asset.jpeg" alt="Product Image" className="img-size-50" />

                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Parking
                        <span className="badge badge-warning float-right">$15</span></a>
                      <span className="product-description">
                       Awesome place For Parking
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                    <img src="https://images.squarespace-cdn.com/content/v1/57ad32275016e1c4d4ae7dc8/1478038627173-CEH5E033D7PDUQPN90ET/ke17ZwdGBToddI8pDm48kJdf_00J0cvWIdhE3ttFCxp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdEQzUi22avLNI6QpkbASI8ZER7lTMb8u1oF3n21WzkmcNVsHRUrlD6_mru2Rtg_ww/image-asset.jpeg" alt="Product Image" className="img-size-50" />

                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Parking
                        <span className="badge badge-warning float-right">$15</span></a>
                      <span className="product-description">
                       Awesome place For Parking
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                    <img src="https://images.squarespace-cdn.com/content/v1/57ad32275016e1c4d4ae7dc8/1478038627173-CEH5E033D7PDUQPN90ET/ke17ZwdGBToddI8pDm48kJdf_00J0cvWIdhE3ttFCxp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdEQzUi22avLNI6QpkbASI8ZER7lTMb8u1oF3n21WzkmcNVsHRUrlD6_mru2Rtg_ww/image-asset.jpeg" alt="Product Image" className="img-size-50" />

                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Parking
                        <span className="badge badge-warning float-right">$15</span></a>
                      <span className="product-description">
                       Awesome place For Parking
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                </ul>
              </div>
              {/* /.card-body */}
              <div className="card-footer text-center">
                <a href="javascript:void(0)" className="uppercase">View All Products</a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>{/*/. container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  {/* Control Sidebar */}
  {/* <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here 

    <div className="p-3 control-sidebar-content"><h5>Customize AdminLTE</h5><hr className="mb-2" /><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>No Navbar border</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Body small text</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Navbar small text</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar nav small text</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Footer small text</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar nav flat style</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar nav legacy style</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar nav compact</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar nav child indent</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Main Sidebar disable hover/focus auto expand</span></div><div className="mb-4"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Brand small text</span></div><h6>Navbar Variants</h6><div className="d-flex"><div className="d-flex flex-wrap mb-3"><div className="bg-primary elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-secondary elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-info elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-success elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-danger elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-indigo elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-purple elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-pink elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-navy elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lightblue elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-teal elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-cyan elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-dark elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-gray-dark elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-gray elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-light elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-warning elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-white elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-orange elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /></div></div><h6>Accent Color Variants</h6><div className="d-flex" /><div className="d-flex flex-wrap mb-3"><div className="bg-primary elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-warning elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-info elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-danger elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-success elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-indigo elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lightblue elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-navy elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-purple elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-fuchsia elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-pink elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-maroon elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-orange elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lime elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-teal elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-olive elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /></div><h6>Dark Sidebar Variants</h6><div className="d-flex" /><div className="d-flex flex-wrap mb-3"><div className="bg-primary elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-warning elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-info elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-danger elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-success elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-indigo elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lightblue elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-navy elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-purple elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-fuchsia elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-pink elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-maroon elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-orange elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lime elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-teal elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-olive elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /></div><h6>Light Sidebar Variants</h6><div className="d-flex" /><div className="d-flex flex-wrap mb-3"><div className="bg-primary elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-warning elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-info elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-danger elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-success elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-indigo elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lightblue elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-navy elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-purple elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-fuchsia elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-pink elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-maroon elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-orange elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lime elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-teal elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-olive elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /></div><h6>Brand Logo Variants</h6><div className="d-flex" /><div className="d-flex flex-wrap mb-3"><div className="bg-primary elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-secondary elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-info elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-success elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-danger elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-indigo elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-purple elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-pink elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-navy elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-lightblue elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-teal elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-cyan elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-dark elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-gray-dark elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-gray elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-light elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-warning elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-white elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><div className="bg-orange elevation-2" style={{width: 40, height: 20, borderRadius: 25, marginRight: 10, marginBottom: 10, opacity: '0.8', cursor: 'pointer'}} /><a href="javascript:void(0)">clear</a></div></div>

  </aside> */}
  {/* /.control-sidebar */}
  {/* Main Footer */}
  <footer className="main-footer">
    <strong>Copyright © 2014-2019 <a >Al-Muslims</a>.</strong>
    All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.3
    </div>
  </footer>
</div>
 

        </div>
    );
}