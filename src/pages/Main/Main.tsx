/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Lists from "../../components/Lists/Lists";
import Time from "../../components/Time/Time";
import { RootState } from "../../store/rootRedusers";
import "./main.scss";

const Main = () => {
  const fullHeigth: number = useSelector(
    (state: RootState) => state.list.fullHeight
  );

  const [maxWidth, setMaxWidth] = React.useState(0);

  const [touchStartX, setTouchStartX] = React.useState(0);
  const [touchStartY, setTouchStartY] = React.useState(0);
  const [touchMoveX, setTouchMoveX] = React.useState(0);
  const [touchMoveY, setTouchMoveY] = React.useState(0);
  const [swipeSize, setSwipeSize] = React.useState(0);
  const [swipeSizeY, setSwipeSizeY] = React.useState(0);

  const [isLeft, setIsLeft] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(true);

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouch, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    setMaxWidth(document.body.clientWidth);
  }, []);
  console.log(maxWidth);

  const handleTouchStart = (e: any) => {
    setIsEnd(false);
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouch = (e: any) => {
    setTouchMoveX(e.touches[0].clientX);
    setTouchMoveY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    setIsEnd(true);
    setTouchStartX(0);
    setTouchMoveX(0);
    setTouchStartY(0);
  };

  useEffect(() => {
    if (touchMoveX === 0 || touchMoveY === 0) return;
    const diffX = touchStartX - touchMoveX;
    const diffY = touchStartY - touchMoveY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (isEnd) {
        if (swipeSize <= -maxWidth / 2 && swipeSize > -maxWidth) {
          setSwipeSize(-maxWidth);
          setIsLeft(false);
        }
        if (swipeSize < 0 && swipeSize > -maxWidth / 2) {
          setSwipeSize(0);
          setIsLeft(true);
        }
      } else {
        if (isLeft && diffX <= 0 && touchStartX + touchMoveX <= maxWidth) {
          setSwipeSize(diffX);
        }
        if (
          !isLeft &&
          touchStartX - touchMoveX <= maxWidth &&
          touchStartX - touchMoveX >= 0
        ) {
          setSwipeSize(-maxWidth + touchStartX - touchMoveX);
        }
      }
    } else {
      const diffY = touchMoveY - touchStartY;
      const clientHeight = document.body.clientHeight;

      if (isEnd || !isLeft) return;
      if (document.body.clientWidth === fullHeigth) return;

      if (isEnd) {
        if (swipeSize <= -maxWidth / 2 && swipeSize > -maxWidth) {
          setSwipeSize(-maxWidth);
          setIsLeft(false);
        }
        if (swipeSize < 0 && swipeSize > -maxWidth / 2) {
          setSwipeSize(0);
          setIsLeft(true);
        }
      }

      if (diffY <= 0 && touchStartY + touchMoveY <= fullHeigth - clientHeight) {
        setSwipeSizeY(diffY);
      }
      if (
        touchStartY - touchMoveY <= fullHeigth - clientHeight &&
        touchStartY - touchMoveY >= 0
      ) {
        setSwipeSizeY(-fullHeigth + clientHeight + touchStartY - touchMoveY);
      }
    }
  }, [touchStartX, touchMoveX, touchStartY, touchMoveY]);

  return (
    <div
      style={{ left: `${swipeSize}px`, top: `${swipeSizeY}px` }}
      className='container'
    >
      <div className='list'>
        <Lists />
      </div>
      <div className='time' style={{ marginTop: `${-swipeSizeY}px` }}>
        <Time />
      </div>
    </div>
  );
};

export default Main;
