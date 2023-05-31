import { useState } from 'react';
import logo from './assets/logo.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [sizePassword, setSizePassword] = useState(5);
  const [password, setPassword] = useState('');

  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';

  function generatePassword() {
    let newPass = '';
    for (let index = 0; index < sizePassword; index++) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPass);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    toast.success('Senha copiada!');
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
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
