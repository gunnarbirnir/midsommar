import styled from "styled-components";

import flowersImg from "../assets/flowers.webp";

const Background = () => {
  return <Flowers />;
};

const Flowers = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.3;
  background-image: url(${flowersImg});
  background-color: hsl(0deg 100% 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Background;
