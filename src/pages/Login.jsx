import LoginForm from '../components/LoginForm'
import '../styles/Login.scss';

const Login = () => {
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