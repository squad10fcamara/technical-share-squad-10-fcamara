import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ImagemLogin from '../assets/images/imagemlogin.png';

import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem(
      '@technical_share',
      JSON.stringify(response.profileObj)
    );

    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-white">
          <div className="p-5 ">
            <img
              src={ImagemLogin}
              className="flex flex-col justify-center items-center 2xl:w-824 2x1:h-412 xl:w-500"
              alt="Imagem de login"
            />{' '}
            {/* object-contain*/}
          </div>
          <h1 className="text-accent flex font-body text-64xl font-extrabold justify-center items-center p-2 pb-6">
            Technical Share{' '}
          </h1>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-accent flex justify-center items-center font-bold w-488 h-75 text-3xl rounded-lg cursor-pointer outline-none text-white font-body hover:opacity-90"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Entrar com Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div className="mt-3">
            <span className="font-body text-base opacity-70">
              {' '}
              Faça login com seu e-mail FCamara{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
