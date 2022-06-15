import {Comment} from "../../state/reducers/comments";
import React, {useEffect, useState} from "react";
import styles from "./index.module.scss"
import {useActions} from "../../hooks/useActions";
import {getTimeInterval} from "./time-functions";
import {Button} from "@mui/material";

const CommentCard: React.FC<Comment> =
  ({
     avatar_url,
     username,
     content,
     rating,
     comment_date,
     id
   }) => {
    const {incrementCommentRating, decrementCommentRating} = useActions();
    const [commentPostedTime, setCommentPostedTime] = useState(getTimeInterval(comment_date));
    const [hiddenClass, setHiddenClass] = useState(styles.hidden)
    const defaultAvatarUrl = "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg";

    // Update time of a comment every minute
    useEffect(() => {
      const oneMinute = 60000;
      const interval = setInterval(() => {
        setCommentPostedTime(getTimeInterval(comment_date))
      }, oneMinute);

      return () => clearInterval(interval);
    }, [hiddenClass]);


    return (
      <div className={`${styles.comment} ${rating < -10 && hiddenClass}`}>
        <div className={styles.commentLeft}>
          <img
            src={avatar_url || defaultAvatarUrl}
            alt={username}/>
        </div>
        <div className={styles.commentRight}>
          <div className={styles.commentUsername}>{username}</div>
          <div className={styles.commentText}>{content}</div>
          {rating < -10 && hiddenClass !== '' &&
            <Button variant="contained" onClick={() => setHiddenClass('')}>Открыть комментарий?</Button>}
          <div className={styles.commentDate}>{commentPostedTime}</div>
          <div className={styles.counter}>
            <img src="/icons/arrow-up.svg" alt="" onClick={() => incrementCommentRating(id)}/>
            <div className={styles.rating}>{rating}</div>
            <img src="/icons/arrow-down.svg" alt="" onClick={() => decrementCommentRating(id)}/>
          </div>
        </div>
      </div>
    )
  }

export default CommentCard;