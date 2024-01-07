import { useState, useCallback } from "react";
import styled from "styled-components";

import "./index.css";
import PreloadImages from "./components/PreloadImages";
import Background from "./components/Background";
import Letter from "./components/Letter";
import { CONTENT_PADDING, CARD_MIN_WIDTH } from "./constants";

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const onImagesLoaded = useCallback(() => {
    setImagesLoaded(true);
  }, []);

  return (
    <AppContainer>
      <PreloadImages onLoaded={onImagesLoaded} />
      <Background />
      <AppContent>
        <ContentScroll>{imagesLoaded && <Letter />}</ContentScroll>
      </AppContent>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const AppContent = styled.div`
  isolation: isolate;
  position: absolute;
  inset: 0px;
  overflow: auto;
  padding: 40px ${CONTENT_PADDING}px;
`;

const ContentScroll = styled.div`
  width: max(100%, ${CARD_MIN_WIDTH}px);
  min-height: 100%;
  display: grid;
  place-content: center;
`;

export default App;
