import shortid from "shortid";

/* selectors */
export const getAll = (state) => state.posts.data;
export const getPostsById = (state, postId) =>
  state.posts.data.find((post) => post.id === postId);

/* action name creator */
const reducerName = "posts";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const EDIT_POST = createActionName("EDIT_POST");
const ADD_POST = createActionName("ADD_POST");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const editPost = (payload) => ({ payload, type: EDIT_POST });
export const addPost = (payload) => ({ payload, type: ADD_POST });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case EDIT_POST: {
      return {
        ...statePart,
        data: statePart.data.map((post) =>
          post.id === action.payload.id ? { ...post, ...action.payload } : post
        ),
      };
    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.data, { ...action.payload, id: shortid() }],
      };
    }
    default:
      return statePart;
  }
};
