import "./DepartmentCard.css";

import {
    Shield,
    Users,
    Clock3,
    Calendar,
    Wifi,
    ChevronRight,
    Layers3
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function DepartmentCard({ department }) {

    const navigate = useNavigate();

    return (

        <div className="departmentCard">

            <div className="departmentHeader">

                <div
                    className="departmentIcon"
                    style={{
                        background: department.color
                    }}
                >

                    {

                        department.logo ? (

                            <img
                                src={department.logo}
                                alt={department.name}
                            />

                        ) : (

                            <Shield size={34} />

                        )

                    }

                </div>

                <div className="departmentTitle">

                    <h2>

                        {department.name}

                    </h2>

                    <span>

                        {department.shortName}

                    </span>

                </div>

            </div>

            <div className="departmentStatus">

                <Wifi size={15} />

                <span>

                    Discord {department.status}

                </span>

            </div>

            <div className="departmentStats">

                <div className="statBox">

                    <Users size={18} />

                    <div>

                        <strong>

                            {department.officers}

                        </strong>

                        <span>

                            Officers

                        </span>

                    </div>

                </div>

                <div className="statBox">

                    <Clock3 size={18} />

                    <div>

                        <strong>

                            {department.activeShifts}

                        </strong>

                        <span>

                            Active Shifts

                        </span>

                    </div>

                </div>

                <div className="statBox">

                    <Layers3 size={18} />

                    <div>

                        <strong>

                            {department.ranks}

                        </strong>

                        <span>

                            Rank Roles

                        </span>

                    </div>

                </div>

                <div className="statBox">

                    <Calendar size={18} />

                    <div>

                        <strong>

                            {department.created}

                        </strong>

                        <span>

                            Created

                        </span>

                    </div>

                </div>

            </div>

            <button
                className="departmentButton"
                onClick={() => navigate(`/departments/${department.id}`)}
            >

                View Department

                <ChevronRight size={18} />

            </button>

        </div>

    );

}