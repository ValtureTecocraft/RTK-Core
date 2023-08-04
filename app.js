import rtk from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

// Initialize states
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// create Async Thunk
const fetchPost = rtk.createAsyncThunk("posts/fetchPosts", async () => {
  const data = axios.get(API);
  return (await data).data; //for grabing data only
});

// slice
const postSlice = rtk.createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    // handle lifecycle: pending-success  &  reject

    //Pending
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
    });

    //Success / fullfiled
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });

    //Rejected
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const postReducer = postSlice.reducer;
//store
const store = rtk.configureStore({
  reducer: postReducer,
});

//dispatch
store.dispatch(fetchPost());

store.subscribe(() => {
  console.log(store.getState());
});
