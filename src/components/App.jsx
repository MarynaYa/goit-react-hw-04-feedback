import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

//import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const items = { good, neutral, bad };
const options = Object.keys(items);

const handleFeedback = option => {
  switch (option) {
    case 'good':
      setGood(prevState => prevState + 1);
      break;
    case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;
    case 'bad':
      setBad(prevState => prevState + 1);
      break;
    default:
      return;
  }
};

//  this.setState( prevState => ({ [option]: prevState[option] + 1 }));
//};

//countTotalFeedback = () => {
//  const { good, bad, neutral } = this.state;
//  return good + neutral + bad;
//};
const countTotalFeedback = () => {
  let total = good + neutral + bad;
  return total;
};

//countPositiveFeedbackPercentage = () => {
//  return Math.round((this.state.good * 100) / this.countTotalFeedback());
//}
const countPositiveFeedbackPercentage = () => {
  let positiveFeedbackPercentage = (good / countTotalFeedback()) * 100;
  return positiveFeedbackPercentage;
};
  
 // render() {
 //   const { good, neutral, bad } = this.state;
  //  const total = this.countTotalFeedback(this.state);

    return (
      <>
      <Section title="Please leave feedback">
      <FeedbackOptions 
      options={options}
      onLeaveFeedback={handleFeedback}
      />
      </Section>    

    {!countTotalFeedback() ? (
 <Notification message="There is no feedback" />
    ) : (
    <Section title="Statistics">
    <Statistics 
    good={good}
    neutral={neutral}
    bad={bad}
    total={countTotalFeedback()}
    positivePercentage={countPositiveFeedbackPercentage()}
    />
    </Section>)
  }
      </>
    );
  }


//export default App;