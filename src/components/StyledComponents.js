import styled from "styled-components";
/* Front Page */
const CoverImage = styled.img`
  alt: "cover-image";
  content: url("https://images.unsplash.com/photo-1545138697-45eb2968b249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80");
  box-shadow: 0px 0px 0px 5px rgba(189, 189, 189, 0.57);
  border-radius: 50%;
  width: 12em;
  height: 12em;
  opacity: 0.9;
`;
const FrontWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: #070707;
`;
const MainTitle = styled.h1`
  color: #e5e5e5;
  max-width: 80vw;
  font-size: 2rem;
  text-align: center;
`;
const SubText = styled.h3`
  color: #e5e5e5;
  max-width: 60vw;
  font-size: 1rem;
  text-align: center;
`;
const StartButton = styled.button`
  color: #e5e5e5;
  margin-top: 2em;
  margin-bottom: 1em;
  background-color: #28bd43;
  border: none;
  outline: none;
  border-radius: 25px;
  width: 11em;
  height: 3em;
  font-size: 1em;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  &:active {
    background-color: #1b822e;
    transform: translateY(4px);
    box-shadow: 0 5px #28bd43;
  }
`;
/* Prev, Restart, Price */
const Previous = styled.span`
  color: #c1054a;
  font-weight: bold;
  position: absolute;
  top: 3em;
  left: 2em;
  font-family: "Quicksand", sans-serif;
  text-decoration: none;
  :before {
    content: "« Previous Page";
  }
  :hover {
    cursor: pointer;
    color: #630226;
  }
`;

const Restart = styled(Previous)`
  :before {
    content: "« Restart";
  }
`;

const Pricing = styled.span`
  color: #c1054a;
  font-weight: bold;
  position: absolute;
  top: 3em;
  right: 2em;
  :after {
    content: "€";
  }
`;
/* Choices */

const Icon = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    transform: scale(1.3);
  }
  :active {
    outline: none;
    transform: translateY(4px);
  }
`;
const MainWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: #070707;
`;
const MainText = styled.h1`
  color: #e5e5e5;
  max-width: 80vw;
  font-size: 2rem;
  text-align: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 2em;
  max-width: 100vw;
`;
const SelectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-right: 3em;
  margin-left: 3em;
  h6 {
    margin-top: 3em;
  }
`;

const ButtonLabel = styled.h6`
  color: #e5e5e5;
  text-align: center;
  font-size: 0.8em;
  font-family: "Quicksand", sans-serif;
  width: 100%;
`;

/* Recap */
const RecapWrapper = styled(FrontWrapper)`
  margin-top: 5em;
  justify-content: flex-start;
`;
const RecapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const RecapIcon = styled.img`
  border-radius: 50%;
  width: 3em;
  height: 3em;
`;
const RecapText = styled(SubText)`
  font-size: 1.5rem;
`;
const EndPrice = styled.span`
  color: #c1054a;
`;
const RecapSingleSelectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Toggle = styled.span`
  max-width: 50vw;
  font-size: 0.8rem;
  text-align: center;
  color: #c1054a;
  font-weight: 600;
  :hover {
    cursor: pointer;
    color: #630226;
  }
`;
const RecapLabel = styled(ButtonLabel)`
  font-size: 0.7rem;
`;
const AnswerContainer = styled(RecapContainer)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const Answer = styled(ButtonLabel)`
  margin-top: -3px;
  font-weight: 800;
  color: #28bd43;
`;
const Change = styled(Toggle)`
  font-size: 0.5rem;
  text-decoration: none;
  margin-top: auto;
  margin-left: 6px;
`;

/* Contact Form */
const Form = styled.form`
  margin-top: 3em;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  width: 23em;
`;
const FormLabel = styled.label`
  font-family: "Quicksand", sans-serif;
  color: #c1054a;
`;
const FormInput = styled.input`
  color: #e5e5e5;
  margin-top: 10px;
  font-family: "Quicksand", sans-serif;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #c1054a;
`;
const FormTextArea = styled.textarea`
  color: #e5e5e5;
  margin-top: 10px;
  font-family: "Quicksand", sans-serif;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #c1054a;
  resize: none;
`;
const FormSubmit = styled(FormInput)`
  border-bottom: none;
  background-color: #28bd43;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  width: 8em;
  height: 2em;
  border: none;
  outline: none;
  align-self: center;
  border-radius: 25px;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  &:active {
    background-color: #1b822e;
    transform: translateY(4px);
    box-shadow: 0 5px #28bd43;
  }
`;
const Error = styled.span`
  color: red;
  font-size: 0.7rem;
  font-family: "Quicksand", sans-serif;
  :before {
    content: "❗ ";
  }
`;

export {
  Error,
  Form,
  FormTextArea,
  FormInput,
  FormLabel,
  FormSubmit,
  EndPrice,
  AnswerContainer,
  Change,
  Answer,
  RecapLabel,
  RecapSingleSelectionContainer,
  RecapContainer,
  Toggle,
  RecapText,
  RecapIcon,
  RecapWrapper,
  Pricing,
  Restart,
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel,
  Previous,
  CoverImage,
  FrontWrapper,
  MainTitle,
  SubText,
  StartButton
};
