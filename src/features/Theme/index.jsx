import { useStore } from "@/store/index";
import { ThemeProvider } from "styled-components";
import Global from "./components/Global";

const mainProperties = {
  colors: {
    primary: "#1bc95b",
    secondary: "#1595e5",
    danger: "#ff3131",
    success: "#50fa1c",
    white: "#efefef",
    gray: "#d2d2d2"
  },
  values: {
    borderRadius: "15px"
  }
};

const darkTheme = {
  theme: "dark",
  ...mainProperties,
  background: "#2e2e37",
  cardBackground: "#3f4655",
  text: "#f4f4f4"
};

const lightTheme = {
  theme: "light",
  ...mainProperties,
  background: "#f4f4f4",
  cardBackground: "#e0e0e0",
  text: "#2a2a2a"
};

const Theme = ({ children }) => {
  const isDarkTheme = useStore((state) => state.app.darkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Global />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
