import { setToken, getToken } from '../utils/functions';

const url = process.env.NEXT_PUBLIC_API_URL;

export const register = async (username, password, email) => {

  return fetch(`${url}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        profile:'',
        favoriteItems:[]
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message) {
        return "error";
      }
      return "success";
    })
    .catch((error) => {
      console.error(error);
      return "error";
    });
}

export const login = (username, password) => {

  return fetch(`${url}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then((response) => response.json())
    .then(async (responseJson) => {
      if (responseJson.token) {
        await setToken(responseJson.token);
        return responseJson;
      }
      return "error";
    })
    .catch((error) => {
      console.error(error);
      return "error";
    });
}

export const getUser = async () => {
  const token = await getToken();
  try {
    const response = await fetch(`${url}/api/auth/getUser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    const responseJson = await response.json()
    return responseJson;
  } catch (error) {
    console.log(error);
    return null;
  }
}
