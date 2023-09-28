import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseLenovoC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='Lenovo'/>
      <MouseList title='Lenovo'/>
    </AdminLayouts>
  );
};
