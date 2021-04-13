import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    company: { type: String, required: true },
    title: { type: String, required: true },
    hours: { type: Number, required: true },
    rate: { type: Number, required: true },
    imgUrl: { type: String, required: true, default: '//placehold.it/300x300' },
    description: { type: String, minLength: 3 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
// timestamps adds createdAt and updatedAt
// virtuals adds the id instead of just _id

export default Job;