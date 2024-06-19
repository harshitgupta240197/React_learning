import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./commonStyle.css";

export default function Dashboard() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contactUs">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="college">College</NavLink>
        </li>
        <li>
          <NavLink to="map">Map</NavLink>
        </li>
        <li>
          <NavLink to="axios">Axios</NavLink>
        </li>
        <li>
          <NavLink to="formDemo">Form Demo</NavLink>
        </li>
        <li>
          <NavLink to="hookFormDemo">hook Form Demo</NavLink>
        </li>
        <li>
          <NavLink to="uncontrolled">Uncontrolled</NavLink>
        </li>
        <li>
          <NavLink to="counter">Counter</NavLink>
        </li>
        <li className="logoutTab">
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
