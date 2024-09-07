import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const App = () => {
  const [voting, setVoting] = useState(
    () =>
      JSON.parse(localStorage.getItem('save-voting')) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  const updateFeedback = feedbackType =>
    setVoting({ ...voting, [feedbackType]: voting[feedbackType] + 1 });

  const resetFeedBack = () =>
    setVoting({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  const totalFeedback = voting.good + voting.neutral + voting.bad;

  const positiveFeedback = Math.round((voting.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('save-voting', JSON.stringify(voting));
  }, [voting]);

  return (
    <div>
      <Description />
      <Options
        resetFeedBack={resetFeedBack}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback ? (
        <Feedback
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
          voting={voting}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
