import s from './Feedback.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={nanoid()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={s.btn}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
