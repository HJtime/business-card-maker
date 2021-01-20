import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './componentes/image_file_input/image_file_input';

const authService=new AuthService();
const imageUploader=new ImageUploader();
const FileInput=props=>(<ImageFileInput {...props} imageUploader={imageUploader}/>)
//props를 받으면 ImageFileInput를 만들어 전달. 받아온 props는 알아서 전달이 됨

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);