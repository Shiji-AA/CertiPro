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
      // Destructure the fields from the request body
      const {
        certificateId,
        certificateName,
        studentName,
        courseName,
        certificateDate,
        certificatePhoto
      } = req.body;
  
      // Check if all required fields are present
      if (!certificateId || !certificateName || !studentName || !courseName || !certificateDate || !certificatePhoto) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      // Check if certificate already exists by certificateId (using case-insensitive regex)
      const certificateExist = await Certificate.findOne({
        certificateId: { $regex: new RegExp(certificateId, 'i') },
      });
  
      if (certificateExist) {
        console.log('Certificate already exists');
        return res.status(400).json({ error: 'Certificate already exists' });
      }
  
      // Create a new certificate
      const newCertificate = await Certificate.create({
        certificateId,
        certificateName,
        studentName,
        courseName,
        certificateDate,
        certificatePhoto
      });
  
      // If the certificate was created successfully, send response
      if (newCertificate) {
        console.log('New Certificate Added:', newCertificate);
        return res.status(201).json({
          certificateId,
          certificateName,
          studentName,
          courseName,
          certificateDate,
          certificatePhoto,
          message: "Certificate added successfully"
        });
      } else {
        return res.status(400).json({ error: 'Invalid certificate data' });
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


    const editCertificate = async (req, res) => {
        try {
            const { id } = req.params;
            const { certificateId, certificateName, studentName, courseName, certificateDate,certificatePhoto } = req.body;
            console.log("Request Body:", req.body);            
            const certificate = await Certificate.findById(id);    
            if (!certificate) {
                return res.status(404).json({ error: "Invalid certificate" });
            }
    
            certificate.certificateId = certificateId || certificate.certificateId;
            certificate.certificateName = certificateName || certificate.certificateName;
            certificate.studentName = studentName || certificate.studentName;
            certificate.courseName = courseName || certificate.courseName;
            certificate.certificateDate = certificateDate || certificate.certificateDate;
            certificate.certificatePhoto = certificatePhoto || certificate.certificatePhoto;
          
    
            const updatedCertificate = await certificate.save();
    
            if (updatedCertificate) {
                return res.status(200).json({
                    message: "Certificate updated successfully",
                    certificate: updatedCertificate
                });
            } else {
                return res.status(500).json({ error: "Failed to update certificate" });
            }
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