import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi } from "../../services/global_api";
import { GET_TRENDING_VIDEOS } from "../../services/endpoints";

export const getTrendingVideos = createAsyncThunk(
  "fetch/trendingVideos",
  async () => {
    const res = await requestApi.get(
      `${GET_TRENDING_VIDEOS}?api_key=${import.meta.env.VITE_API_KEY}`
    );

    return res.data.results;
  }
);
export const getGenresById = createAsyncThunk(
  "fetch/genres",
  async (id: string) => {
    const res = await requestApi.get(
      `/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&with_genres=${id}`
    );

    return res.data.results;
  }
);
///discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

type TrendingVideosType = {
  backdrop_path: string;
  id?: number;
};
export type GenresByIdType = {
  id: number;
  poster_path: string;
  backdrop_path?: string;
  title?: string;
};

type ApiType = {
  loading: boolean;
  trendingVideos: TrendingVideosType[];
  genresByIdList: GenresByIdType[];
  error?: string;
};

const initialState: ApiType = {
  loading: false,
  trendingVideos: [],
  genresByIdList: [],
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
      state.loading = false;
    });
    builder.addCase(getTrendingVideos.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(getGenresById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGenresById.fulfilled, (state, action) => {
      state.genresByIdList = action.payload;
      state.loading = false;
    });
    builder.addCase(getGenresById.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
// export const {  } = apiSlice.actions;
export default apiSlice.reducer;
