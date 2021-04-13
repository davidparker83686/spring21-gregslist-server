import mongoose from "mongoose";
import CarSchema from "../models/Car";
import HouseSchema from "../models/House";
import ValueSchema from "../models/Value";


// this is where models get registered and access from the db
class DbContext {
  Cars = mongoose.model("Car", CarSchema);
  Houses = mongoose.model("House", HouseSchema);
  Values = mongoose.model("Value", ValueSchema);
}

export const dbContext = new DbContext();
