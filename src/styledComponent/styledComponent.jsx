import styled, { css } from "styled-components";
import { Button, Card } from "@mui/material";

const parseUnit = ({
  unit,
  defaultUnit,
}) => {
  switch (typeof unit) {
      case 'number':
          return `${unit}em`
      case 'string':
          return unit
      case 'boolean':
          return unit ? defaultUnit : 0
      default:
          return 0
  }
}

export const PageContainer = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  width: 100%;
  height: 100%;
  margin: 4em 0 2em 0 !important;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
export const PageContent = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  ${({ widthless, extrawidth }) =>
    (widthless || extrawidth) &&
    widthless ?
    css`
      padding: 3em 22vw;
    `
    : extrawidth
    ? css`
      padding: 3em 3vw;
    `
    : css`
      padding: 3em 10em;
      `
    }
    background-color: rgb(240, 240, 240);
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
export const SubTitle = styled(Title)`
  /* =-=-=-=-= Default =-=-=-=-= */
  font-size: 22px;
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
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px !important;
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

    /* =-=-=-=-= Gap =-=-=-=-= */
    ${({ gap }) =>
        gap &&
        css`
            gap: ${parseUnit({ unit: gap, defaultUnit: '1rem' })};
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
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px !important;
  width: ${(props) => props.width};
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
export const StyledButton = styled(Button)`
  /* =-=-=-=-= Default =-=-=-=-= */
  background-color: white !important;
  border: 2px solid #4abcff !important;
  color: #4abcff !important;
  margin: 0 .5em !important;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`