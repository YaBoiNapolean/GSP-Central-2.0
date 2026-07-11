import "./Login.css";
import { Navigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { getDiscordLoginUrl } from "../../services/auth";

function Login() {
    const { isAuthenticated, isLoading } = useAuth();
    const [searchParams] = useSearchParams();

    const handleLogin = () => {
        window.location.assign(getDiscordLoginUrl());
    };

    if (!isLoading && isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="login-container">

            <div className="login-card">

                {/* Dashboard Logo goes here later */}

                <h1>CAD Dashboard</h1>

                <h3>Secure Law Enforcement Portal</h3>

                <p>
                    Sign in using your Discord account to access your department dashboard.
                </p>

                {searchParams.get("error") && (
                    <p className="login-error" role="alert">
                        Discord sign-in could not be completed. Please try again.
                    </p>
                )}

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
