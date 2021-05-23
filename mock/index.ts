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
] as MockMethod[];
