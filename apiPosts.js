import axios from "axios";
import postSchema from "./src/schema/post.schema.js";
import "./src/database/mongodb.js";

const createPost = (response) => {
  if (response.data.length > 0) {
    response.data.map((value) => postSchema.create(value));
  }
};

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(createPost)
  .catch((err) => console.log(err));
