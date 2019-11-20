export const loginUser = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res({data: {token: 'AFalseToken'}});
    }, 200);
  });
};
