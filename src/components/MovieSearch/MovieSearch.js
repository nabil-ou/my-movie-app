"use client"

import {useState} from "react";
import {DebounceInput} from "react-debounce-input";
import MovieSearcResults from "@/components/MovieSearchResults/MovieSearcResults";
import styles from "./MovieSearch.module.scss"

const MovieSearch = () => {
    const [movieResults, setMovieResults] = useState([])
    const [hasFocus, setHasFocus] = useState(false)
    const updateMovieSearch = async (query) => {
        const response = await fetch(`/api/movies/search?query=${query}`);
        const { results } = await response.json();

        setMovieResults(results.filter((movie) => movie.backdrop_path))
    }

    return (
        <div className={styles.searchContainer}>
            <DebounceInput
                minLength={2}
                debounceTimeout={500}
                placeholder='Rechercher un titre ...'
                onChange={e => updateMovieSearch(e.target.value)}
                onBlur={() => setHasFocus(false)}
                onFocus={() => setHasFocus(true)}
            />
            {movieResults.length > 0 && hasFocus && <MovieSearcResults movieResults={movieResults}/>}
        </div>
    )
}
export default MovieSearch
