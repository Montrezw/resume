import styles from "./menu.module.css";

function Menu() {
    return (
        <div className={styles.topnav}>
            <a className={styles.active} href="#">Home</a>
            <a>Montrez Whitsett</a>
        </div>
    );
}

export default Menu;