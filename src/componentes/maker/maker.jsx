import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService}) => {
    const [cards, setCards]=useState({ //오브젝트로 바꿔줌..?!
        '1':{
            id: '1',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'dark',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        '2':{
            id: '2',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'light',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: 'ellie.png'
        },
        '3':{
            id: '3',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'colorful',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        }
    });

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

    const createOrupdateCard=(card)=>{
        setCards(cards=>{
            const updated={...cards}; //cards오브젝트를 복사해서
            updated[card.id]=card; //cards의 id번째를 받아온 card로 업데이트해줌
            return updated;
        });
    }

    const deleteCard=(card)=>{
        setCards(cards=>{
            const updated={...cards};
            delete updated[card.id];
            return updated;
        });
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
};

export default Maker;