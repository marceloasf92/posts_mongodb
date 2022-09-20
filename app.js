import express from "express";
// import bodyParser from "body-parser";
import postRoutes from "./src/routes/post.routes";
import _ from "./src/database/mongodb";

const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", postRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
