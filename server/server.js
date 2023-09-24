const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors"); 

const app = express();

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  
 apiKey: "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" //Clé api secrete a inserer ici
 
});

const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    const { resp } = res;
    console.log(prompt)
    console.log(resp)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt} hh
              The time complexity of this function is
              ###
            `,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });

    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));