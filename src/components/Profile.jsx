import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { client } from '../client';

const Profile = ({ profile: { postedBy, _id, position } }) => {
  const navigate = useNavigate();

  return (
    <div className="m-2 mb-4">
      <div
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
