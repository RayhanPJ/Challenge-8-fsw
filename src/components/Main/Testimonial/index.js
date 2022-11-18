import React from "react";

const Testimonial = () => {
  return (
    <div className="container mt-5 pt-5 mb-5" id="Testimonial">
      <h1 className="fs-4 text-center fw-bold">Testimonial</h1>
      <p className="text-center py-3">
        Berbagai review positif dari para pelanggan kami
      </p>
      <div
        id="carouselExampleControls"
        className="carousel slide mx-auto"
        style={{ maxWidth: `100%` }}
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner bg-aliceblue"
          style={{ borderRadius: `20px` }}
        >
          <div className="carousel-item active bg-aliceblue">
            <div className="row mx-4 my-5">
              <div className="col-xl-2 m-auto">
                <img
                  src="assets/images/photo1-testimoni.png"
                  className="d-block testimonial-img m-auto"
                  alt="Person"
                />
              </div>
              <div className="col-xl-10">
                <img
                  src="assets/images/Rate.png"
                  className="testimonial-rating"
                  alt="Rating"
                />
                <p className="textContent4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="textContent4">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-aliceblue">
            <div className="row mx-4 my-5">
              <div className="col-xl-2 m-auto">
                <img
                  src="assets/images/photo2-testimoni.png"
                  className="d-block testimonial-img m-auto"
                  alt="Person"
                />
              </div>
              <div className="col-xl-10">
                <img
                  src="assets/images/Rate.png"
                  className="testimonial-rating"
                  alt="Rating"
                />
                <p className="textContent4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod””
                </p>
                <p className="textContent4">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-aliceblue">
            <div className="row mx-4 my-5">
              <div className="col-xl-2 m-auto">
                <img
                  src="assets/images/photo1-testimoni.png"
                  className="d-block testimonial-img m-auto"
                  alt="Person"
                />
              </div>
              <div className="col-xl-10">
                <img
                  src="assets/images/Rate.png"
                  className="testimonial-rating"
                  alt="Rating"
                />
                <p className="textContent4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod””
                </p>
                <p className="textContent4">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            className="testimonial-media"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </a>
          <a
            href="/"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            className="testimonial-media"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
