import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";
import Footer from "../footer/footer"

export default function Maintenance() {
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
        type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d494df791a5a', m: 'e5594a9c583b777b8d02affcc448f24a3e08770b-1618318334-1800-AYPF4+y3Fr97eaLn7wJmlL0CKCrtuU9Ubp31GXnCoAQhNbvbB3QlWZJcu9AQaiqPIUgQ+xhFLoPJswsnjMkdRkQb7zNWlcgylBpTs9DkXoTqN9hD8t+t1UAru0bgfhlVvHXJgLzTxRZpwmMuWhtCu38=', s: [0x37bbda26c6, 0x575eb3866d], } })();
      `}
                </script>
            </Helmet>

            {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
                <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
            </div> */}
            <section className="min-vh-100 d-flex align-items-center">
                <div className="container py-5">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-sm-9 col-md-8 col-lg-6 mb-5 mb-lg-0">
                            {/* <img className="img-fluid" src="https://demo.themesberg.com/spaces/assets/img/illustrations/maintenance.svg" alt="boy illustration" /> */}
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="text-center text-lg-left">
                                <h4 className="mt-4 text-gray">woof!</h4>
                                <h1 className="display-3">We're undergoing a bit of scheduled maintenance</h1>
                                <p className="lead my-4">Sorry for the inconvenience but we’re performing some maintenance at the
                    moment.</p><a className="btn btn-secondary animate-hover"><span className="fas fa-chevron-left mr-3 pl-2 animate-left-3" />Go back home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}