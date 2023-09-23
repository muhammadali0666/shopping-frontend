import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterNetisC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title='Netis'/>
      <RouterList/>
    </AdminLayouts>
  );
};
