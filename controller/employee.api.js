import { Employee } from "../database/dbmodule.js";
//Employee data API

const createEmployee = async (req, res) => {
  try {
    const product = req.body;
    console.log(product);
    const emp = await Employee.create(product);
    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllEmployees = async (req, res) => {
  const emp = await Employee.find({});
  console.log(emp);
  res.status(200).json(emp);
};

//get By Id :
const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await Employee.findById(id);
    console.log(emp);
    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await Employee.findByIdAndUpdate(id, req.body);

    if (!emp) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const updateeemp = await Employee.findById(id);
    console.log(updateeemp);
    res.status(200).send("Product updated succsesfully");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await Employee.findByIdAndDelete(id, req.body);

    if (!emp) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // const updateeemp = await Employee.findById(id);
    console.log("deleted");
    res.status(200).send("Product deleted succsesfully");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  createEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
