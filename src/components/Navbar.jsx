import { Link, useNavigate } from 'react-router-dom';
import { IoMdCreate, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-full bg-gray-50 border-none outline-none focus-within:shadow-2xl ">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar"
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-gray-50 outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block ">
          <img
            src={user.image}
            alt="user"
            className="w-14 h-12 rounded-full hover:border-2 hover:border-accent transition-all duration-500 ease-in-out"
          />
        </Link>
        <Link
          to="edit-profile"
          className="bg-accent text-white rounded-full w-12 h-12 md:w-14 md:h-12 flex justify-center items-center hover:opacity-75 transition-all duration-500 "
        >
          <IoMdCreate />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
