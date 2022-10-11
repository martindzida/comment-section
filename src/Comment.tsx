import {CommentProps} from './App';
import {useState} from 'react';

const Comment = ({id, content, replies, setReplyParentId}: CommentProps) => {
  const [likes, setLikes] = useState(0);
  return (
    <div className='flex flex-col w-full bg-slate-600 text-white font-mono my-5 rounded-lg'>
      <div className='h-1/6 bg-slate-500 rounded-lg p-4 font-medium text-lg'>{`#${id + 1}`}</div>
      <p className='p-10'>{content}</p>
      <div className='flex justify-end m-3'>
        <button
          className='text-center flex items-center bg-slate-500 w-16 p-2 m-2 rounded-lg'
          onClick={() => {
            setLikes(likes + 1);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
          </svg>
          <span className='p-1'>{likes}</span>
        </button>
        <button
          className='text-center bg-slate-500 w-10 p-2 m-2 rounded-lg'
          onClick={() => {
            setReplyParentId(id);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Comment;

