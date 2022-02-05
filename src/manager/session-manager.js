import Cookies from "universal-cookie";

const cookies = new Cookies();

function setDataInCookies(key, data) {
  cookies.set(key, JSON.stringify(data), { path: "/" });
}

function getDataFromCookies(key) {
  return cookies.get(key);
}

function removeDataFromCookies(key) {
  cookies.remove(key, { path: "/" });
}

function setDataInLocalStorage(key, data) {
  localStorage[key] = JSON.stringify(data);
}

function getDataFromLocalStorage(key) {
  try {
    return localStorage[key] ? JSON.parse(localStorage[key]) : false;
  } catch (err) {
    return false;
  }
}

function removeDataFromLocalStorage(key) {
  return localStorage.removeItem(key);
}

export {
  setDataInCookies,
  getDataFromCookies,
  removeDataFromCookies,
  setDataInLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
};
