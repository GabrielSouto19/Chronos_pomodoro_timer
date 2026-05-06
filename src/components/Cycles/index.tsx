import styles from './styles.module.css'

export function Cycles() {
    return <div className={styles.cycles}>
        <span>Ciclos: </span>

        <div className={styles.cycleDots}>
            <div className={styles.cycleDot}></div>
            <div className={styles.cycleDot}></div>
            <div className={styles.cycleDot}></div>
            <div className={styles.cycleDot}></div>
        </div>

    </div>

}
