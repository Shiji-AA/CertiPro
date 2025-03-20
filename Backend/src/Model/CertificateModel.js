import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,      
      unique: true, 
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    admissionNo: {
      type: String,
      required: true,
      unique: true, 
      index: true,  // Index on admissionNo
    },
    studentName: {
      type: String,
      required: true,
    },
    certificateName: { 
      type: [String], 
      required: true, 
    },
    courseName: { 
      type: String, 
      required: true, 
    },
    courseDuration: {
      type: String, 
      required: true,
    },
    studentPhoto: {
      type: String,
      default: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model('Certificate', certificateSchema);
export default Certificate;
