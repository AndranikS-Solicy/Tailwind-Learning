import axiosInstance from "../axiosInstance";
import { Post } from "./postTypes";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await axiosInstance.get<Post[]>("/posts?_limit=20");
    return res.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
};

export const updatePost = async (
  id: number,
  updatedPost: { title: string; body: string }
): Promise<Post> => {
  try {
    const res = await axiosInstance.put<Post>(`/posts/${id}`, updatedPost);
    return res.data;
  } catch (error) {
    console.error(`Failed to update post ${id}:`, error);
    throw error;
  }
};

export const deletePost = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`/posts/${id}`);
  } catch (error) {
    console.error(`Failed to delete post ${id}:`, error);
    throw error;
  }
};

export const addPost = async (newPost: {
  title: string;
  body: string;
  userId: number;
}): Promise<Post> => {
  try {
    const res = await axiosInstance.post<Post>("/posts", newPost);
    return res.data;
  } catch (error) {
    console.error("Failed to add new post:", error);
    throw error;
  }
};
