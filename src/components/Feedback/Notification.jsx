import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div className={s.notification}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
