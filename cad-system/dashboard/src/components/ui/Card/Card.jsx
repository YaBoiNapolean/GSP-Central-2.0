import "./Card.css";

export default function Card({

    title,

    children,

    footer,

    className=""

}){

    return(

        <div className={`card ${className}`}>

            {title &&

                <div className="cardHeader">

                    <h2>{title}</h2>

                </div>

            }

            <div className="cardBody">

                {children}

            </div>

            {footer &&

                <div className="cardFooter">

                    {footer}

                </div>

            }

        </div>

    );

}