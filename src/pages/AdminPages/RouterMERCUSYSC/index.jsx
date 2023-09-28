import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterMERCUSYSC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title='MERCUSYS'/>
      <RouterList title='MERCUSYS'/>
    </AdminLayouts>
  );
};
