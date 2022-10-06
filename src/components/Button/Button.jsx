export const Button = ({ type, children, plusRate, name }) => {
  return (
    <>
      <button name={name} type={type} onClick={plusRate}>
        {children}
      </button>
    </>
  );
};
