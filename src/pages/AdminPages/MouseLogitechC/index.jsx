import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseLogitechC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='Logitech'/>
      <MouseList title='Logitech'/>
    </AdminLayouts>
  );
};
