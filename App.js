import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import express from 'express';
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Users/routes.js";

import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

app.get('/', (req, res) => res.send('Hello World!'));

const port = 4000;
app.listen(process.env.PORT || 4000);