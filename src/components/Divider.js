import React from "react";
import styled from "styled-components";

import grey from "@material-ui/core/colors/grey";

const Root = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${grey[300]};
`;

export default function Divider() {
  return <Root />;
}
