import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <div>
        Message: {this.props.message}
      </div>
    );
  }
}

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
