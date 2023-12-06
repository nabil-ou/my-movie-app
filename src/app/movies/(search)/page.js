import React from 'react'
import SearchResults from "@/app/movies/(search)/SearchResults";

const MoviesPage = ({ searchParams}) => {
    return (
        <SearchResults searchParams={searchParams}/>
    )
}
export default MoviesPage
