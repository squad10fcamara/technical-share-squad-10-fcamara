import emptyImage from '../assets/images/empty.png';
import notSaveImage from '../assets/images/no-data.png';
import notFoundImage from '../assets/images/not-found.png';

const EmptyList = ({ image, message }) => {
  let imageSrc = '';

  switch (image) {
    case 'empty':
      imageSrc = emptyImage;
      break;
    case 'notSave':
      imageSrc = notSaveImage;
      break;
    case 'notFound':
      imageSrc = notFoundImage;
      break;
    default:
      imageSrc = emptyImage;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={imageSrc} alt="empty" className="w-64 h-64" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default EmptyList;