import axios from 'src/config/axios/axios';
import { CreatePost } from 'src/models/CreatePost';
import { Post } from 'src/models/Post';

export const getAllPosts = async () => {
  return await axios.get('posts');
};

export const getPostById = async (id: number) => {
  return await axios.get(`posts/${id}`);
};

export const createPost = async (createPost: CreatePost) => {
  return await axios.post('posts', createPost);
};

export const updatePost = async (id: number, post: Post) => {
  return await axios.put(`posts/${id}`, post);
};
