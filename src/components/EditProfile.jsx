import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-input-mask';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { client } from '../client';
import { categories } from '../utils/data';

const Profile = ({ user }) => {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    about: yup
      .string()
      .required('Campo obrigatório')
      .min(10, 'No mínimo 10 caracteres'),
    position: yup
      .string()
      .required('Informe seu cargo')
      .min(3, 'No mínimo 3 caracteres'),
    expertise: yup.string().required('Selecione sua área de atuação'),
    phone: yup.string().required('Digite o seu telefone'),
    email: yup
      .string()
      .required('Informe o seu E-mail principal')
      .email('Informe um e-mail válido'),
    linkedIn: yup
      .string()
      .url('Informe um endereço web válido')
      .min(33, 'Confira o endereço do linkedIn')
      .required('Informe o seu linkedIn'),
    githubPortfolio: yup.string().url('Informe um endereço web válido'),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    about,
    position,
    expertise,
    phone,
    linkedIn,
    email,
    githubPortfolio,
  }) => {
    const newProfile = {
      _type: 'profile',
      userId: user._id,
      about,
      position,
      expertise,
      phone,
      linkedIn,
      email,
      githubPortfolio,
      postedBy: {
        _type: 'postedBy',
        _ref: user._id,
      },
    };
    console.log(newProfile);
    client.create(newProfile).then(() => {
      navigate('/');
    });
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-8 w-full rounded-lg p-8 pb-12 "
      >
        <div className="mb-4 grid grid-cols-1 gap-4">
          <label className="text-white">Sobre</label>
          <textarea
            {...register('about', { required: true })}
            error={errors.about}
            placeholder="Conte-nos sobre você..."
            rows={4}
            className="focus:ring- w-full rounded-lg bg-gray-200 p-4 text-navColor outline-none focus:ring-4 focus:ring-orange-700"
          />
          {errors.about && (
            <span className="text-red-500">{errors.about.message}</span>
          )}
        </div>
        <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-white mb-2">Cargo</label>
            <input
              {...register('position', { required: true })}
              type="text"
              error={errors.position}
              placeholder="Cargo atual"
              className="w-full rounded-lg bg-panel p-2 text-navColor outline-none focus:ring-4 focus:ring-orange-700"
            />
            {errors.position && (
              <span className="mt-2 text-red-500">
                {errors.position.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Área de atuação</label>
            <select
              {...register('expertise', { required: true })}
              type="text"
              error={errors.expertise}
              placeholder="Área de atuação"
              className="w-full rounded-lg bg-panel p-2 text-navColor outline-none focus:ring-4 focus:ring-orange-700"
            >
              <option value="">Selecione sua área de atuação</option>
              {categories.map((category) => {
                return (
                  <option key={category.name} value={category.name}>
                    {category.value}
                  </option>
                );
              })}
            </select>
            {errors.expertise && (
              <span className="mt-2 text-red-500">
                {errors.expertise.message}
              </span>
            )}
          </div>
        </div>

        <hr className="mt-14" />

        <div className="mt-10 mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-white mb-2">Telefone</label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <MaskedInput
                  className="w-full rounded-lg bg-panel p-2 text-navColor outline-none focus:ring-4 focus:ring-orange-700"
                  mask="(99) 99999-9999"
                  placeholder="Digite o seu telefone"
                  value={field.value}
                  onChange={field.onChange}
                >
                  {(inputProps) => <input {...inputProps} type="text" />}
                </MaskedInput>
              )}
            />
            {errors.phone && (
              <span className="mt-2 text-red-500">{errors.phone.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">E-mail</label>
            <input
              {...register('email', { required: true })}
              type="text"
              error={errors.expertise}
              placeholder="Digite seu e-mail principal"
              className="w-full rounded-lg bg-panel p-2 text-navColor outline-none focus:ring-4 focus:ring-orange-700"
            />
            {errors.email && (
              <span className="mt-2 text-red-500">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-white mb-2">Linked In</label>
            <input
              {...register('linkedIn', { required: true })}
              type="text"
              defaultValue="https://www.linkedin.com/in/"
              error={errors.linkedIn}
              placeholder="Digite o link do seu Linked In"
              className="w-full rounded-lg bg-panel p-2 text-navColor outline-none focus:ring-4 focus:ring-orange-700"
            />
            {errors.linkedIn && (
              <span className="mt-2 text-red-500">
                {errors.linkedIn.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Github / Portfólio</label>
            <input
              {...register('githubPortfolio', {
                required: false,
              })}
              type="text"
              error={errors.githubPortfolio}
              placeholder="Digite o link do seu Github / Portfólio"
              className="w-full rounded-lg bg-panel p-2 text-navColor outline-none focus:ring-4 focus:ring-orange-700"
            />
            {errors.githubPortfolio && (
              <span className="mt-2 text-red-500">
                {errors.githubPortfolio.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex mt-16 justify-center">
          <input
            type="submit"
            value="Salvar"
            className="ease inline-block cursor-pointer rounded-full bg-accent px-24 py-3 text-lg font-medium text-white transition duration-500 hover:bg-opacity-70"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;