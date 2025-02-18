import React from 'react';

const Form = ({ username, setUsername, position, setPosition, imageURL, setImageURL, submitHandler, editIndex }) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className='border-2 rounded'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type='text' placeholder='Enter User Name' />
        <input
          className='border-2 rounded'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          type='text' placeholder='Enter User Position' />
        <input
          className='border-2 rounded'
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          type='text' placeholder='Paste Image URL' />
        <button className='rounded bg-pink-400 text-white font-semibold'>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Form;
