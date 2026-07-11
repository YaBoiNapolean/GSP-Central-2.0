import "./Login.css";

function Login() {
    const handleLogin = () => {
        window.location.href = "http://localhost:3000/auth/discord";
    };

    return (
        <div className="login-container">

            <div className="login-card">

                {/* Dashboard Logo goes here later */}

                <h1>CAD Dashboard</h1>

                <h3>Secure Law Enforcement Portal</h3>

                <p>
                    Sign in using your Discord account to access your department dashboard.
                </p>

                <button
                    className="discord-button"
                    onClick={handleLogin}
                >
                    Continue with Discord
                </button>

                <span className="login-footer">
                    Authorized personnel only.
                </span>

            </div>

        </div>
    );
}

export default Login;