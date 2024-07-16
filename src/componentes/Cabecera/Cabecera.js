import styles from "./Cabecera.module.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo aluraflix" />
                </section>
            </Link>
            <div className={styles.Buttons}>
                <Link to="/" className={styles.button}>HOME</Link>
                <Link to="/NuevoVideo" className={styles.button}>NUEVO VIDEO</Link>
            </div>
        </header>
    )
}

export default Cabecera