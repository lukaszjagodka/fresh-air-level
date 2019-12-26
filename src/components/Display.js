import React, { Component } from 'react';
import { connect } from 'react-redux';
// import fetchData from './FetchData';
import { fetchAvaibleCountres, fetchNearestCity } from '../actions/chosenCityActions';

class Display extends Component {
  componentDidMount(){
    this.props.fetchAvaibleCountres();
    this.props.fetchNearestCity();
  }

  render() {
    const { data } = this.props.nearestCity;
    return (
      <div>
        <h1>dashboard</h1>
        {console.log(this.props.avaibleCoutres.data, 'available cities')}
        {console.log(data, 'nearest city')}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  avaibleCoutres: state.chosenCityReducer.avaibleCoutres,
  nearestCity: state.chosenCityReducer.nearestCity
});
const mapDispatchToProps = (dispatch) => ({
  fetchAvaibleCountres: () => dispatch(fetchAvaibleCountres()),
  fetchNearestCity: () => dispatch(fetchNearestCity()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Display);
