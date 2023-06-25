const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button className="btns" value={value} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Buttons;
