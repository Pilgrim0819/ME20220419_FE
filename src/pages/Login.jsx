import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm'
import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';
import getToken from '../utils/getToken';

const Login = () => {
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
      if (token) {
          navigate('/list');
      }
  });

  return (
    <div className="login">
      <div className="container">
        <h1 className="title">Please log in for the list</h1>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
