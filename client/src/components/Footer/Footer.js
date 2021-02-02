import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  font-family: "Roboto";
  justify-content: space-between;
  align-items: center;
`;
const Line = styled.div`
  background-color: #1ed760;
  height: 1px;
  width: 100%;
`;
const Ul = styled.span`
  list-style-type: none;
`;
const Li = styled.li`
  display: inline-block;
  margin: 15px;
`;

export default function Footer() {
  return (
    <Grid item xs={12}>
      <Grid container justify='center'>
        <Grid item xs={8}>
          <Line></Line>
        </Grid>
        <Grid item xs={8}>
          <FooterStyled>
            <span>&copy; 2021 Robert Jaskólski</span>
            <span>
              <Ul>
                <Li>Github</Li>
                <Li>Linkedin</Li>
                <Li>Contact</Li>
              </Ul>
            </span>
          </FooterStyled>
        </Grid>
      </Grid>
    </Grid>
  );
}
