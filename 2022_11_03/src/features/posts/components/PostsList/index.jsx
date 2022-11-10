import { Section } from "app/components/Section";
import { useGetPostsQuery } from "features/api/apiSlice";
import { selectAuth } from "features/auth/authSlice";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import NewPostForm from "./components/NewPostForm";
import PostExcerpt from "./components/PostExcerpt";

const PostsList = () => {
  const isAuth = useSelector((state) => selectAuth(state));

  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const sortedPosts = useMemo(() => {
    console.log(posts);
    const sortedPosts = posts.slice();
    sortedPosts.sort((a, b) => b.created_at.localeCompare(a.created_at));
    return sortedPosts;
  }, [posts]);

  let content;

  if (isLoading) {
    content = "loading";
  } else if (isSuccess) {
    const renderedPosts = sortedPosts.map((post) => (
      <PostExcerpt post={post} key={post.id} />
    ));

    content = renderedPosts;
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <Section>
      <h2>Posts</h2>
      {isAuth && <NewPostForm />}
      {content}
    </Section>
  );
};

export default PostsList;
