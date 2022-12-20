import Button from "@/components/Button";
import { useStore } from "@/store/index";
import { Wrapper } from "./styles";

const ThemeToggle = () => {
  const updateObject = useStore((state) => state.updateObject);
  const darkTheme = useStore((state) => state.app.darkTheme);

  const handleToggleTheme = () => {
    updateObject("app", ["darkTheme"], [!darkTheme]);
  };

  return (
    <Wrapper>
      <h3 className="toggle_card-title">Toggle Theme</h3>
      <Button onClick={handleToggleTheme}>Switch</Button>
    </Wrapper>
  );
};

export default ThemeToggle;
