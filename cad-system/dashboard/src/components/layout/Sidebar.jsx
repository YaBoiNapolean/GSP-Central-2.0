import "./Sidebar.css";
import branding from "../../config/branding";

import {
    LayoutDashboard,
    Building2,
    FileText,
    ChartColumn,
    Shield,
    Settings,
    PanelLeftClose,
    PanelLeftOpen
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const navigation = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },
    {
        title: "Departments",
        icon: Building2,
        path: "/departments"
    },
    {
        title: "Records",
        icon: FileText,
        path: "/records"
    },
    {
        title: "Performance",
        icon: ChartColumn,
        path: "/performance"
    },
    {
        title: "Administration",
        icon: Shield,
        path: "/administration"
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/settings"
    }
];

export default function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {

        const saved = localStorage.getItem("sidebarCollapsed");

        if (saved !== null) {
            setCollapsed(saved === "true");
        }

    }, []);

    function toggleSidebar() {

        const next = !collapsed;

        setCollapsed(next);

        localStorage.setItem("sidebarCollapsed", next);

    }

    return (

        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

            <div className="sidebarHeader">

                {

                    !collapsed && (

                        <div className="sidebarBrand">

                            {

                                branding.logo && (

                                    <img
                                        src={branding.logo}
                                        alt={branding.name}
                                        className="sidebarLogo"
                                    />

                                )

                            }

                            <div className="sidebarBrandText">

                                <h2>{branding.name}</h2>

                                <span>{branding.subtitle}</span>

                            </div>

                        </div>

                    )

                }

                <button
                    className="collapseButton"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >

                    {

                        collapsed

                            ? <PanelLeftOpen size={20}/>

                            : <PanelLeftClose size={20}/>

                    }

                </button>

            </div>

            <div className="sidebarSection">

                {

                    !collapsed && (

                        <span className="sidebarSectionTitle">

                            NAVIGATION

                        </span>

                    )

                }

                <nav>

                    {

                        navigation.map(item => {

                            const Icon = item.icon;

                            return (

                                <NavLink
                                    key={item.title}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) =>
                                        `sidebarItem ${isActive ? "active" : ""}`
                                    }
                                    title={collapsed ? item.title : ""}
                                >

                                    <Icon size={20}/>

                                    {

                                        !collapsed && (

                                            <span>{item.title}</span>

                                        )

                                    }

                                </NavLink>

                            );

                        })

                    }

                </nav>

            </div>

            <div className="sidebarFooter">

                {

                    !collapsed && (

                        <>

                            <div className="sidebarStatus">

                                <span className="statusDot"></span>

                                System Online

                            </div>

                            <small>

                                Version 2.0

                            </small>

                        </>

                    )

                }

            </div>

        </aside>

    );

}