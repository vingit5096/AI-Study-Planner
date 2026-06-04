import { useState, useEffect } from "react";
import Nav from "../components/Nav";

export default function Profile() {
  const [frm, setFrm] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
    goal: "",
  });

  useEffect(() => {
    const x =
      JSON.parse(
        localStorage.getItem("profile")
      ) || {};

    setFrm({
      name: x.name || "",
      email: x.email || "",
      college: x.college || "",
      branch: x.branch || "",
      goal: x.goal || "",
    });
  }, []);

  const chg = (e) => {
    setFrm({
      ...frm,
      [e.target.name]: e.target.value,
    });
  };

  const save = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(frm)
    );

    alert("Profile Saved");
  };

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-slate-900 p-8">

        <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-3xl">

          <h1 className="text-3xl text-white font-bold">
            Profile
          </h1>

          <div className="mt-6 space-y-4">

            <input
              name="name"
              value={frm.name}
              onChange={chg}
              placeholder="Name"
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <input
              name="email"
              value={frm.email}
              onChange={chg}
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <input
              name="college"
              value={frm.college}
              onChange={chg}
              placeholder="College"
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <input
              name="branch"
              value={frm.branch}
              onChange={chg}
              placeholder="Branch"
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <input
              name="goal"
              value={frm.goal}
              onChange={chg}
              placeholder="Daily Study Goal"
              className="w-full p-3 rounded-xl bg-slate-700 text-white"
            />

            <button
              onClick={save}
              className="w-full bg-green-600 p-3 rounded-xl text-white"
            >
              Save Profile
            </button>

          </div>

        </div>

      </div>
    </>
  );
}