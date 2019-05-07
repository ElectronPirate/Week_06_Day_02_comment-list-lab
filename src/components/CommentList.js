import React from 'react';
import Comment from './Comment.js';

const CommentList = (props) => {
  const comments = props.comments.map((comment) =>{
    return <Comment comments={comment} key={comment.id}/>
  });
  return (
    <div className= 'comment-list'>
    <ul>
    {comments}
    </ul>
    </div>

  );
}

export default CommentList;
