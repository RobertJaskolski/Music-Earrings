import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Flag from "./Flag";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;
const FooterStyledPhone = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
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
const LiPhone = styled.li`
  display: block;
  margin: 0px 10px 10px 0px;
`;

export default function Footer() {
  const changeFooter = useMediaQuery("(min-width:650px)");

  return (
    <Grid data-test='FooterComponent' item xs={12}>
      <Grid container justify='center'>
        <Grid item sm={10} xs={12}>
          <Line></Line>
        </Grid>
        <Grid item sm={10} xs={12}>
          {changeFooter ? (
            <FooterStyled>
              <span data-test='copyright'>&copy; 2021 Robert Jaskólski</span>
              <span>
                <Ul>
                  <Li>
                    <Flag lang='pl' />
                  </Li>
                  <Li data-test='links'>Github</Li>
                  <Li data-test='links'>Linkedin</Li>
                  <Li data-test='links'>Contact</Li>
                </Ul>
              </span>
            </FooterStyled>
          ) : (
            <FooterStyledPhone>
              <span data-test='copyright'>&copy; 2021 Robert Jaskólski</span>
              <span>
                <Ul>
                  <LiPhone>
                    <Flag lang='pl' />
                  </LiPhone>
                  <LiPhone data-test='links'>Github</LiPhone>
                  <LiPhone data-test='links'>Linkedin</LiPhone>
                  <LiPhone data-test='links'>Contact</LiPhone>
                </Ul>
              </span>
            </FooterStyledPhone>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
