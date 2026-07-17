import "./CreateDepartmentModal.css";

import { useState } from "react";

import Modal from "./Modal";
import Button from "../ui/Button/Button";

import {

    Building2,
    Shield,
    Hash,
    Palette,
    Upload,
    Server,
    CheckCircle

} from "lucide-react";

export default function CreateDepartmentModal({

    open,

    onClose

}){

    const [departmentName,setDepartmentName]=useState("");
    const [abbreviation,setAbbreviation]=useState("");
    const [discordServer,setDiscordServer]=useState("");
    const [primaryColor,setPrimaryColor]=useState("#2563eb");
    const [secondaryColor,setSecondaryColor]=useState("#111827");
    const [description,setDescription]=useState("");

    return(

        <Modal

            open={open}

            onClose={onClose}

            title="Create Law Enforcement Department"

            width={850}

        >

            <div className="departmentForm">

                <div className="formGroup">

                    <label>

                        <Building2 size={18}/>

                        Department Name

                    </label>

                    <input

                        value={departmentName}

                        onChange={e=>setDepartmentName(e.target.value)}

                        placeholder="Georgia State Patrol"

                    />

                </div>

                <div className="twoColumn">

                    <div className="formGroup">

                        <label>

                            <Hash size={18}/>

                            Abbreviation

                        </label>

                        <input

                            value={abbreviation}

                            onChange={e=>setAbbreviation(e.target.value)}

                            placeholder="GSP"

                        />

                    </div>

                    <div className="formGroup">

                        <label>

                            <Server size={18}/>

                            Discord Server ID

                        </label>

                        <input

                            value={discordServer}

                            onChange={e=>setDiscordServer(e.target.value)}

                            placeholder="123456789012345678"

                        />

                    </div>

                </div>

                <div className="formGroup">

                    <label>

                        Description

                    </label>

                    <textarea

                        rows={4}

                        value={description}

                        onChange={e=>setDescription(e.target.value)}

                        placeholder="Department description..."

                    />

                </div>

                <div className="twoColumn">

                    <div className="formGroup">

                        <label>

                            <Palette size={18}/>

                            Primary Color

                        </label>

                        <input

                            type="color"

                            value={primaryColor}

                            onChange={e=>setPrimaryColor(e.target.value)}

                        />

                    </div>

                    <div className="formGroup">

                        <label>

                            <Palette size={18}/>

                            Secondary Color

                        </label>

                        <input

                            type="color"

                            value={secondaryColor}

                            onChange={e=>setSecondaryColor(e.target.value)}

                        />

                    </div>

                </div>

                <div className="uploadBox">

                    <Upload size={32}/>

                    <h3>

                        Department Patch

                    </h3>

                    <p>

                        PNG, SVG or WEBP

                    </p>

                    <Button
                        variant="secondary"
                    >

                        Upload Logo

                    </Button>

                </div>

                <div className="verifySection">

                    <Button
                        variant="secondary"
                    >

                        <Server size={18}/>

                        Verify Discord Server

                    </Button>

                    <Button>

                        <Shield size={18}/>

                        Create Department

                    </Button>

                </div>

                <div className="futureNotice">

                    <CheckCircle size={18}/>

                    After verification, the CAD will automatically detect
                    the Discord server, retrieve its roles, and allow you
                    to configure rank permissions.

                </div>

            </div>

        </Modal>

    );

}