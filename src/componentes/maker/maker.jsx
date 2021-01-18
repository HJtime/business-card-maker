import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({authService}) => {
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
    })

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <Footer/>
        </section>
    );
};

export default Maker;