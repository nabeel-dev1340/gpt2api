const { MODEL, API_KEY } = require("../constants/constants");
const removeUnwantedChars = require("../helpers/removeUnwanted");
const { SamplePrefsSchema } = require("../schemas/samplePrefs");
const axios = require("axios");

const sampleController = async (req, res) => {
  try {
    const { error, value } = SamplePrefsSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const Prompt = `
      Sample Prompt
    `;

    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };

    const data = {
      model: MODEL,
      messages: [{ role: "user", content: Prompt }],
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      { headers }
    );

    const cleanedRes = removeUnwantedChars(
      response.data.choices[0].message.content
    );

    return res.status(200).json({ response: JSON.parse(cleanedRes) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  sampleController,
};
