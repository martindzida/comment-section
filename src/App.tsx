import {ReactNode, useState} from 'react';
import Article from './Article';
import Comment from './Comment';
import ReplyBtn from './ReplyBtn';
import ReplyNotification from './ReplyNotification';

export interface CommentProps {
  id: number;
  content: string;
  replies: CommentProps[];
  setReplyParentId: (id: number) => void;
  children?: ReactNode;
}

function App() {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [newComment, setNewComment] = useState('');
  const [commentId, setCommentId] = useState(0);
  const [replyParentId, setReplyParentId] = useState<number | null>(null);
  const [submitErr, setSubmitErr] = useState(false);

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    if (!newComment) {
      setSubmitErr(true);
      return;
    }
    setNewComment('');

    if (submitErr) setSubmitErr(false);

    const newCommentObj: CommentProps = {id: commentId, content: newComment, replies: [], setReplyParentId};
    setCommentId(commentId => commentId + 1);

    if (replyParentId === null) {
      setComments([...comments, newCommentObj]);
      return;
    }

    const parentComment: CommentProps | undefined = comments.find(comment => comment.id === replyParentId);

    if (parentComment) {
      const updatedComments = comments.map(comment =>
        comment.id === replyParentId ? {...comment, replies: [...parentComment.replies, newCommentObj]} : comment
      );
      setComments(updatedComments);
    }
  };

  const date = new Date();
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, libero optio ipsam natus ut, beatae id quam iure tempore eaque, deleniti voluptate error nisi recusandae assumenda dolorem itaque animi perferendis numquam nam aut repudiandae necessitatibus placeat velit. A, tempore quisquam illo sequi repellendus accusamus mollitia veniam similique, cum tempora laudantium eos excepturi maxime nobis iusto! Commodi sed temporibus beatae placeat.';

  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-amber-400 p-16'>
      <h1 className='text-6xl font-bold text-slate-700 text-center p-20'>Article Of The Year!</h1>
      <Article author='Lorem' createdAt={date} text={text} />
      <section className='flex flex-col items-center text-center w-full md:w-5/6 px-12 py-16'>
        <h2 className='text-4xl text-slate-700 font-semibold p-8 border-b-2 border-slate-700 border-dashed m-8'>Comments</h2>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-slate-600 rounded-lg  w-full p-10'>
          <textarea
            className='resize-none w-full bg-slate-500 text-white font-mono text-lg caret-amber-400 rounded-lg p-6 m-3 focus:outline-none'
            name='newComment'
            id='newComment'
            placeholder='Add new comment...'
            rows={6}
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          {replyParentId !== null && <ReplyNotification parentCId={replyParentId} cancelReply={() => setReplyParentId(null)} />}
          {submitErr && <strong className='text-rose-500 font-mono text-bold text-lg mt-4'>Comment must not be empty string</strong>}
          <input
            className='bg-slate-500 text-white font-mono text-lg font-semibold px-3 py-2 mt-6 rounded-lg cursor-pointer'
            type='submit'
            value='Add Comment'
          />
        </form>
      </section>
      <section className='flex flex-col items-center w-full md:w-5/6 border-t-2 border-slate-700 p-8'>
        {comments.map((comment: CommentProps) => (
          <Comment key={comment.id} {...comment}>
            <ReplyBtn id={comment.id} handleReply={setReplyParentId} />
          </Comment>
        ))}
      </section>
    </div>
  );
}

export default App;

