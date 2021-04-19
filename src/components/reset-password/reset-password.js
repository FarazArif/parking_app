import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";

export default function ResetPassword() {
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
        type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d48b5e785601', m: '19dcb64aa94046e6274fbd95331dee6b81d91c52-1618318332-1800-AXSe7cynq+KDBd1+CrGkic+KiqLSXruZJyYO+pOyOkjr7gNSwCPAe2cuVEs0zGKGBRkpqq81Dz/xbz+NI+1LQnpmxkhJ66pGTKlIDbN+Qq+ss70Hi6aD+KOMeeXmzD+At9OeGZdqRYcanbW1INyiQzWJLEk5nc9GH5NxRALT9JW7', s: [0x11ef069925, 0xbc691b3044], } })();
      `}
                </script>
            </Helmet>

            <div 
            // className="preloader bg-dark flex-column justify-content-center align-items-center"
            >
                <div 
                // className="position-relative"
                >
                    {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader"  /> */}
                    </div>
            </div>
            <section className="min-vh-100 d-flex align-items-center section-image overlay-soft-dark py-5 py-lg-0" data-background="../assets/img/form-image.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center text-md-center mb-5 mt-md-0 text-white">
                                <h1 className="mb-0 h3">Reset password</h1>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <form action="#">
                                    <div className="form-group"><label htmlFor="email">Your email</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-envelope" /></span></div><input className="form-control" id="email" placeholder="joe@company.com" type="text" aria-label="email adress" disabled="disabled" required />
                                        </div>
                                    </div>
                                    <div className="form-group"><label htmlFor="password">Password</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt" /></span></div><input className="form-control" id="password" placeholder="Password" type="password" aria-label="Password" required />
                                        </div>
                                    </div>
                                    <div className="form-group"><label htmlFor="password_confirm">Confirm Password</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt" /></span></div><input className="form-control" id="password_confirm" placeholder="Confirm password" type="password" aria-label="Password" required />
                                        </div>
                                    </div> <button  className="btn btn-block btn-primary">Reset password</button>
                                </form>
                                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4"><span className="font-weight-normal">Go back to the <a  className="font-weight-bold">login
                        page</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}