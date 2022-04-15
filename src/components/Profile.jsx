import { useNavigate } from 'react-router-dom';

const Profile = ({ profile: { postedBy, _id, position, expertise } }) => {
  const navigate = useNavigate();

  return (
    <div className="m-2 mb-4">
      <div
        onClick={() => navigate(`/profile-detail/${_id}`)}
        className="relative cursor-pointer w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col rounded-lg w-full h-420 bg-gray-100 shadow-2xl ">
          <img
            className="rounded-full text-center items-center w-48 h-48 mt-5 mx-auto border-4  border-accent"
            src={postedBy.image}
            alt={postedBy.name}
          />
          <p className="mt-3 pt-0.5 text-center items-center text-lg mx-auto md:text-base text-black p-4 font-semibold">
            {postedBy.userName}
          </p>
          <p className="mt-2 mb-1 text-sm mx-auto   text-accent px-4 py-2 rounded-full bg-white capitalize border-2  border-accent">
            {position}
          </p>
          <p className="mt-3 mb-2 text-sm mx-auto   text-white px-4 py-2 rounded-full bg-accent capitalize">
            {expertise}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
