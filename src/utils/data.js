export const userQuery = (userId) => {
  const query = `*[_type == 'user' && _id == '${userId}']`;

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
