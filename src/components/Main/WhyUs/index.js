import React from "react";

const WhyUs = () => {
  return (
    <div className="container mt-5 pt-5 mb-5" id="whyUs">
      <h1 className="fs-4 fw-bold textContent3 mx-3">Why Us?</h1>
      <p className="pt-2 textContent3 mx-3">
        Mengapa harus pilih Binar Car Rental?
      </p>
      <div className="row">
        <div className="col-3 colContent3">
          <div
            className="card mt-4"
            style={{ width: `18rem`, height: `13rem` }}
          >
            <div className="card-body textContent3">
              <img
                className="img-fluid mb-3"
                src="assets/images/icon_complete1.png"
                alt=""
              />
              <h5 className="card-title">Mobil Lengkap</h5>
              <p className="card-text fs-6">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 colContent3">
          <div
            className="card mt-4"
            style={{ width: `18rem`, height: `13rem` }}
          >
            <div className="card-body textContent3">
              <img
                className="img-fluid mb-3"
                src="assets/images/icon_price.png"
                alt=""
              />
              <h5 className="card-title">Harga Murah</h5>
              <p className="card-text fs-6">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 colContent3">
          <div
            className="card mt-4"
            style={{ width: `18rem`, height: `13rem` }}
          >
            <div className="card-body textContent3">
              <img
                className="img-fluid mb-3"
                src="assets/images/icon_24hrs.png"
                alt=""
              />
              <h5 className="card-title">Layanan 24 Jam</h5>
              <p className="card-text fs-6">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 colContent3">
          <div
            className="card mt-4"
            style={{ width: `18rem`, height: `13rem` }}
          >
            <div className="card-body textContent3">
              <img
                className="img-fluid mb-3"
                src="assets/images/icon_professional.png"
                alt=""
              />
              <h5 className="card-title">Sopir Profesional</h5>
              <p className="card-text fs-6">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
