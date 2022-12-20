import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { Wrapper } from "./styles";

const Root = () => {
  return (
    <Wrapper>
      <Navigation />

      <Outlet />
    </Wrapper>
  );
};

export default Root;
