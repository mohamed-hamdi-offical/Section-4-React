import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar";

export default function DahsboardPage() {
  return (
      <>
          <Navbar />
          <div className="contact-us-page  w-[65em] container flex items-center justify-between gap-10 h-screen   ">
              <div className=" DashBoard-link w-[15.1em]  h-[19.25em] rounded-[1.25em] bg-[#2A3238] flex items-center justify-center text-[#FFFFFF99]  flex-col gap-3.5 font-[500] ">
                  <NavLink to="/Dashboard/contact-us-form">Contact Us Form</NavLink>
                  <NavLink to="/Dashboard/EmailsPage">Emails</NavLink>
                  <NavLink to="/Dashboard/LocationPage">Locations</NavLink>
                  <NavLink to="/Dashboard/PhoneNumberPage">Phone Number</NavLink>
              </div>
              <div className=" sm:flex sm:flex-col h-[19.25em] rounded-[1.25em] bg-[#FFFFFF] flex items-center justify-center">
                  <Outlet />
              </div>
          </div>
      </>
  );
}
