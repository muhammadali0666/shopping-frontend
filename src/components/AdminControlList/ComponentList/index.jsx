import React from "react";
import "../list.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

export const ComponentList = () => {
  const [data, setData] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  ///////////////////////////// get data

  useEffect(() => {
    fetch(`http://localhost:4001/get_components`)
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  ///////////////////////////// get data
  ///////////////////////////// delete

  const handleDelete = (e) => {
    fetch(`http://localhost:4001/delete_component/${e}`, {
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
  ///////////////////////////// update

  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [category, setCategory] = useState("component");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [picture, setPicture] = useState(null);
  const [foundedId, setFoundedId] = useState('')

  const handleFileImg = (event) => {
    setPicture(event.target.files[0]);
  };

  const formData = new FormData();
  formData.append("file", picture);
  formData.append("upload_preset", "chatImages");

  const handleUploadImg = async (e) => {

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch(`http://localhost:4001/update_component/${foundedId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            getATN: localStorage.getItem("getATN"),
          },
          body: JSON.stringify({
            picture: data.url,
            title: title,
            comments: comments,
            category: category,
            price: price,
            brand: brand,
          }),
        })
          .then((res) => res.json())
          .then((data) => alert(data.msg))
          .catch((error) => console.log(error));
        window.location.reload(true);
      });
  };

  ///////////////////////////// update
  return (
    <div className="control_list">
      {/* modal  */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal"
        // style={{height: "100vh", overflowY: "scroll"}}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            className="katalog_wrapper"
            style={{ height: "60vh", overflowY: "scroll" }}
          >
            <div className="control_box" style={{ width: "100%" }}>
              <h2 className="control_paragraph">Compyuter component update</h2>
              <form className="control_form" onSubmit={handleUploadImg}>
                <div className="control_form_wrapper">
                  <div className="control_form_left">
                    <label htmlFor="title" className="control_form_label">
                      title
                      <input
                        type="text"
                        className="control_form_input"
                        placeholder="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </label>
                    <label htmlFor="comments" className="control_form_label">
                      comments
                      <input
                        type="text"
                        className="control_form_input"
                        placeholder="comments"
                        id="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                      />
                    </label>
                    <label htmlFor="price" className="control_form_label">
                      price
                      <input
                        type="text"
                        className="control_form_input"
                        placeholder="price"
                        id="title"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="control_form_right">
                    <label htmlFor="brand" className="control_form_label">
                      brand
                      <input
                        type="text"
                        className="control_form_input"
                        placeholder="brand"
                        id="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                      />
                    </label>
                    <label htmlFor="picture" className="control_form_label">
                      picture
                      <input
                        type="file"
                        className="control_form_input"
                        placeholder="picture"
                        id="picture"
                        onChange={(e) => handleFileImg(e)}
                      />
                    </label>
                  </div>
                </div>
                <button
                  className="control_form_btn"
                  type="submit"
                  style={{ marginTop: "30px" }}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal  */}
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
                <td className="control_td" onClick={() => setFoundedId(element.id)}>
                  <i
                    class="fa-solid fa-pen-to-square"
                    style={{ color: "#060f42" }}
                    onClick={() => setLgShow(true)}
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
