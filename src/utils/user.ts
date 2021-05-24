import Cookies from 'js-cookie';

export function setToken(token: string): void {
  Cookies.set('token', token);
}

export function getToken(key: string): string | undefined {
  return Cookies.get(key);
}

export function removeToken(key: string): void {
  return Cookies.remove(key);
}
