import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';
import { Link } from "react-router-dom";

const Connection = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();

    const fetchConnection = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/connections', { withCredentials: true });
            dispatch(addConnections(res.data.data));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchConnection();
    }, []);

    if (!connections) return null;

    if (connections.length === 0) {
        return (
            <div className="flex justify-center items-center text-center text-xl my-6">
                <h1>No Connections Found</h1>
            </div>
        );
    }

    return (
        <div className="my-6">
            <div className="flex justify-center items-center text-center text-xl my-6">
                <h1>Connections</h1>
            </div>

            {connections.map((connection) => {
                const { _id,firstName, lastName, photoUrl } = connection;

                return (
                    <div className="flex justify-center items-center my-6" key={connection._id}>
                        <div className="card bg-base-100 image-full w-96 shadow-xl">
                            <figure>
                                <img
                                    src={photoUrl}
                                    alt="user pic"
                                    className="w-[736px] h-[736px] object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {firstName} {lastName}
                                </h2>
                                <p>friends !!</p>
                                <div className="card-actions justify-end">
                                <Link to={"/chat/" + _id}>
                                    <button className="btn btn-primary">Chat</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Connection;
