import React from 'react'
import SearchResults from "@/app/movies/(search)/SearchResults";

const GenreIdPage = ({ params, searchParams }) => {
    return (
        <SearchResults searchParams={searchParams} genreId={params.id} />
    )
}
export default GenreIdPage