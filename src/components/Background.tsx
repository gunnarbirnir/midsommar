import styled from "styled-components";

import flowersImg from "../assets/flowers.webp";

const Background = () => {
  return (
    <BackgroundContainer>
      <Flowers />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: hsl(0deg 100% 100%);
`;

const Flowers = styled.div`
  position: absolute;
  inset: 0px;
  opacity: 0.3;
  background-image: url(${flowersImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Background;
