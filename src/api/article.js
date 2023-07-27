import api from "./api";

export const getDatas = async () => {
  const res = await api.get("/home");
  return res;
};

