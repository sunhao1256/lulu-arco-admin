import { adapter } from '@/utils/service/handler';
import { mockRequest } from '../request';
import {
  adapterOfFetchUserList,
  adapterOfFetchUser,
} from './management.adapter';

export const fetchUserList = async (
  param: ApiUserManagement.UserQueryParam
) => {
  const data = await mockRequest.post<ApiCommon.PageResult<
    ApiUserManagement.User[]
  > | null>('/getAllUserList');
  return adapter(adapterOfFetchUserList, data);
};
export const fetchUser = async (id: string) => {
  const data = await mockRequest.post<ApiUserManagement.User | null>(
    `/getUser/${id}`
  );
  return adapter(adapterOfFetchUser, data);
};
