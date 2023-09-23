import React from "react";
import "../admin_control.css";

export const AddControlComputer = (props) => {
  return (
    <div className="control_box">
      <h2 className="control_paragraph">Compyuter {props.title}</h2>
      <form className="control_form">
        <div className="control_form_wrapper">
          <div className="control_form_left">
            <label htmlFor="title" className="control_form_label">
              title
              <input
                type="text"
                className="control_form_input"
                placeholder="title"
                id="title"
              />
            </label>
            <label htmlFor="comments" className="control_form_label">
              comments
              <input
                type="text"
                className="control_form_input"
                placeholder="comments"
                id="comments"
              />
            </label>
            <label htmlFor="diaganal" className="control_form_label">
              ekran diaganal
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran diaganal"
                id="diaganal"
              />
            </label>
            <label htmlFor="chastota" className="control_form_label">
              protsessor chastota
              <input
                type="text"
                className="control_form_input"
                placeholder="protsessor chastota"
                id="chastota"
              />
            </label>
            <label htmlFor="ram" className="control_form_label">
              ram
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran ram"
                id="ram"
              />
            </label>
            <div className="control_form_mini_box">
              <p className="control_p">category</p>
              <select name="" id="" className="control_form_select">
                <option value="" className="control_form_option">
                  Compyuter components
                </option>
              </select>
            </div>
          </div>
          <div className="control_form_right">
            <label htmlFor="price" className="control_form_label">
              price
              <input
                type="text"
                className="control_form_input"
                placeholder="price"
                id="title"
              />
            </label>
            <label htmlFor="brand" className="control_form_label">
              brand
              <input
                type="text"
                className="control_form_input"
                placeholder="brand"
                id="brand"
              />
            </label>
            <label htmlFor="o'lchami" className="control_form_label">
              ekran o'lchami
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran o'lchami"
                id="o'lchami"
              />
            </label>
            <label htmlFor="protsessor" className="control_form_label">
              protsessor
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran protsessor"
                id="protsessor"
              />
            </label>
            <label htmlFor="sinfi" className="control_form_label">
              sinfi
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran sinfi"
                id="sinfi"
              />
            </label>
            <label htmlFor="picture" className="control_form_label">
              picture
              <input
                type="file"
                className="control_form_input"
                placeholder="picture"
                id="picture"
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
