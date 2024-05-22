const Joi = require("joi");

const SamplePrefsSchema = Joi.object({
  sampleField: Joi.string().required(),
});

module.exports = { SamplePrefsSchema };
