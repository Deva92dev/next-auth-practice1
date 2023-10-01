'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const UserProfilePage = () => {
  const [data, setData] = React.useState('nothing');
  const router = useRouter();

  const onLogout = async () => {
    try {
      const response = await axios.post('/api/users/logout');
      console.log(response.data);
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const generateDetails = async () => {
    const res = await axios.get('/api/users/certainUser');
    console.log(res.data);
    // getting data from certainUser route
    setData(res.data.data._id);
  };

  return (
    <div className='flex flex-col justify-center items-center py-2 mb-4 min-h-screen '>
      <h1 className='text-3xl font-black'>Profile</h1>
      <hr />
      <h2 className='my-2 p-2 border rounded-lg bg-pink-400 hover:bg-pink-900'>
        {data === 'nothing' ? (
          'Nothing'
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <p>Profile Page</p>
      <button
        className='my-2 p-2 border rounded-lg  bg-gray-400 hover:bg-gray-800'
        onClick={onLogout}
      >
        Logout
      </button>
      <button
        className='my-2 p-2 border rounded-lg  bg-green-500 hover:bg-green-800'
        onClick={generateDetails}
      >
        Get User Details
      </button>
    </div>
  );
};

export default UserProfilePage;
