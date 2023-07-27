import api from "./api";
import axios from 'axios';

export const getDatas = async () => {
  const res = await api.get("/home");
  return res;
};


/** 집들이 아티클 리스트 가져오기
 * @params {object} query - 필터
 */
export const getArticleList = async (query) => {
  const params = { params : { ...query }};
  console.log("params", params);
  try{
    const res = await api.get("/article", params);
    return res;
  } catch (err) {
    throw err;
  }
};

/** 집들이 상세페이지 */
export const getArticlePage = async (id) => {
  try {
    const res = await api.get(`/article/${id}`);
    return res;
  } catch (err) {
    throw err;
  }
};