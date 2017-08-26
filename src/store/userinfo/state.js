import { storage } from "../../util/storage";

export default {
  //登录成功后的用户信息
  userinfo: storage.get("userinfo") || {},
  info: storage.get("info") || {},
  md: storage.get("md") || {},
  bolg: storage.get("bolg") || {},
};
