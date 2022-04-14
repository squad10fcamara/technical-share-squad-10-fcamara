import noMember from '../assets/images/no-member.png';
import noSearch from '../assets/images/no-search.png';
import noProfile from '../assets/images/no-profile.png';

const EmptyList = ({ image, message }) => {
  let imageSrc = '';

  switch (image) {
    case 'empty':
      imageSrc = noMember;
      break;
      case 'noProfile':
        imageSrc = noProfile;
      break;
    case 'notFound':
      imageSrc = noSearch;
      break;
    default:
      imageSrc = noSearch;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={imageSrc} alt="empty" className="w-64 h-64" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default EmptyList;
