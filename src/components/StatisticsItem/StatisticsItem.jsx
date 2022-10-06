export const StatisticsItem = ({ text, rating }) => {
  return (
    <li>
      {text}:<span>{rating}</span>
    </li>
  );
};
