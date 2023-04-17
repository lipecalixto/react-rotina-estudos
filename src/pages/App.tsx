import React from 'react';
import style from './style.module.scss';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
