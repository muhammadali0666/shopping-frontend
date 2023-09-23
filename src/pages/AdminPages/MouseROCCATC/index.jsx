import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseROCCATC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='ROCCAT'/>
      <MouseList/>
    </AdminLayouts>
  );
};
