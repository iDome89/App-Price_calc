import React, { useEffect, useContext } from "react";
import { FrontWrapper, MainTitle, SubText } from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

const ConfirmPage = () => {
  const context = useContext(PagesContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      context[2].push("/");
    }, 2300);
    return () => clearTimeout(timer);
  });

  return (
    <FrontWrapper>
      <MainTitle>Thank you for Contacting us!</MainTitle>
      <SubText>We'll reply as soon as possible! ❤</SubText>
    </FrontWrapper>
  );
};
export default ConfirmPage;
