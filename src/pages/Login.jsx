const Login = () => {
    const handleSubmit = () => {
        console.log('submit');
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>

            </form>
        </div>
    )
}

export default Login;