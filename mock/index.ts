import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/user',
    method: 'get',
    statusCode: 200,
    response: () => ({
      code: 0,
      data: {
        message: 'hello mock',
      },
    }),
  },
] as MockMethod[];
