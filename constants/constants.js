require("dotenv").config();

const MODEL = "gpt-3.5-turbo";
const API_KEY = process.env.OPENAI_API_KEY;

module.exports = {
  MODEL,
  API_KEY,
};
