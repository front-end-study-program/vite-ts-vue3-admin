import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '张三',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  }),
});
