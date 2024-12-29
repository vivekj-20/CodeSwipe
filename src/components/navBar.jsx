import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';

const NavBar = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try{
           await axios.post(BASE_URL + "/logout",{},{withCredentials:true});
           dispatch(removeUser()); 
           return navigate("/login"); 
        }catch(err){
           console.log(err);
        }
    }


    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
            <Link to ="/feed" className="btn btn-ghost text-xl">#️⃣CodeSwipe</Link>
            </div>
            {user && (
            <div className="flex-none gap-2">
                <div className="form-control">Welcome, {user.firstName}</div>
                <div className="dropdown dropdown-end mx-5">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="user photo"
                        src={user.photoUrl || "https://i.pinimg.com/236x/81/e2/13/81e2135e751aa0383106e30ec35e4448.jpg"}  />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><Link to="/connection">connections</Link></li>
                    <li><Link to="/requests">requests recieved</Link></li>
                    <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
                </div>
            </div>
            )}
        </div>
    );
}

export default NavBar;
