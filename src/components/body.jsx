import React, { useEffect } from 'react';
import NavBar from './navBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './footer';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { addUser } from "../utils/userSlice";

const Body = () => {

const user = useSelector((store)=>store.user);
const navigate = useNavigate();
const dispatch = useDispatch();

const fetchUser = async () =>{
    if(user) return;
    try{
        const res = await axios.get(BASE_URL + "/profile",{withCredentials:true});
        dispatch(addUser(res.data));
    }catch(err){
        if(err.status === 401){
            navigate("/login");
        }
        console.log(err);
    }
};

useEffect(()=>{
    fetchUser();
},[]);
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Body;
