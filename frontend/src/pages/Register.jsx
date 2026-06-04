import { useNavigate } from "react-router-dom";
export default function Register() {
  const nav = useNavigate();
    return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-slate-800 p-8 rounded-3xl">

        <h1 className="text-3xl font-bold text-white">
          Register
        </h1>

        <div className="mt-6 space-y-4">

          <input
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-slate-700 text-white"
          />

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
  onClick={() => nav("/")}
  className="w-full bg-green-600 p-3 rounded-xl text-white"
>
  Register
</button>

</div>
</div>
</div>
  );
}