
import React from 'react';
import Halmet from "react-helmet";
import Blog_post_comments from './blog_post_comments';
import Blog_post_main_content from './blog_post_main_content';
import Blog_post_setup from './blog_post_setup';
import "../spaces.css";



function Blog_post() {
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
     type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d47ecf425601', m: '433a78a4fd339ec41d3c90407f485518e4f3748b-1618318330-1800-AfCYBUxO4N426lTXKbzRPL3yZ11CpIqEYiDweONFqVP6mT1/HZWDOWCIhHBQ3f/eOMlb3hDkvdxJOl429H5YnFZSBbBZQKdBUwrt+mB0TbLEXqfMt4o6518gwstxinDNQDj0T7UqVcnReVqaas4+Z2M=', s: [0x32542a7c11, 0x7a1dd741e4], } })();
    `}
        </script>

      </Halmet>

      <>

        <main>
          {/* <div className="preloader bg-dark flex-column justify-content-center align-items-center">
      <div className="position-relative">

        <img src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg" alt="Logo loader" />
 <img src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg" className="rotate-letter" alt="Letter loader" /> 
 <p className="rotate-letter  splash_logo">ALMuslims</p>
 </div>
    </div> */}
          <Blog_post_main_content />
          <Blog_post_setup />
          <Blog_post_comments />

        </main>

      </>


    </div>
  );
}

export default Blog_post;