import React from "react";

export const KalonkaList = () => {
  return (
    <div className="control_list">
      <table class="table" style={{ borderCollapse: "collapse" }}>
        <thead className="control_table_head">
          <tr className="control_table_row">
            <th className="control_th" scope="col">
              #
            </th>
            <th className="control_th" scope="col">
              Title
            </th>
            <th className="control_th" scope="col">
              Price
            </th>
            <th className="control_th" scope="col">
              Comments
            </th>
            <th className="control_th" scope="col">
              Brand
            </th>
            <th className="control_th" scope="col">
              Category
            </th>
            <th className="control_th" scope="col">
              Edit
            </th>
            <th className="control_th" scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="control_table_body">
          <tr>
            <th className="control_th" scope="row">
              1
            </th>
            <td className="control_td">Mark</td>
            <td className="control_td">Otto</td>
            <td className="control_td">@mdo</td>
            <td className="control_td">Otto</td>
            <td className="control_td">Otto</td>
            <td className="control_td">
              <i
                class="fa-solid fa-pen-to-square"
                style={{ color: "#060f42" }}
              ></i>
            </td>
            <td className="control_td">
              <i class="fa-solid fa-trash" style={{ color: "#060f42" }}></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
