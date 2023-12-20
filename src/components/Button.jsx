const Button = ({ sign, counter, setCounter, className }) => {
  // Gestion du click
  const handleClick = (e) => {
    e.stopPropagation();
    if (sign === "Reset") {
      return setCounter(0);
    }
    sign === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <button className={className} onClick={handleClick}>
      {sign}
    </button>
  );
};

export default Button;
