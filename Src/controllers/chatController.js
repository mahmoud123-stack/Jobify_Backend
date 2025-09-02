const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyD0NyNaIkqyHGWkFIMco2QLS1vJ-sn_1WM");

const GenerateMethod = async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log(prompt);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.json({ reply: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { GenerateMethod };
