import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dash from "./pages/Dash";
import NewExam from "./pages/NewExam";
import Topics from "./pages/Topics";
import Plan from "./pages/Plan";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/dash"
          element={<Dash />}
        />

        <Route
          path="/exam"
          element={<NewExam />}
        />

        <Route
          path="/topics"
          element={<Topics />}
        />

        <Route
          path="/plan"
          element={<Plan />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;