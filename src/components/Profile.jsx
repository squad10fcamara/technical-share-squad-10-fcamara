import { useNavigate } from 'react-router-dom';
import { getValueFromExpertises } from '../utils/data';


const Profile = ({ profile: { postedBy, _id, position, expertise } }) => {

  const navigate = useNavigate();

 
  return (
    <div className="m-2 mb-4 border-2 border-navColor rounded-lg shadow-2xl hover:border-accent transition-all duration-500 ease-in-out hover:shadow-orange-500">
      <div
        onClick={() => navigate(`/profile-detail/${_id}`)}
        className="relative cursor-pointer w-auto hover:shadow-lg rounded-lg overflow-hidden"
      >
        <div className="flex flex-col rounded-lg w-full h-420 bg-gray-100">
          <img
            className="rounded-full text-center items-center w-48 h-48 mt-5 mx-auto border-4  border-accent"
            src={postedBy.image}
            alt={postedBy.name}
          />
          <p className="mt-3 pt-0.5 text-center items-center text-lg mx-auto md:text-base text-black p-4 font-semibold">
            {postedBy.userName}
          </p>
          <p className="mt-2 mb-1 text-sm mx-auto text-navColor px-4 py-2 rounded-full shadow-2xl bg-navColorLight font-semibold">
            {position}
          </p>

          <p className="mt-3 mb-2 text-sm mx-auto text-white px-4 py-2 rounded-full bg-accent capitalize shadow-2xl">

            {getValueFromExpertises(expertise)}

          </p>

        </div>
      </div>
    </div>
  );
};

export default Profile;