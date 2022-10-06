import { Component } from 'react';
import { Section } from './Section/Section';
import { Button } from './Button/Button';
import { Statistics } from './Statistics/Statistics';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plusRate = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  totalRate = (good, bad, neutral) => {
    let total = good + bad + neutral;
    return total;
  };

  positivePercentage = (good, bad, neutral) => {
    let total = good + bad + neutral;
    let positiveFB = Math.round((good / total) * 100);
    return positiveFB;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const showStat = good > 0 || neutral > 0 || bad > 0;
    const noStatMessage = 'No feedback given ';

    return (
      <Section title="Please leave feedback">
        <Button name="good" type="button" plusRate={this.plusRate}>
          Good
        </Button>
        <Button name="neutral" type="button" plusRate={this.plusRate}>
          Neutral
        </Button>
        <Button name="bad" type="button" plusRate={this.plusRate}>
          Bad
        </Button>

        {showStat ? (
          <Statistics title="Statistics">
            <StatisticsItem text="Good" rating={good}></StatisticsItem>

            <StatisticsItem text="Neutral" rating={neutral}></StatisticsItem>

            <StatisticsItem text="Bad" rating={bad}></StatisticsItem>

            <StatisticsItem
              text="Total"
              rating={this.totalRate(good, bad, neutral)}
            ></StatisticsItem>
            <StatisticsItem
              text="Positive feedback"
              rating={this.positivePercentage(good, bad, neutral)}
            >
              %
            </StatisticsItem>
          </Statistics>
        ) : (
          <Statistics title="Statistics">{noStatMessage}</Statistics>
        )}
      </Section>
    );
  }
}
