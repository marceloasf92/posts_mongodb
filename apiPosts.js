const axios = require("axios");
const postSchema = require("./src/schema/post.schema");
require("./src/database/mongodb");

const config = {
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
};

const createPost = (response) => {
  if (response.data.length > 0) {
    response.data.map((value) => postSchema.create(value));
  }
};

axios(config)
  .then(createPost)
  .catch((err) => console.log(err));
