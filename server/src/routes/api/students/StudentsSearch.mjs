import { Students } from "../../../lib/Database.mjs";
import { ParameterizedRouter } from "../../../lib/ParameterizedRouter.mjs";

export const StudentsSearchRouter = ParameterizedRouter();

function findFunction(query) {
  return function() {
    return (
      this.id.toLowerCase().includes(query) || 
      this.firstName.toLowerCase().includes(query) ||
      this.lastName.toLowerCase().includes(query)
    )
  }
}

StudentsSearchRouter.post("/", async (req, res) => {

  console.log("Got search request!");
  console.log("req.body: " + JSON.stringify(req.body));

  // Special case for when client wants every record
  if (req.body.returnAll) {
    const dbResult = await Students.findAsync({});
    res.json(dbResult);
    return;
  }

  const query = new String(req.body.query).trim().toLowerCase().replace(/^0+/, '');
  const dbResult = await Students.findAsync({ $where: findFunction(query)});
  res.json(dbResult);
});