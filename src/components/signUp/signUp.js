import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";

export default function SignUp() {
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
        type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4854f535601', m: '3636e4ecf2423a9f5d63f08281cc025f16fa609b-1618318332-1800-AZeL96gk+2lwMuknRrKB68OP3wB2l9gVukr5bxbhyhsx6PidkY+dbXod+jKnzysKjirCTF1vGkAmUV8iLG7lafTsb5Firh9rG3MCI1KVpUJaDHkZX29UaFC4p0/r1rZDkfYnLT3BMpy7YyE7i4LCu7g=', s: [0xa387a9ac0f, 0xd1eba98f50], } })();
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
                                <h1 className="mb-0 h3">Create an account</h1>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <form action="#">
                                    <div className="form-group"><label htmlFor="exampleInputIcon4">Your email</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-envelope" /></span></div><input className="form-control" id="exampleInputIcon4" placeholder="example@company.com" type="text" aria-label="email adress" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group"><label htmlFor="password">Password</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt" /></span></div><input className="form-control" id="password" placeholder="Password" type="password" aria-label="Password" required />
                                            </div>
                                        </div>
                                        <div className="form-group"><label htmlFor="password_confirm">Confirm Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt" /></span></div><input className="form-control" id="password_confirm" placeholder="Confirm password" type="password" aria-label="Password" required />
                                            </div>
                                        </div>
                                        <div className="form-check mb-4"><input className="form-check-input" type="checkbox" defaultValue id="terms" />
                                            <label className="form-check-label" htmlFor="terms"><span className="small">I agree to the <a className="text-secondary" >terms and conditions</a></span></label></div>
                                    </div><button type="submit" className="btn btn-block btn-primary">Create an account</button>
                                </form>
                                <div className="mt-3 mb-4 text-center"><span className="font-weight-normal">or</span></div>
                                <div className="btn-wrapper my-4 text-center"><button className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button"><span aria-hidden="true" className="fab fa-facebook-f" /></button> <button className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button"><span aria-hidden="true" className="fab fa-twitter" /></button> <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button"><span aria-hidden="true" className="fab fa-github" /></button></div>
                                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4"><span className="font-weight-normal">Already have an account? <a className="font-weight-bold">Login here</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}