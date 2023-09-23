import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseCorsairC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='Corsair'/>
      <MouseList/>
    </AdminLayouts>
  );
};
