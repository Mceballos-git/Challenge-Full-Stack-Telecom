import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
  <div className="container"> 
    <div className="spinner-container justify-content-center d-flex">
      <div className="loading-spinner">
      </div>
    </div>
  </div>
  );
}