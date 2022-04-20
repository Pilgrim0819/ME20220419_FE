import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


const LoginForm = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const username = ev.target[0].value;
        const password = ev.target[1].value;

        if (!username || !password) {
            return alert('Please fill the email and password fields!')
        }

        // I know it's totally wrong to use it like that but helps us a lot as of now
        const resp = await axios.post(`${process.env.REACT_APP_API_HOST}/authenticate`, {
            userName: username,
            password
        });

        if (resp?.data?.token) {
            cookies.set('auth-token', resp?.data?.token);

            navigate('/list');
        } else {
            alert('Something went wrong!');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input name="email" placeholder="E-mail" />
                </div>

                <div className="input-container">
                    <input name="password" placeholder="Password" />
                </div>

                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;