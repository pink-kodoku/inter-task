import {createStore} from "redux";
import reducers from "./reducers";
import {ActionType} from "./action-types/comments";

export const store = createStore(reducers, {})


store.dispatch({
  type: ActionType.CREATE_COMMENT,
  payload: {
    id: '1',
    comment_date: 'Wed Jun 15 2022 08:40:44 GMT+0500 (Екатеринбург, стандартное время)',
    avatar_url: 'https://cdn.iconscout.com/icon/free/png-256/profile-2337176-1982537.png',
    content: 'With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.',
    rating: 3,
    username: 'John'
  }
})

store.dispatch({
  type: ActionType.CREATE_COMMENT,
  payload: {
    id: '2',
    comment_date: 'Wed Jun 15 2022 08:40:44 GMT+0500 (Екатеринбург, стандартное время)',
    avatar_url: 'https://cdn.iconscout.com/icon/free/png-256/profile-417-1163876.png',
    content: 'With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.',
    rating: 0,
    username: 'Alis'
  }
})

store.dispatch({
  type: ActionType.CREATE_COMMENT,
  payload: {
    id: '3',
    comment_date: 'Wed Jun 15 2022 08:40:44 GMT+0500 (Екатеринбург, стандартное время)',
    avatar_url: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-414-1162766.png',
    content: 'With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  Random strings can be unique. Used in computing, a random string generator can also be called a random character string generator. This is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.',
    rating: -12,
    username: 'Oliver'
  }
})
