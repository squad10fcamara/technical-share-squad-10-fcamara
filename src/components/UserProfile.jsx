import { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import {
  FaGlobeAmericas,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import { searchProfileByUserId } from '../utils/data';
import { client } from '../client';
import { fetchUser } from '../utils/fetchUser';
import brand from '../assets/images/icone-fcamara.png';
import EmptyList from './EmptyList';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const { userId } = useParams();

  const User = fetchUser();

  useEffect(() => {
    const query = searchProfileByUserId(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  const logout = () => {
    localStorage.clear();

    navigate('/login');
  };

  return (
    <div className="relative pb-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://source.unsplash.com/1600x900/?nature,photography,technology"
              alt="banner-pic"
              className="w-full h-370 2xl:h-510 shadow-2xl"
            />
            <img
              className="rounded-full w-60 h-60 -mt-28 shadow-2xl object-cover border-4  border-accent"
              src={User.imageUrl}
              alt="user-pic"
            />
          </div>
          <h1 className="font-bold text-3xl text-center mt-3 text-black">
            {User.name}
          </h1>
          <div className="absolute top-0 z-1 right-0 p-2">
            {userId === User.googleId && (
              <GoogleLogout
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                render={(renderProps) => (
                  <button
                    type="button"
                    className="bg-white p-2 rounded-full cursor-pointer outline-none shadow-md hover:bg-black transition-all duration-500 ease-in-out"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <AiOutlineLogout color="red" fontSize={36} />
                  </button>
                )}
                onLogoutSuccess={logout}
                cookiePolicy="single_host_origin"
              />
            )}
          </div>
        </div>

        {user ? (
          <div className="flex flex-col justify-center items-center mt-2 lg:h-4/5 rounded-lg bg-gray-300">
            <div className="flex flex-row justify-center items-center">
              <img
                src={brand}
                alt="logotipo FCamara laranja"
                className="h-9 w-10"
              />
              <span className="ml-2 font-semibold text-xl">
                {user.position}
              </span>
            </div>
            <div className="mt-3 capitalize text-accent text-xl font-semibold">
              <span>{user.expertise}</span>
            </div>
            <div className="mt-5 w-full rounded-lg p-8 pb-12 bg-gray-300">
              <div className="mb-4 grid grid-cols-1 gap-4 bg-gray-50 p-5 rounded-lg shadow-lg">
                <label className="text-black font-semibold text-lg">
                  Sobre
                </label>
                <span>{user.about}</span>
              </div>
              <div className="mb-4 grid grid-cols-1 gap-4 bg-gray-50 p-5 rounded-lg shadow-lg">
                <label className="text-black font-semibold text-lg">
                  Meus contatos
                </label>

                <div className="flex items-center hover:text-navColor hover:font-extrabold transition-all duration-500 ease-in-out">
                  <span className="w-8">
                    <FaWhatsapp color="#FF4500" size={24} />
                  </span>
                  <a
                    href={`https://api.whatsapp.com/send?phone=55${user.phone.replace(
                      /[^0-9]/g,
                      ''
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.phone}
                  </a>
                </div>

                <div className="flex items-center hover:text-navColor hover:font-extrabold transition-all duration-500 ease-in-out">
                  <span className="w-6">
                    <FaEnvelope color="#FF4500" size={24} />
                  </span>
                  <span className="ml-2">{user.email}</span>
                </div>

                <div className="flex items-center hover:text-navColor hover:font-extrabold transition-all duration-500 ease-in-out">
                  <span className="w-8">
                    <FaLinkedinIn color="#FF4500" size={24} />
                  </span>
                  <a href={user.linkedIn} target="_blank" rel="noreferrer">
                    linkedin.com/me
                  </a>
                </div>

                {user.githubPortfolio !== '' && (
                  <div className="flex items-center hover:text-navColor hover:font-extrabold transition-all duration-500 ease-in-out">
                    <span className="w-8">
                      <FaGlobeAmericas color="#FF4500" size={24} />
                    </span>
                    <a
                      href={user.githubPortfolio}
                      target="_blank"
                      rel="noreferrer"
                    >
                      portfolio.com/me
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-16 mb-24">
            <EmptyList image="noProfile" message="Complete o seu perfil" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
