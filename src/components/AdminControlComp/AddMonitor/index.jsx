import React from "react";
import "../admin_control.css";

export const AddControlmonitor = () => {
  return (
    <div className="control_box">
      <h2 className="control_paragraph">Monitor</h2>
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
            <label htmlFor="ekrandiaganali" className="control_form_label">
              ekran diaganali
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran diaganali"
                id="ekrandiaganali"
              />
            </label>
            <div className="control_form_mini_box">
              <p className="control_p">compyuter component</p>
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
            <label htmlFor="ekranolchami" className="control_form_label">
              ekran o'lchami
              <input
                type="text"
                className="control_form_input"
                placeholder="ekran diaganali"
                id="ekranolchami"
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
