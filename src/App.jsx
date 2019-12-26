import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Display from './components/Display';

function App() {
  return (
    <div className="container">
      <Display />
    </div>
  );
}

export default connect(null, null)(App);
