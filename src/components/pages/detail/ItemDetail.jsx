import React, { useEffect } from "react";
import { getItemData } from "../../../api/article";
import { useDispatch, useSelector } from "react-redux";
import { setItemList } from "../../../redux/modules/dataListSlice";
import { useParams } from "react-router-dom";
import { product_img_01 } from "../../../assets/images/sample";

function ItemDetail() {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getItemData(itemId);
        dispatch(setItemList(response.data));
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [dispatch]);

  const itemList = useSelector((state) => state.dataList.itemList);

  return (
    <div>
      <img src={product_img_01} />
      {itemList.brand}
      {itemList.itemName}
      {itemList.price}
      {itemList.content}
    </div>
  );
}

export default ItemDetail;
