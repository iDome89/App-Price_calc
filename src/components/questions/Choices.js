import React, { useContext } from "react";
import { PagesContext } from "../model/PagesContext";
import {
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel
} from "../StyledComponents";

const Choices = ({ pagename, values }) => {
  const [price, setPrice, history] = useContext(PagesContext);
  const AddPrice = e => {
    values.forEach(element => {
      const newState = price.filter(
        obj => obj.url !== history.location.pathname
      );
      if (element.id === e.target.id) {
        setPrice([
          ...newState,
          {
            icon: element.icon,
            price: element.price,
            url: history.location.pathname,
            name: element.name,
            page: pagename
          }
        ]);
        history.push(element.next);
      }
    });
  };
  return (
    <MainWrapper>
      <MainText>{pagename}</MainText>
      <ButtonsWrapper>
        {values.map(button => (
          <SelectionsContainer key={button.id}>
            <Icon
              onClick={AddPrice}
              src={"/svg-icons/" + button.icon}
              id={button.id}
            />
            <ButtonLabel>{button.name}</ButtonLabel>
          </SelectionsContainer>
        ))}
      </ButtonsWrapper>
    </MainWrapper>
  );
};
export default Choices;
