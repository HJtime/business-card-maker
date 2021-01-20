import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_from.module.css';

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const nameRef=useRef();
    const companyRef=useRef();
    const themeRef=useRef();
    const titleRef=useRef(); 
    const emailRef=useRef();
    const messageRef=useRef();

    const {name, company, title, email, message, theme, fileName, fileURL}=card;

    const onFileChange=file=>{
        updateCard({
            ...card,
            fileName:file.name,
            fileURL: file.url
        })
    }
    const onChange=(event)=>{
        if(event.currentTarget==null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card, //기존에 있는 카드의 키와 value를 그대로 쓰면서
            [event.currentTarget.name]: event.currentTarget.value, //키/value
        })

    }
    const onSubmit=()=>{
        deleteCard(card);
    }

    return(
        <form className={styles.form}>
            <input
                ref={nameRef}
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={onChange}/>
            <input
                ref={companyRef}
                className={styles.input}
                type="text"
                name="company"
                value={company}
                onChange={onChange}/>
            <select ref={themeRef} className={styles.select} name="theme" onChange={onChange} value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                ref={titleRef}
                className={styles.input}
                type="text"
                name="title"
                value={title}
                onChange={onChange}/>
            <input
                ref={emailRef}
                className={styles.input}
                type="text"
                name="email"
                value={email}
                onChange={onChange}/>
            <textarea
                ref={messageRef}
                className={styles.textarea}
                name="message"
                value={message}
                onChange={onChange}/>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}/>
            </div>
            <Button className={styles.button} name="Delete" onClick={onSubmit}/>
        </form>
    )
};

export default CardEditForm;