import mongoose, { Schema } from "mongoose";

const EnquirySchema = new Schema(
    {
        name:String,
        email: String,
        contact: Number,
        message: String,
    },
    {timestamps: true }
);

export default mongoose.models.Enquiry || 
   mongoose.model("Enquiry", EnquirySchema);