import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlKalonka } from "../../../components/AdminControlComp/KalonkaAddControl";
import { KalonkaList } from "../../../components/AdminControlList/KalonkaList";

export const KalonkaC = () => {
  return (
    <AdminLayouts>
      <AddControlKalonka/>
      <KalonkaList/>
    </AdminLayouts>
  );
};
