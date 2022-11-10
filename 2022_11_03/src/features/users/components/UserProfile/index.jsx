import { colors } from "app/abstracts/variables";
import { Section } from "app/components/Section";
import { MutedText } from "app/components/Typography";
import { useGetUserQuery } from "features/api/apiSlice";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 0;
  }
`;

const EditLink = styled(Link)`
  color: ${colors["primary"]};
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const Info = styled.div`
  margin: 1rem 0;
`;

const UserProfile = ({ myprofile }) => {
  const params = useParams();
  const myId = useSelector((state) => state.auth.id);

  const userId = myprofile ? myId : params.userId;

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery(userId);

  let content;

  if (isLoading) {
    content = "loading";
  } else if (isSuccess) {
    content = (
      <div className="user-info">
        <ProfileHeader>
          <h2>{myprofile ? "Mon profil" : `Profil de ${user.username}`}</h2>
          {myprofile && <EditLink to="/profile/edit">Editer mes informations</EditLink>}
        </ProfileHeader>
        <MutedText>Nom d'utilisateur</MutedText>
        <Info>{user.username}</Info>
        <MutedText>Description</MutedText>
        <Info>{user.description ?? "Pas de description"}</Info>
      </div>
    )
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <Section>
      {content}
    </Section>
  );
};

export default UserProfile;
