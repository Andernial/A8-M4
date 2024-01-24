import express from "express";
import { insertAdmin, getAdminByEmail} from "../controllers/AdmController.js";
import { Admins } from "../controllers/AdmController.js";
const admRoute = express.Router();

// let adms = [];

admRoute.post("/registerAdmin", (req,res)=> {
  const { name, email, password,store } = req.body;
  const newAdmin = insertAdmin(name, email, password,store);
  console.log(newAdmin)
  res.json({newAdmin});
})

admRoute.get("/getAllAdms", (req,res)=> {
  res.json({Admins})
})

admRoute.get("/getAdmByEmail", (req,res)=> {
  const { email } = req.body;
  const admin = getAdminByEmail(email);
  res.json({admin}); 
});





export { admRoute } 