import PropTypes from 'prop-types';
import {
  StatisticBlock,
  StatisticTitle,
  StatisticList,
} from './Statistics.styled';

export const Statistics = ({ title, children }) => {
  return (
    <StatisticBlock>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>{children}</StatisticList>
    </StatisticBlock>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};
