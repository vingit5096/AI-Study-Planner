import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

export default function Plan() {
  const [out, setOut] = useState("");

const gen = async () => {
  try {
    const exam =
      JSON.parse(
        localStorage.getItem("exam")
      ) || {};

    const topics =
      JSON.parse(
        localStorage.getItem("topics")
      ) || [];

    const res = await axios.post(
      "http://localhost:5000/plan",
      {
        exam: exam.name,
        date: exam.date,
        hrs: exam.hrs,
        topics: topics.map(
          (x) => x.name
        ),
      }
    );

    setOut(res.data.plan);

  } catch (e) {
    console.log(e);

    alert(
      e?.response?.data?.msg ||
        "AI Error"
    );
  }
};
  return (
     <>
    <Nav />
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={gen}
          className="bg-green-600 px-5 py-3 rounded-xl text-white"
        >
          Generate AI Plan
        </button>

        <pre className="mt-8 bg-slate-800 p-6 rounded-xl text-white whitespace-pre-wrap">
          {out}
        </pre>
      </div>
    </div>
    </>
  );
}