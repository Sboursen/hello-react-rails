import React from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../store/greetings';



const Greeting = () => {
    const dispatch = useDispatch();
    const randomGreetingMessage = useSelector((state) => state.greeting.message);

      useEffect(() => {
        dispatch(getGreeting());
      }, []);

    return <div>Message: {randomGreetingMessage}</div>;
}


Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
