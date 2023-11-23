import { mockRequest } from '../request';

export function fetchLogin(userName: string, password: string) {
  return mockRequest.post<ApiAuth.Token>('/login', { userName, password });
}

export function fetchUserInfo() {
  return mockRequest.get<ApiAuth.UserInfo>('/getUserInfo');
}

export function fetchUserRoutes(userId: string) {
  return mockRequest.post<ApiRoute.Route>('/getUserRoutes', { userId });
}
