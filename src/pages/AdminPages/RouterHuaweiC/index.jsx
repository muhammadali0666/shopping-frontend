import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterHuaweiC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title='Huawei'/>
      <RouterList/>
    </AdminLayouts>
  );
};
