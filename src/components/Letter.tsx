import styled from "styled-components";

import Card from "./Card";

const Letter = () => {
  return (
    <LetterContainer>
      <Card />
    </LetterContainer>
  );
};

const LetterContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  place-items: center;
`;

export default Letter;
