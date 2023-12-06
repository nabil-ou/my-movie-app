import Popular from "@/components/popular/Popular";
import styles from "./page.module.css";
import Genres from "@/components/Genres/Genres";

export default function Home() {
    return (
        <div className={styles.main}>
            <Popular />
            <Genres />
        </div>
    );
}
