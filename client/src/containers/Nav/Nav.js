import React from "react";
import { Grid } from "@material-ui/core";
import LoginButton from "../../components/Nav/LoginButton";
import Logo from "../../components/Nav/Logo";
import SearchInput from "../../components/Nav/SearchInput";

export default function Nav() {
  return (
    <Grid item>
      <nav>
        <Grid container maxWidth={true} spacing={1}>
          <Grid item sm={2}>
            <Logo widthLogo="75px" heightLogo="75px" />
          </Grid>
          <Grid item lg={7} md={6} sm={5}>
            <SearchInput />
          </Grid>
          <Grid item lg={3} md={4} sm={5}>
            <LoginButton />
          </Grid>
        </Grid>
      </nav>
    </Grid>
  );
}
