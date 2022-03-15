import React from "react";
import styled from "styled-components";

const A = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const SAppBar = styled.div`
  background-image: linear-gradient(to right, #0d4073, #65a1dc) !important;
  color: white;
  width: 100%;
  height: 4em;
  background-color: #999999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;
const TextContainer = styled.div`
  color: white;
`;

const EndBar = () => {
  return (
    <SAppBar>
      <TextContainer>
        AIMÉ Melvin ▪ Portfolio &emsp;&emsp; Retrouvez moi sur GitHub ▪{" "}
        <A href="https://github.com/Vaan17" target="_blank" rel="noreferrer">
          https://github.com/Vaan17
        </A>
      </TextContainer>
    </SAppBar>
  );
};

export default EndBar;
