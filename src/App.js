import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import './App.css';

const initialState = {
    counter: 0
}

const actionIncrease = {type: 'INCREASE'};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {counter: state.counter + 1};
    }
    return state;
}

let store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <h1>Redux Demo</h1>
      <p>Counter: {this.props.counter}</p>
      <button onClick={() => {store.dispatch(actionIncrease)}}>Increase</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        counter: state.get("counter")
    };
}

export default <Provider store={store}>{connect(mapStateToProps)(App)}</Provider>;
