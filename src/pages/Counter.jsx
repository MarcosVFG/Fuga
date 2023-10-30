import styles from './Counter.module.css'

export default function Counter ({ number, title }) {
    return (
        <div className={styles.main}>
            <div className={styles.container}> 
                <p>{number}</p>
                <h3>{title}</h3>
            </div>
        </div>
    )
}