import {CommentProps} from './App';
import LikeBtn from './LikeBtn';

const Comment = ({id, content, replies, children}: CommentProps) => {
  return (
    <>
      <div className='flex flex-col w-full bg-slate-600 text-white font-mono my-5 rounded-lg'>
        <div className='h-1/6 bg-slate-500 rounded-lg p-4 font-medium text-lg'>{`#${id + 1}`}</div>
        <p className='p-10'>{content}</p>
        <div className='flex justify-end m-3'>
          <LikeBtn />
          {children}
        </div>
      </div>
      <div className='w-full pl-10'>
        {replies.map(reply => (
          <Comment key={reply.id} id={reply.id} content={reply.content} replies={reply.replies} setReplyParentId={reply.setReplyParentId} />
        ))}
      </div>
    </>
  );
};

export default Comment;

