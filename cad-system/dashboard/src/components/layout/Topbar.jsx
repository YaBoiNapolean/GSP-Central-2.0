import "./Topbar.css";

import {

    Bell,

    Search,

    Database,

    Bot,

    Server,

    ChevronDown,

    User,

    LogOut,

    Settings

} from "lucide-react";

import { useState } from "react";

import { useAuth } from "../../context/useAuth";

export default function Topbar() {

    const { user, logout } = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className="topbar">

            <div className="searchContainer">

                <Search size={18}/>

                <input

                    placeholder="Search officers, departments, records..."

                />

            </div>

            <div className="topbarRight">

                <div className="statusGroup">

                    <div className="status online">

                        <Server size={14}/>

                        <span>API</span>

                    </div>

                    <div className="status online">

                        <Database size={14}/>

                        <span>DB</span>

                    </div>

                    <div className="status online">

                        <Bot size={14}/>

                        <span>BOT</span>

                    </div>

                </div>

                <button className="notificationButton">

                    <Bell size={19}/>

                    <span className="notificationBadge">

                        3

                    </span>

                </button>

                <div className="profileWrapper">

                    <button

                        className="profileButton"

                        onClick={() => setMenuOpen(!menuOpen)}

                    >

                        <img

                            src={
                                user?.avatar ||
                                "https://cdn.discordapp.com/embed/avatars/0.png"
                            }

                            alt="Avatar"

                        />

                        <div className="profileInfo">

                            <strong>

                                {user?.username || "Loading..."}

                            </strong>

                            <small>

                                Dashboard User

                            </small>

                        </div>

                        <ChevronDown
                            size={16}
                        />

                    </button>

                    {

                        menuOpen && (

                            <div className="profileDropdown">

                                <button>

                                    <User size={16}/>

                                    Profile

                                </button>

                                <button>

                                    <Settings size={16}/>

                                    Settings

                                </button>

                                <div className="dropdownDivider"/>

                                <button

                                    className="logoutButton"

                                    onClick={logout}

                                >

                                    <LogOut size={16}/>

                                    Sign Out

                                </button>

                            </div>

                        )

                    }

                </div>

            </div>

        </header>

    );

}