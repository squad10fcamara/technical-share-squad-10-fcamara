import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { client } from '../client';
import { fetchUser } from '../utils/fetchUser';

const Profile = ({ profile: { postedBy, _id, position, save } }) => {
  const [postHovered, setPostHovered] = useState(false);

  const navigate = useNavigate();

  const user = fetchUser();

  const alreadySaved = !!save?.filter(
    (item) => item?.postedBy?._id === user?.googleId
  )?.length;

  const saveProfile = (id) => {
    if (!alreadySaved) {
      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert('after', 'save[-1]', [
          {
            _key: uuidv4(),
            userId: user?.googleId,
            postedBy: {
              _type: 'postedBy',
              _ref: user?.googleId,
            },
          },
        ])
        .commit()
        .then(() => {
          window.location.reload();
        });
    }
  };

  return (
    <div className="m-2 mb-4">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/profile-detail/${_id}`)}
        className="relative cursor-pointer w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col rounded-lg w-full h-420 bg-navColor ">
          <img
            className="rounded-full w-48 h-48 mt-5 mx-auto border-4  border-accent"
            src={postedBy.image}
            alt={postedBy.name}
          />
          <p className="mt-3 text-xl mx-auto md:text-lg text-white p-4">
            {postedBy.userName}
          </p>
          <p className="mt-3 text-xl mx-auto md:text-sm  text-white px-4 py-2 rounded-full bg-accent capitalize">
            {position}
          </p>
          {alreadySaved ? (
            <button
              type="button"
              className="mt-3 bg-accent opacity-75 hover:opacity-100 text-white font-bold px-3 py-1 text-base rounded-3xl hover:shadow-md outline-none"
            >
              {save?.length} Salvo
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                saveProfile(_id);
              }}
              type="button"
              className="mt-3 bg-accent opacity-75 hover:opacity-100 text-white font-bold px-3 py-1 text-base rounded-3xl hover:shadow-md outline-none"
            >
              Salvar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
