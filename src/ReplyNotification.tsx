import React from 'react';

interface NotificationProps {
  parentCId: number;
  cancelReply: () => void;
}

const ReplyNotification = ({parentCId, cancelReply}: NotificationProps) => {
  return (
    <strong className='flex items-center bg-rose-500 text-white text-sm font-mono text-semibold rounded-lg p-2 mt-4'>
      Replying to: <span className='text-lg ml-2'>#{parentCId + 1}</span>
      <button className='ml-3' onClick={cancelReply}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>
    </strong>
  );
};

export default ReplyNotification;

