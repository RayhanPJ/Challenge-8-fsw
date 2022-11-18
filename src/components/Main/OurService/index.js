import React from "react";

const OurService = () => {
  return (
    <div className="container mt-5 pt-5 mb-5" id="ourService">
      <div className="row">
        <div className="col-7 d-flex justify-content-center align-items-center content2">
          <img
            className="img-fluid"
            src="assets/images/img_service.png"
            alt=""
          />
        </div>
        <div className="col content2 mx-3">
          <h2 className="mb-2 fs-2 fw-bold textContent2">
            Best Car Rental for any kind of trip in Jabodetabek!
          </h2>
          <div className="desc-ourserv mb-2">
            <p className="textContent2">
              Sewa mobil di Jabodetabek bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <li>
              <p className="textContent2">
                <img
                  className="float-start"
                  src="assets/images/Group 53.png"
                  alt=""
                />
                <span className="ps-2">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </span>
              </p>
            </li>
            <li>
              <p className="textContent2">
                <img
                  className="float-start"
                  src="assets/images/Group 53.png"
                  alt=""
                />
                <span className="ps-2">
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </span>
              </p>
            </li>
            <li>
              <p className="textContent2">
                <img
                  className="float-start"
                  src="assets/images/Group 53.png"
                  alt=""
                />
                <span className="ps-2">Sewa Mobil Jangka Panjang Bulanan</span>
              </p>
            </li>
            <li>
              <p className="textContent2">
                <img
                  className="float-start"
                  src="assets/images/Group 53.png"
                  alt=""
                />
                <span className="ps-2">
                  Gratis Antar - Jemput Mobil di Bandara
                </span>
              </p>
            </li>
            <li>
              <p className="textContent2">
                <img
                  className="float-start"
                  src="assets/images/Group 53.png"
                  alt=""
                />
                <span className="ps-2">
                  Layanan Airport Transfer / Drop In Out
                </span>
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
