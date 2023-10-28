import { createSlice } from "@reduxjs/toolkit";

/* export const getGenreList = createAsyncThunk(
  "fetch/genres",
  async (apiEndPoint: string) => {
    const res = await requestApi.get();
    return res.data.results;
  }
); */

export type Genres = {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background: string;
  released?: string;
  background_image?: string;
  metacritic?: number;
  rating?: number;
  reviews_count?: number;
  suggestions_count?: number;
};

// export type GenresApi = {};

const initialState = {};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},

  extraReducers: () => {},
});
// export const {  } = apiSlice.actions;
export default apiSlice.reducer;
