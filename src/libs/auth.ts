import type { Role } from "../types/role";

type AuthData = {
  access_token: string;
  refresh_token: string;
  role: Role;
};

export function setAuthData({ access_token, refresh_token, role }: AuthData) {
  sessionStorage.setItem("access_token", access_token);
  sessionStorage.setItem("refresh_token", refresh_token);
  sessionStorage.setItem("role", role);
}

export function getAccessToken() {
  return sessionStorage.getItem("access_token");
}
export function getRefreshToken() {
  return sessionStorage.getItem("refresh_token");
}
export function getUserRole() {
  return sessionStorage.getItem("role");
}

export function isAuthenticated() {
  return !!getAccessToken();
}

export function logout() {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("role");
}
