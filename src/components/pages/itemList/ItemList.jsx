import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getCategoryData } from "../../../api/article";
import { useState } from "react";
import { setCategoryList } from "../../../redux/modules/categoryListSlice";
import ProductContainer from "../../shared/thumbnailContainer/productContainer/ProductContainer";
import { StContainer } from "../../../styles/Container";
import { StItemList } from "./style";

const ItemList = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const category = params.get("category");

  const [query, setQuery] = useState({
    category: "",
    page: 1,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const updatedQuery = { ...query, category: category, page: 1 };
        setQuery(updatedQuery);
        const response = await getCategoryData(updatedQuery);
        dispatch(setCategoryList(response.items));
        console.log(response.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [category]);

  const itemList = useSelector((state) => state.categoryList.items);
  console.log(itemList);
  return (
    <StContainer>
      <StItemList>
        <p>전체: {itemList.length}개</p>
        {itemList && <ProductContainer itemList={itemList} column={4} />}
      </StItemList>
    </StContainer>
  );
};

export default ItemList;
