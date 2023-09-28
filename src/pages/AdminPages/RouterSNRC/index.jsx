import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlRouter } from "../../../components/AdminControlComp/RouterAddControl";
import { RouterList } from "../../../components/AdminControlList/RouterList";

export const RouterSNRC = () => {
  return (
    <AdminLayouts>
      <AddControlRouter title='SNR'/>
      <RouterList title='SNR'/>
    </AdminLayouts>
  );
};
