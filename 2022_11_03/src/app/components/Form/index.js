import { colors } from "app/abstracts/variables";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";

export const LogInput = styled.input`
  padding: 1em;
  border: none;
  border-radius: 1rem;
  margin: 1rem 0;
`;

export const LogButton = styled(Button)`
  padding: 0.8em 1.5em;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const LogLink = styled(Link)`
  color: ${colors["primary"]};
`;

export const EditTextArea = styled.textarea`
  max-width: 750px;
  resize: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  padding: 1em;
  flex: 1;
  margin-bottom: 3rem;
`;

export const EditDescription = styled(EditTextArea)`
  width: 100%;
  height: 15rem;
  margin: 1rem 0;
  border: none;
`
