import React, { Component } from 'react';
import { connect } from 'react-redux';
// import fetchData from './FetchData';
import { fetchAvaibleCountres, fetchNearestCity, fetchStatesInCountry } from '../actions/chosenCityActions';

class Display extends Component {
  componentDidMount() {
    this.props.fetchAvaibleCountres();
    this.props.fetchNearestCity();
  }
  selectCountry = e => {
    const country = document.getElementById('selectCountryOne');
    const index = country.selectedIndex;
    console.log(country[index]);
    this.props.fetchStatesInCountry(country.value, country[index].getAttribute('name'));
  }

  render() {
    const { nearestCity, avaibleCoutres, statesInCountry } = this.props;
    // const arrCC = Array.from(aveCountres);
    // console.log(arrCC, 'test')
    // console.log(aveCountres,'tiririr')
    return (
      <div className="containerGroup" style={{padding: 30}}>
        <h3>dashboard</h3>
        select the country, state and then the city you are interested in<br/><br/>
          <div>
          <select id="selectCountryOne" onChange={this.selectCountry}>
            {
              avaibleCoutres.map((country) => (
                <option key={country.id} value={country.country} name={country.country}>{country.country}</option>
              ))
            }
          </select>
            {
              statesInCountry.map(sIC => (
                <div className="arrWrap">
                  <p>{sIC.state}</p>
                </div>
              ))
            }
          {/* { console.log(this.props.avaibleCoutres, 'available cities') }
          { console.log(nearestCity, 'nearest city') } */}
          {/* {
            aveCountres.map((avC) => (
              <div className="arrayWrapper" key={avC.index}>
                <p>{avC.country}</p>
              </div>
            ))
          } */}

          {/* <div className="nearest-city">
            {nearestCity.city}
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  avaibleCoutres: state.chosenCityReducer.avaibleCoutres,
  nearestCity: state.chosenCityReducer.nearestCity,
  statesInCountry: state.chosenCityReducer.statesInCountry,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAvaibleCountres: () => dispatch(fetchAvaibleCountres()),
  fetchNearestCity: () => dispatch(fetchNearestCity()),
  fetchStatesInCountry: (name) => dispatch(fetchStatesInCountry(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Display);
