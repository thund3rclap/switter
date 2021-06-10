import * as ActionTypes from "./types";

export function createPost(post) {
  return {
    type: ActionTypes.CREATE_POST,
    payload: post
  }
}

export function accountSetUser(data) {
  return {
    type: ActionTypes.ACCOUNT_SET_USER,
    payload: data
  }
}