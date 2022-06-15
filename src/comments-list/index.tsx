import React from 'react';
import CommentForm from "../comment-form";
import styles from "./index.module.scss"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CommentCard from "../comment-card";

function CommentsList() {
  const {comments} = useTypedSelector(state => state.comments);

  return (
    <div className={styles.commentsList}>
      <h1 className={styles.title}>Система комментариев</h1>
      <CommentForm/>
      {comments.map(comment => <CommentCard
        key={comment.id} {...comment} />)}
    </div>
  );
}

export default CommentsList;