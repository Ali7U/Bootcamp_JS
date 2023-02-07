import React from "react";

function Login() {
  return (
    <div className="main login">
      <fieldset>
        <p>تسجيل دخول</p>
        <input placeholder="first name" type="text" />
        <input placeholder="pass" type="password" />
      </fieldset>
    </div>
  );
}

export default Login;
