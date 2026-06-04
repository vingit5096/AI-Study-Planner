import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-3xl">

        <h1 className="text-3xl text-white font-bold">
          Login
        </h1>

        <div className="mt-6 space-y-4">

          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-slate-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-slate-700 text-white"
          />

          <button
            onClick={() => nav("/dash")}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-xl text-white"
          >
            Login
          </button>

          <p className="text-slate-400 text-center mt-4">
            New user?{" "}

            <button
              onClick={() => nav("/register")}
              className="text-blue-400"
            >
              Register
            </button>

          </p>

        </div>

      </div>
    </div>
  );
}