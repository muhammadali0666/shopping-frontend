import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlPrinter } from "../../../components/AdminControlComp/PrinterAddControl";
import { PrinterList } from "../../../components/AdminControlList/PrinterList";

export const PrinterCanonC = () => {
  return (
    <AdminLayouts>
      <AddControlPrinter title='Canon'/>
      <PrinterList title='Canon'/>
    </AdminLayouts>
  );
};
