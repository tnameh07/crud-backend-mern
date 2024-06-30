import mongoose from "mongoose";

const employeeschema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please enter First name"],
  },
  lname: {
    type: String,
    required: [true, "Please enter Last name"],
  },
  email: {
    type: String,
    required: [true, "Please enteremail"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number missing "],
  },
  address: {
    type: String,
    required: [true, "Please enter address"],
  },
  image: {
    type: String,
    required: false,
  },
  pswd: {
    type: String,
    required: [true, "Password"],
  },

  role: {
    type: String,
    required: [true, "catagory  not selected"],
  },
  veryfied: {
    type: Boolean,
    required: false,
  },
});

const Employee = mongoose.model("EmployeeDB", employeeschema);

export { Employee };
