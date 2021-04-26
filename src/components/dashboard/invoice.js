import React from 'react';
import Halmet from "react-helmet";
import "../spaces.css";



function Invoice() {
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
      type="text/javascript">(function () { window['__CF$cv$params'] = { r: '63f4d4bf8b495601', m: 'd434d0477de66069f46ea5d02353b00fc01ce23c-1618318341-1800-AXoedwenWwMq1QPEETncX2SM0Md39gDGNVr2a1X7fIwJzwrnmu2LfhL9NqxEKI7ClcLTqpBrZO9+TqwHrVpoUqzIU7sbVmWpBj6sdcHbh77surFiC9vEdWzFUv5730Z3a+Zgu2TsvxkR6C+99j9CgSJy/AwtUfvB6qrJyHOX33X9', s: [0x187396b886, 0x2df056895d], } })();
    `}
    </script>

        </Halmet>

        <main>
  <section className="section bg-soft section-lg pt-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between mb-4"><a   className="mb-4 mb-lg-0"><span className="icon icon-xs"><span className="fas fa-chevron-left mr-2" /></span> Back to all billing</a>
            <div><button className="btn btn-primary mr-2"><span className="far fa-file-pdf mr-2" /> Download PDF</button>
              <button className="btn btn-outline-gray"><span className="fas fa-print mr-2" /> Print Invoice</button>
            </div>
          </div>
          <div className="card border-light p-4 p-md-5 position-relative">
            <div className="d-flex justify-content-between pb-4 pb-md-5 mb-4 mb-md-5 border-bottom border-light">
              {/* <img src="https://demo.themesberg.com/spaces/assets/img/brand/dark.svg" className="d-none d-lg-block" height={30} alt="Spaces Logo" /> */}
              <h3>Al-Muslims</h3>
              <div>
                <h4>Parking LLC.</h4>
                <ul className="list-group simple-list">
                  <li className="list-group-item font-weight-norma pl-0 py-1">112 Washington Square</li>
                  <li className="list-group-item font-weight-normal pl-0 py-1">New York, USA</li>
                  <li className="list-group-item font-weight-normal pl-0 py-1"><a className="font-weight-bold text-primary"  ><span className="__cf_email__" data-cfemail="f695999b8697988fb6829e939b938594938491d895999b">[email&nbsp;protected]</span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-6 d-flex align-items-center justify-content-center">
              <h2 className="h1 mb-0">Invoice #120345</h2><span className="badge badge-xl badge-success ml-2">Paid</span>
            </div>
            <div className="row justify-content-between mb-4 mb-md-5">
              <div className="col-sm">
                <h5>Client Information:</h5>
                <div>
                  <ul className="list-group simple-list">
                    <li className="list-group-item font-weight-norma pl-0 py-1">Henry M. Pike</li>
                    <li className="list-group-item font-weight-norma pl-0 py-1">Themesberg LLC</li>
                    <li className="list-group-item font-weight-norma pl-0 py-1">311 West Mechanic Lane Middletown, NY
                      10940</li>
                    <li className="list-group-item font-weight-norma pl-0 py-1"><a className="font-weight-bold text-primary"  ><span className="__cf_email__" data-cfemail="bcd2ddd1d9fcdfd3d1ccddd2c592dfd3d1">[email&nbsp;protected]</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm col-lg-4">
                <dl className="row text-sm-right">
                  <dt className="col-6"><strong>Invoice No.</strong></dt>
                  <dd className="col-6">00123</dd>
                  <dt className="col-6"><strong>Date Issued:</strong></dt>
                  <dd className="col-6">31/03/2020</dd>
                  <dt className="col-6"><strong>Date Due:</strong></dt>
                  <dd className="col-6">30/04/2020</dd>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="bg-light border-top">
                      <tr>
                        <th scope="row" className="border-0 text-left">Item</th>
                        <th scope="row" className="border-0">Description</th>
                        <th scope="row" className="border-0">Price</th>
                        <th scope="row" className="border-0">Qty</th>
                        <th scope="row" className="border-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="text-left font-weight-bold h6">Origin License</th>
                        <td>Extended License</td>
                        <td>999,00</td>
                        <td>1</td>
                        <td>999,00</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-left font-weight-bold h6">Custom Services</th>
                        <td>Instalation and Customization</td>
                        <td>$150,00</td>
                        <td>20</td>
                        <td>3000,00</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-left font-weight-bold h6">Hosting</th>
                        <td>1 year subcription</td>
                        <td>$499,00</td>
                        <td>1</td>
                        <td>$499,00</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-left font-weight-bold h6">Gold Support</th>
                        <td>1 year subcription 24/7</td>
                        <td>$3.999,00</td>
                        <td>1</td>
                        <td>$3.999,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-end text-right mb-4 py-4 border-bottom">
                  <div className="mt-4">
                    <table className="table table-clear">
                      <tbody>
                        <tr>
                          <td className="left"><strong>Subtotal</strong></td>
                          <td className="right">$8.497,00</td>
                        </tr>
                        <tr>
                          <td className="left"><strong>Discount (20%)</strong></td>
                          <td className="right">$1,699,40</td>
                        </tr>
                        <tr>
                          <td className="left"><strong>VAT (10%)</strong></td>
                          <td className="right">$679,76</td>
                        </tr>
                        <tr>
                          <td className="left"><strong>Total</strong></td>
                          <td className="right"><strong>$7.477,36</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <h4>Payments to:</h4><span><a   className="__cf_email__" data-cfemail="7505140c18101b0135161a1805141b0c5b161a18">[email&nbsp;protected]</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>


      </div>
    );
  }

  export default Invoice;