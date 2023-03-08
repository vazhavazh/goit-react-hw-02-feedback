import PropTypes from 'prop-types';
import { StatisticList, Span } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <li>
        <Span>Good: {good}</Span>
      </li>
      <li>
        <Span>Neutural: {neutral}</Span>
      </li>
      <li>
        <Span>Bad: {bad}</Span>
      </li>
      <li>
        <Span>Total: {total}</Span>
      </li>
      <li>
        <Span>Positive feedback: {positivePercentage} %</Span>
      </li>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
