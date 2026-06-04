import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-slate-800 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex gap-4">
        
        <Link
  to="/profile"
  className="text-white hover:text-blue-400"
>
  Profile
</Link>

        <Link
          to="/dash"
          className="text-white hover:text-blue-400"
        >
          Dashboard
        </Link>

 <Link
to="/exam"
className="text-white hover:text-blue-400"
>
Create Exam
</Link>

        <Link
          to="/topics"
          className="text-white hover:text-blue-400"
        >
          Topics
        </Link>

        <Link
          to="/plan"
          className="text-white hover:text-blue-400"
        >
          AI Plan
        </Link>

      </div>
    </div>
  );
}