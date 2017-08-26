export default {
  getUserinfo(state) {
    return state.userinfo;
  },

  getUsername(state) {
    return state.userinfo.username;
  },

  getToken(state) {
    return state.userinfo.token;
  },

  getInfo(state) {
    return state.info;
  },
  getMd(state) {
    return state.md;
  },
  getBolg(state) {
    return state.bolg;
  }
};
