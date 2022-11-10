import TimeAgo from "features/posts/components/TimeAgo";
import { useSelector } from "react-redux";
import { myId, selectAuth } from "features/auth/authSlice";
import { Link } from "react-router-dom";
import EditPostForm from "features/posts/components/EditPostForm";
import { useState } from "react";
import {
  useDeletePostMutation,
  useEditPostMutation,
} from "features/api/apiSlice";
import styled from "styled-components";
import { colors } from "app/abstracts/variables";
import { MutedText } from "app/components/Typography";

const PostCard = styled.article`
  width: 100%;
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
`;

const Username = styled(Link)`
  color: inherit;
  font-weight: bold;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    background-color: transparent;
    border: none;
    color: ${colors["primary"]};
    margin-left: 1em;
    opacity: 0.7;

    &:last-child {
      color: ${colors["red"]};
    }

    &:hover {
      opacity: 1;
    }
  }
`;

const LikeButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    width: 1rem;
    margin-right: 0.5rem;
    fill: ${props => props.liked ? colors["red"] : colors["txt"]};
  }
  
  &:hover path {
    fill: ${colors["red"]};
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const PostExcerpt = ({ post }) => {
  const [edit, setEdit] = useState(false);

  const isAuth = useSelector((state) => selectAuth(state));
  const userId = useSelector((state) => myId(state));

  const [liked, setLiked] = useState(
    post.users_likes.filter((user) => user.id === userId).length > 0
  );

  const [editPost] = useEditPostMutation();
  const [deletePost] = useDeletePostMutation();

  const { id, user, text, like, created_at, modified } = post;

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    deletePost(id);
  };

  const handleLike = () => {
    const newPost = { ...post };

    if (liked) {
      newPost.like--;
      newPost.users_likes = newPost.users_likes.filter(
        (user) => user.id !== userId
      );
    } else {
      newPost.like++;
      newPost.users_likes = newPost.users_likes.concat(userId);
    }

    setLiked(!liked);
    editPost(newPost);
  };

  return (
    <PostCard className="post-excerpt" key={post.id}>
      {isAuth && (
        <CardHeader>
          <Username to={userId === user.id ? "/profile" : `/users/${user.id}`}>
            {user.username}
          </Username>
          <TimeAgo timestamp={created_at} />
        </CardHeader>
      )}
      <p>
        {text}
        {modified && <MutedText><i>&nbsp;(Modifié)</i></MutedText>}
      </p>
      <CardFooter>
        {isAuth &&
          (liked ? (
            <LikeButton type="button" onClick={handleLike} liked>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
              </svg>
              &nbsp;{like}
            </LikeButton>
          ) : (
            <LikeButton type="button" onClick={handleLike}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
              </svg>
              &nbsp;{like}
            </LikeButton>
          ))}
        {userId === user.id && (
          <Actions>
            <button onClick={handleEdit}>Editer</button>
            <button type="button" onClick={handleDelete}>
              Supprimer
            </button>
          </Actions>
        )}
      </CardFooter>
      {!isAuth && <TimeAgo timestamp={created_at} />}
      {edit && <EditPostForm post={post} setEdit={setEdit} />}
    </PostCard>
  );
};

export default PostExcerpt;
