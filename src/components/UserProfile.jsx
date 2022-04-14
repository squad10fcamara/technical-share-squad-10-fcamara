import { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import { searchProfileByUserId, userSavedProfilesQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { fetchUser } from '../utils/fetchUser';
import EmptyList from './EmptyList';

const activeBtnStyles =
  'bg-accent mr-4 text-white font-bold p-2 rounded-full w-40 outline-none';
const notActiveBtnStyles =
  'bg-white mr-4 text-black font-bold p-2 rounded-full w-40 outline-none';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState(null);
  const [text, setText] = useState('Meu perfil');
  const [activeBtn, setActiveBtn] = useState('created');
  const navigate = useNavigate();
  const { userId } = useParams();

  const User = fetchUser();

  console.log(profiles);

  useEffect(() => {
    const query = searchProfileByUserId(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    if (text === 'Perfis salvos') {
      const querySaved = userSavedProfilesQuery(userId);

      client.fetch(querySaved).then((data2) => {
        setProfiles(data2);
      });
    } else {
      const query = searchProfileByUserId(userId);

      client.fetch(query).then((data) => {
        setProfiles(data);
      });
    }
  }, [text, userId]);

  const logout = () => {
    localStorage.clear();

    navigate('/login');
  };

  if (!user) return <Spinner message="Carregando perfil..." />;

  return (
    <div className="relative pb-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://source.unsplash.com/1600x900/?nature,photography,technology"
              alt="banner-pic"
              className="w-full h-370 2xl:h-510 shadow-lg object-cover border-b-4  border-accent"
            />
            <img
              className="rounded-full w-56 h-56 -mt-10 shadow-xl object-cover border-4  border-accent"
              src={user.postedBy.image}
              alt="user-pic"
            />
          </div>
          <h1 className="font-bold text-3xl text-center mt-3">
            {user.userName}
          </h1>
          <div className="absolute top-0 z-1 right-0 p-2">
            {userId === User.googleId && (
              <GoogleLogout
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                render={(renderProps) => (
                  <button
                    type="button"
                    className="bg-white p-2 rounded-full cursor-pointer outline-none shadow-md hover:bg-black"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <AiOutlineLogout color="red" fontSize={28} />
                  </button>
                )}
                onLogoutSuccess={logout}
                cookiePolicy="single_host_origin"
              />
            )}
          </div>
        </div>
        <div className="text-center mb-7">
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('created');
            }}
            className={`${
              activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles
            }`}
          >
            Meu Perfil
          </button>
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('saved');
            }}
            className={`${
              activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles
            }`}
          >
            Perfis Salvos
          </button>
        </div>

        {profiles?.length ? (
          <div className="px-2">
            <MasonryLayout profiles={profiles} />
          </div>
        ) : (
          <EmptyList image="notSave" message="Nenhum perfil salvo." />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
 