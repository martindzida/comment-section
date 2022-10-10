import {CommentProps} from './App';

const Comment = ({id, content, replies, setReplyParentId}: CommentProps) => (
  <div className='flex flex-col w-full bg-slate-600 text-white font-mono my-5 rounded-lg'>
    <div className='h-1/6 bg-slate-500 rounded-lg p-4 font-medium text-lg'>{`#${id + 1}`}</div>
    <p className='p-10'>{content}</p>
    <div className='text-right'>
      <button
        className='text-center bg-slate-500 w-16 p-2 m-2 rounded-lg'
        onClick={() => {
          setReplyParentId(id);
        }}
      >
        Reply
      </button>
    </div>
  </div>
);

export default Comment;

