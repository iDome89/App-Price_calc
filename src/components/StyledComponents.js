import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
    font-size:5em;
    border-radius:50%;
    color:#07A0C6;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        color: #0ACEFF;
        }
    :active {
        outline:none;
        transform: translateY(4px);
    }
`;
const CoverImage = styled.img`
    alt:'cover-image';
    content:url('https://images.unsplash.com/photo-1545138697-45eb2968b249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1559&q=80');
    box-shadow: 0px 0px 0px 5px rgba(189,189,189,0.57);
    border-radius:50%;
    width:12em;
    height:12em;
    opacity:0.9;

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
     color:#E5E5E5;
     max-width:80vw;
     font-size:2rem;
     text-align:center;

`
const SubText = styled.h3`
     color:#E5E5E5;
     max-width:60vw;
     font-size:0.8rem;
     text-align:center;

`
const StartButton = styled.button`
    color:#E5E5E5;
    margin-top: 1em;
    background-color: #40C9A2;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px #E5E5E5;
    width: 11em;
    height: 3em;
    font-size:1em;
    font-family: 'Quicksand', sans-serif;
    font-weight:bold;
    :hover {
        transform:scale(1.05);
        cursor: pointer;
  }
    :active {
        background-color: #2D8E73;
        outline:none;
        border:none;
        transform: translateY(4px);
    }

`;

const PreviousPage = styled(Link)`
    color: #C1054A;
    font-weight: bold;
    position: absolute;
    top: 3em;
    left: 4em;
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    &:before {
        content: "« ";
    }
    &:hover {
        color: #630226;
    }
`;
const RouteLink = styled(Link)`
    text-decoration: none;
`

const Pricing = styled.span`
    color: #C1054A;
    font-weight:bold;
    position: absolute;
    top: 3em;
    right: 4em;
        &:after{
            content:'€'
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
    color:#E5E5E5;
    max-width: 80vw;
    font-size: 2rem;
    text-align: center;
    grid-area: title;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 2em;
`;
const SelectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content:center;
    align-items:center;
    margin-right:3em;
    margin-left:3em;
    h6 {
        margin-top: 3em;
    }
`;

const ButtonLabel = styled.h6`
    color:#E5E5E5;
    font-size:0.8em;
    font-family: 'Quicksand', sans-serif;
`;


export {
  Pricing,
  MainWrapper,
  MainText,
  ButtonsWrapper,
  Icon,
  SelectionsContainer,
  ButtonLabel,
  PreviousPage,
  CoverImage,
  FrontWrapper,
  MainTitle,
  SubText,
  StartButton,
  RouteLink
};