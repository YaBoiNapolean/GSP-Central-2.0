import "./Sidebar.css";

const navigation = [

    "Dashboard",
    "Departments",
    "Records",
    "Shift Management",
    "Administration",
    "Settings"

];

export default function Sidebar(){

    return(

        <aside className="sidebar">

            <div className="sidebarLogo">

                GSP CENTRAL

            </div>

            <nav>

                {navigation.map(item=>(

                    <button
                        key={item}
                        className="sidebarButton"
                    >

                        {item}

                    </button>

                ))}

            </nav>

        </aside>

    );

}