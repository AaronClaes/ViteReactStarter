import { Wrapper } from "./styles";

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;
