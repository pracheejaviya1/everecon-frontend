import * as React from 'react';

export default function TagInput({ tags, setTags }) {
  const [text, setText] = React.useState('');
  return (
    <>
      <input
        type='text'
        value={text}
        placeholder='Enter comma seperated tags'
        className='text-gray-400 font-mulish rounded-md border border-gray-200'
        onChange={e => setText(e.target.value)}
        onKeyUp={e => {
          if (e.key === ',') {
            let newtag = text.trim().slice(0, -1);
            if (newtag && !tags.includes(newtag)) {
              let newtags = [...tags, newtag];
              setTags(newtags);
              setText('');
            }
            setText('');
          }
        }}
      />

      {tags.map((e, i) => (
        <li key={i}>
          <div className='flex flex-row'>
            {e}
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>{' '}
        </li>
      ))}
    </>
  );
}
