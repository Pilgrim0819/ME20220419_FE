const LoginForm = () => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        window.location.href = '/list'
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input placeholder="E-mail" />
                </div>

                <div className="input-container">
                    <input placeholder="Password" />
                </div>

                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;