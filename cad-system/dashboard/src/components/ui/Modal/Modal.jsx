import "./Modal.css";

import { X } from "lucide-react";

export default function Modal({

    open,

    title,

    children,

    onClose,

    width = 700

}){

    if(!open) return null;

    return(

        <div
            className="modalOverlay"
            onClick={onClose}
        >

            <div
                className="modalWindow"
                style={{maxWidth:width}}
                onClick={(e)=>e.stopPropagation()}
            >

                <div className="modalHeader">

                    <h2>

                        {title}

                    </h2>

                    <button
                        onClick={onClose}
                    >

                        <X size={22}/>

                    </button>

                </div>

                <div className="modalBody">

                    {children}

                </div>

            </div>

        </div>

    );

}