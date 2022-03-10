import React from 'react';
import '../css/style.css';

function Login() {
  return (
    <div className="login-all">
      <div className="image-login">
        <h1>imagem</h1>
      </div>
      <div className="login-screen">
        <div className="login">
          <h5>Seja Bem vindo</h5>
          <label htmlFor="email" className="email-login">
            E-mail
            <br />
            <input
              type="email"
              name="email"
              // value={inicialContribution}
              // onChange={({ target }) => setInicialContribution(target.value)}
            />
          </label>
          <br />
          <label htmlFor="password" className="password-login">
            Senha
            <br />
            <input
              type="password"
              name="password"
              // value={inicialContribution}
              // onChange={({ target }) => setInicialContribution(target.value)}
            />
          </label>
          <br />
          <button
            type="button"
            className="enter"
            // onClick={clearInput}
          >
            Entrar
          </button>
          <p>Ainda não possui cadastro ? Cadastra-se</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
