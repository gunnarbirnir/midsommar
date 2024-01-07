import { useState, useCallback, useRef, useMemo } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

import cardFront from "../assets/card_front.webp";
import cardBack from "../assets/card_back.webp";
import { useWindowDimensions } from "../hooks";
import {
  CONTENT_PADDING,
  CARD_DEFAULT_WIDTH,
  CARD_MIN_WIDTH,
} from "../constants";

const Card = () => {
  const cardRef = useRef<HTMLImageElement>(null);
  const { width: windowWidth } = useWindowDimensions();
  const [flipCard, setFlipCard] = useState(false);
  const [cardImgRatio, setCardImgRatio] = useState(0);

  const cardWidth = useMemo(() => {
    const availableWidth = windowWidth - CONTENT_PADDING * 2;
    return Math.max(
      Math.min(CARD_DEFAULT_WIDTH, availableWidth),
      CARD_MIN_WIDTH
    );
  }, [windowWidth]);

  const toggleFlipCard = useCallback(
    () => setFlipCard((currentFlip) => !currentFlip),
    []
  );
  const onCardLoad = useCallback(() => {
    if (cardRef.current) {
      const height = cardRef.current.naturalHeight;
      const width = cardRef.current.naturalWidth;
      setCardImgRatio(height / width);
    }
  }, []);

  return (
    <CardContainer
      gyroscope
      glareEnable
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glarePosition="all"
      glareColor="#fffeeb"
      glareMaxOpacity={0.4}
      flipHorizontally={flipCard}
      perspective={2000}
      style={{
        width: cardWidth,
        height: cardWidth * cardImgRatio,
        display: cardImgRatio ? "block" : "none",
      }}
    >
      <CardImg
        ref={cardRef}
        src={cardFront}
        alt="Card Front"
        onClick={toggleFlipCard}
        onLoad={onCardLoad}
      />
      <CardImg
        src={cardBack}
        alt="Card Back"
        className="card-back"
        onClick={toggleFlipCard}
      />
    </CardContainer>
  );
};

const CardContainer = styled(Tilt)`
  position: relative;
  user-select: none;
  box-shadow: 0px 10px 20px 10px hsl(0deg 0% 0% / 0.3);
  transform-style: preserve-3d;
`;

const CardImg = styled.img`
  position: absolute;
  backface-visibility: hidden;
  &.card-back {
    transform: rotateY(180deg);
  }
`;

export default Card;
