import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./style.css"
import { AdminSidebar } from "../../components/AdminSidebar";

export const AdminLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <div className="admin_layout container">
        <div className="admin_layout_left">
          <AdminSidebar/>
        </div>
        <div className="admin_layout_right">{children}</div>
      </div>
      <Footer />
    </>
  );
};
