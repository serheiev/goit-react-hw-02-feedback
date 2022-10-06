import PropTypes from 'prop-types';
import { StatisticItem, Span } from './StatisticsItem.style';

export const StatisticsItem = ({ text, rating, children }) => {
  return (
    <StatisticItem>
      {text}:
      <Span>
        {rating}
        {children}
      </Span>
    </StatisticItem>
  );
};

StatisticsItem.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
