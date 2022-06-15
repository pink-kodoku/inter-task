import {Action} from "../actions/comments";
import {ActionType} from "../action-types/comments";

export interface Comment {
  id: string;
  avatar_url: string;
  username: string;
  content: string;
  comment_date: string;
  rating: number;
}

interface CommentsState {
  comments: Comment[]
}

const initialState: CommentsState = {
  comments: []
}

const reducer = (state: CommentsState = initialState, action: Action): CommentsState => {
  switch (action.type) {
    case ActionType.FETCH_COMMENTS:
      return state;
    case ActionType.INCREMENT_COMMENT_RATING:
      const incrementCommentIndex = state.comments.findIndex(comment => comment.id === action.payload)!;
      if (incrementCommentIndex != -1) {
        state.comments[incrementCommentIndex].rating += 1;
      }
      return {...state};
    case ActionType.DECREMENT_COMMENT_RATING:
      const decrementCommentIndex = state.comments.findIndex(comment => comment.id === action.payload)!;
      if (decrementCommentIndex != -1) {
        state.comments[decrementCommentIndex].rating -= 1;
      }
      return {...state};
    case ActionType.CREATE_COMMENT:
      return {comments: [...state.comments, action.payload]}
    default:
      return state;
  }
}

export default reducer;