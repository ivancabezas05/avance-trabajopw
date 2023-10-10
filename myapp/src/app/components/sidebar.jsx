import styles from './admin.module.css'

const Sidebar = (props) =>{ 

    return (
        <aside className={styles.barralateral}>
                <ul className={styles.opciones}>
                    <li className={styles.li}>{props.li1}</li>
                    <li className={styles.li}>{props.li2}</li>
                    <li className={styles.li}>{props.li3}</li>
                </ul>
        </aside>
    )

}

export default Sidebar;