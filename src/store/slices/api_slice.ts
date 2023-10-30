import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi } from "../../services/global_api";
import { GET_TRENDING_VIDEOS } from "../../services/endpoints";

export const getTrendingVideos = createAsyncThunk("fetch/genres", async () => {
  const res = await requestApi.get(
    `${GET_TRENDING_VIDEOS}?api_key=${import.meta.env.VITE_API_KEY}`
  );

  return res.data.results;
});

type TrendingVideosType = {
  backdrop_path: string;
  id?: number;
};

type ApiType = {
  loading: boolean;
  trendingVideos: TrendingVideosType[];
  error?: string;
};

const initialState: ApiType = {
  loading: false,
  trendingVideos: [],
  error: "",
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTrendingVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrendingVideos.fulfilled, (state, action) => {
      state.trendingVideos = action.payload;
    });
    builder.addCase(getTrendingVideos.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
// export const {  } = apiSlice.actions;
export default apiSlice.reducer;
