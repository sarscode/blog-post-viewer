import { Container, Post, Text } from 'components';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import routes from 'routes';
import usePosts from 'hooks/usePosts';

const PostPage = () => {
  const { getPost, posts } = usePosts();
  const { id } = useParams();
  const [nextPost, setNextPost] = useState<boolean>(true);

  useEffect(() => {
    const postId = id!;
    getPost(Number(postId));
  }, [getPost, id]);

  useEffect(() => {
    if (
      posts.currentPost?.id &&
      posts.currentPost?.id >= 1 &&
      posts.currentPost?.id <= 100
    ) {
      setNextPost(true);
    } else {
      setNextPost(false);
    }
  }, [posts.currentPost]);

  return (
    <Container className="max-w-lg">
      <Post {...posts.currentPost} />
      <footer className="mt-6 flex justify-between flex-wrap">
        {Number(id) > 1 && (
          <Text
            element="span"
            className="self-end hover:underline hover:text-cyan-600 hover:font-medium"
          >
            <Link to={`${routes.posts}/${Number(id) - 1}`}>Previous Post</Link>
          </Text>
        )}
        {nextPost && (
          <Text
            element="span"
            className="self-end hover:underline hover:text-cyan-600 hover:font-medium"
          >
            <Link to={`${routes.posts}/${Number(id) + 1}`}>Next Post</Link>
          </Text>
        )}
      </footer>
    </Container>
  );
};

export default PostPage;
