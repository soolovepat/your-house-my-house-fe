import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getCategoryData } from "../../../api/article";
import { useState } from "react";
import { setCategoryList } from "../../../redux/modules/categoryListSlice";

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
    <div>
      {itemList.map((item) => (
        <li>{item.itemName}</li>
      ))}
    </div>
  );
};

export default ItemList;
