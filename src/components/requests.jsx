import axios from 'axios';
import { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
        const requests = useSelector((store) => store.requests);
        const dispatch = useDispatch();

        const reviewRequest = async (status, _id) => {
            try {
            await axios.post(
                BASE_URL + "/request/review/" + status + "/" + _id,
                {},
                { withCredentials: true }
              );
              dispatch(removeRequest(_id));
            } catch (err) {}
        };
   

        const fetchRequest = async() =>{
            try{
                const res = await axios.get(BASE_URL+ "/user/requests/received",{ withCredentials: true })
                dispatch(addRequests(res.data.data)); 
            }catch(err){
                console.log(err);
            }
        }
        useEffect(()=>{
            fetchRequest();
        },[]);
        if (!requests) return;
        if (requests.length === 0) {
            return (
                <div className="flex justify-center items-center text-center text-xl my-6">
                    <h1>No Request Found</h1>
                </div>
            );
        }

    return (
        <div className="my-6">
        <div className="flex justify-center items-center text-center text-xl my-6">
            <h1>Request Received</h1>
        </div>

        {requests.map((request) => {
            const { _id,firstName, lastName, photoUrl,about,age,gender } = request.fromUserId;

            return (
                <div className="flex justify-center items-center my-6" key={_id}>
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
                            {age && gender && <p>{age + ", " + gender}</p>}
                            <p>{about}</p>
                            <div>
                            <button className="btn btn-primary mx-2"
                            onClick={() => reviewRequest("rejected", request._id)}>
                                Reject
                            </button>
                            <button
                                className="btn btn-secondary mx-2"
                                onClick={() => reviewRequest("accepted", request._id)}
                            >
                                Accept
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
    );
}

export default Requests;
