import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpecifiedDataDisplay from './SpecifiedDataDisplay';
import {
  fetchAvaibleCountres, fetchNearestCity, fetchStatesInCountry, fetchCitiesInState, fetchSpecifiedDataFromCity, loadLocalStorage, watchList,
} from '../actions/chosenCityActions';
import {
  chosenCountry, chosenState,
} from '../actions/choiceActions';
import WatchList from './WatchList';

class Display extends Component {
  componentDidMount() {
    this.props.fetchAvaibleCountres();
    this.props.loadLocalStorage();
  }

  selectCountry = (e) => {
    const country = document.getElementById('selectCountry');
    const index = country.selectedIndex;
    this.props.fetchStatesInCountry(country[index].getAttribute('value'));
    this.props.chosenCountry(country[index].getAttribute('value'));
  }

  selectState = (e) => {
    const state = document.getElementById('selectState');
    const index = state.selectedIndex;
    const { countryState } = this.props;
    this.props.fetchCitiesInState(state[index].getAttribute('value'), countryState);
    this.props.chosenState(state[index].getAttribute('value'));
  }

  selectCity = (e) => {
    const city = document.getElementById('selectCity');
    const index = city.selectedIndex;
    const { countryState, stateState } = this.props;
    this.props.fetchSpecifiedDataFromCity(city[index].getAttribute('value'), stateState, countryState);
    this.props.watchList();
  }

  nearestCity = () => {
    this.props.fetchNearestCity();
  }

  render() {
    const {
      avaibleCoutres, statesInCountry, citiesInState, specifiedDataFromCity, chosenCountry, chosenState,
    } = this.props;
    return (
      <div className="containerGroup">
        <div className="description">
          <h3>dashboard</h3>
          select the country, state and then the city you are interested in
        </div>
        <p>
          <span>Country:</span>
          {
            chosenCountry ? (
              <select id="selectCountry" onChange={this.selectCountry}>
              {
                avaibleCoutres.map((country) => (
                  <option key={country.id} value={country.country} name={country.country}>{country.country}</option>
                ))
              }
              </select>
            ) : null
          }
        </p>
        <p>
          <span>State:</span>
          {
            chosenState ? (
              <select id="selectState" onChange={this.selectState}>
              {
                statesInCountry.map((state) => (
                  <option key={state.id} value={state.state} name={state.state}>{state.state}</option>
                ))
              }
              </select>
            ) : null
          }
        </p>
        <p>
          <span>City:</span>
          {
            chosenState ? (
              <select id="selectCity" onChange={this.selectCity}>
              {
                  citiesInState.map((city) => (
                    <option key={city.id} value={city.city} name={city.city}>{city.city}</option>
                  ))
                }
              </select>
            ) : null
          }
        </p>
        <button onClick={this.nearestCity}>the nearest city of your location</button>
        <div className="specDisplay">
          {
            specifiedDataFromCity ? <SpecifiedDataDisplay /> : null
          }
        </div>
        <div className="WList">
          <WatchList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  avaibleCoutres: state.chosenCityReducer.avaibleCoutres,
  nearestCity: state.chosenCityReducer.nearestCity,
  statesInCountry: state.chosenCityReducer.statesInCountry,
  citiesInState: state.chosenCityReducer.citiesInState,
  countryState: state.choiceReducer.chosenCountry,
  stateState: state.choiceReducer.chosenState,
  specifiedDataFromCity: state.chosenCityReducer.specifiedDataFromCity,
  watchListt: state.chosenCityReducer.watchList,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAvaibleCountres: () => dispatch(fetchAvaibleCountres()),
  fetchNearestCity: () => dispatch(fetchNearestCity()),
  fetchStatesInCountry: (name) => dispatch(fetchStatesInCountry(name)),
  fetchCitiesInState: (state, country) => dispatch(fetchCitiesInState(state, country)),
  chosenCountry: (value) => dispatch(chosenCountry(value)),
  chosenState: (value) => dispatch(chosenState(value)),
  fetchSpecifiedDataFromCity: (city, state, country) => dispatch(fetchSpecifiedDataFromCity(city, state, country)),
  loadLocalStorage: () => dispatch(loadLocalStorage()),
  watchList: (data) => dispatch(watchList(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Display);
