import React from "react";
import "../admin_control.css"

export const AddControlComp = () => {
  return (
    <div className="control_box">
      <h2 className="control_paragraph">Compyuter component</h2>
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
              <select name="component" id="component" className="control_form_select" defaultValue={''}>
                <option value="kuller" className="control_form_option">
                  kuller
                </option>
                <option value="SSD" className="control_form_option">
                  SSD
                </option>
                <option value="HDD" className="control_form_option">
                  HDD
                </option>
                <option value="RAM" className="control_form_option">
                  RAM
                </option>
                <option value="sichqoncha" className="control_form_option">
                  sichqoncha
                </option>
                <option value="klaviatura" className="control_form_option">
                  klaviatura
                </option>
                <option value="port USB" className="control_form_option">
                  port USB
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
