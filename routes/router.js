import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
} from "../controller/employee.api.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("router pages");
});
router.post("/add", createEmployee);
router.get("/getAll", getAllEmployees);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
// router.get('/', createEmployee);

export { router };
