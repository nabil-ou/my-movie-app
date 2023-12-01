import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";

const MediaCard = ({ media }) => {

    let vote = media.vote_average
    let roundedVote = vote.toFixed(1)
    return (
        <div className={styles.card}>
            <Link href={`/movies/${media.id}`}>
                <div className={styles.image}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
                        alt={media.title}
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <p className={styles.vote}>{roundedVote}</p>
                    <h3>{media.title}</h3>
                    <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
                </div>
            </Link>
        </div>
    );
};

export default MediaCard;