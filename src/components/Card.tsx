import { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

import cardFront from "../assets/card_front.webp";
import cardBack from "../assets/card_back.webp";

const CARD_WIDTH = 450;
const TRANSITION_DURATION = 400;

const Letter = () => {
  const cardRef = useRef<HTMLImageElement>(null);
  const [flipCard, setFlipCard] = useState(false);
  const [flipInProgress, setFlipInProgress] = useState(false);
  const [cardImgRatio, setCardImgRatio] = useState(0);

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

  useEffect(() => {
    setFlipInProgress(true);

    const flipTimeout = setTimeout(() => {
      setFlipInProgress(false);
    }, TRANSITION_DURATION - 100);

    return () => {
      clearTimeout(flipTimeout);
    };
  }, [flipCard]);

  return (
    <Tilt
      gyroscope
      glareEnable
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glarePosition="all"
      glareColor="#fffeeb"
      glareMaxOpacity={flipInProgress ? 0 : 0.4}
      style={{
        width: CARD_WIDTH,
        height: CARD_WIDTH * cardImgRatio,
        perspective: 2000,
      }}
    >
      <CardContainer
        style={{ transform: flipCard ? "rotateY(180deg)" : undefined }}
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
    </Tilt>
  );
};

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  user-select: none;
  box-shadow: 0px 10px 20px 10px hsl(0deg 0% 0% / 0.3);
  transform-style: preserve-3d;
  transition-duration: ${TRANSITION_DURATION}ms;
  transition-timing-function: cubic-bezier(0.03, 0.98, 0.52, 0.99);
`;

const CardImg = styled.img`
  position: absolute;
  backface-visibility: hidden;
  &.card-back {
    transform: rotateY(180deg);
  }
`;

export default Letter;
