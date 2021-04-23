import React from "react"
import "./checkout.css"
export default function Checkout() {
    return (
        <div className="checkout_most_main_div">
            <div className="Checkout_card">
                {/* <div className="Checkout_card-top border-bottom text-center"> <a href="#"> Back to shop</a> <span id="logo">BBBootstrap.com</span> </div> */}
                <div className="Checkout_card-body">
                    {/* <div className="row upper"> <span><i className="fa fa-check-circle-o"></i> Shopping bag</span> <span><i className="fa fa-check-circle-o"></i> Order details</span> <span id="payment"><span id="three">3</span>Payment</span> </div> */}
                    <div className="row">
                        <div className="col-md-7 checkout_1st_div">
                            <div className="Checkout_left border">
                                <div className="row checkout_heading">
                                    <span className="Checkout_header">
                                        <b> Checkout </b></span>
                                    {/* <div className="Checkout_icons"> <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div> */}
                                </div>
                                {/* <form className="Checkout_form">
                                    <h6>Shipping Information</h6>
                                    <h6>Contect</h6>
                                    {/* <span>Cardholder's name:</span> 
                                     <input className="Checkout_input" placeholder="Full Name" /> 
                                     {/* <span>Card Number:</span>  
                                     <input className="Checkout_input" placeholder="Mobile Number" />
                                     <h6>Address</h6>
                                     <input className="Checkout_input" placeholder="Street" /> 
                                     <input className="Checkout_input" placeholder="Appartment/unit" /> 
                                     <div className="Checkout_inline_tags">
                                     <input className="Checkout_input" placeholder="Country" /> 
                                     <input   className="Checkout_input Checkout_inline_2ndtag" placeholder="State/Province/Region" /> 
                                     </div>
                                     <div className="Checkout_inline_tags">
                                     <input className="Checkout_input" placeholder="City" /> 
                                     <input   className="Checkout_input Checkout_inline_2ndtag" placeholder="Zip Code" /> 
                                     </div>
                                   
                                    {/* <div className="row">
                                        <div className="col-4"><span>Expiry date:</span> <input className="Checkout_input" placeholder="YY/MM" /> </div>
                                        <div className="col-4"><span>CVV:</span> <input className="Checkout_input" id="cvv" /> </div>
                                    </div>  
                                    <input className="Checkout_input" type="checkbox" id="save_card" className="align-left" /> 
                                    <label for="save_card">Save card details to wallet</label>
                                    <div>
                                        <button className="Checkout_btn">Place order</button>
                                        </div>

                                </form> */}
                                <form>
                                    <br></br>
                                    <br></br>
                                    <h6>Shipping Information</h6>
                                    <br></br>
                                    <h6>Contect</h6>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                                        {/* <label for="">Email address</label> */}


                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Mobile Number" />
                                    </div>
                                    <h6>Address</h6>
                                    <div className="Checkout_inline_tags">
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Street" />
                                        <input type="text" className="form-control Checkout_inline_2ndtag" id="exampleInputPassword1" placeholder="Apartment,unit,etc" />
                                    </div>
                                    <br></br>
                                    <br></br>


                                    <div className="Checkout_inline_tags">
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Country" />
                                        <input type="text" className="form-control Checkout_inline_2ndtag" id="exampleInputPassword1" placeholder="State,Province,region" />
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div className="Checkout_inline_tags">
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="City" />
                                        <input type="text" className="form-control Checkout_inline_2ndtag" id="exampleInputPassword1" placeholder="Zip Code" />
                                    </div>
                                    <br></br>


                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="remember" />
                                        <label className="form-check-label" for="remember">
                                            Save Information
                                             </label>
                                    </div>
                                    <button type="submit" className="btn checkout_button">Continue</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="Checkout_right border">
                                <div className="Checkout_header">
                                   <b>
                                    Order Summary
                                    </b>
                                    </div>
                                <p>2 items</p>
                                <div className="row item">
                                    {/* <div className="col-4 align-self-center"><img className="img-fluid" src="https://i.imgur.com/79M6pU0.png" /></div>
                                    <div className="Checkout_col-8">
                                        <div className="row"><b>$ 26.99</b></div>
                                        <div className="row text-muted">Be Legandary Lipstick-Nude rose</div>
                                        <div className="row">Qty:1</div>
                                    </div> */}
                                    <div className="col text-left">Select Coupon</div>
                                </div>
                                <div className="row Checkout_lower">
                                    <div className="col text-left">Cost Coupon</div>
                                    <div className="col text-right">$ 46.98</div>
                                </div>
                                <br></br>
                                <div className="row Checkout_lower">
                                    <div className="col text-left">Promo Code</div>

                                </div>
                                <div className="row Checkout_lower">
                                    <div className="col text-left">

                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" />

                                    </div>
                                    <div className="">
                                        <button type="submit" className="btn checkout_button">Apply</button>



                                    </div>

                                </div>



                                <hr></hr>
                                <div className="row Checkout_lower">
                                    <div className="col text-left">4-5 days delivery</div>
                                   
                                </div> 
                                <div className="row Checkout_lower">
                                    <div className="col text-left">Subtotal</div>
                                    <div className="col text-right">$ 46.98</div>
                                </div>
                                <div className="row Checkout_lower">
                                    <div className="col text-left">Delivery</div>
                                    <div className="col text-right">Free</div>
                                </div>
                                <div className="row Checkout_lower">
                                    <div className="col text-left"><b>Total to pay</b></div>
                                    <div className="col text-right"><b>$ 46.98</b></div>
                                </div>
                                {/* <div className="row Checkout_lower">
                                    <div className="col text-left"><a href="#"><u>Add promo code</u></a></div>
                                </div>  */}


                                {/* <p className="text-muted text-center">Complimentary Shipping & Returns</p> */}
                            </div>
                            <div className="Checkout_right border check_last_div">
                            <div className="Checkout_header">
                                   <b>
                                    Return Policy
                                    </b>
                                    </div>
                                    <div className="row Checkout_lower ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div> </div>
            </div>
        </div>
    );
}