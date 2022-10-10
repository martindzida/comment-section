import {useState} from 'react';

interface Comment {
  id: number;
  content: string;
  resp: Comment[];
}
function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-amber-400 p-10'>
      <h1 className='text-6xl font-bold text-slate-700 text-center p-20'>Article Of The Year!</h1>
      <div className='bg-slate-600 text-white font-mono font-medium rounded-lg px-12 py-16'>
        <span className=''>Author: Lorem</span>
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
      <section className='text-center'>
        <h2 className='text-4xl text-slate-700 font-semibold p-8'>Comments</h2>
        <div>
          <form>
            <textarea
              className='resize-none bg-slate-600 text-white font-mono text-xl caret-amber-400 rounded-lg'
              name='newComment'
              id='newComment'
              placeholder='Add new comment...'
              rows={10}
            ></textarea>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;

