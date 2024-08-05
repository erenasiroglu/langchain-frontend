import { useState } from 'react';
import styled from 'styled-components';
import QueryForm from './QueryForm';
import ResponseDisplay from './ResponseDisplay';
import useApi from '../hooks/useApi';

const Section = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #011e2b;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuerySection = () => {
  const [response, setResponse] = useState('');
  const { loading, error, fetchData } = useApi();

  const handleSubmit = async (query) => {
    const result = await fetchData('/ask', { question: query });
    if (result) {
      setResponse(result.answer);
    }
  };

  return (
    <Section>
      <Title>Ask a Question</Title>
      <QueryForm onSubmit={handleSubmit} />
      {loading && <p>Loading... Please wait.</p>}
      {error && <p>Error: {error}</p>}
      {response && <ResponseDisplay response={response} />}
    </Section>
  );
};

export default QuerySection;