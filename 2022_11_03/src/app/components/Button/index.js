import { colors } from "app/abstracts/variables";
import styled from "styled-components";

export const Button = styled.button`
  padding: 1em 2em;
  border-radius: 1rem;
  border: 2px ${colors["primary"]} solid;
  color: ${colors["primary"]};
  background-color: white;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;
