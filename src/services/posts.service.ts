import { IPostItem, IPostList } from 'global';

import axiosClient from './util';

export async function getPosts() {
  const endpoint = '/posts';
  try {
    const posts = await axiosClient.get<IPostList>(endpoint);
    return posts;
  } catch (error) {
    return null;
  }
}

export async function getSinglePost(
  id: number,
  onSuccess: (data: IPostItem) => void,
) {
  const endpoint = `/posts/${id}`;
  try {
    const post = await axiosClient.get<IPostItem>(endpoint);
    onSuccess(post);
    return post;
  } catch (error) {
    return null;
  }
}
