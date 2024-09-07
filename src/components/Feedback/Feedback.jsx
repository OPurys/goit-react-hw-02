import css from './Feedback.module.css';

const Feedback = ({ voting, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.list}>
      <li>Good: {voting.good}</li>
      <li>Neutral: {voting.neutral}</li>
      <li>Bad: {voting.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
