import React from 'react';

interface Props {
  author: string;
  createdAt: Date;
}

const ArticleHeader = ({author, createdAt}: Props) => {
  const formatDate = (date: Date) => {
    const [year, month, day] = date.toISOString().split('T')[0].split('-');
    return `${day}. ${month}. ${year}`;
  };

  return (
    <p className='text-lg pb-6 flex flex-col'>
      <span>
        Author: <span className='font-bold'>{author}</span>
      </span>
      <span>
        Created: <span className='font-bold'>{formatDate(createdAt)}</span>
      </span>
    </p>
  );
};

export default ArticleHeader;

