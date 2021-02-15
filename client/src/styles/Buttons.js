import styled from "styled-components";

const Button = styled.button`
  background-color: #1ed760;
  color: #fff;
  border: 1px solid #1db954;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  transition-duration: 0.5s;
  display: flex;
  align-items: center;
  margin-left: 15px;
  &:hover {
    border-color: #1ed760;
    background-color: #1db954;
    cursor: pointer;
  }
`;

export { Button };
