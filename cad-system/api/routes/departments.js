const express=require("express");

const router=express.Router();

const controller=require("../controllers/departmentsController");

router.get(

    "/",

    controller.getDepartments

);

router.get(

    "/:id",

    controller.getDepartment

);

router.post(

    "/",

    controller.createDepartment

);

router.patch(

    "/:id",

    controller.updateDepartment

);

router.delete(

    "/:id",

    controller.deleteDepartment

);

module.exports=router;