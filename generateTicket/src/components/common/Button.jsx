const Button = (prop) => {
  return (
    <button className={`rounded-lg ${prop.className}`} style={{ fontFamily: '"Nanum Myeongjo", serif' }} onClick={prop.handleClick}>
      {prop.text} {prop.icon}
    </button>
  );
};

export default Button;
