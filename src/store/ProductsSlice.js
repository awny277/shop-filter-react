import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (Pid, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios
        .get(`https://6351a0c99d64d7c71304d214.mockapi.io/Products/${Pid}`)
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    error: null,
    ProductsArr: [],
  },
  extraReducers: {
    //  getOffers
    [getProducts.pending]: (state, action) => {
      console.log(action);
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action);
      if (action.meta.arg === 1) {
        state.ProductsArr = action.payload.Products;
      } else {
        state.ProductsArr = state.ProductsArr.concat(action.payload.Products);
      }
    },
    [getProducts.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default ProductsSlice.reducer;
