
import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";
import Blog_section1 from "./blog_section1"
import Blog_section2 from './blog_section2';
function Blog() {
  return (
    <div >
      <Halmet>
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
      $('#loadOnClick').click(function () {
        $button = $(this);
        $loadContent = $('#extraContent');
        $allLoaded = $('#allLoadedText');
        $button.addClass('btn-loading');
        $button.attr('disabled', true);

        setTimeout(function () {
          $loadContent.show();
          $button.hide();
          $allLoaded.show();
        }, 1500);
      });
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d47bdd7b1a5a', m: '45e11210c7505fbe2c5067fe462bc98a103b30a1-1618318330-1800-AaQ7RqMpakh7CrbMTGo2gzW586/7584fti8YGo6WtqYQhNefQv1UlE/MVgBxbUKMQm2VHUv8kAjKZkX24KFMPB2sgoREE+ZUaldohd/XhVIYsUTNdxizP2/1RivWqd8N7A9UMRnp5dH2Q4qvq7c9FMU=', s: [0xac9900addc, 0xc03ecb2898], } })();</script>
    `}
        </script>

      </Halmet>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7" height="0" width="0"
        style="display:none;visibility:hidden"></iframe></noscript>
      <>

        <main>
          <div
          // className="preloader bg-dark flex-column justify-content-center align-items-center"
          >
            <div
            // className="position-relative"
            >

              {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
        <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> */}
              {/* <p className="rotate-letter  splash_logo">ALMuslims</p> */}
            </div>
          </div>

          <Blog_section1 />

          <Blog_section2 />
        </main>

      </>


    </div>
  );
}

export default Blog;