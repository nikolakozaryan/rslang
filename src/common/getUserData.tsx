interface IUserLS {
  id: string;
  token: string;
}

const getUserData = () => {
  const userJson = localStorage.getItem('user');
  let response: IUserLS | null = null;
  if (userJson) {
    try {
      response = JSON.parse(userJson);
    } catch (error) {
      console.log(error);
    }
  }

  if (response?.id && response?.token) {
    return response;
  }

  return null;
};

export default getUserData;
