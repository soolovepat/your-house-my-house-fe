import api from "./api";

export const getDatas = async () => {
  const res = await api.get("/home");
  return res;
};

export const getItemData = async (itemId) => {
  const res = await api.get(`/item/${itemId}`);
  return res;
};
