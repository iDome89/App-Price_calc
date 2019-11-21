import styled, { keyframes } from "styled-components";
/*Animations*/
const fade = keyframes`
   0%{
     opacity:0;
   }
   100%{
     opacity: 1;
   }
`;

const fromBottom = keyframes`
  0%{
    bottom:-2000px;
  }
  100%{
    bottom:0px;
  }
`;
const fromTop = keyframes`
  0%{
    top:-2000px;
  }

  100%{
    top:0px;
  }`;

/* Front Page */
const CoverImage = styled.img`
  margin-top: 1em;
  alt: "cover-image";
  content: url("https://images.unsplash.com/photo-1545138697-45eb2968b249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80");
  box-shadow: 0px 0px 0px 5px rgba(189, 189, 189, 0.57);
  border-radius: 50%;
  width: 12em;
  height: 12em;
  opacity: 0.9;
  animation: 3s ${fade} ease-out;
  @media screen and (max-width: 488px) {
    width: 8em;
    height: 8em;
  }
`;

const FrontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const MainTitle = styled.h1`
  color: #e5e5e5;
  font-size: 3.5rem;
  text-align: center;
  position: relative;
  animation: 1s ${fade} ease-out;
  @media screen and (max-width: 488px) {
    font-size: 2rem;
  }
`;

const SubText = styled.h3`
  color: #e5e5e5;
  max-width: 60vw;
  font-size: 1.5rem;
  text-align: center;
  position: relative;
  animation: 2s ${fade} ease-out;
  @media screen and (max-width: 488px) {
    font-size: 1rem;
  }
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
  position: relative;
  animation: 2s ${fromBottom} forwards;
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
  font-size: 1.2rem;
  color: #c1054a;
  font-weight: bold;
  position: absolute;
  top: 3em;
  left: 2em;
  font-family: "Quicksand", sans-serif;
  text-decoration: none;
  transition-property: all;
  transition-duration: 0.6s;
  animation: 3s ${fade} ease-out;
  :before {
    content: "« Previous Page";
  }
  :hover {
    cursor: pointer;
    color: #630226;
  }
  @media screen and (min-width: 300px) and (max-width: 488px) {
    top: 0.8em;
    left: 0.8em;
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
  transition-property: all;
  transition-duration: 0.6s;
  animation: 3s ${fade} ease-out;
  :hover {
    transform: scale(2);
  }
  :after {
    content: "€";
  }
  @media screen and (min-width: 300px) and (max-width: 488px) {
    top: 1em;
    right: 0.8em;
  }
`;
/* Choices */

const Icon = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  transition-property: all;
  transition-duration: 0.6s;
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
  align-items: center;
`;
const MainText = styled.h1`
  color: #e5e5e5;
  font-size: 3.5rem;
  text-align: center;
  position: relative;
  animation: 1.5s ${fade} ease-out;
  @media screen and (min-width: 300px) and (max-width: 488px) {
    font-size: 2rem;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 2em;
`;
const SelectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 3em;
  margin-left: 3em;
  position: relative;
  position: relative;
  animation: 1.3s ${fromBottom} forwards;
  h6 {
    margin-top: 3em;
  }
  @media screen and (min-width: 300px) and (max-width: 488px) {
    margin: 1em;
  }
`;

const ButtonLabel = styled.h6`
  color: #e5e5e5;
  text-align: center;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
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
`;

const RecapIcon = styled.img`
  margin-top: 1em;
  border-radius: 50%;
  width: 3em;
  height: 3em;
`;
const RecapText = styled(SubText)`
  font-size: 3.2rem;
  position: relative;
  animation: 3s ${fade} ease-out;
`;
const EndPrice = styled.span`
  color: #c1054a;
  position: relative;
  background: none;
  animation: 2s ${fromTop} ease-out;
`;
const RecapSingleSelectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Toggle = styled.span`
  font-size: 1rem;
  text-align: center;
  color: #c1054a;
  font-weight: 600;
  position: relative;
  animation: 3s ${fade} ease-out;
  :hover {
    cursor: pointer;
    color: #630226;
  }
`;
const RecapLabel = styled(ButtonLabel)`
  font-size: 1rem;
`;
const AnswerContainer = styled(RecapContainer)`
  flex-direction: row;
  animation: 3s ${fade} ease-out;
`;
const Answer = styled(ButtonLabel)`
  font-weight: 800;
  color: #28bd43;
  margin-bottom:0;
`;
const Change = styled(Toggle)`
  font-size: 0.8rem;
  text-decoration: none;
  padding-left: 6px;
`;

/* Contact Form */
const Form = styled.form`
  padding-top: 2em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  width: 23em;
  position: relative;
  animation: 3s ${fade} ease-out;
  @media screen and (min-width: 300px) and (max-width: 488px) {
    width: 18em;
  }
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
  padding-bottom: none;
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
