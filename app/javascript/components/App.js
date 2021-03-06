import React from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Greeting />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
