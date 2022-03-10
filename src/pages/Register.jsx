import React from 'react';

function Register() {
  return (
    <div>
      <div>
        <div>
          <h1>imagem</h1>
        </div>
        <div>
          <div className="register-screen">
            <h5>Cadastra-se</h5>
            <label htmlFor="fullName" className="full-name">
              Nome completo
              <br />
              <input
                type="text"
                name="fullName"
              />
            </label>
            <br />
            <label htmlFor="email" className="email-register">
              E-mail
              <br />
              <input
                type="email"
                name="email"
              />
            </label>
            <br />
            <label htmlFor="password" className="password-register">
              Senha
              <br />
              <input
                type="password"
                name="password"
              />
            </label>
            <br />
            <label htmlFor="confirmPassword" className="confirm-Password-register">
              Confirmar senha
              <br />
              <input
                type="password"
                name="confirmPassword"
              />
            </label>
            <br />
            <button
              type="button"
              className="enter-register"
            >
              Entrar
            </button>
            <p>Já possui cadastro ? Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
