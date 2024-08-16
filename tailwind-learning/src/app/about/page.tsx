"use client";
import React, { useEffect, useState } from "react";

import Button from "../components/button";
import Modal from "../components/customModal";
import { Post } from "../../../utils/helpers/postTypes";
import {
  addPost,
  deletePost,
  getPosts,
  updatePost,
} from "../../../utils/helpers/apiService";

const AboutPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const fetchPosts = async (): Promise<void> => {
    try {
      const posts = await getPosts();
      setPosts(posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const handleEdit = async (id: number): Promise<void> => {
    try {
      const updatedPost = {
        title: editTitle,
        body: editDescription,
      };
      const post = await updatePost(id, updatedPost);
      setPosts(posts.map((p) => (p.id === id ? post : p)));
      setEditMode(null);
    } catch (error) {
      console.error(`Failed to update post ${id}:`, error);
    }
  };

  const startEditing = (
    id: number,
    currentTitle: string,
    currentDescription: string
  ): void => {
    setEditMode(id);
    setEditTitle(currentTitle);
    setEditDescription(currentDescription);
  };

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(`Failed to delete post ${id}:`, error);
    }
  };

  const handleAdd = async (): Promise<void> => {
    try {
      const newPost = {
        title: newTitle,
        body: newDescription,
        userId: 1,
      };
      const post = await addPost(newPost);
      setPosts([post, ...posts]);
      setNewTitle("");
      setNewDescription("");
      setModalIsOpen(false);
    } catch (error) {
      console.error("Failed to add new post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>
      <Button
        onClick={() => setModalIsOpen(true)}
        className="bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 px-button-padding py-2 rounded"
      >
        Add New Post
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onConfirm={handleAdd}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
      />
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Title</th>
            <th className="py-2">Body</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">
                {editMode === post.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full border p-1"
                  />
                ) : (
                  post.title
                )}
              </td>
              <td className="border px-4 py-2">
                {editMode === post.id ? (
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="w-full border p-1"
                  />
                ) : (
                  post.body
                )}
              </td>
              <td className="border px-4 py-2 flex gap-2">
                {editMode === post.id ? (
                  <>
                    <Button
                      onClick={() => handleEdit(post.id)}
                      className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 px-button-padding py-2 rounded"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={() => setEditMode(null)}
                      className="bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 px-button-padding py-2 rounded"
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() =>
                        startEditing(post.id, post.title, post.body)
                      }
                      className="bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 px-button-padding py-2 rounded"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(post.id)}
                      className="bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 px-button-padding py-2 rounded"
                    >
                      Delete
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutPage;
