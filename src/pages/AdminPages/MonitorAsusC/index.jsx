import React from "react";
import { AdminLayouts } from "../../AdminLayouts";
import { MonitorList } from "../../../components/AdminControlList/MonitorList";
import { AddControlMonitorBrand } from "../../../components/AdminControlComp/MonitorControlBrand";

export const MonitorControlAsusC = () => {
  return (
    <>
      <AdminLayouts>
        <AddControlMonitorBrand title="Asus" />
        <MonitorList title="Asus"/>
      </AdminLayouts>
    </>
  );
};
