const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const {
GoogleGenerativeAI,
} = require("@google/generative-ai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenerativeAI(
process.env.GEMINI_KEY
);


app.post("/plan", async (req, res) => {
  try {
    const {
      exam,
      date,
      hrs,
      topics,
    } = req.body;

    const model =
      ai.getGenerativeModel({
        model: "gemini-3.5-flash",
      });

    const prompt = `
Create a study plan.

Exam: ${exam}

Exam Date: ${date}

Study Hours Per Day: ${hrs}

Topics:
${topics.join("\n")}

Rules:
- Distribute topics across days
- Add revision sessions
- Add one mock test day
- Return plain text only
`;

    const out =
      await model.generateContent(
        prompt
      );

    const txt =
      out.response.text();

    res.json({
      plan: txt,
    });

  } catch (e) {
    console.error(
      "GEMINI ERROR:"
    );

    console.error(e);

    res.status(500).json({
      msg: e.message,
    });
  }
});


app.post("/recommend", async (req, res) => {
  try {
    const {
      completed,
      pending,
      progress,
    } = req.body;

    const model =
      ai.getGenerativeModel({
        model: "gemini-3.5-flash",
      });

    const prompt = `
Student Study Progress

Completed Topics:
${completed.join("\n")}

Pending Topics:
${pending.join("\n")}

Current Progress:
${progress}%

Give 4 short study recommendations.
Keep the response concise.
`;

    const out =
      await model.generateContent(
        prompt
      );

    res.json({
      txt: out.response.text(),
    });

  } catch (e) {
    console.error(
      "RECOMMEND ERROR:"
    );

    console.error(e);

    res.status(500).json({
      msg: e.message,
    });
  }
});

app.listen(5000, () => {
console.log("server 5000");
});