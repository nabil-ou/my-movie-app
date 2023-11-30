import styles from './page.module.css'
import MediaCard from "@/components/Media-card/MediaCard";

export default function Home() {
  return (
    <div className={styles.main}>
      <MediaCard mediaId={10}/>
    </div>
  )
}
