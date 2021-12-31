import React from 'react';
import styles from "./flipCard.module.css";
import profileImage from './profile.png';

function FlipCardInfo() {
    return (
        <div class={styles.flipCardBack}>
            <h1>Montrez Whitsett</h1>
            <p>Software Engineer</p>
            <p>Dallas, Tx</p>
            <p>(251) 508-0673</p>
            <p>montrezwhitsett@gmail.com</p>
        </div>
    );
}

function FlipCardImageDiv() {
    return (
        <div className={styles.flipCardInner}>
            <FlipCardInfo />
            <FlipCardImage />
        </div>
    )
}

function FlipCardImage() {
    return (
        <div className={styles.flipCardFront}>
         <img src={profileImage} alt="Logo" />
        </div>
    )
}

function FlipCard() {
    return (
        <div className={styles.flipCard}>
            <FlipCardImageDiv />
        </div>
    )

}

export default FlipCard;