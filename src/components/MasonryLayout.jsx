import Masonry from 'react-masonry-css';

import Profile from './Profile';

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ profiles }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      {profiles?.map((profile) => (
        <Profile key={profile._id} profile={profile} className="w-max" />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;