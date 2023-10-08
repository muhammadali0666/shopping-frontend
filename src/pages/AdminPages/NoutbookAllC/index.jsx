import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlNoutbook } from "../../../components/AdminControlComp/AddNoutbookControl";
import { NoutbookList } from "../../../components/AdminControlList/NoutbookList";

export const NoutbookAllC = () => {
  return (
    <AdminLayouts>
      <AddControlNoutbook />
      <NoutbookList/>
    </AdminLayouts>
  );
};
