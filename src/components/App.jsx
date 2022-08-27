import { useState } from 'react';
import Feedback from './Feedback/Feedback';

//useState для кожного значення - різний. Як зробити один useState для всіх?

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = ({ target }) => {
    const { name } = target;
    if (name === 'good') {
      setGood(element => element + 1);
      return;
    }

    if (name === 'neutral') {
      setNeutral(element => element + 1);
      return;
    }

    if (name === 'bad') {
      setBad(element => element + 1);
      return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = (good / total) * 100;
    return Number(result.toFixed(0));
  };

  return (
    <Feedback
      state={{ good, neutral, bad }}
      leaveFeedback={leaveFeedback}
      countTotalFeedback={countTotalFeedback}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
    />
  );
};
export default App;
