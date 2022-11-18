import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-4 pb-3">
              <p className="textContent5">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p className="textContent5">binarcarrental@gmail.com</p>
              <p className="textContent5">081-233-334-808</p>
            </div>
            <div className="col-md-2 pb-3">
              <li className="mb-1">
                <a
                  href="#ourService"
                  style={{ textDecoration: `none`, color: `black` }}
                  className="textContent5"
                >
                  Our services
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#whyUs"
                  style={{ textDecoration: `none`, color: `black` }}
                  className="textContent5"
                >
                  Why Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#Testimonial"
                  style={{ textDecoration: `none`, color: `black` }}
                  className="textContent5"
                >
                  Testimonial
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#FAQ"
                  style={{ textDecoration: `none`, color: `black` }}
                  className="textContent5"
                >
                  FAQ
                </a>
              </li>
            </div>
            <div className="col-md-3 pb-3">
              <p className="textContent5">Connect with us</p>
              <ul id="inline">
                <li>
                  <a href="/">
                    <img src="assets/images/icon_facebook.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="assets/images/icon_instagram.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="assets/images/icon_mail.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="assets/images/icon_twitch.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="assets/images/icon_twitter.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 pb-3">
              <p className="textContent5">Copyright Binar 2022</p>
              <div className="box-logo">
                <h4 className="fw-5 text-light text-center">
                  <a
                    style={{ textDecoration: `none`, color: `white` }}
                    href="/"
                  >
                    Hanz
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
