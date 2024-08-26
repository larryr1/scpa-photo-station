import { ParameterizedRouter } from "../../../lib/ParameterizedRouter.mjs";
import { StudentsSearchRouter } from "./StudentsSearch.mjs";
import { StudentsUploadRouter } from "./StudentsUpload.mjs";

export const StudentsIndexRouter = ParameterizedRouter();

StudentsIndexRouter.use("/search", StudentsSearchRouter);
StudentsIndexRouter.use("/upload", StudentsUploadRouter);

StudentsIndexRouter.get("/", (req, res) => {
  res.json({ success: true });
});