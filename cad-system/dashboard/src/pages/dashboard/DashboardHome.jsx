import "./DashboardHome.css";

import {
    Building2,
    Users,
    FileText,
    ShieldAlert,
    Activity,
    Server,
    Database,
    Bot,
    Plus,
    Clock3,
    Siren,
    Gavel
} from "lucide-react";

import branding from "../../config/branding";

import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import PageHeader from "../../components/common/PageHeader";

export default function DashboardHome() {

    const today = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (

        <>

            <PageHeader

                title={`Welcome to ${branding.name}`}

                subtitle={today}

                actions={

                    <Button>

                        <Plus size={18}/>

                        Quick Action

                    </Button>

                }

            />

            <Card>

                <div className="welcomeBanner">

                    <div>

                        <h2>

                            Tactical Command Center

                        </h2>

                        <p>

                            Monitor departments, officers, records, performance,
                            and live operations from one centralized dashboard.

                        </p>

                    </div>

                </div>

            </Card>

            <section className="statsGrid">

                <Card>

                    <div className="statCard">

                        <Building2 size={28}/>

                        <div>

                            <h2>3</h2>

                            <span>Departments</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="statCard">

                        <Users size={28}/>

                        <div>

                            <h2>120</h2>

                            <span>Officers</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="statCard">

                        <Clock3 size={28}/>

                        <div>

                            <h2>38</h2>

                            <span>Active Shifts</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="statCard">

                        <FileText size={28}/>

                        <div>

                            <h2>5,421</h2>

                            <span>Records</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="statCard">

                        <Siren size={28}/>

                        <div>

                            <h2>7</h2>

                            <span>Active BOLOs</span>

                        </div>

                    </div>

                </Card>

                <Card>

                    <div className="statCard">

                        <Gavel size={28}/>

                        <div>

                            <h2>12</h2>

                            <span>Warrants</span>

                        </div>

                    </div>

                </Card>

            </section>

            <section className="dashboardGrid">

                <Card title="Recent Activity">

                    <ul className="activityList">

                        <li>Officer promoted to Sergeant</li>

                        <li>Citation C-1043 created</li>

                        <li>New BOLO issued</li>

                        <li>Department settings updated</li>

                        <li>Officer began shift</li>

                    </ul>

                </Card>

                <Card title="Quick Actions">

                    <div className="quickActions">

                        <Button>New Department</Button>

                        <Button variant="secondary">New Arrest</Button>

                        <Button variant="secondary">New Citation</Button>

                        <Button variant="secondary">New Warrant</Button>

                        <Button variant="secondary">New BOLO</Button>

                    </div>

                </Card>

                <Card title="Department Overview">

                    <div className="departmentOverview">

                        <p>Georgia State Patrol — 84 Officers</p>

                        <p>Georgia DOT — 14 Officers</p>

                        <p>Civilian Operations — 22 Officers</p>

                    </div>

                </Card>

                <Card title="System Health">

                    <div className="systemStatus">

                        <div>

                            <Server size={18}/>

                            API Online

                        </div>

                        <div>

                            <Database size={18}/>

                            Database Connected

                        </div>

                        <div>

                            <Bot size={18}/>

                            Discord Bot Connected

                        </div>

                        <div>

                            <Activity size={18}/>

                            WebSocket Connected

                        </div>

                    </div>

                </Card>

            </section>

        </>

    );

}