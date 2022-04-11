import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Navbar,
  Feed,
  ProfileDetail,
  EditProfile,
  Search,
} from '../components';

const Content = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-200">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/profile-detail/:profileId"
            element={<ProfileDetail user={user} />}
          />
          <Route path="/edit-profile" element={<EditProfile user={user} />} />
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Content;