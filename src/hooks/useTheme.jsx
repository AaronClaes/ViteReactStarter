import { useStore } from "../store";

// custom hook to access the current theme and toggle function
const useTheme = () => {
  const updateObject = useStore((state) => state.updateObject);
  const darkTheme = useStore((state) => state.app.darkTheme);

  const toggle = () => {
    updateObject("app", ["darkTheme"], [!darkTheme]);
  };

  return { darkTheme, toggle };
};

export default useTheme;
