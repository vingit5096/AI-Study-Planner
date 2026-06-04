import { useEffect, useState } from "react";
import PdfBtn from "../components/PdfBtn";
import Nav from "../components/Nav";
import axios from "axios";

export default function Dash() {
  const [topics, setTopics] = useState([]);
const [rec, setRec] = useState("");
  useEffect(() => {
    const x =
      JSON.parse(
        localStorage.getItem("topics")
      ) || [];

    setTopics(x);
  }, []);

  const total = topics.length;
  
  const p =
  JSON.parse(
    localStorage.getItem("profile")
  ) || {};

  const done = topics.filter(
    (x) => x.done
  ).length;

  const pct =
    total === 0
      ? 0
      : Math.round(
          (done / total) * 100
        );
    

const getRec = async () => {
  try {
    const completed =
      topics
        .filter((x) => x.done)
        .map((x) => x.name);

    const pending =
      topics
        .filter((x) => !x.done)
        .map((x) => x.name);

    const res =
      await axios.post(
        "http://localhost:5000/recommend",
        {
          completed,
          pending,
          progress: pct,
        }
      );

    setRec(res.data.txt);

  } catch (e) {
    console.log(e);
  }
};

  return (
    <>
    <Nav />
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-4xl font-bold text-white">
        Dashboard
      </h1>

      <h1 className="text-4xl font-bold text-white">
       Welcome {p.name || "Student"}
       </h1>

      <div className="grid md:grid-cols-3 gap-4 mt-8">

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-slate-300">
            Total Topics
          </h2>

          <p className="text-4xl text-white mt-2">
            {total}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-slate-300">
            Completed
          </h2>

          <p className="text-4xl text-green-400 mt-2">
            {done}
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-slate-300">
            Progress
          </h2>

          <p className="text-4xl text-blue-400 mt-2">
            {pct}%
          </p>
        </div>

      </div>

      <div className="mt-8 bg-slate-800 p-6 rounded-2xl">
        <h2 className="text-white mb-4">
          Progress
        </h2>
        

        <div className="w-full bg-slate-700 rounded-full h-5">
          <div
            className="bg-green-500 h-5 rounded-full"
            style={{
              width: `${pct}%`,
            }}
          />
        </div>
      </div>
<div className="mt-6 bg-slate-800 p-6 rounded-2xl">

  <div className="flex justify-between items-center">

    <h2 className="text-xl font-bold text-white">
      AI Recommendation
    </h2>

    <button
      onClick={getRec}
      className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-white"
    >
      Get AI Recommendation
    </button>

  </div>

  <pre className="mt-4 text-slate-300 whitespace-pre-wrap">
    {rec}
  </pre>

</div>
      <div className="mt-6">
        <div className="mt-6 bg-slate-800 p-6 rounded-2xl">
  
</div>
      <PdfBtn />
      </div>
    </div>
    </>
  );
}