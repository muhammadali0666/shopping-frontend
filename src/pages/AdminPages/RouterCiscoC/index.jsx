import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterCiscoC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title={'Cisco'}/>
      <RouterList/>
    </AdminLayouts>
  );
};
