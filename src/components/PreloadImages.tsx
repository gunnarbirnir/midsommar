import { FC, useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import cardFront from "../assets/card_front.webp";
import cardBack from "../assets/card_back.webp";

const IMAGES = [cardFront, cardBack];

interface PreloadImagesProps {
  onLoaded: () => void;
}

const PreloadImages: FC<PreloadImagesProps> = ({ onLoaded }) => {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  const onImageLoad = useCallback((img: string) => {
    setLoaded((current) => ({ ...current, [img]: true }));
  }, []);

  useEffect(() => {
    if (Object.keys(loaded).length === IMAGES.length) {
      onLoaded();
    }
  }, [loaded, onLoaded]);

  return IMAGES.map((img) => (
    <PreLoadImg key={img} src={img} onLoad={() => onImageLoad(img)} />
  ));
};

const PreLoadImg = styled.img`
  display: none;
`;

export default PreloadImages;
