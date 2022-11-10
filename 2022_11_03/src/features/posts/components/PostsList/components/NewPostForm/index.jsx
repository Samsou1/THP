import { Button } from "app/components/Button";
import { useAddNewPostMutation } from "features/api/apiSlice";
import { myId } from "features/auth/authSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: flex-end;

  input[type="text"] {
    width: 100%;
    border-radius: 1rem;
    border: none;
    padding: 1.5em;
    margin-bottom: 0.5rem;
  }
`;

const NewPostForm = () => {
  const [text, setText] = useState("");
  const userId = useSelector((state) => myId(state));

  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const handleTextChange = (e) => {
    setText(e.target.value.slice(0, 141));
  }

  const canSave = Boolean(text) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        await addNewPost({ text, user: userId });
        setText("");
      } catch (e) {
        console.error("Error: ", e);
      }
    }
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="postText" hidden>Shmeet :</label>
        <input
          type="text"
          id="postText"
          name="postText"
          placeholder="Qué kia dint'n'esprit ?"
          value={text}
          onChange={handleTextChange}
          autoComplete="off"
        />
        <Button as="input" type="submit" disabled={!canSave} value="Poster le shmeet" />
      </Form>
    </section>
  );
};

export default NewPostForm;
