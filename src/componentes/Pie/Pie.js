import styles from './Pie.module.css'
import logo from "./logo.png"
function Pie() {
    return (
        <footer className={styles.container}>
            <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo aluraflix" />
                </section>
        </footer>
    )
}

export default Pie;
