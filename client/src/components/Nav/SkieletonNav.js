import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Div } from "../../StyledComponents/GridElements";

export default function SkieletonNav() {
  return (
    <Div data-test='SkieltonNavComponent'>
      <Skeleton data-test='skeleton' variant='rect' width={80} height={50} />
    </Div>
  );
}
