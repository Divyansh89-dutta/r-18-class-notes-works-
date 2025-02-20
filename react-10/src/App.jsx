import  axios  from 'axios';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  async function btnCkicked(){
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response);
    setUser(response.data);
  }
  return (
    <div className='h-screen w-screen bg-gray-500'>
      <button onClick={btnCkicked} className='bg-blue-500 px-3 py-2 rounded-xl text-xl'>Get data</button>
      <div className='flex flex-wrap justify-center items-center h-full'>
        {user.map(function(elem, idx){
          return <div key={idx} className='p-3 w-1/3'>
            <img src={elem.download_url} alt="" />
            <h2>{elem.author}</h2>
            <p>{elem.url}</p>
          </div>   
        })}
      </div>
    </div>
  )
}

export default App