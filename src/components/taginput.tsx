import * as React from 'react';

export default function TagInput({ tags, setTags }) {
  const [text, setText] = React.useState('');
  return (
    <>
      <input
        type='text'
        value={text}
        placeholder='Enter comma seperated tags'
        className='text-gray-600 font-inter text-sm rounded-md border border-gray-200'
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

      {tags.map((tag, i) => (
        <ul key={i}>
          <div className='flex flex-row font-inter justify-between text-blue-700 my-1 w-96'>
            {tag}
            <button
              className='mx-8'
              onClick={() => {
                setTags(tags.filter(e => e !== tag));
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='#EF4444'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
        </ul>
      ))}
    </>
  );
}
