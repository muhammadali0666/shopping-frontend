import React from "react";
import "../admin_control.css";

export const AddControlMouse = (props) => {
  return (
    <div className="control_box">
      <h2 className="control_paragraph">Sichqoncha {props.title}</h2>
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
           
            <div className="control_form_mini_box">
              <p className="control_p">category</p>
              <select name="" id="" className="control_form_select">
                <option value="" className="control_form_option">
                  mouse
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
                id="price"
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
