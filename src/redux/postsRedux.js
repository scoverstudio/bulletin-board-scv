import axios from "axios";
import shortid from "shortid";
import { API_URL } from "../config";
import { initialState } from "./initialState";

/* selectors */
export const getAll = (state) => state.posts.data;
export const getPostsById = (state, postId) =>
  state.posts.data.find((post) => post._id === postId);
export const getAllPublished = (state) => state.posts.data;

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
export const fetchPublished = () => {
  return (dispatch, getState) => {
    if (
      initialState.posts.data.length === 0 &&
      initialState.posts.loading.active === false
    ) {
      dispatch(fetchStarted());
      axios
        .get(`${API_URL}/posts`)
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchSinglePost = (id, setData, setIsLoading) => {
  return (dispatch, getState) => {
    axios
      .get(`${API_URL}/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const addPostRequest = (post) => {
  return async (dispatch) => {
    dispatch(fetchStarted());
    await axios
      .post(`${API_URL}/posts`, post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updatePostRequest = (id, updatedPost) => {
  return async (dispatch) => {
    axios
      .put(`${API_URL}/posts/${id}`, updatedPost)
      .then((res) => {
        dispatch(editPost({ updatedPost, id }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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
