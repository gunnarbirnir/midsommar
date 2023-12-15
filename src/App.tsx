import styled from "styled-components";

import "./index.css";
import Background from "./components/Background";
import Letter from "./components/Letter";

const App = () => {
  return (
    <AppContainer>
      <Background />
      <AppContent>
        <Letter />
      </AppContent>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const AppContent = styled.div`
  position: absolute;
  inset: 0px;
  display: grid;
  place-items: center;
`;

export default App;
