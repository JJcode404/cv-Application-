function Button({
  text,
  backgroundColor = "#FBAF3B",
  color = "black",
  width,
  border,
  fontSize = 18,
  padding,
  handleClick,
  next,
}) {
  text = text || `Next: ${next}`;
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    width: width + "px",
    padding: 10 + "px",
    fontSize: fontSize,
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}

export { Button };
