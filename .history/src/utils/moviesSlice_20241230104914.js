import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export const { addnowPlayingMovies, addTrailerVideos } = moviesSlice.actions;

export default moviesSlice.reducer;
