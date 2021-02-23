import styled, { css } from "styled-components";

export const Div = styled.div`
  ${({ desktop }) =>
    desktop &&
    css`
      flex-basis: 14%;
    `}
  ${({ desktop }) =>
    !desktop &&
    css`
      flex-basis: 90%;
    `}
  background-color: #1ed760;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;
  max-height: 50px;
  border-radius: 3px;
  opacity: 0.6;
  transition-duration: 300ms;
  :hover {
    opacity: 1;
  }
  svg {
    font-size: 35px;
    transition: all 0.3s linear;
    :hover {
      color: black;
      cursor: pointer;
    }
  }
`;
export const Span = styled.span`
  margin-right: 10px;
`;
export const P = styled.p`
  margin: 0;
  padding: 0;
`;
