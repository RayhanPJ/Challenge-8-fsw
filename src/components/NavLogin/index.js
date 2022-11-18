import React from "react";

const NavLogin = () => {
  return (
    <div>
      {/* Start Navbar */}
      <div className="container-fluid mb-5">
        <nav className="navbar navbar-expand-lg bg-putih pt-3">
          <div className="container rNav">
            <a
              className="navbar-brand text-light px-4"
              style={{ backgroundColor: `#0d28a6` }}
              href="/"
            >
              Hanz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                >
                  <a
                    className="navbar-brand text-light px-4"
                    style={{ backgroundColor: `#0d28a6` }}
                    href="/"
                  >
                    Hanz
                  </a>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <div className="navbar-nav ms-auto">
                  <a
                    className="nav-link me-3 text-dark"
                    aria-current="page"
                    href="#ourService"
                  >
                    Our Service
                  </a>
                  <a className="nav-link me-3 text-dark" href="#whyUs">
                    Why Us
                  </a>
                  <a className="nav-link me-3 text-dark" href="#Testimonial">
                    Testimonial
                  </a>
                  <a className="nav-link me-3 text-dark" href="#FAQ">
                    FAQ
                  </a>
                  <a href="/">
                    <button
                      type="button"
                      className="btn me-3"
                      style={{
                        padding: `8px 12px`,
                        fontSize: `15px`,
                        backgroundColor: `#5cb85f`,
                        color: `white`,
                      }}
                    >
                      Registered
                    </button>
                  </a>
                  <a href="/login">
                    <button
                      type="button"
                      className="btn"
                      style={{
                        padding: `8px 12px`,
                        fontSize: `15px`,
                        backgroundColor: `#5cb85f`,
                        color: `white`,
                      }}
                    >
                      Login
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* End Navbar */}
    </div>
  );
};

export default NavLogin;
