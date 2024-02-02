import { defineStore } from 'pinia';

export const useTokenStore = defineStore({
  id: 'token',
  state: () => ({
    token: '' as string,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = '';
    },
  },
});
