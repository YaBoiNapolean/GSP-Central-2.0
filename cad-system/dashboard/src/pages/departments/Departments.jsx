import { useState } from "react";

import { departments } from "../../data/departments";

import DepartmentCard from "../../components/departments/DepartmentCard";

import PageHeader from "../../components/common/PageHeader";

import SearchBar from "../../components/ui/SearchBar/SearchBar";

import Button from "../../components/ui/Button/Button";

import CreateDepartmentModal from "../../components/ui/Modal/CreateDepartmentModal";

import "./Departments.css";

export default function Departments() {

    const [search, setSearch] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    const filtered = departments.filter(department =>

        department.name
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <>

            <PageHeader

                title="Law Enforcement Departments"

                subtitle="Create and manage agencies, officer permissions, rank structures, and department settings."

                actions={

                    <Button

                        onClick={() => setModalOpen(true)}

                    >

                        + Create Department

                    </Button>

                }

            />

            <SearchBar

                value={search}

                onChange={setSearch}

                placeholder="Search agencies..."

            />

            {

                filtered.length === 0 ? (

                    <div className="emptyDepartments">

                        <h2>

                            No Departments Found

                        </h2>

                        <p>

                            Create your first law enforcement agency to begin managing officers, CAD permissions, Discord integration, and department settings.

                        </p>

                        <Button

                            onClick={() => setModalOpen(true)}

                        >

                            Create Department

                        </Button>

                    </div>

                ) : (

                    <div className="departmentGrid">

                        {

                            filtered.map(department => (

                                <DepartmentCard

                                    key={department.id}

                                    department={department}

                                />

                            ))

                        }

                    </div>

                )

            }

            <CreateDepartmentModal

                open={modalOpen}

                onClose={() => setModalOpen(false)}

            />

        </>

    );

}