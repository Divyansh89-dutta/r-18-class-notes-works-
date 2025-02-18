import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Users from './components/Users';

const App = () => {
  const [username, setUsername] = useState('');
  const [position, setPosition] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(savedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(allUsers));
  }, [allUsers]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedUsers = [...allUsers];
      updatedUsers[editIndex] = { username, position, imageURL };
      setAllUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setAllUsers([...allUsers, { username, position, imageURL }]);
    }

    setUsername('');
    setPosition('');
    setImageURL('');
  };

  const deleteHandler = (i) => {
    const copyUser = [...allUsers];
    copyUser.splice(i, 1);
    setAllUsers(copyUser);
  };

  const editHandler = (i) => {
    const user = allUsers[i];
    setUsername(user.username);
    setPosition(user.position);
    setImageURL(user.imageURL);
    setEditIndex(i);
  };

  return (
    <div>
      <Form username={username} setUsername={setUsername} position={position} setPosition={setPosition} imageURL={imageURL} setImageURL={setImageURL} submitHandler={submitHandler} editIndex={editIndex} />
      <Users deleteHandler={deleteHandler} editHandler={editHandler} allUsers={allUsers} />
    </div>
  );
};

export default App;
