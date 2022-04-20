import { useEffect } from 'react';
import LoginForm from '../components/LoginForm'
import '../styles/Login.scss';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        const authenticated = !!cookies.get('auth-token');

        if (authenticated) {
            navigate('/list');
        }

        return;
    })

    return (
        <div className="login">
            <div className="container">
                <h1 className="title">Please log in for the list</h1>

                <LoginForm />
            </div>
        </div>
    )
}

export default Login;