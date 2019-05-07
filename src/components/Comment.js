import React from 'react';

const Comment = (props) => {
  const book = `Author: ${props.comments.author}, title: ${props.comments.text}`;
  return (
    <li className='comment'>{book}</li>
  )
}


export default Comment;
