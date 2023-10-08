import React from "react";
import { useEffect, useState } from "react";

export const NoutbookList = () => {
  const [data, setData] = useState([]);

  ///////////////////////////// get data

  useEffect(() => {
    fetch(`http://localhost:4001/get_noutbooks`)
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  ///////////////////////////// get data
  ///////////////////////////// delete

  const handleDelete = (e) => {
    fetch(`http://localhost:4001/delete_noutbook/${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        getATN: localStorage.getItem("getATN"),
      },
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg))
      .catch((error) => console.log(error));
    window.location.reload(true);
  };

  ///////////////////////////// delete
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
              Ekran diaganali
            </th>
            <th className="control_th" scope="col">
              Ekran o'lchami
            </th>
            <th className="control_th" scope="col">
              Protsessor
            </th>
            <th className="control_th" scope="col">
              Protsessor chastotasi
            </th>
            <th className="control_th" scope="col">
              Ram
            </th>
            <th className="control_th" scope="col">
              Sinf
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
          {data.length &&
            data.map((element, idx) => (
              <tr key={idx}>
                <th className="control_th" scope="row">
                  {idx + 1}
                </th>
                <td className="control_td">{element.title}</td>
                <td className="control_td">{element.price}</td>
                <td className="control_td">{element.comments}</td>
                <td className="control_td">{element.brand}</td>
                <td className="control_td">{element.category}</td>
                <td className="control_td">{element.ekranDiaganali}</td>
                <td className="control_td">{element.ekranOlchami}</td>
                <td className="control_td">{element.protsessor}</td>
                <td className="control_td">{element.protsessorChastotasi}</td>
                <td className="control_td">{element.ram}</td>
                <td className="control_td">{element.sinfi}</td>
                <td className="control_td">
                  <i
                    class="fa-solid fa-pen-to-square"
                    style={{ color: "#060f42" }}
                  ></i>
                </td>
                <td className="control_td">
                  <i
                    class="fa-solid fa-trash"
                    style={{ color: "#060f42" }}
                    onClick={() => handleDelete(element.id)}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
