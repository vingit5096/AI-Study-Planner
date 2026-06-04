import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function NewExam() {
  const nav = useNavigate();

  const [frm, setFrm] = useState({
    name: "",
    date: "",
    hrs: "",
    score: "",
  });

  const chg = (e) => {
    setFrm({
      ...frm,
      [e.target.name]: e.target.value,
    });
  };

  const save = () => {
    if (
      !frm.name ||
      !frm.date ||
      !frm.hrs
    ) {
      alert(
        "Please fill all required fields"
      );
      return;
    }

    localStorage.setItem(
      "exam",
      JSON.stringify(frm)
    );

    alert("Exam saved");

    nav("/topics");
  };

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-slate-900 p-8">

        <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-3xl">

          <h1 className="text-3xl font-bold text-white">
            Create Exam
          </h1>

          <p className="text-slate-400 mt-2">
            Enter your exam details.
          </p>

          <div className="mt-6 space-y-4">

            <input
              name="name"
              value={frm.name}
              placeholder="Exam Name"
              onChange={chg}
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <input
              type="date"
              name="date"
              value={frm.date}
              onChange={chg}
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <input
              name="hrs"
              value={frm.hrs}
              placeholder="Hours Per Day"
              onChange={chg}
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <input
              name="score"
              value={frm.score}
              placeholder="Target Score %"
              onChange={chg}
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <button
              onClick={save}
              className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-xl text-white"
            >
              Save Exam
            </button>

          </div>

        </div>

      </div>
    </>
  );
}