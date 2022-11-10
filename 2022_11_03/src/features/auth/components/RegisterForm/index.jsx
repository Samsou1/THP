import { LogButton, LogInput, LogLink } from "app/components/Form";
import { Section } from "app/components/Section";
import { MutedText } from "app/components/Typography";
import { useRegisterUserMutation } from "features/api/apiSlice";
import { authLogin } from "features/auth/authSlice";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = await registerUser({ username, email, password }).unwrap();
      setUsername("");
      setPassword("");
      setEmail("");
      Cookies.set("token", payload.jwt);
      dispatch(authLogin({ userId: payload.user.id }));
      navigate("/");
    } catch (err) {
      console.error("Failed to register user: ", err);
    }
  }

  return (
    <Section>
      <h2>S'enregistrer</h2>
      <form onSubmit={handleSubmit}>
        <MutedText as="label" htmlFor="username">Nom d'utilisateur :</MutedText>
        <LogInput
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <MutedText as="label" htmlFor="email">Email</MutedText>
        <LogInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <MutedText as="label" htmlFor="password">Mot de passe :</MutedText>
        <LogInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LogButton
          as="input"
          type="submit"
          value="Lezgo !"
        />
      </form>
      <LogLink to="/login">J'ai déjà un compte</LogLink>
    </Section>
  );
};

export default RegisterForm;
