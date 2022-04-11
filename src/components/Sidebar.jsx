import { NavLink, Link } from 'react-router-dom';
import { AiOutlineTeam } from 'react-icons/ai';

import { categories } from '../utils/data';
import logo from '../assets/images/fcamara-orange.png';

const isNotActiveStyle =
  'flex items-center px-5 gap-3 text-black hover:text-navColor hover:font-extrabold transition-all duration-200 ease-in-out';
const isActiveStyle =
  'flex items-center px-7 py-1 gap-3 ml-2 font-extrabold text-navColor rounded-l-full bg-white border-accent transition-all duration-200 ease-in-out';

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-accent h-full 'overflow-y-scroll' min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-36" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <AiOutlineTeam fontSize={40} />
            Todos os membros
          </NavLink>
          <h3 className="text-white mt-2 px-5 text-base 2xl:text-xl text:font-extrabold text-grey-800">
            Áreas de atuação:
          </h3>
          {categories.slice(0, categories.length).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              {category.value}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`/user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-orange-300 rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            alt="user-profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
