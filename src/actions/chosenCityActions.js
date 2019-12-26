export const fetchAvaibleCountres = () => (dispatch) => {
  fetch('http://api.airvisual.com/v2/countries?key=6134f3b1-85f3-4e0c-ae0b-23f7dec6478e')
    .then((res) => res.json())
    .then((updateAvaibleCountres) => {
      if (updateAvaibleCountres) {
        dispatch({
          type: 'FETCH_AVAILBE_COUNTRES',
          data: updateAvaibleCountres,
        });
      }
    }).catch((err) => console.log(err));
};
// 6134f3b1-85f3-4e0c-ae0b-23f7dec6478e
export const fetchNearestCity = () => (dispatch) => {
  fetch('http://api.airvisual.com/v2/nearest_city?key=6134f3b1-85f3-4e0c-ae0b-23f7dec6478e')
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        dispatch({
          type: 'FETCH_NEAREST_CITY',
          data: res,
        });
      }
    }).catch((err) => {
      console.log(err);
    });
};
