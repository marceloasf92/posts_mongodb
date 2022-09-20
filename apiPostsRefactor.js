import cheerio from "cheerio";
import axios from "axios";
import "./src/database/mongodb.js";
import postSchema from "./src/schema/post.schema.js";

const config = {
  url: "http://www.ifpe.edu.br/noticias",
  method: "GET",
};

const searchHtml = (config) => axios(config);

const createPost = (mod) => {
  postSchema
    .create(mod)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

const mineData = (createPost) => (html) => {
  let $ = cheerio.load(html.data);
  $(".tileContent").each((index, element) => {
    const mod = {
      id: index + 1,
      title: $(element).find(".tileHeadline").text().trim(),
      body: $(element).find(".description").text().trim(),
    };
    createPost(mod);
  });
};

searchHtml(config)
  .then(mineData(createPost))
  .catch((err) => console.log(err));
