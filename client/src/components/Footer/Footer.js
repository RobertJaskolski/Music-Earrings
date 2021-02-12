import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Line = styled.div`
  background-color: #1ed760;
  height: 2px;
  width: 100%;
  margin-left: 6px;
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
    <Grid data-test='FooterComponent' item xs={12}>
      <Grid container justify='center'>
        <Grid item xs={8}>
          <Line></Line>
        </Grid>
        <Grid item xs={8}>
          <FooterStyled>
            <span data-test='copyright'>&copy; 2021 Robert Jaskólski</span>
            <span>
              <Ul>
                <Li data-test='links'>Github</Li>
                <Li data-test='links'>Linkedin</Li>
                <Li data-test='links'>Contact</Li>
              </Ul>
            </span>
          </FooterStyled>
        </Grid>
      </Grid>
    </Grid>
  );
}
