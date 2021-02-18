import styled from "styled-components";

//Flag
export const FlagBox = styled.div`
  width: 30px;
  height: 16px;
  display: inline-block;
  border: "2px solid black";
  transition-duration: 400ms;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

//Footer
export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const Line = styled.div`
  background-color: #1ed760;
  height: 2px;
  width: 100%;
  margin-left: 6px;
  margin-top: 10px;
`;
export const Ul = styled.span`
  list-style-type: none;
`;
export const Li = styled.li`
  display: inline-block;
  margin: 15px;
`;
