import { CREATE_POST } from "./types"

const initialState = {
  posts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      // return {...state, posts: state.posts.concat(action.payload)}
      return {...state, posts: [...state.posts, {...action.payload, created: Date.now()}]}
    default: return state
  }
}