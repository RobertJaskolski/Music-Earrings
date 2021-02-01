import React from "react";
import { Grid } from "@material-ui/core";
import LoginButton from "../../components/Nav/LoginButton";
import Logo from "../../components/Nav/Logo";
import SearchInput from "../../components/Nav/SearchInput";

export default function Nav() {
  return (
    <Grid item>
      <nav>
        <Grid container maxWidth={true}>
          <Grid item md={3}>
            <Logo widthLogo="100px" heightLogo="100px" />
          </Grid>
          <Grid item md={6}>
            <SearchInput />
          </Grid>
          <Grid item md={3}>
            <LoginButton />
          </Grid>
        </Grid>
      </nav>
    </Grid>
  );
}
