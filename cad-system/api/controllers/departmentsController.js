const Departments=require("../database/departments");

exports.getDepartments=async(req,res)=>{

    try{

        const departments=

            await Departments.getDepartments();

        res.json(departments);

    }

    catch(err){

        console.error(err);

        res.status(500).json({

            error:"Failed to fetch departments"

        });

    }

};

exports.getDepartment=async(req,res)=>{

    try{

        const department=

            await Departments.getDepartment(req.params.id);

        if(!department){

            return res.status(404).json({

                error:"Department not found"

            });

        }

        res.json(department);

    }

    catch(err){

        console.error(err);

        res.status(500).json({

            error:"Failed to fetch department"

        });

    }

};

exports.createDepartment=async(req,res)=>{

    try{

        const department=

            await Departments.createDepartment(req.body);

        res.status(201).json(department);

    }

    catch(err){

        console.error(err);

        res.status(500).json({

            error:"Failed to create department"

        });

    }

};

exports.updateDepartment=async(req,res)=>{

    try{

        const department=

            await Departments.updateDepartment(

                req.params.id,

                req.body

            );

        res.json(department);

    }

    catch(err){

        console.error(err);

        res.status(500).json({

            error:"Failed to update department"

        });

    }

};

exports.deleteDepartment=async(req,res)=>{

    try{

        await Departments.deleteDepartment(req.params.id);

        res.sendStatus(204);

    }

    catch(err){

        console.error(err);

        res.status(500).json({

            error:"Failed to delete department"

        });

    }

};