import { LogButton, LogInput, LogLink } from "app/components/Form";
import { Section } from "app/components/Section";
import { MutedText } from "app/components/Typography";
import { useLoginUserMutation } from "features/api/apiSlice";
import { authLogin } from "features/auth/authSlice";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = await loginUser({ identifier, password }).unwrap();
      setIdentifier("");
      setPassword("");
      Cookies.set("token", payload.jwt);
      dispatch(authLogin({ userId: payload.user.id }));
      navigate("/");
    } catch (err) {
      console.error("Failed to register user: ", err);
    }
  }

  return (
    <Section>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <MutedText as="label" htmlFor="identifier">Identifiant :</MutedText>
        <LogInput
          type="text"
          id="identifier"
          name="identifier"
          value={identifier}
          onChange={handleIdentifierChange}
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
      <LogLink to="/register">Je n'ai pas encore de compte</LogLink>
    </Section>
  );
};

export default LoginForm;
