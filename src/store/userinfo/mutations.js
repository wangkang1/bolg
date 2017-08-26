import * as types from "./mutations_types";
import { storage } from "../../util/storage";

export default {
  [types.UPDATE_USERINFO](state, user_db) {
    state.userinfo = user_db.userinfo || {};
    storage.set("userinfo", state.userinfo);
  },

  [types.REMOVE_USERINFO](state) {
    storage.remove("userinfo");
    state.userinfo = {};
  },

  [types.UPDATE_INFO](state, info) {
    state.info = info || {};
    storage.set("info", info);
  },
  [types.UPDATE_MD](state, md) {
    state.md = md || {};
    storage.set("md", md);
  },
  [types.UPDATE_BOLG](state, bolg) {
    state.bolg = bolg || {};
    storage.set("bolg", bolg);
  }
};
