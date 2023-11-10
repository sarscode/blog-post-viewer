import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import type { IPostItem, IPostList } from 'global';

import { getPosts } from '../services/posts.service';

type PostsState = { posts: IPostList | null; currentPost: IPostItem | null };

type PostAction =
  | { type: 'GET_ALL'; payload: IPostList | null }
  | { type: 'GET_SINGLE'; payload: IPostItem };

interface IPostContext {
  posts: PostsState;
  loadingAll: boolean;
  dispatchPosts: Dispatch<PostAction>;
}

const PostContext = createContext<IPostContext>({
  posts: { posts: null, currentPost: null },
  loadingAll: false,
  dispatchPosts: () => null,
});

const initialPosts: PostsState = { posts: null, currentPost: null };

function postReducer(state: PostsState, action: PostAction): PostsState {
  switch (action.type) {
    case 'GET_ALL':
      return { ...state, posts: action.payload };
    case 'GET_SINGLE':
      const post = action.payload;
      return { ...state, currentPost: post };
    default:
      return state;
  }
}

function PostContextProvider({ children }: PropsWithChildren) {
  const [posts, dispatchPosts] = useReducer(postReducer, initialPosts);
  const [loadingAll, setLoadingAll] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      setLoadingAll(true);
      const response = await getPosts();
      dispatchPosts({ type: 'GET_ALL', payload: response });
      setLoadingAll(false);
    }
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loadingAll, dispatchPosts }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePostContext() {
  const postContext = useContext(PostContext);
  if (!postContext) {
    throw Error(
      'usePostContext must be used inside within the <PostContext.Provider>',
    );
  }
  return postContext;
}

export default PostContextProvider;
