import React from "react";

const CTABanner = () => {
  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="row">
        <div className="col mx-2 py-3 bgCTA">
          <h1 className="text-light text-center fs-2 fw-bold mt-5 textContent5">
            Sewa Mobil di (Lokasimu) Sekarang
          </h1>
          <div className="mt-5">
            <p className="textContent5 text-center text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              exercitationem dicta nam quas corporis tempora dignissimos
              pariatur architecto aut quam.
            </p>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <a href="/formcar">
              <button
                type="button"
                className="btn"
                style={{
                  padding: `8px 12px`,
                  fontSize: `12px`,
                  backgroundColor: `#5cb85f`,
                  color: `wheat`,
                }}
              >
                Mulai Sewa Mobil
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
