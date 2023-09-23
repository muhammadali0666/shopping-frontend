import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlMouse } from "../../../components/AdminControlComp/MouseAddControl";
import {MouseList} from "../../../components/AdminControlList/MouseList"

export const MouseMicrosoftC = () => {
  return (
    <AdminLayouts>
      <AddControlMouse title='Microsoft'/>
      <MouseList/>
    </AdminLayouts>
  );
};
