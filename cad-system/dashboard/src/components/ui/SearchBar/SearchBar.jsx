import "./SearchBar.css";

import { Search } from "lucide-react";

export default function SearchBar({

    value,

    onChange,

    placeholder

}){

    return(

        <div className="searchBar">

            <Search
                size={18}
            />

            <input

                value={value}

                placeholder={placeholder}

                onChange={(e)=>onChange(e.target.value)}

            />

        </div>

    );

}