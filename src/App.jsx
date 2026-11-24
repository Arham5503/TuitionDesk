import Login from "./pages/Login";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
