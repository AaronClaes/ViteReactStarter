import { Outlet } from "react-router-dom";
import { Wrapper } from "./styles";
import Navigation from "@/features/Navigation";

const Root = () => {
  return (
    <Wrapper>
      <Navigation />
      <Outlet />
    </Wrapper>
  );
};

export default Root;
