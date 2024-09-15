import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./reducers/movieSlice";
import PersonSlice from "./reducers/personSlice";
import TvSlice from "./reducers/tvSlice";

export const store = configureStore({
  reducer: {
    movie: MovieSlice,
    person: PersonSlice,
    tv: TvSlice,
  },
});
