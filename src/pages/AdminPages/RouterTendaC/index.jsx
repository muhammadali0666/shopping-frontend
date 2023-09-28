import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterTendaC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title='Tenda'/>
      <RouterList title='Tenda'/>
    </AdminLayouts>
  );
};
