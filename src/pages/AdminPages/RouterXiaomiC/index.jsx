import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterXiaomiC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title='Xiaomi'/>
      <RouterList/>
    </AdminLayouts>
  );
};
