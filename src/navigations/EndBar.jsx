import React from "react";
import styled from "styled-components";

const SAppBar = styled.div`
  background-image: linear-gradient(to right, #0d4073, #65a1dc) !important;
  color: white;
  width: 100%;
  height: 2em;
  background-color: #999999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10000;
`;

const EndBar = () => {
  return <SAppBar />;
};

export default EndBar;
