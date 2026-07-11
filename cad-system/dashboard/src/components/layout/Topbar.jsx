export default function Topbar(){

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

            <div>

                Logged in with Discord

            </div>

        </header>

    );

}