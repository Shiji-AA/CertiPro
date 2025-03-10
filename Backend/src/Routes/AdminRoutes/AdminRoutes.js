import express from "express";
const adminRouter = express.Router();

import { addcertificate, adminLogin, deleteCertificate, editCertificate, 
    getAllCertificates, getCertificateById } from "../../Controller/AdminController/AdminController.js";


adminRouter.post("/admin",adminLogin);


adminRouter.post("/addcertificate", addcertificate);
adminRouter.get("/getallcertificates", getAllCertificates);
adminRouter.get("/getallcertificate1/:id", getCertificateById);
adminRouter.put("/editcertificate/:id", editCertificate);
adminRouter.delete("/deletecertificate/:id", deleteCertificate);


export default adminRouter;