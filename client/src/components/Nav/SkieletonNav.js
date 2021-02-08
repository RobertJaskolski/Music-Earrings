import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Div } from "../../StyledComponents/GridElements";

export default function SkieletonNav() {
  return (
    <Div>
      <Skeleton variant='reckt' width={80} height={50} />
    </Div>
  );
}
