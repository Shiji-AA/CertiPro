import dotenv from 'dotenv';
dotenv.config();
import generateToken from '../../../Utils/generateToken.js'
import mongoose from "mongoose";
import User from '../../Model/UserModel.js';
import Certificate from '../../Model/CertificateModel.js'



const  adminLogin = async (req,res) => {      
    try {
      const adminEmail = process.env.ADMIN_EMAIL;
      const id = new mongoose.Types.ObjectId(process.env.ADMIN_ID);     
         
      const { email, password } = req.body;  
               
        if (adminEmail === email && password) {

            const token = generateToken(id);
            return res.status(200).json({
                id,
                adminEmail,
                token,                
                message :"Logged successfully"             
            });
        } else {
            return res.status(401).json({ message: "Invalid Email or password" });
        }
    } catch (error) {
        return res.status(500).json({ message: "An error occurred. Please try again later." });
    }
};


const addcertificate = async (req, res) => {
    try {
     
      const {
        admissionNo,
        certificateName,
        studentName,
        courseName,
        courseDuration ,
        studentPhoto
      } = req.body;

  
      // Check if all required fields are present
      if (!admissionNo || !certificateName || !studentName || !courseName || !courseDuration || !studentPhoto) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      // Check if certificate already exists by certificateId (using case-insensitive regex)
      const admissionNoExist = await Certificate.findOne({
        admissionNo: { $regex: new RegExp(admissionNo, 'i') },
      });
  
      if (admissionNoExist) {
        console.log('AdmissionNo already exists');
        return res.status(400).json({ error: 'AdmissionNo already exists' });
      }
  
      // Create a new certificate
      const newAdmissionNo = await Certificate.create({
        admissionNo,
        certificateName,
        studentName,
        courseName,
        courseDuration,
        studentPhoto
      });
  
      // If the newAdmissionNo was created successfully, send response
      if (newAdmissionNo) {
          return res.status(201).json({
          admissionNo,
          certificateName,
          studentName,
          courseName,
          courseDuration,
          studentPhoto,
          message: "Admission added successfully"
        });
      } else {
        return res.status(400).json({ error: 'Invalid Admission data' });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      return res.status(500).json({ message: "An error occurred. Please try again later." });
    }
  };
  

const getAllCertificates = async (req, res) => {
    try {
            const certificatesDetails = await Certificate.find().exec();
            if (certificatesDetails) {      
             res.status(200).json({
                certificatesDetails,
                message:"certificatesDetails"
              });
            } else {
              return res.status(400).json({
                message: "no certificates in this table",
              });
            }
          } catch (error) {
            return res.status(500).json({ message: "An error occurred. Please try again later." });  
          }
        };

              //to get category details as per id
const getCertificateById =async (req,res)=>{
    const certificateId=req.params.id;
    try{  
      const certificatesDetails = await Certificate.findById(certificateId).exec();
      if (certificatesDetails) {
        res.status(200).json({
            certificatesDetails,
          message: "certificate found successfully",
        });
      } else {
        return res.status(404).json({
          message: "Certificate not found",
        });
      }
    } catch (error) {
      return res.status(500).json({ message: "An error occurred. Please try again later." });    
    }
    }


  //   const editCertificate = async (req, res) => {
  //     try {
  //         const { id } = req.params;
  //         const { certificateId, certificateName, studentName, courseName, courseDuration, studentPhoto, admissionNo } = req.body;
          
  //         console.log(req.body,"req.body");

  //         const certificate = await Certificate.findById(id);    
  //         if (!certificate) {
  //             return res.status(404).json({ error: "Invalid Admission details" });
  //         }
  
  //         // Update fields only if they are provided
  //         certificate.certificateId = certificateId || certificate.certificateId;
  //         certificate.certificateName = certificateName || certificate.certificateName;
  //         certificate.studentName = studentName || certificate.studentName;
  //         certificate.courseName = courseName || certificate.courseName;
  //         certificate.courseDuration = courseDuration || certificate.courseDuration ;
  //         certificate.studentPhoto = studentPhoto || certificate.studentPhoto;
  //         certificate.admissionNo = admissionNo || certificate.admissionNo;
  
  //         const updatedCertificate = await certificate.save();
  
  //         if (updatedCertificate) {
  //             return res.status(200).json({
  //                 message: "Certificate updated successfully",
  //                 certificate: updatedCertificate
  //             });
  //         } else {
  //             return res.status(500).json({ error: "Failed to update certificate" });
  //         }
  //     } catch (error) {
  //         console.error("Error updating certificate:", error);
  //         return res.status(500).json({ message: "An error occurred. Please try again later." });
  //     }
  // };

  const editCertificate = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body; // Get only sent fields
  
      console.log("Received Update Data:", updateData);
  
      const certificate = await Certificate.findById(id);
      if (!certificate) {
        return res.status(404).json({ error: "Invalid Admission details" });
      }
  
      // Update only provided fields
      Object.keys(updateData).forEach((key) => {
        if (updateData[key] !== undefined) {
          certificate[key] = updateData[key];
        }
      });
  
      const updatedCertificate = await certificate.save();
  
      return res.status(200).json({
        message: "Certificate updated successfully",
        certificate: updatedCertificate,
      });
    } catch (error) {
      console.error("Error updating certificate:", error);
      return res.status(500).json({ message: "An error occurred. Please try again later." });
    }
  };
  
  
  
      const deleteCertificate = async(req,res)=>{
        try{
          const {id}=req.params;
          const certificate = await Certificate.findById(id);
          if(!certificate ){
            return res.status(400).json({error:"Certificate  not found"})
          }
       await Certificate .findByIdAndDelete(id)
       res.status(200).json({message:"certificate  deleted successfully"})
          }  
        catch(error){    
          return res.status(500).json({ message: "An error occurred. Please try again later." });  
        }  
      }
    

export {adminLogin,addcertificate,getAllCertificates,getCertificateById,editCertificate,deleteCertificate}