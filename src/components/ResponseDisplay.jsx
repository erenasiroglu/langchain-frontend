import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResponseWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const ResponseTitle = styled.h2`
  color: #3A506B;
  margin-bottom: 1rem;
`;

const ResponseContent = styled.p`
  color: #1C2541;
  line-height: 1.6;
`;

const ResponseDisplay = ({ response }) => {
  return (
    <ResponseWrapper>
      <ResponseTitle>AI Response</ResponseTitle>
      <ResponseContent>{response}</ResponseContent>
    </ResponseWrapper>
  );
};

ResponseDisplay.propTypes = {
  response: PropTypes.string.isRequired,
};

export default ResponseDisplay;