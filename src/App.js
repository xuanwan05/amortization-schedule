import React, { Component } from 'react'
import './App.css'

import { Provider } from 'react-redux'

import store from './store'

import ScheduleForm from './components/ScheduleForm'
import Schedules from './components/Schedules';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <ScheduleForm />
            <hr />
            <Schedules />
          </div>
      </Provider>
    );
  }
}

export default App;
