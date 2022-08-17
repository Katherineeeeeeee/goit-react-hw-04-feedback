import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(propertyName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = (this.state.good / total) * 100;
    return Number(result.toFixed(0));
  }
  leaveFeedback = ({ target }) => {
    const { name } = target;
    this.setState(prevState => {
      const value = prevState[name];
      return {
        [name]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage =
      this.countPositiveFeedbackPercentage('good, neutral, bad');
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
