import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <button
      key={index}
      type="button"
      className={s.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {   
  options: propTypes.array,
  onLeaveFeedback: propTypes.func,
  };

  export default FeedbackOptions;