import styled, { css } from "styled-components";
export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const H1 = styled.h1`
  transition: all 0.5s ease-out;
  ${({ active }) =>
    active &&
    css`
      font-size: 2.5em;
    `}
  ${({ active }) =>
    !active &&
    css`
      font-size: 0px;
    `}
`;
export const Section = styled.section`
  overflow: hidden;
  transition: transform 0.5s ease-out;
  min-height: 0px;
  transform-origin: top;
  ${({ active }) =>
    active &&
    css`
      min-height: 560px;
      transform: scaleY(1);
    `}
  ${({ active }) =>
    !active &&
    css`
      transform: scaleY(0);
      min-height: 0px;
    `}
`;
