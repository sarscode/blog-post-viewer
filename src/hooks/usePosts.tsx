import { IPostItem } from 'global';
import { getSinglePost } from 'services/posts.service';
import { usePostContext } from 'context/postContext';
import { useState } from 'react';

function usePosts() {
  const { dispatchPosts, posts, loadingAll } = usePostContext();
  const [loading, setLoading] = useState<boolean>(false);

  async function getPost(id: number) {
    setLoading(true);

    const onSuccess = (response: IPostItem) => {
      dispatchPosts({
        type: 'GET_SINGLE',
        payload: response,
      });
      setLoading(false);
    };

    await getSinglePost(id, onSuccess);
  }

  return {
    posts,
    loading,
    loadingAll,
    getPost,
  };
}

export default usePosts;
