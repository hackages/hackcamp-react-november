type LoginUser = () => Promise<{data: {token: string}}>;

export const loginUser: LoginUser = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res({data: {token: 'AFalseToken'}});
    }, 200);
  });
};
