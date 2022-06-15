import {combineReducers} from "redux";
import commentsReducer from "./comments"

const reducers = combineReducers({
  comments: commentsReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>