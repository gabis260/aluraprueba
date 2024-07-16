import styles from "./banner.module.css"


function Banner({ color }) {
    return (
        <div className={styles.capa} style={{ backgroundImage: `url("/img/banner.png")` }}>
            <div className={styles.gradient} style={{ background: `${color}` }}></div>
            <div className={styles.card} style={{ backgroundImage: `url("/img/player.png")` }}></div>
            <div className={styles.titleBox}>
                    <h1 className={styles.title}>FRONT END</h1>
                </div>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>Challenge React</h2>
                <p className={styles.description}>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
        </div>
    )
}

export default Banner