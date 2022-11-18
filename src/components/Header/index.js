import React from "react";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  return (
    <div>
      <header className="bgHeader">
        {/* Start Content Header */}
        <div className="container-fluid d-flex mt-3 pt-3 mb-5">
          <div className="row align-items-center">
            <div className="offset-1 col-6 content1">
              <div className="blok1">
                <h1 className="mb-2 fs-2 textContent">
                  Sewa & Rental Mobil Terbaik Di Kawasan Bekasi
                </h1>
                <p className="mb-2 textContent">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <a className="nav-link me-1" href="/formcar">
                  <Tooltip title="Login Require" placement="right">
                    <button
                      type="button"
                      className="btn btnContent"
                      style={{
                        padding: `8px 12px`,
                        fontSize: `15px`,
                        backgroundColor: `#5cb85f`,
                        color: `white`,
                      }}
                    >
                      Mulai Sewa Mobil
                    </button>
                  </Tooltip>
                </a>
              </div>
            </div>
            <div className="col pe-0 content1">
              <div className="blok1">
                <img
                  className="iCar float-end align-items-end"
                  src="assets/images/img_car.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Content Header */}
      </header>
    </div>
  );
};

export default Header;
