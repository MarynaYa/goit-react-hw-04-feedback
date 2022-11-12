import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.css';

const Notification = ({ message }) => (
  <p className={s.notificationWrapper}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;