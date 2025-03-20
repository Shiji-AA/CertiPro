import express from 'express';
import { allCertificatesAdmissionNo, getCertificateById, loginUser, registerUser } from '../../Controller/UserController/UserController.js';

const router= express.Router()



router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/getcertificatebyid/:id", getCertificateById);
router.get("/allCertificatesAdmissionNo/:id", allCertificatesAdmissionNo);




export default router;

