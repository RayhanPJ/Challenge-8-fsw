import React from "react";
import ListCars from "../ListCars";

// function refreshPage() {
//   window.location.reload();
// }

class FormCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { supir: "", penumpang: "", date: "", time: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Hapus = this.Hapus.bind(this);
    this.data = this.data.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  Hapus() {
    return 2;
  }

  data(event) {
    event.preventDefault();
    const data1 = [
      this.state.penumpang,
      this.state.supir,
      this.state.date,
      this.state.time,
    ];
    console.log(data1);

    return data1;
  }

  render() {
    return (
      <div>
        <div className="container-fluid d-flex justify-content-center pt-5">
          <div>
            <div className="sewaMobil">
              <div
                className="card shadow p-2 mb-5 bg-body rounded"
                style={{ width: `100%` }}
              >
                <form onSubmit={this.handleSubmit}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <label className="form-label" htmlFor="typeDriver">
                          Tipe Driver
                        </label>
                        <div className="input-group mb-3">
                          <select
                            id="supir"
                            name="supir"
                            className="form-select"
                            value={this.state.value}
                            onChange={this.handleChange}
                          >
                            <option value="">Pilih Tipe Driver</option>
                            <option value="true">Dengan Sopir</option>
                            <option value="false">
                              Tanpa Sopir (Lepas Tangan)
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label" htmlFor="tipeDriver">
                          Tanggal
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={this.state.date}
                          onChange={this.handleChange}
                          id="date"
                          className="form-control"
                          placeholder="Pilih Tanggal"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label" htmlFor="tipeDriver">
                          Waktu Jemput/Ambil
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={this.state.time}
                          onChange={this.handleChange}
                          id="time"
                          className="form-control"
                          placeholder="Pilih Waktu"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label" htmlFor="tipeDriver">
                          Penumpang (optional)
                        </label>
                        <input
                          type="number"
                          name="penumpang"
                          id="penumpang"
                          value={this.state.penumpang}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Jumlah Penumpang"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ListCars
            data={this.data}
            penumpang={this.state.penumpang}
            supir={this.state.supir}
            date={this.state.date}
            time={this.state.time}
          />
        </div>
      </div>
    );
  }
}

export default FormCar;
