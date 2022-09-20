import express from "express";
import postRoutes from "./src/routes/post.routes.js";
import "./src/database/mongodb.js";

const app = express();

app.use(express.json());

app.use("/", postRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
