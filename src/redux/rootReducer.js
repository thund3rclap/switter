import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer.js";
import { account } from "./account.js";

export const rootReducer = combineReducers({
    posts: postsReducer,
    account,
});
