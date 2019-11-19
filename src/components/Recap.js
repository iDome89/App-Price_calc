import React, { useContext, useState } from "react";
import PreviousPage from "../components/PreviousPage";
import ContactForm from "./ContactForm";
import { PagesContext } from "./model/PagesContext";
import uuid from "uuid";
import {
  RecapText,
  RecapWrapper,
  SubText,
  Toggle,
  RecapLabel,
  RecapIcon,
  RecapContainer,
  RecapSingleSelectionContainer,
  Answer,
  Change,
  AnswerContainer,
  EndPrice
} from "./StyledComponents";

function Recap() {
  const context = useContext(PagesContext);
  const [show, setShow] = useState({ toggle: false });
  const sortedPrice = context[0].sort(function(a, b) { 
    return a.order- b.order;
    })
  const handleShow = () => {
    setShow({ toggle: !show.toggle });
  };
  const handleChange = e => {
    context[0].forEach(element => {
      if (element.id === e.target.id) {
        context[2].push(`${element.url}/edit`);
      }
    });
  };

  return (
    <RecapWrapper>
      <PreviousPage />
      <RecapText>
        Your Estimated end price is: <EndPrice>{context[3]}€</EndPrice>
      </RecapText>
      {show.toggle &&
        sortedPrice.map(selection => (
          <>
            <RecapContainer id={uuid()}>
              <RecapSingleSelectionContainer id={uuid()}>
                <RecapIcon src={"/svg-icons/" + selection.icon} />
                <AnswerContainer id={uuid()}>
                  <RecapLabel id={uuid()}>{selection.page}</RecapLabel>
                  <Answer id={uuid()}>
                    {selection.name}
                    <Change onClick={handleChange} id={selection.id}>
                      (Change)
                    </Change>
                  </Answer>
                </AnswerContainer>
              </RecapSingleSelectionContainer>
            </RecapContainer>
          </>
        ))}

      <Toggle onClick={handleShow}>
        {show.toggle ? "(Hide Recap)" : "(Show Recap)"}
      </Toggle>
      <SubText>
        You can Contact us using the form below and we will bring your project
        to life together!
      </SubText>
      <ContactForm />
    </RecapWrapper>
  );
}
export default Recap;
