import $const from '@/config/constants';

export const state = () => ({
  isLogin: false,
  // isLoading: false, // 避免出现首页闪屏
  auth: {
    username: '',
  },
  defaultPathAfterLogin: $const.ROUTE.user.path,
})

export const getters = {
  auth: state => {
    return state.auth;
  }
}

export const mutations = {
  saveAuth(state, auth) {
    state.auth.username = auth;
    state.isLogin = true;
    window.sessionStorage.setItem('auth', auth);
  }
}
