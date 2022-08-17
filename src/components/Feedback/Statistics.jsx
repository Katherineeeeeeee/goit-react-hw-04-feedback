import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <p className={s.desc}>
        Good: <span className={s.answear}>{good}</span>
      </p>
      <p className={s.desc}>
        Neutral: <span className={s.answear}>{neutral}</span>
      </p>
      <p className={s.desc}>
        Bad: <span className={s.answear}> {bad}</span>
      </p>
      <p className={s.desc}>
        Total: <span className={s.answear}>{total}</span>
      </p>
      <p className={s.desc}>
        Positive feedback: <span className={s.answear}> {percentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
