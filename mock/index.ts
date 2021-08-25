import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/mock/user',
    method: 'get',
    statusCode: 401,
    response: () => ({
      code: 0,
      data: {
        message: 'hello mock',
      },
    }),
  },
  {
    url: '/mock/user/login',
    method: 'post',
    statusCode: 200,
    response: () => ({
      code: 0,
      data: '123adsadsgft2123123123123',
    }),
  },
] as MockMethod[];
