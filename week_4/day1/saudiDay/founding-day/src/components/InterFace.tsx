import React from "react";
import { useNavigate } from "react-router-dom";

function InterFace() {
  const navigate = useNavigate();

const Login =()=>{
    navigate("/login")
}

  return (
    <div className="main">
      <h2>ما لحد منّة, الله اللي عزنا</h2>
      <div className="btn">
        <button onClick={Login}>تسجيل دخول</button>
        <button>تسجيل جديد</button>
      </div>
    </div>
  );
}

export default InterFace;
