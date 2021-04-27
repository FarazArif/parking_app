import React from 'react';

export default function Contect_message() {
   
    return (
       
        <div className="row justify-content-center mb-5 mb-lg-6">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card border-0 p-2 p-md-3">
            <div className="card-body px-0">
              <div className="row">
                <div className="col-sm-6 col-md-4 text-center">
                  <div className="icon-box mb-4">
                    <div className="icon icon-dark mb-4"><span className="fas fa-map-marker-alt" /></div>
                    <h2 className="h5 icon-box-title">Visit us</h2><span>27 Garden Valley<br />Fsd, Pakistan</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 text-center d-sm-none d-md-block">
                  <div className="icon-box mb-4">
                    <div className="icon icon-dark mb-4"><span className="fas fa-phone-volume" /></div>
                    <h2 className="h5 icon-box-title">Call</h2><span>+92378584986</span>
                    <div className="text-small text-gray">Mon - Fri, 8am - 4pm</div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 text-center">
                  <div className="icon-box mb-4">
                    <div className="icon icon-dark mb-4"><span className="far fa-paper-plane" /></div>
                    <h2 className="h5 icon-box-title">Email</h2><a ><span className="__cf_email__" data-cfemail="bad2dfd6d6d5fad9d5d7cadbd4c394d3d5">[email&nbsp;protected]</span></a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4 mt-lg-5">
                <div className="col-12">
                  <div className="card border-0 p-0 p-md-5">
                    <div className="card-header text-center p-0 pb-5">
                      <h2>Want to work with us?</h2>
                      <p>Cool! Let’s talk about your project</p>
                    </div>
                    <div className="card-body p-0">
                      <form  >
                        <div className="form-group"><label htmlFor="name">Your Name</label>
                          <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-user-circle" /></span></div><input className="form-control" id="name" placeholder="e.g. Bonnie Green" type="text" aria-label="contact name input" required />
                          </div>
                        </div>
                        <div className="form-group"><label htmlFor="email">Your Email</label>
                          <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><span className="far fa-envelope" /></span></div><input className="form-control" id="email" placeholder="example@company.com" type="email" aria-label="contact email input" />
                          </div>
                        </div>
                        <div className="form-group"><label htmlFor="message">Your message</label> <textarea className="form-control" placeholder="Enter your message..." id="message" rows={4} defaultValue={""} />
                        </div> <button className="btn btn-block rounded btn-secondary">Send message</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    )
}