import React from 'react'
import '../spaces.css'
import { Helmet } from "react-helmet";
import Footer from "../footer/footer";
import Pricing_card from './pricing_card';
import Pricing_information from "./pricing_information";
import Pricing_detail from './pricing_detail';
import Pricing_payment_Method from './pricing_payment_Method';


export default function Pricing() {
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
        type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4406b5d1a5a', m: '24e2e442910a0fd3fe5799cf5f43ce0a30373a09-1618318320-1800-Aa9HAylrLxNDaXExl0n/dS0fm67IzlEX27q4YU+jUsASiWi0P7H2VDZA6bcWzcQSaTJmpTBjNx9+ERXuV6GD8uuubuRKMIln2qpXO4TZXRxy58L4m7wKIq2ybwELb3NoVvYw+o1Y8MZ8HExrECxQGOI=', s: [0xac9900addc, 0x11fd144064], } })();
      `}
                </script>
            </Helmet>


            <main>
                <div
                //  className="preloader bg-dark flex-column justify-content-center align-items-center"
                >
                    <div
                    // className="position-relative"
                    >
                        {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" /> 
                        <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
                         */}
                        {/* <p className="rotate-letter splash_logo">AL-Muslims</p> */}
                    </div>
                </div>
                <Pricing_card />
                <Pricing_information />
                <Pricing_detail />
               <Pricing_payment_Method/>
            </main>

        </div>
    )
}