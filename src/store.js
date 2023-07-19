
import { createStore} from "redux";
import rooted from "./reducers/main";

const store = createStore(
  rooted
)

export default store;
