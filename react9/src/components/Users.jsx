import React from 'react';

const Users = ({ allUsers, deleteHandler, editHandler }) => {
  return (
    <div>
      {allUsers.map((user, idx) => (
        <div key={idx} className='bg-black text-center px-6 py-3 rounded text-white inline-block m-2'>
          <img className='h-20 mx-auto mb-2 w-20 rounded-full' src={user.imageURL} alt='' />
          <h3 className='text-xl'>{user.username}</h3>
          <h4>{user.position}</h4>
          <button onClick={() => editHandler(idx)} className='bg-blue-500 text-white rounded'>Edit</button>
          <button onClick={() => deleteHandler(idx)} className='bg-red-500 text-white rounded'>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
