'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const SignupPage = () => {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user);
      console.log('Signup Successfully', response.data.message);
      // push to login page
      router.push('/login');
    } catch (error: any) {
      console.log('Signup Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center py-2 mb-4 min-h-screen '>
      <h1 className='text-3xl font-black'>
        {loading ? 'Processing' : 'Signup'}
      </h1>
      <hr />
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        value={user.username}
        placeholder='username'
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className='border border-gray-400 rounded-lg py-2 focus:outline-none focus:border-gray-800'
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        value={user.email}
        placeholder='email'
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className='border border-gray-400 rounded-lg py-2 focus:outline-none focus:border-gray-800'
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        value={user.password}
        placeholder='password'
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className='border border-gray-400 rounded-lg py-2 focus:outline-none focus:border-gray-800'
      />
      <button
        className='my-2 p-2 border rounded-lg  border-gray-400 focus:outline-none focus:border-gray-800 '
        onClick={onSignup}
      >
        {buttonDisabled ? 'No Signup' : 'Signup Here'}
      </button>
      <Link href='/login'>Visit The Login Page</Link>
    </div>
  );
};

export default SignupPage;
