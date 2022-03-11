import styled, { css } from "styled-components";
import { Card } from "@mui/material";

export const PageContainer = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  width: 100%;
  height: 100%;
  margin: 4em 0 !important;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const PageContent = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  padding: 3em 10em; */
  background-color: rgb(240, 240, 240);
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const WidthlessPageContent = styled(PageContent)`
  /* =-=-=-=-= Default =-=-=-=-= */
  padding: 3em 32em;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const TinyText = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const BoldText = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  font-weight: bold;
  font-size: 22px;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const Title = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  font-size: 28px;
  font-weight: 600 !important;
  color: rgb(21, 24, 153);
  width: 100%;
  padding-bottom: 0.5em;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const Spacing = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  padding-bottom: ${(props) => props.spacing};
  width: 100%;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const SuperCard = styled(Card)`
  /* =-=-=-=-= Default =-=-=-=-= */
  padding: 2em;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const Flex = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  display: flex;

  /* =-=-=-=-= Direction =-=-=-=-= */
  ${({ flexColumn, rowReverse }) =>
    (flexColumn || rowReverse) &&
    css`
      flex-direction: ${flexColumn
        ? rowReverse
          ? "column-reverse"
          : "column"
        : rowReverse && "row-reverse"};
    `}

  /* =-=-=-=-= Align items =-=-=-=-= */
    ${({
    alignItemsInitial,
    alignItemsCenter,
    alignItemsStart,
    alignItemsEnd,
    alignItemsStretch,
  }) =>
    (alignItemsInitial ||
      alignItemsCenter ||
      alignItemsStart ||
      alignItemsEnd ||
      alignItemsStretch) &&
    css`
      align-items: ${alignItemsInitial
        ? "initial"
        : alignItemsCenter
        ? "center"
        : alignItemsStart
        ? "start"
        : alignItemsEnd
        ? "end"
        : alignItemsStretch && "stretch"};
    `}

    /* =-=-=-=-= Justify content =-=-=-=-= */
    ${({ justifyCenter, spaceBetween, spaceAround, flexEnd }) =>
    (justifyCenter || spaceBetween || spaceAround || flexEnd) &&
    css`
      justify-content: ${justifyCenter
        ? "center"
        : spaceBetween
        ? "space-between"
        : spaceAround
        ? "space-around"
        : flexEnd && "flex-end"};
    `}

    /* =-=-=-=-= Full size =-=-=-=-= */
    ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
    ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `} /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

export const ImageFrame = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  border: 10px outset #d5d5d5;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
