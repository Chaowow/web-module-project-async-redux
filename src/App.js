import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCatFact } from './action/catActions';

const App = props => {

    const fetchCatFacts = e => {
      e.preventDefault();
      props.getCatFact();
  }

  return (
    <div className="App">
      <h2>Get a Random Cat Fact!</h2>
      <div>
        {props.catFact && (
          <div>
            <p>{props.catFact.fact}</p>
            <p>{props.catFact.length}</p>
          </div>
        )}
        {props.error && <p className='error'>Error: {props.error}</p>}
      </div>
      <button onClick={fetchCatFacts}>Fetch Your Cat Fact!</button>
    </div>
  );
};

const mapStateToProps = state => ({
  catFact: state.catFact,
  error: state.error
});

export default connect(mapStateToProps, {getCatFact})(App);