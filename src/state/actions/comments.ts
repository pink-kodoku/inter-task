import {ActionType} from "../action-types/comments";
import {Comment} from "../reducers/comments";

interface FetchAllComments {
  type: ActionType.FETCH_COMMENTS
}

interface IncrementCommentRatingAction {
  type: ActionType.INCREMENT_COMMENT_RATING,
  payload: string
}

interface DecrementCommentRatingAction {
  type: ActionType.DECREMENT_COMMENT_RATING,
  payload: string
}

interface CreateCommentAction {
  type: ActionType.CREATE_COMMENT,
  payload: Comment
}

export type Action =
  | FetchAllComments
  | IncrementCommentRatingAction
  | DecrementCommentRatingAction
  | CreateCommentAction