import Cookies from 'js-cookie';

export const login = (auth) => {
  Cookies.set('JWT_TOKEN', auth.token, {expires: auth.timeout});
};

export const logout = () => {
  // localStorage.removeItem("TOKEN");
  Cookies.remove('JWT_TOKEN');
  localStorage.removeItem("LOGGED_IN_USER_DATA");
};

export const isLogin = () => {
  if(typeof Cookies.get('JWT_TOKEN') === "undefined") {
    return false;
  } else {
    return true;
  }

};
