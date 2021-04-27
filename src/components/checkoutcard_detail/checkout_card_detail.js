import React from "react";
import "./checkout_card_detail.css";
export default function Checkout() {
  return (
    <div className="checkout_most_main_div">
      <div className="Checkout_card">
        <div className="Checkout_card-body">
          <div className="row">
            <div className="col-md-7 checkout_1st_div">
              <div className="Checkout_left border">
                <div className="row checkout_heading">
                  <span className="Checkout_header">
                    <b> Checkout </b>
                  </span>
                </div>

                <form>
                  <br></br>
                  <br></br>
                  <div className="row Checkout_lower">
                    <div className="col text-left">
                      <h6>1. Shipping Information</h6>
                    </div>

                    <div className="col text-right">Edit</div>
                  </div>

                  <br></br>
                  <div className="row Checkout_lower">
                    <div className="col text-left">
                      <h6>2. Payment Method</h6>
                    </div>
                  </div>
                  <div className="row Checkout_lower">
                    <div className="col text-left">
                      Please Chose a payment Method to continue
                    </div>
                  </div>
                  <br></br>
                  <br></br>

                
                  <div className="row Checkout_lower">
                    <div className="col text-left">
                      <div className="billing_card_main_div">
                        <div className="form-check mb-3 billing_card_div">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkout"
                          />
                          <label
                            className="form-check-label"
                            for="checkout"
                          ></label>
                          <img src="https://seeklogo.com/images/P/paypal-logo-CA814C6B42-seeklogo.com.png" />
                        </div>
                        <div className="form-check mb-3 billing_card_div">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkout1"
                          />
                          <label
                            className="form-check-label"
                            for="checkout1"
                          ></label>
                          <img src="https://cryptologos.cc/logos/versions/bitcoin-btc-logo-full.svg?v=010" />
                        </div>
                        <div className="form-check mb-3 billing_card_div">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkout2"
                          />
                          <label
                            className="form-check-label"
                            for="checkout2"
                          ></label>
                          <img src="https://www.vectorlogo.zone/logos/payoneer/payoneer-ar21.svg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br></br>

                  <div className="parking_cards_div">
                    <div className="p_cards_list">
                      <div className="p_card 1">
                        <div className="p_card_image">
                          {" "}
                          <img src="https://www.kingparking.it/img/scoperto-online.jpg" />{" "}
                        </div>
                        <div className="p_card_title P_title_white">
                          <div className="p_shuttile_text_div">
                            <p className="p_text">
                              Parking <br />+ Shuttle
                            </p>
                          </div>
                          <div className="p_old_price_div">
                            <p className="old_price_text">
                              <s>15</s>
                            </p>
                          </div>
                          <span class="price_div">
                            <small>€</small>10
                          </span>

                          <div className="pay_btn_div">
                            <button className="pay_btn">Pay online</button>
                          </div>
                        </div>
                      </div>
                      <br></br>
                      <div className="p_card 1">
                        <div className="p_card_image">
                          {" "}
                          <img src="https://www.kingparking.it/img/scoperto-online.jpg" />{" "}
                        </div>
                        <div className="p_card_title P_title_white">
                          <div className="p_shuttile_text_div">
                            <p className="p_text">
                              Parking <br />+ Shuttle
                            </p>
                          </div>
                          <div className="p_old_price_div">
                            <p className="old_price_text">
                              <s>15</s>
                            </p>
                          </div>
                          <span class="price_div">
                            <small>€</small>10
                          </span>
                          <div className="pay_btn_div">
                            <button className="pay_btn">Pay On Parking</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <br></br>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="remember"
                    />
                    <label className="form-check-label" for="remember">
                      Save Information
                    </label>
                  </div>
                  <button type="submit" className="btn checkout_button">
                    Continue
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="Checkout_right border">
                <div className="Checkout_header">
                  <b>Order Summary</b>
                </div>
                <p>2 items</p>
                <div className="row item">
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                  <div className="">
                    <button type="submit" className="btn checkout_button">
                      Apply
                    </button>
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
                  <div className="col text-left">
                    <b>Total to pay</b>
                  </div>
                  <div className="col text-right">
                    <b>$ 46.98</b>
                  </div>
                </div>
              </div>
              <div className="Checkout_right border check_last_div">
                <div className="Checkout_header">
                  <b>Return Policy</b>
                </div>
                <div className="row Checkout_lower ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
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