import React, { useContext } from "react";
import {
  AdminLink,
  CoverImage,
  FrontWrapper,
  MainTitle,
  SubText,
  StartButton
} from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

const Frontpage = () => {
  const context = useContext(PagesContext);
  const handleStart = () => {
    context[2].push("/questions/type");
  };
  const handleAdmin = () => {
    context[2].push("/admin");
  };
  return (
    <FrontWrapper>
      <AdminLink onClick={handleAdmin} />
      <CoverImage />
      <MainTitle>Do you want to know how much an app will cost you?</MainTitle>
      <SubText> If the answer is YES, click on the start button below!</SubText>
      <StartButton onClick={handleStart}>Start!</StartButton>
    </FrontWrapper>
  );
};
export default Frontpage;
