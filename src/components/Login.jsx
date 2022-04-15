import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import loginIlustration from '../assets/images/loginIlustration.svg';
import logo from '../assets/images/logo.png';

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
    <div className="flex flex-col p-5 items-center justify-center w-full h-screen bg-gray-300">
      <img
        src={loginIlustration}
        className="object-cover opacity-70"
        alt="Ilustração da página de Login"
        width="520px"
      />
      <img
        src={logo}
        className="mt-10 mb-10"
        alt="logo OrangeShare"
        width="350px"
      />

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
        render={(renderProps) => (
          <button
            type="button"
            className="bg-mainColor flex justify-center items-center p-3 px-10 rounded-lg cursor-pointer outline-none opacity-70 hover:opacity-100"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle fontSize={25} className="mr-2" /> Entrar com Google
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <div className="mt-3">
        <span className="font-body text-base opacity-70">
          Faça login com sua conta Google
        </span>
      </div>
    </div>
  );
};

export default Login;
