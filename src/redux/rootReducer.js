import cakeReducer from "./cake/cakeReducer";
import iceCream from "./icecream/icecreamReducer";
import { combineReducers } from "redux";
import userReducer from "../user/userReducer";
import icecreamReducer from "./icecream/icecreamReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer,
});
