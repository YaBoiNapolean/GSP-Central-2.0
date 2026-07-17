import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout(){

    return(

        <div
            style={{
                display:"flex",
                height:"100vh"
            }}
        >

            <Sidebar/>

            <div
                style={{
                    flex:1,
                    display:"flex",
                    flexDirection:"column"
                }}
            >

                <Topbar/>

                <main
                    style={{
                        flex:1,
                        overflow:"auto",
                        padding:"30px"
                    }}
                >

                    <Outlet/>

                </main>

            </div>

        </div>

    );

}