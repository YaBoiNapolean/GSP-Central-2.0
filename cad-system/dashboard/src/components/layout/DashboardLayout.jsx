import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({children}){

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
                        padding:"30px",
                        overflow:"auto"
                    }}
                >

                    {children}

                </main>

            </div>

        </div>

    );

}