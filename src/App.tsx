import { useState } from 'react';
import logo from './assets/logo.png';

function App() {
  const [sizePassword, setSizePassword] = useState(5);
  const [password, setPassword] = useState('');

  const list = 'abcdefghijlmnopqrstuvxz';

  function generatePassword() {
    let newPass = '';
    for (let index = 0; index < sizePassword; index++) {
      newPass += list.charAt(Math.floor(Math.random() * list.length));
    }
    setPassword(newPass);
  }

  function copyPassword() {
    console.log('copiado');
  }

  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <main className="container-input">
        <span>
          Tamanho <span>{sizePassword}</span> caracteres
        </span>
        <input
          className="slider"
          type="range"
          min={5}
          max={25}
          value={sizePassword}
          onChange={({ target }) => setSizePassword(Number(target.value))}
        />
        <button type="button" className="button" onClick={generatePassword}>
          Gerar Senha
        </button>
      </main>

      {password && (
        <div className="container-password" onClick={copyPassword}>
          <span className="title">Sua senha é:</span>
          <span className="password">{password}</span>
          <span className="tooltip">Clique na senha para copiar</span>
        </div>
      )}
    </div>
  );
}

export default App;
