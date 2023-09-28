import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterTPLinkC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title={'TP_Link'}/>
      <RouterList title={'TP_Link'}/>
    </AdminLayouts>
  );
};
