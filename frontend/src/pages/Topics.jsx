import { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";

export default function Topics() {
  const inp = useRef();

  const [txt, setTxt] = useState(() => {
    return "";
  });

  const [arr, setArr] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("topics")
      ) || []
    );
  });

  useEffect(() => {
    localStorage.setItem(
      "topics",
      JSON.stringify(arr)
    );
  }, [arr]);

  const add = () => {
    if (!txt.trim()) return;

    setArr([
      ...arr,
      {
        name: txt.trim(),
        done: false,
      },
    ]);

    setTxt("");

    setTimeout(() => {
      inp.current?.focus();
    }, 0);
  };

  const tog = (i) => {
    const x = [...arr];

    x[i].done = !x[i].done;

    setArr(x);
  };

  const del = (i) => {
    setArr(
      arr.filter(
        (_, idx) => idx !== i
      )
    );
  };

  return (
    <>
    <Nav />
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl text-white font-bold">
          Topics
        </h1>

        <p className="text-slate-400 mt-2">
          Add all exam topics here.
        </p>

        <div className="flex gap-3 mt-6">

          <input
            ref={inp}
            value={txt}
            onChange={(e) =>
              setTxt(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                add();
              }
            }}
            placeholder="Enter topic"
            className="flex-1 p-3 rounded-xl bg-slate-700 text-white outline-none"
          />

          <button
            onClick={add}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl text-white"
          >
            Add
          </button>

        </div>

        <div className="mt-8 space-y-3">

          {arr.length === 0 && (
            <div className="bg-slate-800 p-5 rounded-xl text-slate-400">
              No topics added yet.
            </div>
          )}

          {arr.map((t, i) => (
            <div
              key={i}
              className="bg-slate-800 p-4 rounded-xl flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() =>
                    tog(i)
                  }
                />

                <span
                  className={
                    t.done
                      ? "text-green-400 line-through"
                      : "text-white"
                  }
                >
                  {t.name}
                </span>

              </div>

              <button
                onClick={() => del(i)}
                className="text-red-400 hover:text-red-300"
              >
                Delete
              </button>

            </div>
          ))}

        </div>
      </div>
    </div>
    </>
  );
}