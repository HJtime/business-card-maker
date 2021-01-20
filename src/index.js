import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './componentes/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService=new AuthService();
const imageUploader=new ImageUploader();
const FileInput=memo(props=>(<ImageFileInput {...props} imageUploader={imageUploader}/>));
//props를 받으면 ImageFileInput를 만들어 전달. 받아온 props는 알아서 전달이 됨
const cardRepository=new CardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);