import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../store/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div className="box">
      <h1 className="text">{randomGreeting.language}</h1>
      <p className="text">{randomGreeting.message}</p>
    </div>
  );
};

Greeting.propTypes = {
  message: PropTypes.string,
};
export default Greeting;
