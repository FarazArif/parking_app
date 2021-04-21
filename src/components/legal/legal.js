import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";
import Header from "../header/header";
import Footer from "../footer/footer"
export default function Legal() {
    return (
        <div>
            <Helmet>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
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
            '../../../
            
            www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-THQTXJ7');
      `}
                </script>
                <script>
                    {`
       type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d44969fd5601', m: '85b31cb6feff842160ff9c0354ad54e8e8332c15-1618318322-1800-AcK3Kh0p2Z8gbX9XFZVY/r125zA2G2vbc3M1XUDpd0P9MGoH490eg/eGUX4jVtzGZa3dvHiMHdnzsdH3GT4HxzxbfYnSsi/1abs8Qf1B4GFu7NK7Ya+nZTq6HbygAvMZmKcw75YTL5HOWaeAqsjQZN8=', s: [0x55c26fc278, 0x870309a495], } })();
      `}
                </script>
            </Helmet>
           {/* <Header /> */}
            
            <main>
                <div 
                // className="preloader bg-dark flex-column justify-content-center align-items-center"
                >
                    <div 
                    // className="position-relative"
                    >
                        {/* <img src="https://demo.us.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> 
                        <img src="https://demo.us.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> */}
                        {/* <p className="rotate-letter splash_logo" >Al-Muslims</p> */}
                        
                        </div>
                </div>
                <section className="section-header bg-primary text-white pb-9 pb-lg-12 mb-4 mb-lg-6">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 text-center">
                                <h1 className="display-2 mb-3">Legal center</h1>
                                <p className="lead">One place for our legal documentation and policies</p>
                            </div>
                        </div>
                    </div>
                    <div className="pattern bottom" />
                </section>
                <div className="section section-lg pt-0">
                    <div className="container mt-n8 mt-lg-n12 z-2">
                        <div className="row justify-content-center">
                            <div className="col col-md-10">
                                <div className="accordion border-light">
                                    <div className="card card-sm card-body border-soft mb-0"><a  data-target="#panel-what-is-pixel" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-what-is-pixel"><span className="icon-title h6 mb-0 font-weight-bold">Terms of Service</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                                        <div className="collapse" id="panel-what-is-pixel">
                                            <div className="pt-3">
                                                <p>By accessing and placing an order with us, you confirm that you are in agreement with and
                                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply
                                                to the entire website and any email or other type of communication between you and us.</p>
                                                <p>Read more about <a >terms of service</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-sm card-body border-soft mb-0"><a  data-target="#panel-clients" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-clients"><span className="icon-title h6 mb-0 font-weight-bold">Policies</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                                        <div className="collapse" id="panel-clients">
                                            <div className="pt-3">
                                                <p>By accessing and placing an order with us, you confirm that you are in agreement with and
                                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply
                                                to the entire website and any email or other type of communication between you and us.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-sm card-body border-soft mb-0"><a  data-target="#panel-demo" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-demo"><span className="icon-title h6 mb-0 font-weight-bold">Agreements</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                                        <div className="collapse" id="panel-demo">
                                            <div className="pt-3">
                                                <p>By accessing and placing an order with us, you confirm that you are in agreement with and
                                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply
                            to the entire website and any email or other type of communication between you and us.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-sm card-body border-soft mb-0"><a  data-target="#panel-money-back" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-money-back"><span className="icon-title h6 mb-0 font-weight-bold">Forms guarantee?</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                                        <div className="collapse" id="panel-money-back">
                                            <div className="pt-3">
                                                <p>Please read the following page regarding refunds: <a >Refund Policy</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-sm card-body border-soft mb-0"><a  data-target="#panel-updates" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-updates"><span className="icon-title h6 mb-0 font-weight-bold">Archive</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                                        <div className="collapse" id="panel-updates">
                                            <div className="pt-3">
                                                <p>By accessing and placing an order with us, you confirm that you are in agreement with and
                                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply
                            to the entire website and any email or other type of communication between you and us.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-sm card-body border-soft mb-0"><a  data-target="#panel-support" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-support"><span className="icon-title h6 mb-0 font-weight-bold">Cookies</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                                        <div className="collapse" id="panel-support">
                                            <div className="pt-3">
                                                <p className="mb-0">Got a question? Let us know and we'll try our best to answer you at the <a >support center</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-sm card-body border-soft mb-0"><a  data-target="#panel-copyright" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-copyright"><span className="icon-title h6 mb-0 font-weight-bold">Copyright Notice</span> <span className="icon"><i className="fas fa-plus" /></span></a>
                                        <div className="collapse" id="panel-copyright">
                                            <div className="pt-3">
                                                <p className="mb-0">Got a question? Let us know and we'll try our best to answer you at the <a >support center</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section section-lg pt-0 line-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 text-center px-4 mb-5">
                                <div className="icon icon-sm icon-shape icon-shape-secondary rounded mb-4"><span className="fas fa-envelope-open-text" /></div>
                                <h5 className="mb-3">Email us</h5>
                                <p className="px-5 px-sm-7 px-lg-0">Email us for general queries, including marketing and partnership
                    opportunities.</p><a className="font-weight-bold text-primary" ><span className="__cf_email__" data-cfemail="ddb2bbbbb4beb89dbeb2b0adbcb3a4f3beb2b0">[email&nbsp;protected]</span></a>
                            </div>
                            <div className="col-12 col-lg-4 text-center px-4 mb-5">
                                <div className="icon icon-sm icon-shape icon-shape-secondary rounded mb-4"><span className="fas fa-phone-volume" /></div>
                                <h5 className="mb-3">Call us</h5>
                                <p className="px-5 px-sm-7 px-lg-0">Call us to speak to a member of our team.We are always happy to help you.
                  </p><a className="font-weight-bold text-primary" >+1 (234) 567890</a>
                            </div>
                            <div className="col-12 col-lg-4 text-center px-4">
                                <div className="icon icon-sm icon-shape icon-shape-secondary rounded mb-4"><span className="fab fa-slack" />
                                </div>
                                <h5 className="mb-3">Slack</h5>
                                <p className="px-5 px-sm-7 px-lg-0">Join our Slack community to chat with us and hundreds of Dovetail users.</p>
                                <a className="btn btn-sm btn-outline-primary" >Join our Slack <span className="fas fa-long-arrow-alt-right ml-2" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        
        </div>
    )
}