import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Chose_Us from "../whyChoseus/chose_us"
import "../spaces.css"
import Home_section_1 from "./home_section1"
import Home_section_2 from "./home_section_2"
import How_it_works from "./how_it_works"
import Blog_Card from "../blog_card/blogcard"
import Home_Crousal from "./home_page_crousal"
import Home_page_last_section from "./home_page_last_section";

export default function Home() {
  return (





    <div>
      <Helmet>

        <script>
          {`
        window.dataLayer = window.dataLayer || [];
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
      type="text/javascript">(function ()
       { window['__CF$cv$params'] = { r: '63f4d3d378211a5a', m: '6b8d92df9aec3aae91f6d7bccd04267da9847ce7-1618318304-1800-ARjUYm/Ycc/g5MS0hoK+CYaKmdVhKQn06rtfjU64Viy4lsDkYLW//8jZSc7mdKvEcRDhjPi2pRa/3ZtNC0QsSzXjMTzcvU8DyBgD1EO48YIa4Vzv4Nwiw/anP8hmlj/M7LYy6oX6rqhjNt1nx7kV/CY=', s: [0x4132eec092, 0x575eb3866d], } })();
      `}
        </script>


      </Helmet>


      <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7" height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
      {/* <Header /> */}
      <main>
        <div
        // className="preloader bg-dark flex-column justify-content-center align-items-center"
        >
          <div
          //  className="position-relative" 
          >
            {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
             <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" />
              */}
            {/* <p className="rotate-letter splash_logo">Al-Muslim</p> */}
          </div>
        </div>

        <Home_section_1 />

        <Home_section_2 />

        <Chose_Us />

        <How_it_works />

        <Blog_Card />

   <Home_Crousal />
        
      </main>
     <Home_page_last_section />




    </div>




  );
}

