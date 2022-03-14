import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  ENDBAR_HEIGHT,
  NAVBAR_HEIGHT,
  PAGECONTENT_PADDING,
  WINDOW_HEIGHT,
} from "./constants";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import { IconButton, Tooltip } from "@mui/material";
import $ from "jquery";

const SIconButton = styled(IconButton)`
  ${({ isNotLast }) =>
    (isNotLast) &&
      css`
      &:after {
        content: "";
        width: 2px;
        height: 50px;
        top: 40px;
        background-color: #86c3ff;

        /* create a new stacking context */
        position: absolute;
        z-index: -1; /* to be below the parent element */
      }
    `
  }
`;
const ScrollNavigation = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  position: fixed;
  margin-left: 8em;
  height: calc(
    ${WINDOW_HEIGHT}px - ${NAVBAR_HEIGHT}em - ${ENDBAR_HEIGHT}em
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const BlueCircle = styled(CircleIcon)`
  /* =-=-=-=-= Default =-=-=-=-= */
  color: #4abcff;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const BlueUncheckedRadio = styled(RadioButtonUncheckedIcon)`
  /* =-=-=-=-= Default =-=-=-=-= */
  color: #86c3ff;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;

const ScrollJump = ({ arrayOfRefs }) => {
  const [currentPosition, setCurrentPosition] = useState(arrayOfRefs[0].anchor)
  const [currentScroll, setCurrentScroll] = useState(window.scrollY)
  const [isBottom, setIsBottom] = useState(false)
  const [currentRef, setCurrentRef] = useState({
    ref: arrayOfRefs[0],
    index: 0,
  })
  const scrollTo = useCallback(
    (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.scrollTo({
          top: ref.current.offsetTop - 68,
          behavior: "smooth",
        })
      }, 1)
    },
    [currentScroll]
  )

  useEffect(() => {
    let newRef = undefined;
    console.log(arrayOfRefs.map((ref) => ref.anchor.current.offsetTop));
    console.log(currentScroll)
    arrayOfRefs.forEach((ref, index) => {
      if (ref.anchor.current?.offsetTop <= currentScroll + 74) {
        newRef = { ref, index }
      }
    })
    if (!newRef) {
      return
    }
    if (currentRef?.index !== newRef.index) {
      setCurrentRef(newRef)
      setCurrentPosition(newRef.ref.anchor)
    }
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
      setIsBottom(true)
    } else {
      if (isBottom) {
        setIsBottom(false)
      }
    }
  }, [currentScroll, arrayOfRefs, currentRef, isBottom]);

  function logit() {
    setCurrentScroll(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  return (
    <ScrollNavigation>
      {arrayOfRefs.map((ref, index) => {
        return (
          <Tooltip title={ref.title}>
            <SIconButton onClick={() => scrollTo(ref.anchor)} isNotLast={arrayOfRefs.length !== index + 1}>
              {currentPosition === ref.anchor ? (
                <BlueCircle fontSize="medium" />
              ) : (
                <BlueUncheckedRadio fontSize="medium" />
              )}
            </SIconButton>
          </Tooltip>
        )
      })}
    </ScrollNavigation>
  )
}

export default ScrollJump;
