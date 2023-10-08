import React from "react";
import "../admin_control.css";
import { useState } from "react";

export const AddControlNoutbook = (props) => {
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [category, setCategory] = useState("computer");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [picture, setPicture] = useState(null);
  const [diaganal, setDiaganal] = useState("");
  const [olcham, setOlcham] = useState("");
  const [protsessor, setProtsessor] = useState("");
  const [protsessorChastotasi, setProtsessorChastotasi] = useState("");
  const [ram, setRam] = useState("");
  const [sinfi, setSinfi] = useState("");

  const handleFileImg = (event) => {
    setPicture(event.target.files[0]);
  };

  const formData = new FormData();
  formData.append("file", picture);
  formData.append("upload_preset", "chatImages");

  const handleUploadImg = async (e) => {
    e.preventDefault();

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:4001/create_noutbook", {
          method: "POST",
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
            ekranDiaganali: diaganal,
            ekranOlchami: olcham,
            protsessor: protsessor,
            protsessorChastotasi: protsessorChastotasi,
            ram: ram,
            sinfi: sinfi
          }),
        })
          .then((res) => res.json())
          .then((data) => alert(data.msg))
          .catch((error) => console.log(error));
        window.location.reload(true);
      });
  };
  return (
    <div className="control_box">
      <h2 className="control_paragraph">Noutbuk {props.title}</h2>
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
            <label htmlFor="diaganal" className="control_form_label">
              ekran diaganal
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran diaganal"
                id="diaganal"
                value={diaganal}
                onChange={(e) => setDiaganal(e.target.value)}
              />
            </label>
            <label htmlFor="chastota" className="control_form_label">
              protsessor chastota
              <input
                type="text"
                className="control_form_input"
                placeholder="protsessor chastota"
                id="chastota"
                value={protsessorChastotasi}
                onChange={(e) => setProtsessorChastotasi(e.target.value)}
              />
            </label>
            <label htmlFor="ram" className="control_form_label">
              ram
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran ram"
                id="ram"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
              />
            </label>
          </div>
          <div className="control_form_right">
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
            <label htmlFor="o'lchami" className="control_form_label">
              ekran o'lchami
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran o'lchami"
                id="o'lchami"
                value={olcham}
                onChange={(e) => setOlcham(e.target.value)}
              />
            </label>
            <label htmlFor="protsessor" className="control_form_label">
              protsessor
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran protsessor"
                id="protsessor"
                value={protsessor}
                onChange={(e) => setProtsessor(e.target.value)}
              />
            </label>
            <label htmlFor="sinfi" className="control_form_label">
              sinfi
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran sinfi"
                id="sinfi"
                value={sinfi}
                onChange={(e) => setSinfi(e.target.value)}
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
        <button className="control_form_btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
