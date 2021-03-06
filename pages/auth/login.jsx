import { useState } from 'react';
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { AuthCard } from '../../components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('Erro teste');
  };

  return (
    <AuthCard title="Entrar">
      <form onSubmit={handleSubmit}>
        {error ? (
          <Alert className="alert" severity="error">
            <span>{error}</span>
          </Alert>
        ) : null}
        <TextField
          name="username"
          type="text"
          value={username}
          label="Nome"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          name="password"
          type="password"
          value={password}
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Entrar
        </Button>
      </form>
      <div className="links">
        <Link href="register">Cadastrar-se</Link>
        <Link href="recoverPassword">Recuperar Senha</Link>
      </div>
    </AuthCard>
  );
};

export default Login;
