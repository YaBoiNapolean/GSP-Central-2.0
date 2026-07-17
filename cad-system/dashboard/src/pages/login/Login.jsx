import "./Login.css";

import { Navigate, useSearchParams } from "react-router-dom";
import { Shield, LogIn } from "lucide-react";

import { useAuth } from "../../context/useAuth";
import { useBranding } from "../../context/BrandingContext";

import { getDiscordLoginUrl } from "../../services/auth";

export default function Login() {

    const { branding } = useBranding();

    const { isAuthenticated, isLoading } = useAuth();

    const [searchParams] = useSearchParams();

    const handleLogin = () => {

        window.location.assign(getDiscordLoginUrl());

    };

    if (!isLoading && isAuthenticated) {

        return <Navigate to="/" replace />;

    }

    return (

        <div className="loginPage">

            <div className="backgroundGrid"></div>

            <div className="backgroundGlow glowOne"></div>

            <div className="backgroundGlow glowTwo"></div>

            <div className="loginCard">

                <div className="logoContainer">

                    {

                        branding.logo ?

                            (

                                <img

                                    src={branding.logo}

                                    alt={branding.dashboardName}

                                    className="dashboardLogo"

                                />

                            )

                            :

                            (

                                <div className="logoPlaceholder">

                                    <Shield size={42} />

                                </div>

                            )

                    }

                </div>

                <h1>

                    {branding.dashboardName}

                </h1>

                <h2>

                    {branding.loginSubtitle}

                </h2>

                <p>

                    Authenticate with Discord to securely access your dashboard.

                </p>

                {

                    searchParams.get("error") && (

                        <div className="loginError">

                            Authentication failed. Please try again.

                        </div>

                    )

                }

                <button

                    className="discordButton"

                    onClick={handleLogin}

                >

                    <LogIn size={20} />

                    Continue with Discord

                </button>

                <div className="loginStatus">

                    Secure • Real-Time • Department Managed

                </div>

            </div>

        </div>

    );

}