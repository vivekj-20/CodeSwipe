import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import axios from 'axios';
import UserCard from './userCard';

const Feed = () => {
    const feed = useSelector((store)=>store.feed);
    const dispatch = useDispatch();

    const fetchFeed = async() => {
        if(feed) return;
        try{
        const feedUser = await axios.get(BASE_URL + "/feed",{withCredentials:true});
        dispatch(addFeed(feedUser?.data?.data));
        }catch(err){
          console.log(err);
        }
    }

    useEffect(() => {
        fetchFeed();
    },[])

    if (!feed) return;
    if (feed.length <= 0)
      return <h1 className="flex justify-center my-10">No new users founds!</h1>;

    return (
        feed && (
            <div className="flex justify-center my-10">
              <UserCard user={feed[0]} />
        </div>)
    );
}

export default Feed;
