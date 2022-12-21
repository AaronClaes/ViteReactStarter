import useTheme from "@/hooks/useTheme";
import { Wrapper } from "./styles";

const ThemeToggle = () => {
  const { darkTheme, toggle } = useTheme();
  return (
    <Wrapper active={darkTheme} onClick={toggle}>
      <div className="dot" />
    </Wrapper>
  );
};

export default ThemeToggle;
