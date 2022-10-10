import {useState} from 'react';
import Comment from './Comment';

export interface CommentProps {
  id: number;
  content: string;
  resp?: CommentProps[];
  getParentId: (pId: number) => void;
}

function App() {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [newComment, setNewComment] = useState('');
  const [cId, setCId] = useState(0);
  const [replyParentCId, setReplyParentCId] = useState<number>();

  const getParentId = (pId: number) => {
    setReplyParentCId(pId);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const commentObj: CommentProps = {id: cId, content: newComment, getParentId: getParentId};
    setComments([...comments, commentObj]);
    setCId(cId + 1);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-amber-400 p-10'>
      <h1 className='text-6xl font-bold text-slate-700 text-center p-20'>Article Of The Year!</h1>
      <div className='bg-slate-600 text-white font-mono font-medium rounded-lg p-20'>
        <p className='text-lg pb-6 flex flex-col'>
          <span>
            Author: <span className='font-bold'>Lorem</span>
          </span>
          <span>
            Created: <span className='font-bold'>10. 10. 2022</span>
          </span>
        </p>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis quam totam quas? Tempore dolorem facere soluta mollitia at nisi
          aliquam optio laudantium praesentium omnis est corporis aliquid, commodi quo reprehenderit cum aut velit asperiores labore vitae!
          Exercitationem velit consequuntur distinctio repudiandae accusantium unde dolor veritatis deserunt dolorum ipsam. Voluptas commodi
          voluptatibus hic in ipsam. Repellat minima officia sint corrupti quia, corporis magni quod! Reprehenderit, quas veniam iste qui facere sit a
          corporis accusantium fugiat delectus excepturi, veritatis voluptates. Provident sint ratione beatae distinctio, nulla quod nam explicabo
          necessitatibus deserunt placeat, error a laudantium sapiente ipsum optio quidem ut repellat. Itaque alias tempora blanditiis voluptatem
          numquam dolorum, quam, quisquam odit et aliquid commodi. Nemo, cumque nulla, iusto debitis enim non error eaque impedit architecto ipsum
          necessitatibus sit. Veritatis, voluptate. Vel optio asperiores officia molestias delectus magni ut soluta maiores praesentium numquam, non
          incidunt exercitationem sed neque ab ex sint earum.
        </article>
      </div>
      <section className='flex flex-col items-center text-center w-full md:w-5/6 px-12 py-16'>
        <h2 className='text-4xl text-slate-700 font-semibold p-8 border-b-2 border-slate-700 border-dashed m-8'>Comments</h2>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-slate-600 rounded-lg  w-full p-10'>
          <textarea
            className='resize-none w-full bg-slate-500 text-white font-mono text-lg caret-amber-400 rounded-lg p-6 focus:outline-none'
            name='newComment'
            id='newComment'
            placeholder='Add new comment...'
            rows={6}
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          {replyParentCId !== undefined && (
            <strong className='bg-rose-500 text-white font-mono text-semibold rounded-lg p-2 mt-4'>Replying to: #{replyParentCId + 1}</strong>
          )}
          <input
            className='bg-slate-500 text-white font-mono text-lg font-semibold p-2 mt-10 rounded-lg cursor-pointer'
            type='submit'
            value='Add Comment'
          />
        </form>
      </section>
      <section className='flex flex-col items-center w-full md:w-5/6 border-t-2 border-slate-700 p-8'>
        {comments.map((com: CommentProps) => (
          <Comment key={com.id} id={com.id} content={com.content} getParentId={getParentId} />
        ))}
      </section>
    </div>
  );
}

export default App;

