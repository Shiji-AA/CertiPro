import express from "express";
const adminRouter = express.Router();

import { addcertificate, adminLogin, deleteCertificate, editCertificate, 
    getAllCertificates, getCertificateById } from "../../Controller/AdminController/AdminController.js";
import { isLogin } from "../../../Middleware/userAuth.js";


adminRouter.post("/admin",adminLogin);


adminRouter.post("/addcertificate",isLogin, addcertificate);
adminRouter.get("/getallcertificates",isLogin, getAllCertificates);
adminRouter.get("/getallcertificate1/:id", isLogin,getCertificateById);
adminRouter.put("/editcertificate/:id",isLogin, editCertificate);
adminRouter.delete("/deletecertificate/:id", isLogin,deleteCertificate);


export default adminRouter;