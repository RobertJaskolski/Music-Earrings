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
    color: black;
  }
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

export { Button };
