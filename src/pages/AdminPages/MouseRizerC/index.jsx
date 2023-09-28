import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseRizerC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='Rizer'/>
      <MouseList title='Rizer'/>
    </AdminLayouts>
  );
};
