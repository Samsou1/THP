import { Button } from "app/components/Button";
import { EditTextArea } from "app/components/Form";
import { useEditPostMutation } from "features/api/apiSlice";
import { useState } from "react";
import styled from "styled-components";

const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.2;
  filter: blur(10px);
`;

const EditForm = styled.form`
  z-index: 99;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
  border-radius: 1rem;
  min-width: 50%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 3rem;
    display: block;
  }

  input[type="submit"] {
    width: fit-content;
  } 
`;

const EditPostForm = ({ post, setEdit }) => {
  const [text, setText] = useState(post.text);

  const [editPost, { isLoading }] = useEditPostMutation();

  const handleTextChange = (e) => {
    setText(e.target.value.slice(0, 141));
  }

  const canSave = Boolean(text) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (canSave) {
      try {
        await editPost({ ...post, text: text, modified: true });
        setEdit(false);
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  }

  return (
    <section>
      <Blocker onClick={() => setEdit(false)} />
      <EditForm onSubmit={handleSubmit}>
        <label htmlFor="postText">Editer le Shmeet</label>
        <EditTextArea
          id="postText"
          name="postText"
          value={text}
          onChange={handleTextChange}
        />
        <Button as="input" type="submit" disabled={!canSave} value="Editer" />
      </EditForm>
    </section>
  );
};

export default EditPostForm;
