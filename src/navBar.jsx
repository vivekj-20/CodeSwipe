import React from 'react';
import { useSelector } from "react-redux";

const NavBar = () => {
    const user = useSelector((store) => store.user);
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">#️⃣CodeSwipe</a>
            </div>
            {user && (
            <div className="flex-none gap-2">
                <div className="form-control">Welcome, {user.result.firstName}</div>
                <div className="dropdown dropdown-end mx-5">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="user photo"
                        src={user.result.photoUrl || "https://i.pinimg.com/236x/81/e2/13/81e2135e751aa0383106e30ec35e4448.jpg"}  />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            )}
        </div>
    );
}

export default NavBar;
