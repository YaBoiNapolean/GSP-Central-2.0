import { createContext, useContext, useEffect, useState } from "react";

const BrandingContext = createContext();

const defaultBranding = {
    dashboardName: "CAD Dashboard",
    loginSubtitle: "Secure Law Enforcement Portal",
    logo: null,
    favicon: null
};

export function BrandingProvider({ children }) {

    const [branding, setBranding] = useState(defaultBranding);

    useEffect(() => {

        document.title = branding.dashboardName;

    }, [branding]);

    return (

        <BrandingContext.Provider
            value={{
                branding,
                setBranding
            }}
        >

            {children}

        </BrandingContext.Provider>

    );

}

export function useBranding(){

    return useContext(BrandingContext);

}