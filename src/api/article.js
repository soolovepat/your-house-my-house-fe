import api from "./axios";

export const getPosts = async () => {
  const res = await api.get("/home");
  return res;
};

export const getData = async (postId) => {
  const res = await api.get(`/post/${postId}`);
  return res;
};
