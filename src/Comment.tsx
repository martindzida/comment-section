import React from 'react';
import {CommentProps} from './App';

const Comment = ({id, content, resp}: CommentProps) => {
  return (
    <div className='bg-slate-600 text-white font-mono p-10 my-5 rounded-lg'>
      <p>{content}</p>
    </div>
  );
};

export default Comment;

