import styles from "./Cards.module.css"
import borrar from "./borrar.png"
import editar from "./editar.png"

function Card({ linkVideo, imagen, borderstyle, margin}) {
    return (
        <div className={styles.container} style={{ border: borderstyle, marginBottom:margin}}>
            <a href={linkVideo} target="_blank" rel="noopener noreferrer">
                <img src={imagen} className={styles.capa}  style={{ border: borderstyle }}/>
            </a>
        <img src={borrar} alt="Icono borrar" className={styles.imagen}/>
        <img src={editar} alt="Icono editar" className={styles.imagen}/>
        </div>
    )
}

export default Card;
