import express from 'express';
import { getCertificateById, loginUser, registerUser } from '../../Controller/UserController/UserController.js';

const router= express.Router()



router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/getcertificatebyid/:id", getCertificateById);


export default router;

