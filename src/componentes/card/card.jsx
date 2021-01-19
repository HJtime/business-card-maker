import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE='/images/default_logo.png';
const Card = ({card}) => {
    const {name, company, title, email, message, theme, fileName, fileURL}=card;
    const url = fileURL||DEFAULT_IMAGE; //fileurl이 없다면 디폴트이미지를 쓰겠다
    
    return(
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="profile"/>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
};

function getStyles(theme){ //컴포넌트에 속하지 않아도 되는 함수
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'Light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
            default:
                throw new Error(`unknown theme: ${theme}`);
    }
}

export default Card;