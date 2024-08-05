import { useState } from 'react';
import styled from 'styled-components';
import QueryForm from '../components/QueryForm';
import ResponseDisplay from '../components/ResponseDisplay';
import LoadingSpinner from '../components/LoadingSpinner';
import useApi from '../hooks/useApi';

const HomeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #3A506B;
  text-align: center;
  margin-bottom: 2rem;
`;

const Home = () => {
  const [response, setResponse] = useState('');
  const { loading, error, fetchData } = useApi();

  const handleSubmit = async (query) => {
    const result = await fetchData('/ask', { question: query });
    if (result) {
      setResponse(result.answer);
    }
  };

  return (
    <HomeWrapper>
      <Title>Welcome to LangChain Frontend</Title>
      <QueryForm onSubmit={handleSubmit} />
      {loading && <LoadingSpinner />}
      {error && <p>Error: {error}</p>}
      {response && <ResponseDisplay response={response} />}
    </HomeWrapper>
  );
};

export default Home;