import { Component } from 'react';

import {Statistics} from './components/Statistics/Statistics'


export class App extends Component {
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodAdd = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralAdd = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadAdd = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  // handleFeedback = state => {
  //   this.setState(prevState => ({
  //     [state]: prevState[state] + 1,
  //   }));
  // };

 

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
        <ul>
          <li>
            {' '}
            <button onClick={this.handleGoodAdd}>Good</button>
          </li>
          <li>
            {' '}
            <button onClick={this.handleNeutralAdd} className="neutral">
              Neutral
            </button>
          </li>
          <li>
            {' '}
            <button
              options={Object.keys(this.state)}
              className="bad"
            >
              Bad
            </button>
          </li>
        </ul>
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