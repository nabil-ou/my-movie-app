import React from 'react'
import styles from './Header.module.scss'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <p>

                    <Link href="/">MyMovieApp</Link>
                </p>
            </div>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li><Link href="/series">Series</Link></li>
                        <li><Link href="/movies">Films</Link></li>
                    </ul>
                </nav>
            </div>
            <input type='text' placeholder='Rechercher un titre ...' />
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    )
}
export default Header
