import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedBack }) => {
  return (
    <div className={css.wrapper}>
      <button
        className={css.btn}
        onClick={() => updateFeedback('good')}
        type="button"
      >
        Good
      </button>
      <button
        className={css.btn}
        onClick={() => updateFeedback('neutral')}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.btn}
        onClick={() => updateFeedback('bad')}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedBack} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
