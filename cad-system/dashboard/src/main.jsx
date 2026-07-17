import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { BrandingProvider } from "./context/BrandingContext";

createRoot(document.getElementById("root")).render(

    <StrictMode>

        <BrandingProvider>

            <AuthProvider>

                <App />

            </AuthProvider>

        </BrandingProvider>

    </StrictMode>

);