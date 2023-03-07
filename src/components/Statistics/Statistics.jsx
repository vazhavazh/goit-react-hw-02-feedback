export const Statistics = ({
    good,
neutral,
bad,
total,
positivePercentage,
}) => {
    return (
      <div>
        <h2>Statisctics</h2>
        <ul>
          <li>
            <span>Good: {good}</span>
          </li>
          <li>
            <span>Neutural: {neutral}</span>
          </li>
          <li>
            <span>Bad: {bad}</span>
          </li>
          <li>
            <span>Total: {total}</span>
          </li>
          <li>
            <span>Positive feedback: {positivePercentage} %</span>
          </li>
        </ul>
      </div>
    );
};


