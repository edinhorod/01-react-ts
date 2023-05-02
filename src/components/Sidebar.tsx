import { PencilSimpleLine  } from "@phosphor-icons/react"
import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/5803600?v=4" />
                
                <strong>Edinho Rodrigues</strong>
                <span>Software Enginer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}  />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}