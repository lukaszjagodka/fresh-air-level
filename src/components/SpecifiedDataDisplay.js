import React from 'react';
import { connect } from 'react-redux';

function SpecifiedDataDisplay(props) {
  const { specifiedDataFromCity } = props;
  const { weather, pollution } = specifiedDataFromCity.current;
  let tempDate = new Date();
  let date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
  return (
      <div>
        <div className="blockOne">
        <h4>Data for: </h4>
        <h2>{specifiedDataFromCity.city}</h2>
        Weather:
        <br />
        {date}
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
  specifiedDataFromCity: state.chosenCityReducer.specifiedDataFromCity,
});

export default connect(mapStateToProps, null)(SpecifiedDataDisplay);
