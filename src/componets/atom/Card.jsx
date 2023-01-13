import React from "react";
import "./Style.Card.css";

export default function Card({ title, subTitle, image }) {
  return (
    <div className="card-area">
      <div className="image-area">
        <img src={""} />
      </div>
      <div className="title-area">
        <h3>{title}</h3>
      </div>
      <div className="detail-area">
        <p className="subTitle">{subTitle}</p>
      </div>
      <div className="card-footer">
        <button className="view-button">View</button>
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}
