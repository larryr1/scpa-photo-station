import { ParameterizedRouter } from "../lib/ParameterizedRouter.mjs";
import { ApiIndexRouter } from "./api/ApiIndex.mjs";

export const SiteIndexRouter = ParameterizedRouter();

SiteIndexRouter.use("/api", ApiIndexRouter);

SiteIndexRouter.get("/", (req, res) => {
  res.json({ success: true, message: "Site is online." });
});