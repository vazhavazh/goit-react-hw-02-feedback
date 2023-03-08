import { Component } from 'react';

import { Statistics } from './components/Statistics/Statistics';

import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions'
  
  
export class App extends Component {
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const obj = this.state;
    const total = Object.values(obj).reduce((acc, val) => acc + val, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalQuantity = this.countTotalFeedback();
    const positiveQuantity = Math.round((good * 100) / totalQuantity);
    if (!positiveQuantity) {
      return;
    }
    return positiveQuantity;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please Leave Feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

//
