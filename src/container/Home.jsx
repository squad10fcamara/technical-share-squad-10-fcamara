import { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import Content from './Content';
import { client } from '../client';
import { userQuery } from '../utils/data';
import { fetchUser } from '../utils/fetchUser';
import logo from '../assets/images/fcamara-orange.png';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo = fetchUser();
  const scrollRef = useRef(null);

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userInfo?.googleId]);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex bg-gray-200 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />
      </div>

      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row bg-accent justify-between items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-36" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img src={user?.image} alt="avatar" className="w-20 rounded-full" />
          </Link>
        </div>
        {toggleSidebar && (
          <div
            className="fixed w-4/5 bg-accent h-screen overflow-y-auto shadow-md z-10 animate-slide-in"
            onClick={() => setToggleSidebar(false)}
          >
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile:userId" element={<UserProfile />} />
          <Route path="/*" element={<Content user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
