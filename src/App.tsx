import { useState } from 'react';
import logo from './assets/logo.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [sizePassword, setSizePassword] = useState(5);
  const [password, setPassword] = useState('');
  const [isCheckedNumbers, setIsCheckedNumbers] = useState(false);
  const [isCheckedSymbols, setIsCheckedSymbols] = useState(false);

  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (isCheckedNumbers) {
    charset += '0123456789';
  }

  if (isCheckedSymbols) {
    charset += '!@#$%&*()-';
  }

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
          Tamanho <span className="sizePassword">{sizePassword}</span>{' '}
          caracteres
        </span>
        <input
          className="slider"
          type="range"
          min={5}
          max={25}
          value={sizePassword}
          onChange={({ target }) => setSizePassword(Number(target.value))}
        />

        <div className="container-checkbox">
          <span>Incluir</span>
          <input
            type="checkbox"
            name="checkboxList"
            value="numeros"
            checked={isCheckedNumbers}
            onChange={() => setIsCheckedNumbers(!isCheckedNumbers)}
          />{' '}
          Números
          <input
            type="checkbox"
            name="checkboxList"
            value="simbolos"
            checked={isCheckedSymbols}
            onChange={() => setIsCheckedSymbols(!isCheckedSymbols)}
          />{' '}
          Símbolos
        </div>

        <button type="button" className="button" onClick={generatePassword}>
          Gerar Senha
        </button>
      </main>

      {password && (
        <div className="container-password" onClick={copyPassword}>
          <span className="title">Sua senha é:</span>
          <span className="password">{password}</span>
          <span className="tooltip">Clique na senha para copiar 👆</span>
        </div>
      )}

      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
