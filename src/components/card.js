import styles from "../styles/card.module.css"
import Link from "next/link"

export default function Card({ title, image, link="#" }) {
    return (
        <div className={styles.card}>
            <img src={image} className={styles.image}></img>
            <h3 className={styles.title}><Link href={"/"}>{title}</Link></h3>
        </div>
    )
}