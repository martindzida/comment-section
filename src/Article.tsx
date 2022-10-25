import React from 'react';

interface Props {
  author: string;
  createdAt: Date;
  text: string;
}

const Article = ({author, createdAt, text}: Props) => {
  const formatDate = (date: Date) => {
    const [year, month, day] = date.toISOString().split('T')[0].split('-');
    return `${day}. ${month}. ${year}`;
  };

  return (
    <div className='bg-slate-600 text-white font-mono font-medium rounded-lg p-20'>
      <p className='text-lg pb-6 flex flex-col'>
        <span>
          Author: <span className='font-bold'>{author}</span>
        </span>
        <span>
          Created: <span className='font-bold'>{formatDate(createdAt)}</span>
        </span>
      </p>
      <article>{text}</article>
    </div>
  );
};

export default Article;

