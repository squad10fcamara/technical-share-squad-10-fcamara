export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('@technical_share') !== 'undefined'
      ? JSON.parse(localStorage.getItem('@technical_share'))
      : localStorage.clear();

  return userInfo;
};
