import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routing/home";
import About from "./routing/about";
import ContactUs from "./routing/contactUs";
import NoPageFound from "./routing/noPageFound";
import "./App.css";
import College from "./routing/nested/college";
import Teacher from "./routing/nested/teacher";
import Student from "./routing/nested/student";
import Login from "./routing/login";
import Dashboard from "./routing/dashboard";
import MapDemo from "./routing/mapDemo";
import Axios from "./routing/axios";
import FormDemo from "./routing/formDemo";
import ReactHookForm from "./routing/hookFormDemo";
import Uncontrolled from "./routing/uncontrolled";
import Counter from "./routing/counter";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About age="20" />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="college" element={<College />}>
            <Route path="teacher" element={<Teacher />} />
            <Route path="student" element={<Student />} />
          </Route>
          <Route path="map" element={<MapDemo />} />
          <Route path="axios" element={<Axios />} />
          <Route path="formDemo" element={<FormDemo />} />
          <Route path="hookFormDemo" element={<ReactHookForm />} />
          <Route path="uncontrolled" element={<Uncontrolled />} />
          <Route path="counter" element={<Counter />} />
        </Route>

        {/* Wildcard route */}
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </HashRouter>
  );
}
