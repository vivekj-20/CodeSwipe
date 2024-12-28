import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const[password,setPassword] = useState("Pass@123");
    const[emailId,setEmail] = useState("saitama@gamil.com");
    const[error,setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLoginClicked = async (event) =>{
       event.preventDefault(); 
       try{
        const res = await axios.post(BASE_URL + "/login",{
            emailId,
            password,
        },{withCredentials:true});
        dispatch(addUser(res.data.result));
        return navigate("/feed");
       }catch(err){
        setError(err.response.data.result);
        console.log(err);       
      }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Let's connect 👩‍💻</h1>
            <p className="py-6">
            CodeSwipe is a unique platform designed to connect developers, tech enthusiasts, and professionals in a 
            fun, engaging, and efficient way. Whether you're looking to collaborate on open-source projects, 
            network with like-minded individuals, or simply make new friends in the tech world, CodeSwipe helps you find the right match.
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" value={emailId} className="input input-bordered" required
                onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" value={password} className="input input-bordered" required  
                onChange={(e)=>setPassword(e.target.value)} />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <a className="text-red-500">{error}</a>
                <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={onLoginClicked}>Login</button>
                </div>
            </form>
            </div>
        </div>  
        </div>
    );
}

export default Login;
