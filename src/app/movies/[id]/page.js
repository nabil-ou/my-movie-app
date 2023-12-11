import React from "react";
import {getMovieByPath} from "@/utils/movieClient";
import {notFound} from "next/navigation";
import MovieDetails from "@/components/movie-details/MovieDetails";

export const dynamic = "force-static";
export const revalidate = 3600;

const MovieIdPage = async ({ params }) => {
    const movie = await getMovieByPath(`/movie/${params.id}`)

    if (!movie.original_title) {
        return notFound()
    }
    return (
        <div>
            <MovieDetails movie={movie} />
        </div>
    );
};

export default MovieIdPage;