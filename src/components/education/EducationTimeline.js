import React from "react";
import "./Education.css";

export default function EducationTimeLine({ education }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="education-item">
      <h4>{education.degree}</h4>
      <h5>{education.year}</h5>
      <p><em>{education.college}</em></p>
      <p>{education.description}</p>
    </div>
  );
}

