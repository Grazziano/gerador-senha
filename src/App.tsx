import { useState } from 'react';
import logo from './assets/logo.png';

function App() {
  const [sizePassword, setSizePassword] = useState(5);

  return (
    <>
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
        <button type="button" className="button">
          Gerar Senha
        </button>
      </main>
      <div className="container-password hide">
        <span className="title">Sua senha é:</span>
        <span className="password">123123</span>
        <span className="tooltip">Clique na senha para copiar</span>
      </div>
    </>
  );
}

export default App;
