import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: "admin" | "user";
  gender: "male" | "female";
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
  // virtual attribute
  age: number;
}

const userShema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter the ID"],
    },
    name : {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Please enter name"],
        validate: validator.default.isEmail
    },
    photo: {
        type: String,
        required: [true, "Please add photo"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender : {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter your gender"]
    },
    dob: {
        type: Date,
        required: [true, "Enter your date of birth"]
    }
  },
  {
    timestamps: true,
  }
);

userShema.virtual("age").get(function (){
  const today = new Date();
  const dob = this.dob;
  let age = today.getFullYear() - dob.getFullYear();

  if (today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()){
    age--;
  }
  return age;
})

export const User = mongoose.model<IUser>("User", userShema);
