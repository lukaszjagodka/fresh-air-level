import React from 'react';
import { connect } from 'react-redux';

function WatchList(props) {
  const { watchListState } = props;
  console.log(watchListState);
  return (
    <div className="watchListDisplay">
      <h2>Watch List</h2>
      {
        watchListState.map((city) => (
          <div className="wrapperCity">
            <div className="wrCity">
              <h3>{city.city}</h3>
              temperature {city.current.weather.tp} Celsius
              <br />
              atmospheric {city.current.weather.pr} hPa
              <br />
              humidity {city.current.weather.hu} %
              <br />
              wind speed {city.current.weather.ws} (m/s)
              <br />
              Pollution: {city.current.pollution.aqius} PM2,5
            </div>
            <br/><br/>
            <div className="imageCity">
              <img src={`/images/${city.current.weather.ic}.png`} alt="" width='100px'/>
            </div>
          </div>
        ))
      }
    </div>
  );
}
const mapStateToProps = (state) => ({
  watchListState: state.chosenCityReducer.watchList,
});
export default connect(mapStateToProps, null)(WatchList);
