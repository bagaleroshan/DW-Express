import express, { json } from "express";
import { traineesRouter } from "./src/route/traineesRouter.js";
let expressApp = express();
expressApp.use(json());

expressApp.use("/trainees", traineesRouter);

expressApp.listen(8000, () => {
  console.log("app is listening at port 8000");
});
