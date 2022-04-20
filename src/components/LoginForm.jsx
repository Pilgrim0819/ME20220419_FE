import axios from "axios";

const LoginForm = () => {

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const username = ev.target[1].value;
        const password = ev.target[1].value;

        if (!username || !password) {
            return alert('Please fill the email and password fields!')
        }

        const resp = await axios.post('localhost:8008/', {
            userName: username,
            password
        });

        console.log(resp);
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