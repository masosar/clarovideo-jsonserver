import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
}

const movieSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        setMovieList: (state, action) => {
            state.list = action.payload
        }
    }
})

//exportamos las acciones para tenerlas disponibles para toda la app
export const { setMovieList } = movieSlice.actions;

//exportamos el reducer para hacerlo disponible para el store
export default movieSlice.reducer;

//El paso siguiente es agregar el reducer a configureStore