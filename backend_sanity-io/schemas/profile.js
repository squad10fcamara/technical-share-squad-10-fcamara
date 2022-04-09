export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'expertise',
      title: 'Expertise',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'githubPortfolio',
      title: 'GithubPortfolio',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{ type: 'save' }],
    },
    {
      name: 'feedbacks',
      title: 'Feedbacks',
      type: 'array',
      of: [{ type: 'feedback' }],
    },
  ],
};
