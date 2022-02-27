import styles from './banner.module.css';

export const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Coffee Connoisseur</h1>
            <p className={styles.subtitle}>Discover your local coffee shops!</p>
            <button className={styles.button} onClick={props.handleOnClick}>
                {props.buttonText}
            </button>
        </div>
    );
};
