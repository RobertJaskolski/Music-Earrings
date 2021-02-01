import React from "react";
import { Grid } from "@material-ui/core";
import LoginButton from "../../components/Nav/LoginButton";
import Logo from "../../components/Nav/Logo";
import SearchInput from "../../components/Nav/SearchInput";

export default function Nav() {
  return (
    <Grid item>
      <nav>
        <Logo widthLogo="100px" heightLogo="100px" />
        <SearchInput />
        <LoginButton />
      </nav>
    </Grid>
  );
}
