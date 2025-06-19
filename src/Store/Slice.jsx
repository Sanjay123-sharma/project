import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const ApiData = createAsyncThunk("product", async () => {
  let response = await fetch("/Product.json");
  return response.json();
});
export const Slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    Product: [],
    error: null,
    Cart: [],
    Order: [],
  },
  extraReducers: (boiler) => {
    boiler
      .addCase(ApiData.pending, (state) => {
        state.loading = true;
      })
      .addCase(ApiData.fulfilled, (state, action) => {
        state.loading = false;
        state.Product = action.payload;
      })
      .addCase(ApiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
  reducers: {
    addOrder: (state, action) => {
      let list = state.Product;
      let product = list.find((item) => item.id === action.payload);
      state.Cart.push({
        id: product.id,
        count: 1,
        title: product.title,
        rating: product.rating,
        price: product.price,
        image: product.image,
      });
    },
    removeOrder: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      let list = state.Cart;
      let res = list.find((item) => item.id === action.payload);
      if (res) {
        res.count = res.count + 1;
      }
    },
    decrement: (state, action) => {
      let list = state.Cart;
      let res = list.find((item) => item.id === action.payload);
      if (res) {
        if (res.count <= 1) {
          console.log("value cannot be -ve or 0");
        } else {
          res.count = res.count - 1;
        }
      }
    },
    Orders: (state) => {
      const newOrders = state.Cart.map((item) => ({
        ...item,
        OrderId: Date.now() + Math.floor(Math.random() * 1000),
      }));
      state.Order = [...newOrders, ...state.Order];
    },
    removeAllCart: (state) => {
      state.Cart = [];
    },
    cancelOrder: (state, action) => {
      state.Order = state.Order.filter(
        (item) => item.OrderId !== action.payload
      );
    },
  },
});

export const {
  addOrder,
  removeOrder,
  increment,
  decrement,
  Orders,
  removeAllCart,
  cancelOrder,
} = Slice.actions;
export default Slice.reducer;
