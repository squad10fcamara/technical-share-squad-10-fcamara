/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MasonryLayout from './MasonryLayout';

import {
  FaGlobeAmericas,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa';
import { client } from '../client';
import {
  profileDetailQuery,
  profileDetailMoreProfileQuery,
} from '../utils/data';
import Spinner from './Spinner';
import Mailto from './Mailto';
import brand from '../assets/images/icone-fcamara.png';

const ProfileDetail = ({ user }) => {
  const [profiles, setProfiles] = useState(null);
  const [profileDetail, setProfileDetail] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [addingFeedback, setAddingFeedback] = useState(false);
  const { profileId } = useParams();

  const fetchProfileDetails = () => {
    let query = profileDetailQuery(profileId);

    if (query) {
      client.fetch(query).then((data) => {
        setProfileDetail(data[0]);

        if (data[0]) {
          query = profileDetailMoreProfileQuery(data[0]);

          client.fetch(query).then((res) => setProfiles(res));
        }
      });
    }
  };

  useEffect(() => {
    fetchProfileDetails();
  }, [profileId]);

  const addFeedback = () => {
    if (feedback) {
      setAddingFeedback(true);

      client
        .patch(profileId)
        .setIfMissing({ feedbacks: [] })
        .insert('after', 'feedbacks[-1]', [
          {
            feedback,
            _key: uuidv4(),
            postedBy: { _type: 'postedBy', _ref: user._id },
          },
        ])
        .commit()
        .then(() => {
          fetchProfileDetails();
          setFeedback('');
          setAddingFeedback(false);
        });
    }
  };

  if (!profileDetail) return <Spinner message="Carregando perfil" />;

  return (
    <>
      {profileDetail && (
        <div
          className="flex xl:flex-row flex-col m-auto mt-5 bg-gray-200"
          style={{ maxWidth: '1200px', borderRadius: '12px' }}
        >
          <div className="flex justify-center items-center md:items-start flex-initial">
            <img
              className="rounded-full w-48 h-48 mt-5 xl:ml-5 border-2 border-accent"
              src={profileDetail.postedBy.image}
              alt="Detalhamento de perfil"
            />
          </div>
          <div className="w-full p-5 flex-1 xl:min-w-620">
            <h1 className="text-4xl font-bold break-words mt-3 ">
              {profileDetail.postedBy.userName}
            </h1>
            <p className="mt-3 capitalize text-accent text-xl font-semibold">
              {profileDetail.expertise}
            </p>
            <div className="flex items-center mt-3">
              <img
                src={brand}
                alt="logotipo FCamara laranja"
                className="h-9 w-10 mr-2"
              />
              <span className="font-semibold text-xl">
                {profileDetail.position}
              </span>
            </div>
            <div className="flex gap-3 mt-5">
              <Mailto
                email={profileDetail.email}
                subject="Orange Share"
                body="Olá, tudo bem?"
              >
                <FaEnvelope color="#FF4500" size={30} />
              </Mailto>
              <a
                href={`https://api.whatsapp.com/send?phone=55${profileDetail.phone.replace(
                  /[^0-9]/g,
                  ''
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp color="#FF4500" size={30} />
              </a>
              <a href={profileDetail.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedinIn color="#FF4500" size={30} />
              </a>
              {profileDetail.githubPortfolio !== '' && (
                <a
                  href={profileDetail.githubPortfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobeAmericas color="#FF4500" size={30} />
                </a>
              )}
            </div>
            <div className="mt-7 p-5 border-2 border-navColor rounded-lg">
              <span className="font-semibold text-xl">Sobre</span>
              <p className="mt-3">{profileDetail.about}</p>
            </div>
            <div className="mt-8">
              <p className="font-semibold text-xl">{` O ${profileDetail.postedBy.userName} já te ajudou de alguma forma? Deixe um feedback.`}</p>
            </div>
            <div className="flex flex-col mt-6 gap-3 rounded-lg">
              <div className="flex gap-2">
                <Link to={`/user-profile/${user._id}`}>
                  <img
                    src={user.image}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    alt="user-profile"
                  />
                </Link>

                <textarea
                  className=" flex-1 outline-none border-2 p-2 border-navColor rounded-lg focus:border-accent"
                  type="text"
                  placeholder="Escrever um feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-accent text-white mt-3 rounded-full px-24 py-2 font-semibold outline-none hover:opacity-75"
                onClick={addFeedback}
              >
                {addingFeedback ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
            <div className="mt-10">
              {profileDetail?.feedbacks && (
                <span className="text-xl font-semibold text-accent">
                  Feedback's recebidos
                </span>
              )}
            </div>
            <div className="mt-5 mb-10 max-h-370 overflow-y-auto">
              {profileDetail?.feedbacks?.map((item) => (
                <div
                  className="flex gap-3 mt-5 items-center border-2 p-5 border-navColor rounded-lg"
                  key={item.feedback}
                >
                  <img
                    src={item.postedBy?.image}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    alt="user-profile"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">{item.postedBy?.userName}</p>
                    <p className="mr-3">{item.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {profiles?.length > 0 && (
        <h2 className="text-center font-bold text-2xl mt-8 mb-4">
          Mais membros nessa área de atuação:
        </h2>
      )}

      {profiles ? (
        <MasonryLayout profiles={profiles} />
      ) : (
        <Spinner message="Carregar mais membros" />
      )}
    </>
  );
};

export default ProfileDetail;
