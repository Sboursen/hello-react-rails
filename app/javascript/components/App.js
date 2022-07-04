import React from "react"
import PropTypes from "prop-types"
import Greeting from './Greeting';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Greeting message="Hello" />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App
