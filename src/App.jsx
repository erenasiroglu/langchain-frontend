import { useState } from 'react';
import styled from 'styled-components';
import EmbedSection from './components/EmbedSection';
import QuerySection from './components/QuerySection';
import GlobalStyle from './styles/GlobalStyle';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const App = () => {
  const [isEmbedded, setIsEmbedded] = useState(false);

  return (
    <AppWrapper>
      <GlobalStyle />
      <MainContent>
        {!isEmbedded ? (
          <EmbedSection onEmbedComplete={() => setIsEmbedded(true)} />
        ) : (
          <QuerySection />
        )}
      </MainContent>
    </AppWrapper>
  );
};

export default App;