import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseHyperXC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='HyperX'/>
      <MouseList title='HyperX'/>
    </AdminLayouts>
  );
};
