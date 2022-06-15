import {Comment} from "../reducers/comments";
import {ActionType} from "../action-types/comments";


export const createComment = (comment: Comment) => {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: comment
  }
}

export const incrementCommentRating = (id: string) => {
  return {
    type: ActionType.INCREMENT_COMMENT_RATING,
    payload: id
  }
}

export const decrementCommentRating = (id: string) => {
  return {
    type: ActionType.DECREMENT_COMMENT_RATING,
    payload: id
  }
}

export const fetchComments = () => {
  return {
    type: ActionType.FETCH_COMMENTS
  }
}