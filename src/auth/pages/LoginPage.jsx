




const onLogin = () => {




export const LoginPage = () => {
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick={onLogin}
            >

                Login
            </button>
        </div>
    )
}

