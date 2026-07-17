import "./PageHeader.css";

export default function PageHeader({
    title,
    subtitle,
    actions
}){

    return(

        <div className="pageHeader">

            <div>

                <h1>{title}</h1>

                {subtitle &&

                    <p>{subtitle}</p>

                }

            </div>

            {actions &&

                <div className="pageHeaderActions">

                    {actions}

                </div>

            }

        </div>

    );

}