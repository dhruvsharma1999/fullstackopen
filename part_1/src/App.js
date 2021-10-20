import { useState } from "react";

const SatisfactionData = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
      <>
        <h2>No feedback has been collected</h2>
      </>
    );
  }
  return (
    <>
      <h1>Reports</h1>
      <h3>Neutral: {neutral}</h3>
      <h3>Good: {good}</h3>
      <h3>Bad: {bad}</h3>
      <br />
      <h2>all {good + bad + neutral}</h2>
      <h2>Average {(good + bad + neutral) / 3}</h2>
    </>
  );
};
function App() {
  //loading inital states for setting the inital feedback values to 0
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //event handles to increment the feebback options
  const goodFeedback = () => {
    setGood(good + 1);
  };
  const neutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const badFeedback = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>Give Feed Back</h1>
      <button onClick={goodFeedback}>good</button>
      <button onClick={neutralFeedback}>neutral</button>
      <button onClick={badFeedback}>bad</button>
      <br />
      <SatisfactionData good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
