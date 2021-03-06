import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const history=useHistory();
    const goToMaker=(userId)=>{
        history.push({
            pathname: '/maker',
            state:{id: userId},
        });
    }

    const onLogin=(event)=>{
        authService
        .login(event.currentTarget.textContent)
         //auathService 안의 login 함수를 이용하는데 값은 버튼의 텍스트 값을 줌
        .then(data=>goToMaker(data.user.uid));
    }

    useEffect(()=>{
        authService
        .onAuthChange(user=>{ //사용자가 로그인을 했다면 user 정보가 있을 것
            user&&goToMaker(user.uid);
        })
    })

    return(
        <section className={styles.login}>
            <Header/>
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
};

export default Login;