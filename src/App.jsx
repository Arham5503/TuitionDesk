import Login from "./pages/Login";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
import Attendance from "./pages/Attendance";
import Fees from "./pages/Fees";
import Reminders from "./pages/Reminders";
import Classes from "./pages/Classes";
import Timetable from "./pages/Timetable";
import Staff from "./pages/Staff";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
// import Profile from "./pages/Profile";
// import Notifications from "./pages/Notifications";
// import Help from "./pages/Help";
// import Logout from "./pages/Logout";
import AddStudent from "./pages/AddStudent";
import AttendanceReport from "./pages/AttendanceReport";
import RecordPayment from "./pages/RecordPayment";
import FeeVouchers from "./pages/FeeVouchers";
import FeeStructure from "./pages/FeeStructure";
import ReminderSettings from "./pages/ReminderSettings";
import Promote from "./pages/Promote";
import Marks from "./pages/Marks";
import ReportCards from "./pages/ReportCards";
import Teachers from "./pages/Teachers";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="students/new" element={<AddStudent />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="attendance/register" element={<AttendanceReport />} />
          <Route path="fees" element={<Fees />} />
          <Route path="fees/record" element={<RecordPayment />} />
          <Route path="fees/vouchers" element={<FeeVouchers />} />
          <Route path="fees/structure" element={<FeeStructure />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="reminders/settings" element={<ReminderSettings />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/promote" element={<Promote />} />
          <Route path="exams" element={<Marks />} />
          <Route path="exams/report-cards" element={<ReportCards />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="staff" element={<Staff />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="students" element={<Students />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
