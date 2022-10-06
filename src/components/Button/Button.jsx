import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export const Button = ({ type, children, plusRate, name }) => {
  return (
    <Btn name={name} type={type} onClick={plusRate}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
