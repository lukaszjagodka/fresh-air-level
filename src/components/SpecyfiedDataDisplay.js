import React from 'react';
import { connect } from 'react-redux';

function SpecifiedDataDisplay(props) {
  const { specyfiedDataFromCity } = props;
  const { weather, pollution } = specyfiedDataFromCity.current;
  return (
      <div>
        <div className="blockOne">
        <h4>Data for: </h4>
        <h2>{specyfiedDataFromCity.city}</h2>
        Weather:
        <br />
        {weather.ts}
        <br />
        temperature {weather.tp} Celsius
        <br />
        atmospheric {weather.pr} hPa
        <br />
        humidity {weather.hu} %
        <br />
        wind speed {weather.ws} (m/s)
        <br />
        Pollution:{pollution.aqius}
        <img src={`/images/${weather.ic}.png`} alt="" width='150px'/>
        </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  specyfiedDataFromCity: state.chosenCityReducer.specyfiedDataFromCity,
});

export default connect(mapStateToProps, null)(SpecifiedDataDisplay);
