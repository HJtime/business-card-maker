import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards]=useState([
        {
            id: '1',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'dark',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        {
            id: '2',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'Light',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: 'ellie.png'
        },
        {
            id: '3',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'colorful',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        }
    ])
    const history=useHistory();
    const onLogout=()=>{
        authService.logout();
    }

    useEffect(()=>{
        authService.onAuthChange(user=>{ //유저가 업데이트 된다면
            if(!user){ //사용자가 없다면
                history.push('/');
            }
        })
    });

    const addCrad=(card)=>{
        const updated=[...cards, card];
        setCards(updated);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCrad}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
};

export default Maker;