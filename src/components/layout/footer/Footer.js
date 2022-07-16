import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer_section">
        <div class="container-fluid">
          <div class="footer">
            <div class="row">
              <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <aside>
                  <h4 className="text-left">For Wholesale</h4>
                  <ul class="list-unstyled" style={{ textAlign: "left" }}>
                    <li class="list-inline-item">
                      <a
                        href="https://belaface.be/"
                        class="text-white btn btn-primary"
                      >
                        Click Here
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <aside class="help">
                  <h4 className="text-left">Help</h4>
                  <ul class="list-unstyled" style={{ textAlign: "left" }}>
                    <li class="mb-2">
                      <a href="...">About Us</a>
                    </li>
                    <li class="mb-2">
                      <a href="...">Contact Us</a>
                    </li>
                    <li class="mb-2">
                      <a href="...">Return Policy</a>
                    </li>
                    <li class="mb-2">
                      <a href="...">Security & Privacy</a>
                    </li>
                    <li class="mb-2">
                      <a href="...">Terms & Conditions</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <aside>
                  <div class="social_button">
                    <h4>Social Media</h4>
                    {/* <ul class="social-nav social3D_effect  social_media list-unstyled">
                                            <li>
                                                <a href="https://www.facebook.com/belasea.bd/" target="_blank" class="facebook">
                                                    <div class="front">
                                                        <img src="{% static 'images/icon/facebook.png' %}" alt="Oops image not found" style="width: 30px" />
                                                    </div>
                                                    <div class="back">
                                                        <img src="{% static 'images/icon/facebook.png' %}" alt="Oops image not found" style="width: 30px" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/channel/UCqnoPX5wWCdLAyC7cHGsEcg/" target="_blank" class="youtube_media">
                                                    <div class="front">
                                                        <img src="{% static 'images/icon/youtube.svg' %}" alt="Oops image not found" style={{height: '20px'}} /></div>
                                                    <div class="back">
                                                        <img src="{% static 'images/icon/youtube.svg' %}" alt="Oops image not found" style={{height: '20px'}} />
                                                   </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/belasea.bd/?hl=en" target="_blank" class="instagram">
                                                    <div class="front">
                                                        <img src="{% static 'images/icon/instagram.png' %}" alt="Oops image not found" style={{height: '20px'}}/>
                                                    </div>
                                                    <div class="back">
                                                        <img src="{% static 'images/icon/instagram.png' %}" alt="Oops image not found" style={{height: '20px'}}/>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="..." target="_blank" class="linkedin">
                                                    <div class="front">
                                                        <img src="{% static 'images/icon/linkedIn_logo.png' %}" alt="Oops image not found" style={{height: '20px'}}/>
                                                    </div>
                                                    <div class="back">
                                                        <img src="{% static 'images/icon/linkedIn_logo.png' %}" alt="Oops image not found" style="width: 30px;"/>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul> */}
                    <ul class="mt-3">
                      <li class="list-inline-item">
                        <a
                          href="..."
                          class="text-white btn btn-outline-primary"
                        >
                          Track a Parcel
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div class="col-md-3">
                <aside class="payment_section">
                  <h4>Payment Methods</h4>
                  {/* <div class="payment_method">
                        <ul class="list-inline pt-2">
                            <li class="list-inline-item">
                                <img src="{% static 'images/logo/bkash.png' %}" alt="Oops image not found" style="width: 70px;" class="img-responsive"/>
                            </li>
                            <li class="list-inline-item">
                                <img src="{% static 'images/logo/nogod.png' %}" alt="Oops image not found" style="width: 70px;" class="img-responsive"/>
                            </li>
                            <li class="list-inline-item">
                                <img src="{% static 'images/logo/dutch-bangla.png' %}" alt="Oops image not found" style="width: 70px;" class="img-responsive"/>
                            </li>
                        </ul>
                    </div> */}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-lg-12  footer_bottom">
            <p class="text-center mt-3">
              Copyright © Belasea. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
