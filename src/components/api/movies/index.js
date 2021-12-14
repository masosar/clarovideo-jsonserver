import { setMovieList } from "../../redux/slices/slc_movies";
import axios from "axios";

export const getAllMovies = () => (dispatch) => {
    axios.get('/response')
        .then(resp => {
            //console.log(resp)
            dispatch(setMovieList(resp.data.groups))
        })
        .catch(err => {
            console.error(err)
        })
}