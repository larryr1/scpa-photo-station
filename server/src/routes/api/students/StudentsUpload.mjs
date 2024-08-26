import { MulterUpload } from "../../../lib/MulterUpload.mjs";
import { ParameterizedRouter } from "../../../lib/ParameterizedRouter.mjs";
import { createReadStream, promises as fsPromises } from 'fs';
import parse from 'csv-parser';
import { Students } from "../../../lib/Database.mjs";

export const StudentsUploadRouter = ParameterizedRouter();

StudentsUploadRouter.post("/", MulterUpload.single("students"), async (req, res) => {

  console.log("Got upload request.");

  if (!req.file) {
    res.status(400).json({ success: false, code: "NOFILE", message: "There was no file provided in the \"students\" form data property."});
    console.log("Rejected upload request because it was missing the file.");
    return;
  }

  var rows = [];

  var isFirstRow = true;
  createReadStream(req.file.path)
    .pipe(parse({ separator: ",", headers: ['id', 'lastName', 'firstName', 'grade']}))
    .on("data", (row) => {
      if (isFirstRow) {
        if (row.id !== "id" || row.lastName !== "lastName" || row.firstName !== "firstName" || row.grade !== "grade") {
          console.log(JSON.stringify(row))
          throw new Error("Uploaded CSV file is not in the correct format.");
        }
        isFirstRow = false;
        return;
      }

      rows.push(row);
    })
    .on("end", async () => {
      console.log("Done.");
      await handleNewData(rows);
      await fsPromises.unlink("uploads/" + req.file.filename);
      res.json({ success: true });
    });
});

/**
 * Recreates the Students database using the data provided.
 * @param {*} rows The rows to add to the database once recreated.
 */
async function handleNewData(rows) {
  console.log("Recreating database with new rows: " + JSON.stringify(rows));
  await Students.removeAsync({}, { multi: true });
  await fsPromises.unlink("students.db");
  rows.forEach(async (r) => {
    await Students.insertAsync((r));
  });
}