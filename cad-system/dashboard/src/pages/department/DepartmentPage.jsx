import "./DepartmentPage.css";

import { useParams } from "react-router-dom";

import { departments } from "../../data/departments";

import PageHeader from "../../components/common/PageHeader";

import Card from "../../components/ui/Card/Card";

import Button from "../../components/ui/Button/Button";

import {

    Shield,

    Users,

    Activity,

    FolderOpen,

    Wifi,

    Clock3,

    Settings,

    UserPlus,

    BarChart3

} from "lucide-react";

export default function DepartmentPage(){

    const { departmentId } = useParams();

    const department = departments.find(

        d => d.id === Number(departmentId)

    );

    if(!department){

        return(

            <PageHeader

                title="Department Not Found"

                subtitle="The requested department could not be found."

            />

        );

    }

    return(

        <>

            <PageHeader

                title={department.name}

                subtitle={`${department.shortName} Command Center`}

            />

            <section className="departmentHero">

                <div className="heroLeft">

                    <div
                        className="heroLogo"
                        style={{
                            background: department.color
                        }}
                    >

                        {

                            department.logo ?

                                <img
                                    src={department.logo}
                                    alt={department.name}
                                />

                            :

                                <Shield size={46}/>

                        }

                    </div>

                    <div>

                        <h2>

                            {department.name}

                        </h2>

                        <p>

                            Manage officers, ranks, records, permissions, and department settings.

                        </p>

                    </div>

                </div>

                <div className="heroButtons">

                    <Button>

                        <UserPlus size={18}/>

                        Add Officer

                    </Button>

                    <Button variant="secondary">

                        <Settings size={18}/>

                        Department Settings

                    </Button>

                </div>

            </section>

            <section className="departmentStatsGrid">

                <Card>

                    <div className="departmentStat">

                        <Users size={28}/>

                        <div>

                            <h2>{department.officers}</h2>

                            <span>Officers</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="departmentStat">

                        <Activity size={28}/>

                        <div>

                            <h2>{department.activeShifts}</h2>

                            <span>Active Shifts</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="departmentStat">

                        <FolderOpen size={28}/>

                        <div>

                            <h2>{department.records}</h2>

                            <span>Records</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="departmentStat">

                        <Wifi size={28}/>

                        <div>

                            <h2>{department.status}</h2>

                            <span>Discord</span>

                        </div>

                    </div>

                </Card>

            </section>

            <section className="departmentContentGrid">

                <Card title="Recent Activity">

                    <ul className="activityList">

                        <li>Officer promoted</li>

                        <li>Citation submitted</li>

                        <li>New BOLO created</li>

                        <li>Department settings updated</li>

                    </ul>

                </Card>

                <Card title="Quick Actions">

                    <div className="quickButtons">

                        <Button>Add Officer</Button>

                        <Button variant="secondary">View Officers</Button>

                        <Button variant="secondary">Create Record</Button>

                        <Button variant="secondary">Manage Roles</Button>

                    </div>

                </Card>

                <Card title="Department Information">

                    <div className="infoGrid">

                        <div>

                            <Clock3 size={18}/>

                            Created

                            <strong>{department.created}</strong>

                        </div>

                        <div>

                            <BarChart3 size={18}/>

                            Rank Roles

                            <strong>{department.ranks}</strong>

                        </div>

                        <div>

                            <Shield size={18}/>

                            Status

                            <strong>{department.status}</strong>

                        </div>

                    </div>

                </Card>

            </section>

        </>

    );

}