import { Button, Container, PostList } from 'components';
import { useEffect, useState } from 'react';

import { IPostList } from 'global';
import usePosts from 'hooks/usePosts';

const Home = () => {
  const { posts } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState<IPostList | null>(null);
  const [postLimit, setPostLimit] = useState<number>(10);
  const [pagination, setPagination] = useState<{
    start: number;
    limit: number;
  }>({
    start: 0,
    limit: 10,
  });

  useEffect(() => {
    const slicedPosts =
      posts.posts?.slice(pagination.start, pagination.limit) || null;
    setFilteredPosts(slicedPosts);
  }, [pagination.limit, pagination.start, posts.posts]);

  useEffect(() => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      limit: postLimit,
    }));
  }, [postLimit]);

  const handlePagination = (type: 'next' | 'prev') => {
    switch (type) {
      case 'next':
        if (posts.posts && pagination.limit < posts.posts?.length) {
          setPagination({
            start: pagination.start + postLimit,
            limit: pagination.limit + postLimit,
          });
        }
        break;
      case 'prev':
        if (pagination.start > 0) {
          setPagination({
            start: pagination.start - postLimit,
            limit: pagination.limit - postLimit,
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container className="max-w-xl">
      <div className="my-5">
        <div className="flex items-center">
          <label htmlFor="select" className="mr-2">
            Limit:{' '}
          </label>
          <select
            id="select"
            onChange={(e) => setPostLimit(Number(e.target.value))}
            className="border border-gray-600 bg-transparent p-1 rounded-full"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <PostList posts={filteredPosts} />
      <div className="flex justify-between items-center my-6 flex-wrap">
        <Button
          label={`Previous ${postLimit}`}
          onClick={() => handlePagination('prev')}
          disabled={pagination.start <= 0}
        />
        <Button
          label={`Next ${postLimit}`}
          onClick={() => handlePagination('next')}
        />
      </div>
    </Container>
  );
};

export default Home;
