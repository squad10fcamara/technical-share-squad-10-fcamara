export const userQuery = (userId) => {
  const query = `*[_type == 'user' && _id == '${userId}']`;

  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == 'profile' 
    && position match '${searchTerm}*' 
    || expertise match '${searchTerm}*'
    || about match '${searchTerm}*'
    || userName match '${searchTerm}*']
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

export const categories = [
  {
    name: 'backend',
    value: 'Back-End',
  },
  {
    name: 'frontend',
    value: 'Front-End',
  },
  {
    name: 'mobile',
    value: 'Mobile',
  },
  {
    name: 'fullstack',
    value: 'Full-Stack',
  },
  {
    name: 'devops',
    value: 'Devops',
  },
  {
    name: 'ui-ux-design',
    value: 'UI / UX Design',
  },
  {
    name: 'management',
    value: 'Gestão & Administração',
  },
];