import React,{useState} from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email ,setEmail] =useState()
  const [password , setPassword] =useState()
    const navigate  = useNavigate()
  const notify = () => toast.success("login successfully", {
    theme: "colored"
  })

 const handelSubmit = ()=>{
  navigate("/menu")
  notify()
  let obj = { email: email, password: password };
  
    e.preventDefault();
  
    // api
    //   .post("/accounts/login", obj)
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

 }
  return (
    <div className="login-container">

      <div className="logo">
        <Link className="link" to="/">
          <img src="" alt=""  />
        </Link>
      </div>
      <div className="login">
        <div className="title">
          {" "}
          <span>LogIn</span>{" "}
        </div>
        <div className="details">
          <span>Enter your Email</span>
          <input type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <span>Enter your Password</span>
          <input type="password" placeholder="password" value={password}  onChange={(e) => {
              setPassword(e.target.value);
            }} />
          <button onClick={handelSubmit} type="submit">Continue</button>
        </div>
        <div className="desc">
          <span>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
