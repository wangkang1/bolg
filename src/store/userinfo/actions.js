import * as types from "./mutations_types";

export default {
  update_userinfo: ({ commit }, { userinfo }) => {
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_USERINFO, {
        userinfo
      });
      resolve();
    });
  },

  remove_userinfo: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(types.REMOVE_USERINFO);
      resolve();
    });
  },

  update_info: ({ commit }, info) => {
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_INFO, info);
      resolve();
    });
  },
  update_md: ({ commit }, md) => {
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_MD, md);
      resolve();
    });
  },
  update_bolg: ({ commit }, bolg) => {
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_BOLG, bolg);
      resolve();
    });
  }
};
