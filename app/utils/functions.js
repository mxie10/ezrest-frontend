// Use localStorage for storing token securely
export const setToken = (token) => {
  try {
    localStorage.setItem('token', token);
  } catch (error) {
    console.log('Error setting token', error);
  }
}

export const getToken = () => {
  try {
    const token = localStorage.getItem('token');
    return token;
  } catch (error) {
    console.log('Error getting token', error);
  }
}

export const removeToken = () => {
  try {
    localStorage.removeItem('token');
  } catch (error) {
    console.log('Error removing token', error);
  }
}

// For getTodayDate function, you can keep it unchanged

export const getTodayDate = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return " " + currentDate;
}
