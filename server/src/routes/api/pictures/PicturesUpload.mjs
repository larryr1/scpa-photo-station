import { ParameterizedRouter } from "../../../lib/ParameterizedRouter.mjs";

const PicturesUploadRouter = ParameterizedRouter();

PicturesUploadRouter.post("/", MulterUpload.single("picture"), (req, res) => {

});