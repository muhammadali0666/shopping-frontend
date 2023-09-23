import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlPrinter } from "../../../components/AdminControlComp/PrinterAddControl";
import { PrinterList } from "../../../components/AdminControlList/PrinterList";

export const PrinterXeroxC = () => {
  return (
    <AdminLayouts>
      <AddControlPrinter title='Xerox'/>
      <PrinterList />
    </AdminLayouts>
  );
};
