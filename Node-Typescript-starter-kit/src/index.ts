import express, {Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {Server} from "typescript-rest";
import path from 'path'


export const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "static")))



Server.buildServices(app);

// Just checking if given PORT variable is an integer or not
let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 4000;
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/static/index.html");
})
app.listen(port, "127.0.0.1", () => {
  console.log(`🚀 Server Started at PORT: ${port}`);
});