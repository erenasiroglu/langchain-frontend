import styled from "styled-components";
import PropTypes from "prop-types";
import useApi from "../hooks/useApi";

const Section = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  color: #011e2b;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #011e2b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 1rem;

  &:hover {
    background-color: #00674a;
  }
`;

const EmbedSection = ({ onEmbedComplete }) => {
  const { loading, error, fetchData } = useApi();

  const handleEmbed = async (type) => {
    const endpoint =
      type === "text" ? "/loadTextEmbeddings" : "/loadPdfEmbeddings";
    const result = await fetchData(endpoint);
    if (result && result.message === "Text embeddings loaded successfully.") {
      onEmbedComplete();
    }
  };

  return (
    <Section>
      <Title>Embed Document</Title>
      <Button onClick={() => handleEmbed("text")} disabled={loading}>
        Embed Text
      </Button>
      <Button onClick={() => handleEmbed("pdf")} disabled={loading}>
        Embed PDF
      </Button>
      {loading && <p>Loading... Please wait.</p>}
      {error && <p>Error: {error}</p>}
    </Section>
  );
};

EmbedSection.propTypes = {
  onEmbedComplete: PropTypes.func.isRequired,
};

export default EmbedSection;
