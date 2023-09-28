import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterMicroTikC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title={'MicroTik'}/>
      <RouterList title={'MicroTik'}/>
    </AdminLayouts>
  );
};
