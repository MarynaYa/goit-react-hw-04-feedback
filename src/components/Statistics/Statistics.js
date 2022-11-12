import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={s.statistList}>
      <li className={s.statistItem}>Good: {good}</li>
      <li className={s.statistItem}>Neutral: {neutral}</li>
      <li className={s.statistItem}>Bad: {bad}</li>
      <li className={s.statistItem}>Total: {total}</li>
      <li className={s.statistItem}>Positive Feedback: {positivePercentage} %</li>
    </ul>
  );
  
  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  
  export default Statistics;