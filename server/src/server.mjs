import express from 'express';
import { SiteIndexRouter } from './routes/SiteIndex.mjs';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", SiteIndexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App is listening on " + port);
})