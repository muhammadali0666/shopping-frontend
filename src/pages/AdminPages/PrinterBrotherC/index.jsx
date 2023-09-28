import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { AddControlPrinter } from "../../../components/AdminControlComp/PrinterAddControl";
import { PrinterList } from "../../../components/AdminControlList/PrinterList";

export const PrinterBrotherC = () => {
  return (
    <AdminLayouts>
      <AddControlPrinter title='Brother'/>
      <PrinterList title='Brother' />
    </AdminLayouts>
  );
};
