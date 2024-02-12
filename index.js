import express, { json } from "express";
import { traineesRouter } from "./src/route/traineesRouter.js";
import { firstRouter } from "./src/route/firstRouter.js";
import { nameRouter } from "./src/route/nameRouter.js";
import { bikeRouter } from "./src/route/bikeRouter.js";
let expressApp = express();
expressApp.use(json());

expressApp.use("/trainees", traineesRouter);
expressApp.use("/", firstRouter)
expressApp.use("/name",nameRouter)
expressApp.use("/bike",bikeRouter)

expressApp.listen(8000, () => {
  console.log("app is listening at port 8000");
});
