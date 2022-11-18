import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FormCar from "../FormCar";
import NavLogout from "../NavLogout";

const CarsWeb = () => {
  return (
    <div>
      <NavLogout />
      <Header />
      <FormCar />
      <Footer />
    </div>
  );
};

export default CarsWeb;
