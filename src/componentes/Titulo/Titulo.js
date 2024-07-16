import { Children } from "react"
import styles from "./Titulo.module.css"


function Titulo ({children, color, top, left}) {
    return (
        <div className={styles.titulo} style={{backgroundColor:color, top:top, left:left}}>
            {children}
        </div>
    )
}

export default Titulo