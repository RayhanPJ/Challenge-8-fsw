import axios from "axios";

export const GET_LIST_CARS = "GET_LIST_CARS";

export const getListCars = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_CARS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json",
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.massage,
          },
        });
      });
  };
};
