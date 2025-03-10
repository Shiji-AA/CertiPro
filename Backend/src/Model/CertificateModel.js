import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: true,
    unique: true,  
  },
  studentName: {
    type: String,
    required: true,
  },
  certificateName: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  certificateDate: {
    type: Date,
    required: true,
    default: Date.now,  
  },
  certificatePhoto: {    
      type:String,
      default:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",  
  } 
},
{ timestamps: true },

);

const Certificate = mongoose.model('Certificate', certificateSchema);
export default Certificate; 
