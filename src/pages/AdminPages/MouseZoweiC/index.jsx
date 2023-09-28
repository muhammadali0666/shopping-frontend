import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseZowieC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='Zowei by BenQ'/>
      <MouseList title='Zowei by BenQ'/>
    </AdminLayouts>
  );
};
