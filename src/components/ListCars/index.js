import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../actions/listCarAction";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DateTime(hasil) {
  const isPositive = getRandomInt(0, 1) === 1;
  const timeAt = new Date();
  const mutator = getRandomInt(1000000, 100000000);
  hasil = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
  return hasil;
}

function ListCars({ penumpang, supir, date, time }) {
  const { getListCarsResult, getListCarsLoading, getListCarsError } = useSelector((state) => state.Cars);
  const dispatch = useDispatch();
  const jumlah = penumpang;
  const tipe = supir === "true" ? true : false;
  const d = `${date}T${time}`;
  const formdate = Date.parse(d);

  useEffect(() => {
    dispatch(getListCars());
  }, [dispatch]);

  return (
    <div className="container-fluid" style={{ padding: "100px" }}>
      <div className="row d-flex justify-content-center" id="cars-container">
        {console.log(getListCarsResult)}
        {getListCarsResult ? (
          getListCarsResult
            .filter(
              (car) => car.capacity >= jumlah && car.available === tipe && Date.parse(DateTime(car.availableAt)) > formdate
            )
            .map((car) => {
              return (
                <div className="col-md-4" key={car.id}>
                  <div className="card mb-3">
                    <img
                      src={car.image}
                      className="card-img-top"
                      height="350"
                      alt={car.manufacture}
                    />
                    <div className="card-body">
                      <p className="card-text">{car.model}</p>
                      <h5 className="card-title">{`Rp.${car.rentPerDay} / Hari`}</h5>
                      <p className="card-text">{car.description}</p>
                      <p className="card-text">
                        <img
                          src="/assets/images/fi_users.png"
                          className="me-2"
                          alt="Users"
                        />
                        {car.capacity}
                      </p>
                      <p className="card-text">
                        <img
                          src="/assets/images/fi_settings.png"
                          className="me-2"
                          alt="Transmission"
                        />
                        {car.transmission}
                      </p>
                      <p className="card-text">
                        <img
                          src="/assets/images/fi_calendar.png"
                          className="me-2"
                          alt="Calender"
                        />
                        {car.year}
                      </p>
                      <a
                        href="/"
                        className="btn btn-primary d-flex justify-content-center"
                      >
                        Pilih Mobil
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
        ) : getListCarsLoading ? (
          <p>Loading . . . </p>
        ) : (
          <p>{getListCarsError ? getListCarsError : "Data Kosong"}</p>
        )}
      </div>
    </div>
  );
}

export default ListCars;
