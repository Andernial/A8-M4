import express from "express";
import { userRoute } from "./routes/UserRoute.js";
import {admRoute} from "./routes/AdmRoute.js"
const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoute);
app.use(admRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})