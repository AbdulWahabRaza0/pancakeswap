import styled from "styled-components";
import { H1Props } from "./PropsInterface";
export const H1 = styled.h1<H1Props>`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.weight || "400"};
  @media only screen and (max-width: 820px) {
    font-size: 15px;
  }
`;
export const P = styled.p`
  color: gray;
  font-weight: 900;
  font-size: 15px;
`;
export const HR = styled.hr``;
