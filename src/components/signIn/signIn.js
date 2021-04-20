import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";

export default function SignIn() {
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
            '../../../www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-THQTXJ7');
      `}
                </script>
                <script>
                    {`
       type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d481fc131a5a', m: 'b19ad80037123ead24a16f18040baca4e21fd02f-1618318331-1800-AfsuAs6PjTJPGskJISq+hV9gVujON5rVZolXljyg+l9G7AL9kKSlnmW2bRODkJqkRqq0I5gzXjmWzzYn41vrtbOkP0qPzwtol7AUajM0Kh0/BwWE8o59bS8zuCosti2ZyAzuXdXSdgcu0FQJQlIl0bE=', s: [0x6ced688581, 0x6cbfcde8f4], } })();
      `}
                </script>
            </Helmet>

            {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
                <div className="position-relative"><img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /></div>
            </div> */}
            <section className="min-vh-100 d-flex align-items-center section-image overlay-soft-dark py-5 py-lg-0" data-background="../assets/img/form-image.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center text-md-center mb-5 mt-md-0 text-white">
                                <h1 className="mb-0 h3">Sign in to our platform</h1>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <form action="#">
                                    <div className="form-group"><label htmlFor="email">Your email</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-envelope" /></span></div><input className="form-control" id="email" placeholder="example@company.com" type="text" aria-label="email address" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group"><label htmlFor="password">Password</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt" /></span></div><input className="form-control" id="password" placeholder="Password" type="password" aria-label="Password" required />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-check"><input className="form-check-input" type="checkbox" defaultValue id="remember" />
                                                <label className="form-check-label" htmlFor="remember">Remember me</label></div>
                                            <div><a className="small text-right">Lost password?</a></div>
                                        </div>
                                    </div><button type="submit" className="btn btn-block btn-primary">Sign in</button>
                                </form>
                                <div className="mt-3 mb-4 text-center"><span className="font-weight-normal">or login with</span></div>
                                <div className="btn-wrapper my-4 text-center"><button className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button"><span aria-hidden="true" className="fab fa-facebook-f" /></button> <button className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button"><span aria-hidden="true" className="fab fa-twitter" /></button> <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button"><span aria-hidden="true" className="fab fa-github" /></button></div>
                                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4"><span className="font-weight-normal">Not registered? <a
                                    className="font-weight-bold">Create
                        account</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}