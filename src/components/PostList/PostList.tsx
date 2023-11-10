import { Container, PostItem } from 'components';

import { IPostList } from 'global';

interface PostListProps {
  posts: IPostList | null;
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <Container className="max-w-lg">
      {posts?.map((post) => (
        <PostItem
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
          key={post.id}
        />
      ))}
    </Container>
  );
};

export default PostList;
