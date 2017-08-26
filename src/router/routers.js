import Home from "../views/Home";
import shared from "./shared";
import account from "./account";
import com from "./components";

export default [
  {
    path: "/",
    component: Home
  },
  // ...Search,
  ...shared,
  ...account,
  ...com
];
