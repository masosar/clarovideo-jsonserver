import { configureStore } from "@reduxjs/toolkit";
//import reducers from the different slices, if they exist...
import moviesSlice from "../slices/slc_movies";

export default configureStore({
    reducer: {
        movies: moviesSlice
    }
})