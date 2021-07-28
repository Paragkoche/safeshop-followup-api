import mongoose from "mongoose";
const datas = new mongoose.Schema(
  {
    _id: String,
    name: String,
    Rft: String,
    phone: Number,
    city: String,
    date: String,
    result: String,
    ftf: String,
  },
  { _id: false, timestamps: true }
);
export const datass = mongoose.model("datas", datas);
