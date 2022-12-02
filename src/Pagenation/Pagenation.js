import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductsSlice";

const Pagenation = () => {
  const dispatch = useDispatch();
  const { ProductsArr } = useSelector((state) => state.ProductsSlice);

  useEffect(() => {
    if (ProductsArr.length <= 0) {
      dispatch(getProducts());
    }
  }, [dispatch, ProductsArr]);
  return <>Hello</>;
};

// console.log(3<2<1)

export default Pagenation;
