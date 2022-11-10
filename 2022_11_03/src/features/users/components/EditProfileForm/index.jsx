import { EditDescription, LogButton, LogInput } from "app/components/Form";
import { Section } from "app/components/Section";
import { MutedText } from "app/components/Typography";
import { useEditProfileMutation, useGetUserQuery } from "features/api/apiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProfileForm = () => {
  const myId = useSelector((state) => state.auth.id);

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery(myId);

  const [editProfile]= useEditProfileMutation();

  const [username, setUsername] = useState(user.username);
  const [description, setDescription] = useState(user.description ?? "");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && description) {
      editProfile({ ...user, username, description });
      navigate("/profile");
    }
  }

  let content;

  if (isLoading) {
    content = "loading";
  } else if (isSuccess) {
    content = (
      <form onSubmit={handleSubmit}>
        <MutedText as="label" htmlFor="username">Nom d'utilisateur</MutedText>
        <LogInput
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <MutedText as="label" htmlFor="description">Description</MutedText>
        <EditDescription
          as="textarea"
          name="description"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <LogButton
          as="input"
          type="submit"
          value="Confirmer les changements"
        />
      </form>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }
  
  return (
    <Section>
      <h2>Editer le profil</h2>
      {content}
    </Section>
  );
};

export default EditProfileForm;
