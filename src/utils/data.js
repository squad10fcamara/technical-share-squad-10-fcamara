export const userQuery = (userId) => {
  const query = `*[_type == 'user' && _id == '${userId}']`;

  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == 'profile' 
    && position match '${searchTerm}*' 
    || expertise match '${searchTerm}*'
    || about match '${searchTerm}*'
    ]
    {
    _id,
    about,
    position,
    expertise,
    phone,
    linkedIn,
    email,
    githubPortfolio,                    
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`;

  return query;
};

export const feedQuery = `*[_type == 'profile'] | order(createdAt asc) {
  _id,
  about,
  position,
  expertise,
  phone,
  linkedIn,
  email,
  githubPortfolio,  
  postedBy -> {
    _id,
    userName,
    image
  },
  save[] {
    _key,
    postedBy -> {
      _id,
      userName,
      image
    },
  },
}`;

export const searchProfileByUserId = (userId) => {
  const query = `*[_type == "profile" && userId == '${userId}']{
    _id,  
    userId, 
    about,
    position,
    expertise,
    phone,
    email,
    linkedIn,
    githubPortfolio,
    postedBy->{
      _id,
      userName,
      image
    }
  }`;
  return query;
};

export const userSavedProfilesQuery = (userId) => {
  const query = `*[_type == "profile" && '${userId}' in save[].userId ] | order(_createdAt desc) {
    _id,     
    about,
    position,
    expertise,
    phone,
    email,
    linkedIn,
    githubPortfolio,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userCreatedProfileQuery = (userId) => {
  const query = `*[ _type == 'profile' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const expertises = [
  {
    name: 'backend',
    value: 'Back-End',
    image: 'https://ibb.co/pLbL5YX',
  },
  {
    name: 'frontend',
    value: 'Front-End',
    image: 'https://ibb.co/WkCvpx0',
  },
  {
    name: 'mobile',
    value: 'Mobile',
    image: 'https://ibb.co/jTQ6m95',
  },
  {
    name: 'fullstack',
    value: 'Full-Stack',
    image: 'https://ibb.co/dMdTn6t',
  },
  {
    name: 'devops',
    value: 'Devops',
    image: 'https://ibb.co/TgdqLdz',
  },
  {
    name: 'ui-ux-design',
    value: 'UI / UX Design',
    image: 'https://ibb.co/WpHpzCN ',
  },
  {
    name: 'management',
    value: 'Gestão & Administração',
    image: 'https://ibb.co/hdTx392',
  },
];
