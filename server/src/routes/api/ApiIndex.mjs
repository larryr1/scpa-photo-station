import { ParameterizedRouter } from "../../lib/ParameterizedRouter.mjs";
import { StudentsIndexRouter } from "./students/StudentsIndex.mjs";

export const ApiIndexRouter = ParameterizedRouter();

ApiIndexRouter.use("/students", StudentsIndexRouter);

ApiIndexRouter.get("/", (req, res) => {
  res.json({ success: true, message: "API is running." });
});