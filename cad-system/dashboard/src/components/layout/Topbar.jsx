import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

export default function Topbar(){
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login", { replace: true });
    };

    return(

        <header
            style={{

                height:80,

                borderBottom:"1px solid var(--border)",

                display:"flex",

                alignItems:"center",

                justifyContent:"space-between",

                padding:"0 32px",

                background:"var(--surface)"

            }}
        >

            <h2>

                Dashboard

            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>

                <span>Logged in as {user?.username}</span>

                <button type="button" onClick={handleLogout}>
                    Sign out
                </button>
            </div>

        </header>

    );

}
