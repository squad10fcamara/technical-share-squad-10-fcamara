const Profile = ({ user }) => {
  console.log(user);

  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5 rounded-lg bg-navColor">
      <img
        className="rounded-full w-48 h-48 mt-5 mx-auto border-4  border-accent"
        src={user.image}
        alt={user.username}
      />
      <p className="mt-3 text-xl mx-auto md:text-2xl text-white p-4">
        {user.userName}
      </p>
    </div>
  );
};

export default Profile;
