import Request from '@/request/index';
import { AxiosResponse } from 'axios';

export interface ILoginReq {
  accountVal?: string;
  password?: string;
  mobile?: string;
  code?: string;
}
export function login(param: ILoginReq): Promise<AxiosResponse> {
  return Request.post('/user/login', param);
}
