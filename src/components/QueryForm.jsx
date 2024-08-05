import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #00674a;
  border-radius: 4px;
  width: 400px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #011e2b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 400px;

  &:hover {
    background-color: #00674a;
  }
`;

const QueryForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask your question..."
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

QueryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default QueryForm;
