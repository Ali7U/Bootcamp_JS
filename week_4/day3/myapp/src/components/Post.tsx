import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Post() {
    // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState<any>() 
//   navigate && api
  const navigate = useNavigate();
  const api = "https://63e2114c109336b6cbfecc6b.mockapi.io/login";

  const PostData = () => {
    if (firstName.length >= 3 && lastName.length >= 3) {
      axios
        .post(api, {
          firstName,
          lastName,
          email,
          phone
        })
        .then((res) => {
          console.log(res);
        });
      axios.get("https://63e2114c109336b6cbfecc6b.mockapi.io/login");
      navigate("/");
    } else alert("please write correct name");
  };
  return (
    <div className="box">
      <h3>بيانات التواصل</h3>
      <input
        placeholder="الاسم الاول"
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="اسم العائلة"
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="البريد الإلكتروني"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="رقم التواصل"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={PostData}>تسجيل البيانات</button>
    </div>
  );
}

export default Post;
